#!/usr/bin/env python3
"""Create, populate and launch a Perfit campaign in one shot.

Stitches together the Perfit web-app request flow (across the pem-lb and apiv3
hosts) into a single CLI tool. Standard library only -- no pip install needed.

Every request sends ONLY these headers:
    content-type        (only when there is a body)
    x-account
    accept-language
    Authorization: Bearer <api-key>

Examples
--------
    # Scheduled launch
    python3 create_campaign.py \
        --account testrelly --api-key "$PERFIT_API_KEY" \
        --name "Sample campaign" --subject "Este es el asunto" \
        --sender-id sen_cmq6vipag07r40a80myvu50fn \
        --html-file email.html --list-ids 1 \
        --schedule-date 2026-06-13T13:55:00-03:00

    # Immediate launch (no --schedule-date)
    python3 create_campaign.py --account testrelly --api-key "$PERFIT_API_KEY" \
        --name "Sample" --subject "Hi" --sender-id sen_xxx \
        --html-file email.html --list-ids 1 2

    # Inspect requests without sending anything
    python3 create_campaign.py ... --dry-run --verbose
"""

import argparse
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

PEM_BASE = "https://pem-lb.myperfit.com/v2"
APIV3_BASE = "https://apiv3.myperfit.com"

# Tracking block reused for template creation / html update (mirrors the app).
DEFAULT_UTM = {
    "enabled": True,
    "campaign": "",
    "source": "perfit",
    "medium": "email",
    "content": "",
}


class PerfitError(RuntimeError):
    """Raised when a Perfit request fails; aborts the flow (never launches)."""


class PerfitClient:
    def __init__(self, account, api_key, *, dry_run=False, verbose=False):
        self.account = account
        self.api_key = api_key
        self.dry_run = dry_run
        self.verbose = verbose

    # -- low level ---------------------------------------------------------
    def _request(self, method, url, *, body=None, form=False):
        """Perform one HTTP request with the minimal Perfit header set.

        body=None -> no payload (no content-type header).
        form=True -> urlencode the dict; otherwise JSON-encode it.
        Returns parsed JSON when possible, else raw text (or None on 204).
        """
        headers = {
            "accept-language": "es",
            "x-account": self.account,
            "Authorization": f"Bearer {self.api_key}",
        }

        data = None
        if body is not None:
            if form:
                headers["content-type"] = (
                    "application/x-www-form-urlencoded; charset=UTF-8"
                )
                data = urllib.parse.urlencode(body).encode("utf-8")
            else:
                headers["content-type"] = "application/json"
                data = json.dumps(body).encode("utf-8")

        if self.verbose or self.dry_run:
            tag = "DRY-RUN" if self.dry_run else "REQUEST"
            print(f"\n--- {tag}: {method} {url}")
            # Redact the bearer token in logs.
            safe_headers = dict(headers)
            safe_headers["Authorization"] = "Bearer ***"
            for key, val in safe_headers.items():
                print(f"    {key}: {val}")
            if data is not None:
                shown = data.decode("utf-8")
                if len(shown) > 2000:
                    shown = shown[:2000] + f"... [{len(shown)} bytes total]"
                print(f"    body: {shown}")

        if self.dry_run:
            return {}

        req = urllib.request.Request(url, data=data, method=method, headers=headers)
        try:
            with urllib.request.urlopen(req) as resp:
                raw = resp.read().decode("utf-8")
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", "replace")
            raise PerfitError(
                f"{method} {url} -> HTTP {exc.code} {exc.reason}\n{detail}"
            ) from None
        except urllib.error.URLError as exc:
            raise PerfitError(f"{method} {url} -> {exc.reason}") from None

        parsed = _try_json(raw)
        if self.verbose:
            preview = raw if len(raw) <= 1000 else raw[:1000] + "..."
            print(f"    response: {preview}")
        return parsed if parsed is not None else (raw or None)

    # -- per-host helpers --------------------------------------------------
    def _pem(self, path):
        return f"{PEM_BASE}/{self.account}{path}"

    def _apiv3(self, path):
        return f"{APIV3_BASE}{path}"


def _try_json(text):
    if not text:
        return None
    try:
        return json.loads(text)
    except (ValueError, TypeError):
        return None


def _extract_id(payload, fallback=None):
    """Pull an id out of a response that may be {id:..} or {data:{id:..}}."""
    if isinstance(payload, dict):
        if "id" in payload:
            return payload["id"]
        data = payload.get("data")
        if isinstance(data, dict) and "id" in data:
            return data["id"]
    return fallback


def _first_key(payload, keys, default=""):
    """Return the first present, non-empty value among `keys`."""
    src = payload
    if isinstance(payload, dict) and isinstance(payload.get("data"), dict):
        src = payload["data"]
    if isinstance(src, dict):
        for key in keys:
            val = src.get(key)
            if val:
                return val
    return default


