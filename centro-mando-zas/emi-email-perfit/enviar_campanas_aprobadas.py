#!/usr/bin/env python3
"""
Lanzar campañas aprobadas y creadas en Perfit.

Workflow final:
1. analizar_performance_perfit.py → genera propuestas
2. Tú editas JSON y aprueba propuestas
3. crear_campanas_aprobadas.py → crea drafts en Perfit
4. Emi agrega HTML y configuración completa
5. Tú das OK final
6. Este script → LANZA las campañas en Perfit

Uso:
    python3 enviar_campanas_aprobadas.py --config retroalimentacion-perfit/simonashop-2026-06-09-creadas.json

Output:
    - Campañas lanzadas en Perfit
    - Reporte de envío guardado
"""

import argparse
import json
import sys
from datetime import datetime


def load_campaigns_config(config_path):
    """Load created campaigns config."""
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"❌ Error loading config: {e}", file=sys.stderr)
        return None


def launch_campaigns(account, api_key, campaigns):
    """Launch each campaign via API."""
    import urllib.request
    import urllib.error

    results = []

    for campaign in campaigns:
        campaign_id = campaign.get("id")
        if not campaign_id:
            print(f"  ⚠️  Sin ID para campaña {campaign.get('nombre')}, saltando")
            continue

        # PUT to set launch mode
        url = f"https://pem-lb.myperfit.com/v2/{account}/campaigns/{campaign_id}"
        headers = {
            "Authorization": f"Bearer {api_key}",
            "x-account": account,
            "accept-language": "es",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }

        body = "launchMode=NOW"

        try:
            data = body.encode('utf-8')
            req = urllib.request.Request(url, data=data, headers=headers, method="PUT")
            with urllib.request.urlopen(req) as resp:
                print(f"  ✓ Campaña {campaign_id}: Lanzada")
                results.append({"id": campaign_id, "status": "enviada"})
        except Exception as e:
            print(f"  ❌ Campaña {campaign_id}: Error — {e}")
            results.append({"id": campaign_id, "status": "error"})

    return results


def main():
    parser = argparse.ArgumentParser(
        description="Launch approved campaigns in Perfit."
    )
    parser.add_argument(
        "--config",
        required=True,
        help="Path to created campaigns JSON file."
    )
    args = parser.parse_args()

    # Load config
    config = load_campaigns_config(args.config)
    if not config:
        return 1

    account = config.get("account")
    campaigns = config.get("campanas_creadas", [])

    if not campaigns:
        print("ℹ️  No hay campañas para lanzar.")
        return 0

    print(f"\n🚀 Lanzando {len(campaigns)} campaña(s) en {account}...\n")

    # Load account API key
    try:
        with open("retroalimentacion-perfit/cuentas.json", 'r') as f:
            cuentas_config = json.load(f)
            account_cfg = next(
                (c for c in cuentas_config.get("cuentas", []) if c.get("code") == account),
                None
            )
            if not account_cfg:
                print(f"❌ Account {account} not found", file=sys.stderr)
                return 1
            api_key = account_cfg.get("api_key")
    except Exception as e:
        print(f"❌ Error loading API key: {e}", file=sys.stderr)
        return 1

    # Note: This is a placeholder. Real launch requires campaign IDs from Perfit
    print("📝 Sistema de lanzamiento en desarrollo.")
    print("   Campañas serán lanzadas cuando tengan ID desde Perfit.\n")

    # For now, just log what would happen
    for campaign in campaigns:
        print(f"  📧 {campaign.get('estrategia')}")
        print(f"     Asunto: {campaign.get('asunto')}")
        print(f"     Segmento: {campaign.get('segmento')}")
        print(f"     Estado actual: {campaign.get('estado')}\n")

    print("✓ Listo para lanzar cuando des OK final en Perfit.\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
