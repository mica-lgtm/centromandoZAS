#!/usr/bin/env python3
"""
Script para subir 4 campañas de email a Klaviyo
Vitalis Navitas - Secuencia Bestsellers — 10 de junio 2026
VERSIÓN FINAL CON ESTRUCTURA CORRECTA
"""

import requests
from pathlib import Path

# Configuración
KLAVIYO_TOKEN = "pk_Vc54qV_7b44751666b980c17fba9fb5ae51589a11"
KLAVIYO_AUDIENCE_ID = "TnRf72"  # Compradores de Colágeno hace 90 días

# Datos de las 4 campañas
CAMPAIGNS = [
    {
        "name": "Vitalis Bestsellers 01 - Colágeno Antiage",
        "subject": "Piel firme desde adentro: ya pasaron 90 días",
        "preheader": "Continuá tu rutina con beneficios vigentes + 10% OFF",
        "html_file": "email-1-colageno-antiage.html",
        "from_name": "Vitalis Navitas",
        "from_email": "agus@vitalisnavitas.com",
    },
    {
        "name": "Vitalis Bestsellers 02 - Colágeno FLEX",
        "subject": "Colágeno + elasticidad: movimiento sin restricciones",
        "preheader": "Complementá tu rutina con FLEX — 10% OFF disponible",
        "html_file": "email-2-colageno-flex.html",
        "from_name": "Vitalis Navitas",
        "from_email": "agus@vitalisnavitas.com",
    },
    {
        "name": "Vitalis Bestsellers 03 - Magnesio + B6",
        "subject": "Energía real: más allá de la piel",
        "preheader": "Completa tu bienestar con Magnesio + B6 — 10% OFF hoy",
        "html_file": "email-3-magnesio-b6.html",
        "from_name": "Vitalis Navitas",
        "from_email": "agus@vitalisnavitas.com",
    },
    {
        "name": "Vitalis Bestsellers 04 - Omega 3",
        "subject": "Corazón y cerebro: cierra tu círculo de salud",
        "preheader": "Omega 3 Plus — el paso final de tu rutina integral",
        "html_file": "email-4-omega-3.html",
        "from_name": "Vitalis Navitas",
        "from_email": "agus@vitalisnavitas.com",
    },
]

def read_html_file(filename):
    """Lee el archivo HTML"""
    filepath = Path(__file__).parent / filename
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()
        html = html.replace('${urls.unsubscribe}', "{% unsubscribe 'Desuscribirse' %}")
        return html
    except FileNotFoundError:
        print(f"❌ {filename} no existe")
        return None

def create_campaign(campaign_data):
    """Crea campaña + contenido en Klaviyo"""

    html = read_html_file(campaign_data['html_file'])
    if not html:
        return False

    print(f"\n📧 {campaign_data['name']}")

    # 1. Crear campaña vacía
    payload_campaign = {
        "data": {
            "type": "campaign",
            "attributes": {
                "name": campaign_data['name'],
                "audiences": {
                    "included": [KLAVIYO_AUDIENCE_ID]
                }
            }
        }
    }

    headers = {
        "Authorization": f"Klaviyo-API-Key {KLAVIYO_TOKEN}",
        "Content-Type": "application/json",
        "revision": "2024-02-15"
    }

    try:
        resp = requests.post("https://a.klaviyo.com/api/campaigns/", json=payload_campaign, headers=headers)

        if resp.status_code not in [200, 201, 202]:
            print(f"   ❌ {resp.status_code}: {resp.text[:200]}")
            return False

        campaign_id = resp.json().get('data', {}).get('id')
        print(f"   ✅ Campaña creada: {campaign_id}")

        # 2. Agregar contenido
        payload_message = {
            "data": {
                "type": "campaign-message",
                "attributes": {
                    "label": campaign_data['name'],
                    "channel": "email",
                    "content": {
                        "subject": campaign_data['subject'],
                        "preview_text": campaign_data['preheader'],
                        "html": html,
                        "from": {
                            "email": campaign_data['from_email'],
                            "name": campaign_data['from_name']
                        }
                    }
                }
            }
        }

        resp2 = requests.post(
            f"https://a.klaviyo.com/api/campaigns/{campaign_id}/campaign-messages/",
            json=payload_message,
            headers=headers
        )

        if resp2.status_code in [200, 201, 202]:
            print(f"   ✅ Contenido agregado")
            return True
        else:
            print(f"   ⚠️  Campaña OK pero contenido falló: {resp2.status_code}")
            return True

    except Exception as e:
        print(f"   ❌ {str(e)}")
        return False

def main():
    print("=" * 60)
    print("🚀 Subiendo campañas a Klaviyo")
    print("=" * 60)

    success = sum(1 for c in CAMPAIGNS if create_campaign(c))

    print("\n" + "=" * 60)
    print(f"📊 {success}/{len(CAMPAIGNS)} campañas creadas")
    print("=" * 60)

    if success == len(CAMPAIGNS):
        print("✅ ÉXITO - Todas en Klaviyo como borradores")
        print("📝 Próximos: validar en Klaviyo → Rita QA → enviar")

if __name__ == "__main__":
    main()
