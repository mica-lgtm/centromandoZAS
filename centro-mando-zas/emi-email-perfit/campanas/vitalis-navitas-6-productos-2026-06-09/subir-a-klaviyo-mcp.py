#!/usr/bin/env python3
"""
Script para subir 6 campañas a Klaviyo usando MCP
Vitalis Navitas — 9 de junio 2026
"""

import json
import subprocess
from pathlib import Path

# Configuración de campañas
CAMPAIGNS = [
    {
        "name": "Vitalis — Email 1: Colágeno Piel Firme",
        "subject": "Piel firme desde adentro en 90 días",
        "preheader": "Blend antiage 5 en 1 con 15% OFF",
        "html_file": "01-colageno-piel-firme.html",
    },
    {
        "name": "Vitalis — Email 2: Colágeno Cabello & Uñas",
        "subject": "Cabello y uñas fuertes: el mismo blend antiage",
        "preheader": "Los mismos ingredientes, otro beneficio visible",
        "html_file": "02-colageno-cabello-unas.html",
    },
    {
        "name": "Vitalis — Email 3: Magnesio Energía Real",
        "subject": "Cansancio que no te deja: magnesio + B6",
        "preheader": "Energía real para tu ritmo",
        "html_file": "03-magnesio-energia-real.html",
    },
    {
        "name": "Vitalis — Email 4: Magnesio Digestión & Relajación",
        "subject": "Digestión ligera + músculos relajados",
        "preheader": "Magnesio para el bienestar total",
        "html_file": "04-magnesio-digestión-relajacion.html",
    },
    {
        "name": "Vitalis — Email 5: Omega 3 Corazón Fuerte",
        "subject": "Corazón fuerte: omega 3 ultra puro",
        "preheader": "EPA 500 + DHA 200 en 1 cápsula",
        "html_file": "05-omega3-corazon-fuerte.html",
    },
    {
        "name": "Vitalis — Email 6: Omega 3 Memoria & Cerebro",
        "subject": "Memoria nítida: DHA puro en 1 cápsula",
        "preheader": "Claridad mental con omega 3 ultra concentrado",
        "html_file": "06-omega3-memoria-cerebro.html",
    },
]

FROM_EMAIL = "agus@vitalisnavitas.com"
FROM_NAME = "Vitalis Navitas"
AUDIENCE_ID = "TnRf72"  # Segmento Vitalis

def read_html(filename):
    """Lee el archivo HTML"""
    filepath = Path(__file__).parent / filename
    return filepath.read_text(encoding='utf-8')

def call_mcp_tool(tool_name, **kwargs):
    """Llama una herramienta MCP vía claude CLI"""
    # En lugar de llamar directamente, devuelve los datos estructurados
    # para que puedan ser usados por Claude Code
    return kwargs

def create_campaign_in_klaviyo(campaign_data):
    """Estructura los datos para crear una campaña en Klaviyo"""

    html_content = read_html(campaign_data['html_file'])

    # Datos para el template
    template_data = {
        "name": campaign_data['name'],
        "html": html_content,
    }

    # Datos para la campaña
    campaign_create_data = {
        "name": campaign_data['name'],
        "subject": campaign_data['subject'],
        "preheader": campaign_data['preheader'],
        "fromEmail": FROM_EMAIL,
        "fromName": FROM_NAME,
        "audienceId": AUDIENCE_ID,
    }

    return template_data, campaign_create_data

def main():
    print("=" * 70)
    print("📊 Preparando carga de campañas a Klaviyo")
    print("=" * 70)

    for i, campaign in enumerate(CAMPAIGNS, 1):
        print(f"\n{i}. {campaign['name']}")
        template_data, campaign_data = create_campaign_in_klaviyo(campaign)
        print(f"   ✓ Template preparado: {len(template_data['html'])} caracteres")
        print(f"   ✓ Campaña preparada para: {campaign_data['fromEmail']}")
        print(f"   📝 Asunto: {campaign_data['subject']}")
        print(f"   📝 Preheader: {campaign_data['preheader']}")

    print("\n" + "=" * 70)
    print("✅ Datos preparados. Usa Claude Code para cargarlos a Klaviyo.")
    print("=" * 70)

if __name__ == "__main__":
    main()