# -- flow ------------------------------------------------------------------
def run(args):
    html = _read_html(args.html_file)

    client = PerfitClient(
        args.account, args.api_key, dry_run=args.dry_run, verbose=args.verbose
    )
    tags = args.tags or []
    tracking = {"click": True, "open": True, "utm": dict(DEFAULT_UTM)}

    # 1. Create campaign.
    print("[1/11] Creating campaign...")
    resp = client._request(
        "POST",
        client._pem("/campaigns"),
        body={
            "name": args.name,
            "description": args.description or "",
            "tags": tags,
            "type": "SIMPLE",
        },
    )
    campaign_id = _extract_id(resp, fallback="1" if args.dry_run else None)
    if campaign_id is None:
        raise PerfitError(f"Could not find campaign id in response: {resp!r}")
    print(f"        campaign id = {campaign_id}")

    # 2. Create template (unlayer) related to the campaign.
    print("[2/11] Creating template...")
    resp = client._request(
        "POST",
        client._apiv3("/templates"),
        body={
            "name": args.name,
            "type": "unlayer",
            "relation_type": "campaign_simple",
            "relation_id": campaign_id,
            "tracking": tracking,
        },
    )
    tpl_id = _extract_id(resp, fallback="tpl_dryrun" if args.dry_run else None)
    if tpl_id is None:
        raise PerfitError(f"Could not find template id in response: {resp!r}")
    print(f"        template id = {tpl_id}")

    # 3. Attach the template to the campaign.
    print("[3/11] Attaching template to campaign...")
    client._request(
        "PUT",
        client._pem(f"/campaigns/{campaign_id}"),
        body={"options": {"UNLAYER_TPL_ID": tpl_id}},
    )

    # 4. Set recipients.
    print("[4/11] Setting recipients...")
    exclude = {}
    if args.exclude_list_ids:
        exclude["lists"] = [str(x) for x in args.exclude_list_ids]
    client._request(
        "PUT",
        client._pem(f"/campaigns/{campaign_id}"),
        body={
            "include": {"lists": [str(x) for x in args.list_ids]},
            "ignoreLastMailedDays": args.ignore_last_mailed_days,
            "options": {"EXCLUDE_INACTIVE": "1" if args.exclude_inactive else "0"},
            "exclude": exclude,
        },
    )

    # 5. Set the HTML content on the template.
    print("[5/11] Uploading HTML content...")
    client._request(
        "PUT",
        client._apiv3(f"/templates/{tpl_id}"),
        body={
            "type": "html",
            "name": args.name,
            "tags": [],
            "sender_id": args.sender_id,
            "subject": args.subject,
            "preheader": args.preheader or "",
            "contents": {"json": "", "html": html, "text": ""},
            "audit_results": {"mode": "campaign", "status": "PASS", "errors": []},
            "tracking": {"utm": dict(DEFAULT_UTM), "click": True, "open": True},
            "options": {},
        },
    )

    # Discover the campaign content id (reused for the body sync and "from").
    content_id = _discover_content_id(client, campaign_id)
    print(f"        content id = {content_id}")

    # 6. Sync the same HTML to the campaign content body (PEM endpoint).
    print("[6/11] Syncing HTML to campaign content body...")
    client._request(
        "PUT",
        client._pem(f"/campaigns/{campaign_id}/contents/{content_id}/body"),
        body={"html": html},
    )

    # 7. Look up sender details for the "from" block.
    print("[7/11] Fetching sender info...")
    sender = client._request("GET", client._apiv3(f"/senders/{args.sender_id}"))
    sender = sender if isinstance(sender, dict) else {}
    from_email = _first_key(sender, ["email", "from", "fromEmail"])
    from_name = _first_key(sender, ["name", "fromName", "from_name"])
    reply_to = args.reply_to or _first_key(
        sender, ["replyTo", "reply_to", "replyEmail"], default=from_email
    )
    print(f"        from = {from_name!r} <{from_email}>  replyTo = {reply_to}")

    # 8. Set the "from" block on the campaign content.
    print("[8/11] Setting campaign 'from'...")
    client._request(
        "PUT",
        client._pem(f"/campaigns/{campaign_id}/contents/{content_id}"),
        body={
            "from": from_email,
            "fromName": from_name,
            "replyTo": reply_to,
            "subject": args.subject,
        },
    )

    # 9. Set the sender id on the campaign + mark the template valid.
    print("[9/11] Setting sender on campaign...")
    client._request(
        "PUT",
        client._pem(f"/campaigns/{campaign_id}"),
        body={"options": {"SENDER_ID": args.sender_id, "UNLAYER_TPL_VALID": "1"}},
    )

    # 10. Validate.
    print("[10/11] Validating campaign...")
    validation = client._request(
        "GET", client._pem(f"/campaigns/{campaign_id}/validate")
    )
    _check_validation(validation, args.dry_run)

    # 11. Launch (SCHEDULED if a date was given, else NOW). Skipped if --draft.
    if args.draft:
        print("[11/11] Skipped — campaign saved as DRAFT (--draft flag set).")
        print("\nDone.")
        print(f"  campaign id : {campaign_id}")
        print(f"  template id : {tpl_id}")
        print(f"  launch mode : DRAFT")
        return

    if args.schedule_date:
        mode, form = "SCHEDULED", {
            "launchMode": "SCHEDULED",
            "launchDate": args.schedule_date,
        }
    else:
        mode, form = "NOW", {"launchMode": "NOW"}
    print(f"[11/11] Launching ({mode})...")
    client._request(
        "PUT", client._pem(f"/campaigns/{campaign_id}"), body=form, form=True
    )
    client._request(
        "POST", client._pem(f"/campaigns/{campaign_id}/launch"), body=form, form=True
    )

    print("\nDone.")
    print(f"  campaign id : {campaign_id}")
    print(f"  template id : {tpl_id}")
    print(f"  launch mode : {mode}")
    if args.schedule_date:
        print(f"  scheduled   : {args.schedule_date}")


