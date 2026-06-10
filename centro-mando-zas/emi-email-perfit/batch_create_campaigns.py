#!/usr/bin/env python3
"""
Batch create multiple Perfit campaigns from a JSON config file.

Usage:
    python3 batch_create_campaigns.py --config campaigns.json --account simonashop

Config file format (JSON):
{
  "account": "simonashop",
  "api_key": "simonashop-r9NSUAgw3TxyimMTrEDFr5rNLh6ah0an",
  "sender_id": "sen_cktp44qao048i07748n87slt2",
  "list_ids": [1],
  "campaigns": [
    {
      "name": "Simona - Viernes Mañana - Jean Nascar",
      "subject": "El jean que funciona con todo",
      "preheader": "Fit perfecto, precio accesible.",
      "html_file": "campanas/simona-fin-de-semana-2026-06-03/email-1-viernes-manana-jean-nascar.html",
      "draft": true
    },
    ...
  ]
}
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path


def load_config(config_path):
    """Load campaign config from JSON file."""
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading config: {e}", file=sys.stderr)
        sys.exit(1)


def run_campaign(script_path, account, api_key, campaign, sender_id, list_ids):
    """Execute create_campaign.py for a single campaign."""
    cmd = [
        "python3",
        str(script_path),
        "--account", account,
        "--api-key", api_key,
        "--name", campaign["name"],
        "--subject", campaign["subject"],
        "--sender-id", sender_id,
        "--html-file", campaign["html_file"],
        "--list-ids", *[str(x) for x in list_ids],
    ]

    if campaign.get("preheader"):
        cmd.extend(["--preheader", campaign["preheader"]])

    if campaign.get("description"):
        cmd.extend(["--description", campaign["description"]])

    if campaign.get("tags"):
        cmd.extend(["--tags", *campaign["tags"]])

    if campaign.get("draft"):
        cmd.append("--draft")
    elif campaign.get("schedule_date"):
        cmd.extend(["--schedule-date", campaign["schedule_date"]])

    if campaign.get("reply_to"):
        cmd.extend(["--reply-to", campaign["reply_to"]])

    if campaign.get("exclude_inactive") is False:
        cmd.append("--include-inactive")

    print(f"\n{'='*70}")
    print(f"Creating: {campaign['name']}")
    print(f"{'='*70}")

    result = subprocess.run(cmd)
    return result.returncode == 0


def main():
    parser = argparse.ArgumentParser(
        description="Batch create Perfit campaigns from JSON config."
    )
    parser.add_argument(
        "--config",
        required=True,
        help="Path to JSON config file with campaign list."
    )
    parser.add_argument(
        "--script",
        default="create_campaign_script/create_campaign.py",
        help="Path to create_campaign.py script."
    )
    args = parser.parse_args()

    config = load_config(args.config)

    account = config.get("account")
    api_key = config.get("api_key")
    sender_id = config.get("sender_id")
    list_ids = config.get("list_ids", [1])
    campaigns = config.get("campaigns", [])

    if not all([account, api_key, sender_id, campaigns]):
        print("Error: config must have account, api_key, sender_id, and campaigns", file=sys.stderr)
        sys.exit(1)

    script_path = Path(args.script)
    if not script_path.exists():
        print(f"Error: script not found: {script_path}", file=sys.stderr)
        sys.exit(1)

    print(f"\n🚀 Batch creating {len(campaigns)} campaign(s)...")
    print(f"   Account: {account}")
    print(f"   Sender: {sender_id}")
    print(f"   Lists: {list_ids}\n")

    results = []
    for i, campaign in enumerate(campaigns, 1):
        success = run_campaign(
            script_path,
            account,
            api_key,
            campaign,
            sender_id,
            list_ids
        )
        results.append({
            "name": campaign["name"],
            "success": success
        })

    print(f"\n{'='*70}")
    print("📊 Summary")
    print(f"{'='*70}")

    success_count = sum(1 for r in results if r["success"])
    failed_count = len(results) - success_count

    for result in results:
        status = "✓" if result["success"] else "✗"
        print(f"  {status} {result['name']}")

    print(f"\n  Total: {success_count}/{len(results)} successful")

    if failed_count > 0:
        print(f"  ⚠️  {failed_count} campaign(s) failed", file=sys.stderr)
        return 1
    else:
        print(f"  ✓ All campaigns created!")
        return 0


if __name__ == "__main__":
    sys.exit(main())
