# Perfit campaign creator

A single, dependency-free Python script (`create_campaign.py`) that creates a Perfit
campaign, attaches an HTML template, sets recipients and sender, validates, and launches it
— reproducing the exact request flow the Perfit web app performs, but driven from the
command line.

- **No dependencies.** Standard library only (`urllib`, `json`, `argparse`). Runs on the
  system Python 3 (tested on 3.9).
- **Minimal headers.** Every request sends only `accept-language`, `x-account`,
  `Authorization: Bearer <api-key>`, and `content-type` (when there is a body). All
  browser/security headers from the captured cURLs (`sec-ch-*`, `user-agent`, `referer`,
  `x-requested-with`, …) are stripped, and `x-auth-token` is replaced by a bearer token.

---

## Quick start

```bash
# Recommended: keep the API key out of your shell history
export PERFIT_API_KEY="your-api-key"

# Scheduled launch
python3 create_campaign.py \
  --account testrelly \
  --name "Sample campaign" \
  --description "this is the description" \
  --tags tag1 tag2 \
  --subject "Este es el asunto" \
  --sender-id sen_cmq6vipag07r40a80myvu50fn \
  --html-file email.html \
  --list-ids 1 \
  --schedule-date 2026-06-13T13:55:00-03:00
```

Always do a **dry run first** to inspect every request without sending anything:

```bash
python3 create_campaign.py ... --dry-run --verbose
```

Immediate send (omit `--schedule-date` → launches in `NOW` mode):

```bash
python3 create_campaign.py --account testrelly \
  --name "Sample" --subject "Hi" --sender-id sen_xxx \
  --html-file email.html --list-ids 1 2
```

---

## Arguments

| Flag | Required | Description |
|------|----------|-------------|
| `--account` | yes | Account code. Also sent as the `x-account` header. |
| `--api-key` | yes\* | API key sent as `Authorization: Bearer ...`. Defaults to `$PERFIT_API_KEY`. |
| `--name` | yes | Campaign name. |
| `--subject` | yes | Email subject. |
| `--sender-id` | yes | Sender id, e.g. `sen_...`. |
| `--html-file` | yes | Path to the HTML content file. |
| `--list-ids` | yes | One or more recipient list ids (space separated). |
| `--description` | no | Campaign description / comments. |
| `--tags` | no | Campaign tags (space separated). |
| `--preheader` | no | Email preheader text. |
| `--schedule-date` | no | ISO-8601 launch date **with offset**, e.g. `2026-06-13T13:55:00-03:00`. Omit to launch immediately. |
| `--ignore-last-mailed-days` | no | `ignoreLastMailedDays` value (default `0`). |
| `--exclude-inactive` / `--include-inactive` | no | Whether to exclude inactive contacts (default: exclude). |
| `--reply-to` | no | Override reply-to (otherwise derived from the sender). |
| `--dry-run` | no | Print requests instead of sending them. |
| `--verbose` | no | Log each request and response (bearer token redacted). |

\* `--api-key` may be omitted if `PERFIT_API_KEY` is set in the environment.

---

## The process, step by step

The script talks to **two hosts**:

- `PEM`  = `https://pem-lb.myperfit.com/v2/{account}` — campaign engine
- `APIV3` = `https://apiv3.myperfit.com` — templates & senders

Every request below uses the same minimal header set:

```
accept-language: es
x-account: <account>
Authorization: Bearer <api-key>
content-type: application/json        # only when there is a JSON body
```

The launch requests (step 11) use `content-type: application/x-www-form-urlencoded; charset=UTF-8`.

> Tip: the cURL examples below already use the minimal headers. Replace `<account>`,
> `<api-key>`, `<campaign_id>`, `<tpl_id>`, `<content_id>` and `<sender_id>` with real values.

### 1. Create the campaign

`POST {PEM}/campaigns` → returns the **campaign id**.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns" \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"name":"Sample campaign","description":"this is the description","tags":["tag1","tag2"],"type":"SIMPLE"}'
```

Parse `id` (or `data.id`) from the response → `<campaign_id>`.

### 2. Create the template

`POST {APIV3}/templates` → returns the **template id** (`tpl_...`). It is linked to the
campaign via `relation_id`.

```bash
curl "https://apiv3.myperfit.com/templates" \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"name":"Sample campaign","type":"unlayer","relation_type":"campaign_simple","relation_id":<campaign_id>,"tracking":{"click":true,"open":true,"utm":{"enabled":true,"campaign":"","source":"perfit","medium":"email","content":""}}}'
```

Parse `id` → `<tpl_id>`.

### 3. Attach the template to the campaign

`PUT {PEM}/campaigns/{campaign_id}` — store the template id under `UNLAYER_TPL_ID`.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>" -X PUT \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"options":{"UNLAYER_TPL_ID":"<tpl_id>"}}'
```