def _discover_content_id(client, campaign_id):
    """Read the campaign's content id; fall back to '1' if not discoverable."""
    resp = client._request("GET", client._pem(f"/campaigns/{campaign_id}"))
    src = resp.get("data") if isinstance(resp, dict) and "data" in resp else resp
    if isinstance(src, dict):
        contents = src.get("contents")
        if isinstance(contents, list) and contents:
            cid = _extract_id(contents[0])
            if cid is not None:
                return cid
        if isinstance(contents, dict):
            cid = _extract_id(contents)
            if cid is not None:
                return cid
    return "1"


def _check_validation(validation, dry_run):
    if dry_run or not isinstance(validation, dict):
        return
    src = validation.get("data") if "data" in validation else validation
    errors = []
    if isinstance(src, dict):
        errors = src.get("errors") or src.get("messages") or []
        status = str(src.get("status", "")).upper()
        valid_flag = src.get("valid")
        if valid_flag is False or status in {"FAIL", "ERROR", "INVALID"}:
            raise PerfitError(f"Campaign failed validation: {src!r}")
    if errors:
        raise PerfitError(f"Campaign validation reported errors: {errors!r}")


def _read_html(path):
    try:
        with open(path, "r", encoding="utf-8") as handle:
            html = handle.read()
    except OSError as exc:
        raise PerfitError(f"Could not read --html-file {path!r}: {exc}") from None
    if not html.strip():
        raise PerfitError(f"--html-file {path!r} is empty")
    return html


def build_parser():
    p = argparse.ArgumentParser(
        description="Create, populate and launch a Perfit campaign.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    p.add_argument("--account", required=True, help="Account code (sent as x-account).")
    p.add_argument(
        "--api-key",
        default=os.environ.get("PERFIT_API_KEY"),
        help="API key (Authorization: Bearer). Defaults to $PERFIT_API_KEY.",
    )
    p.add_argument("--name", required=True, help="Campaign name.")
    p.add_argument("--subject", required=True, help="Email subject.")
    p.add_argument("--sender-id", required=True, help="Sender id (sen_...).")
    p.add_argument("--html-file", required=True, help="Path to the HTML content file.")
    p.add_argument(
        "--list-ids",
        required=True,
        nargs="+",
        help="One or more recipient list ids.",
    )
    p.add_argument(
        "--exclude-list-ids",
        nargs="*",
        default=[],
        help="Optional recipient list ids to exclude from the campaign.",
    )
    p.add_argument("--description", default="", help="Campaign description / comments.")
    p.add_argument(
        "--tags", nargs="*", default=[], help="Campaign tags (space separated)."
    )
    p.add_argument("--preheader", default="", help="Email preheader text.")
    p.add_argument(
        "--schedule-date",
        help="ISO-8601 launch date w/ offset (e.g. 2026-06-13T13:55:00-03:00). "
        "Omit to launch immediately (NOW).",
    )
    p.add_argument(
        "--ignore-last-mailed-days",
        type=int,
        default=0,
        help="ignoreLastMailedDays value.",
    )
    p.add_argument(
        "--exclude-inactive",
        dest="exclude_inactive",
        action="store_true",
        default=True,
        help="Exclude inactive contacts (default on).",
    )
    p.add_argument(
        "--include-inactive",
        dest="exclude_inactive",
        action="store_false",
        help="Do not exclude inactive contacts.",
    )
    p.add_argument(
        "--reply-to", help="Override reply-to (otherwise derived from sender)."
    )
    p.add_argument(
        "--draft",
        action="store_true",
        help="Create and populate the campaign but skip launch (leave as draft).",
    )
    p.add_argument(
        "--dry-run",
        action="store_true",
        help="Print requests instead of sending them.",
    )
    p.add_argument("--verbose", action="store_true", help="Log requests/responses.")
    return p


def main(argv=None):
    args = build_parser().parse_args(argv)
    if not args.api_key:
        print(
            "error: no API key. Pass --api-key or set PERFIT_API_KEY.",
            file=sys.stderr,
        )
        return 2
    try:
        run(args)
    except PerfitError as exc:
        print(f"\nFAILED: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
