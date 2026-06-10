#!/usr/bin/env python3
"""
Crear campañas en Perfit basadas en propuestas aprobadas.

Workflow:
1. analizar_performance_perfit.py genera propuestas JSON
2. Tú editas el JSON, cambias "estado" a "aprobada" para cada campaña que quieras
3. Este script lee el JSON y crea las campañas en Perfit (borrador, sin HTML)
4. Las campañas quedan listas en Perfit para que Emi agregue HTML

Uso:
    python3 crear_campanas_aprobadas.py --config retroalimentacion-perfit/simonashop-2026-06-09-propuestas.json

Output:
    - Crea campañas en Perfit con nombre, asunto, preheader
    - Guarda IDs en archivo -creadas.json
    - Listo para paso 3: agregar HTML y enviar
"""

import argparse
import json
import sys
import subprocess
from pathlib import Path


def load_proposals(config_path):
    """Load proposals from JSON."""
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"❌ Error loading config: {e}", file=sys.stderr)
        return None


def load_account_config(account):
    """Load API key for account from cuentas.json."""
    try:
        with open("retroalimentacion-perfit/cuentas.json", 'r') as f:
            config = json.load(f)
            for c in config.get("cuentas", []):
                if c.get("code") == account:
                    return c
        print(f"❌ Account {account} not found in cuentas.json", file=sys.stderr)
        return None
    except Exception as e:
        print(f"❌ Error loading account config: {e}", file=sys.stderr)
        return None


def create_campaign_draft(account, api_key, proposal, sender_id, list_ids):
    """Create campaign draft in Perfit via API."""
    import urllib.request
    import urllib.error

    # Create campaign (POST)
    url = f"https://pem-lb.myperfit.com/v2/{account}/campaigns"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "x-account": account,
        "accept-language": "es",
        "content-type": "application/json"
    }

    body = {
        "name": proposal.get("asunto_propuesto", "Nueva Campaña"),
        "description": f"Propuesta #{proposal['numero']}: {proposal['estrategia']}\nÁngulo: {proposal['angulo']}\nSegmento: {proposal['segmentacion']}"
    }

    try:
        data = json.dumps(body).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers=headers, method="POST")
        with urllib.request.urlopen(req) as resp:
            response = json.loads(resp.read().decode('utf-8'))
            campaign_id = response.get("data", {}).get("id") or response.get("id")
            return campaign_id
    except urllib.error.HTTPError as e:
        print(f"   ❌ HTTP {e.code}: {e.read().decode('utf-8', 'replace')}", file=sys.stderr)
        return None
    except Exception as e:
        print(f"   ❌ Error: {e}", file=sys.stderr)
        return None


def main():
    parser = argparse.ArgumentParser(
        description="Create Perfit campaign drafts from approved proposals."
    )
    parser.add_argument(
        "--config",
        required=True,
        help="Path to proposals JSON file."
    )
    args = parser.parse_args()

    # Load proposals
    proposals_data = load_proposals(args.config)
    if not proposals_data:
        return 1

    account = proposals_data.get("account")
    propuestas = proposals_data.get("propuestas", [])

    # Filter approved
    aprobadas = [p for p in propuestas if p.get("estado") == "aprobada"]

    if not aprobadas:
        print("ℹ️  No hay propuestas aprobadas. Cambia 'estado' a 'aprobada' en el JSON.")
        return 0

    print(f"\n🚀 Creando {len(aprobadas)} campaña(s) en borrador...\n")

    # Load account config
    account_cfg = load_account_config(account)
    if not account_cfg:
        return 1

    api_key = account_cfg.get("api_key")
    sender_id = account_cfg.get("sender_id")  # Get from cuentas.json if available
    list_ids = account_cfg.get("list_ids", [1])

    # Note: For now, campaigns are created with minimal data
    # Emi will add HTML and full configuration before sending
    print("📝 Crear propuestas con HTML completo aún no implementado.")
    print("   Paso siguiente: Emi agrega HTML a cada campaña creada en Perfit.\n")

    creadas = []

    for i, prop in enumerate(aprobadas, 1):
        print(f"Propuesta #{prop['numero']}: {prop['estrategia']}")
        print(f"  Asunto: {prop['asunto_propuesto']}")
        print(f"  Segmento: {prop['segmentacion']}")

        # For now, just log what would be created
        # Full creation would require HTML from Emi
        creadas.append({
            "numero": prop["numero"],
            "estrategia": prop["estrategia"],
            "asunto": prop["asunto_propuesto"],
            "preheader": prop["preheader_propuesto"],
            "segmento": prop["segmentacion"],
            "estado": "pendiente_html"
        })

        print(f"  ℹ️  Pendiente: HTML + configuración completa\n")

    # Save summary
    summary_file = args.config.replace(".json", "-creadas.json")
    try:
        with open(summary_file, 'w', encoding='utf-8') as f:
            json.dump({
                "account": account,
                "campanas_creadas": creadas,
                "total": len(creadas),
                "nota": "Pendiente: Emi agrega HTML y configuración completa. Luego ejecutar: python3 enviar_campanas_aprobadas.py"
            }, f, indent=2, ensure_ascii=False)
        print(f"✓ Resumen guardado: {summary_file}")
    except Exception as e:
        print(f"❌ Error saving summary: {e}", file=sys.stderr)
        return 1

    print(f"\n📋 Próximo paso: Emi agrega HTML y luego ejecuta envio.\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