### 4. Set recipients

`PUT {PEM}/campaigns/{campaign_id}` — choose the lists to send to.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>" -X PUT \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"include":{"lists":["1"]},"ignoreLastMailedDays":0,"options":{"EXCLUDE_INACTIVE":"1"},"exclude":{}}'
```

### 5. Upload the HTML content to the template

`PUT {APIV3}/templates/{tpl_id}` — sets the HTML, subject, sender and preheader on the
template. (`<HTML>` is the raw contents of `--html-file`.)

```bash
curl "https://apiv3.myperfit.com/templates/<tpl_id>" -X PUT \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"type":"html","name":"Sample campaign","tags":[],"sender_id":"<sender_id>","subject":"Este es el asunto","preheader":"","contents":{"json":"","html":"<HTML>","text":""},"audit_results":{"mode":"campaign","status":"PASS","errors":[]},"tracking":{"utm":{"enabled":true,"campaign":"","source":"perfit","medium":"email","content":""},"click":true,"open":true},"options":{}}'
```

**Discover the content id.** After this, the script does
`GET {PEM}/campaigns/{campaign_id}` and reads the first `contents[].id` → `<content_id>`
(falling back to `1` if it can't be found). This id is reused in steps 6 and 8.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>" \
  -H 'accept-language: es' -H 'x-account: <account>' -H 'Authorization: Bearer <api-key>'
```

### 6. Sync the same HTML to the campaign content body

`PUT {PEM}/campaigns/{campaign_id}/contents/{content_id}/body` — the **same HTML** must also
be pushed to the campaign engine's content body, on a different host/endpoint than step 5.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>/contents/<content_id>/body" -X PUT \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"html":"<HTML>"}'
```

### 7. Fetch sender info

`GET {APIV3}/senders/{sender_id}` — used to derive the `from` email, `fromName` and
`replyTo` for the next step. (`--reply-to` overrides the derived reply-to.)

```bash
curl "https://apiv3.myperfit.com/senders/<sender_id>" \
  -H 'accept-language: es' -H 'x-account: <account>' -H 'Authorization: Bearer <api-key>'
```

### 8. Set the campaign "from"

`PUT {PEM}/campaigns/{campaign_id}/contents/{content_id}` — apply the from/reply-to/subject
to the campaign content.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>/contents/<content_id>" -X PUT \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"from":"diego@myperfit.com","fromName":"Diego","replyTo":"diego@myperfit.com","subject":"Este es el asunto"}'
```

### 9. Set the sender on the campaign

`PUT {PEM}/campaigns/{campaign_id}` — store the sender id and mark the template valid.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>" -X PUT \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' -H 'content-type: application/json' \
  --data-raw '{"options":{"SENDER_ID":"<sender_id>","UNLAYER_TPL_VALID":"1"}}'
```

### 10. Validate

`GET {PEM}/campaigns/{campaign_id}/validate` — the script aborts before launching if this
reports errors / a non-PASS status.

```bash
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>/validate" \
  -H 'accept-language: es' -H 'x-account: <account>' -H 'Authorization: Bearer <api-key>'
```

### 11. Launch

Two form-encoded requests. With `--schedule-date` the mode is `SCHEDULED` and the date is
included; without it, the mode is `NOW` and no date is sent.

```bash
# (a) set launch mode/date on the campaign
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>" -X PUT \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  --data-raw 'launchMode=SCHEDULED&launchDate=2026-06-13T13%3A55%3A00-03%3A00'

# (b) trigger the launch
curl "https://pem-lb.myperfit.com/v2/<account>/campaigns/<campaign_id>/launch" \
  -H 'accept-language: es' -H 'x-account: <account>' \
  -H 'Authorization: Bearer <api-key>' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  --data-raw 'launchMode=SCHEDULED&launchDate=2026-06-13T13%3A55%3A00-03%3A00'
```

For an immediate send the body of both requests is simply `launchMode=NOW`.

---

## Notes & troubleshooting

- **Fail-fast.** Any non-2xx response aborts the run immediately and prints the response
  body — the campaign is never launched on a broken step.
- **Content id / sender fields are auto-discovered.** If the sender `from` shows empty under
  `--verbose`, inspect the `GET /senders/...` response shape and, if needed, pass
  `--reply-to`. The content id falls back to `1` when it can't be read from the campaign.
- **Secrets.** Prefer `PERFIT_API_KEY` over `--api-key` so the key doesn't land in your shell
  history or the process list. The bearer token is redacted in `--verbose` / `--dry-run`
  logs.
- **Schedule date format.** Must be ISO-8601 with a timezone offset, e.g.
  `2026-06-13T13:55:00-03:00`.
