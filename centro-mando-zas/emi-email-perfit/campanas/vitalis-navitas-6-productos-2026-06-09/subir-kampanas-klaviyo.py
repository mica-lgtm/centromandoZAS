#!/usr/bin/env python3
"""
Script para subir 6 campañas de email a Klaviyo
Vitalis Navitas — 9 de junio 2026
Creado por: Emi
"""

import requests
import os
from pathlib import Path

# Configuración
KLAVIYO_TOKEN = "pk_Vc54qV_7b44751666b980c17fba9fb5ae51589a11"
KLAVIYO_AUDIENCE_ID = "TnRf72"  # ID del segmento Vitalis

# Headers para API v1 (más simple para crear campañas)
HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# Datos de las 6 campañas
CAMPAIGNS = [
    {
        "name": "Vitalis — Email 1: Colágeno Piel Firme",
        "subject": "Piel firme desde adentro en 90 días",
        "preheader": "Blend antiage 5 en 1 con 15% OFF",
        "html_file": "01-colageno-piel-firme.html",
        "from_name": "Vitalis Navitas",
        "from_email": "hola@vitalisnavitas.com",  # Cambiar si es otro email
    },
    {
        "name": "Vitalis — Email 2: Colágeno Cabello & Uñas",
        "subject": "Cabello y uñas fuertes: el mismo blend antiage",
        "preheader": "Los mismos ingredientes, otro beneficio visible",
        "html_file": "02-colageno-cabello-unas.html",
        "from_name": "Vitalis Navitas",
        "from_email": "hola@vitalisnavitas.com",
    },
    {
        "name": "Vitalis — Email 3: Magnesio Energía Real",
        "subject": "Cansancio que no te deja: magnesio + B6",
        "preheader": "Energía real para tu ritmo",
        "html_file": "03-magnesio-energia-real.html",
        "from_name": "Vitalis Navitas",
        "from_email": "hola@vitalisnavitas.com",
    },
    {
        "name": "Vitalis — Email 4: Magnesio Digestión & Relajación",
        "subject": "Digestión ligera + músculos relajados",
        "preheader": "Magnesio para el bienestar total",
        "html_file": "04-magnesio-digestión-relajacion.html",
        "from_name": "Vitalis Navitas",
        "from_email": "hola@vitalisnavitas.com",
    },
    {
        "name": "Vitalis — Email 5: Omega 3 Corazón Fuerte",
        "subject": "Corazón fuerte: omega 3 ultra puro",
        "preheader": "EPA 500 + DHA 200 en 1 cápsula",
        "html_file": "05-omega3-corazon-fuerte.html",
        "from_name": "Vitalis Navitas",
        "from_email": "hola@vitalisnavitas.com",
    },
    {
        "name": "Vitalis — Email 6: Omega 3 Memoria & Cerebro",
        "subject": "Memoria nítida: DHA puro en 1 cápsula",
        "preheader": "Claridad mental con omega 3 ultra concentrado",
        "html_file": "06-omega3-memoria-cerebro.html",
        "from_name": "Vitalis Navitas",
        "from_email": "hola@vitalisnavitas.com",
    },
]

def read_html_file(filename):
    """Lee el archivo HTML de la campaña"""
    filepath = Path(__file__).parent / filename
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"❌ Error: No se encontró {filename}")
        return None

def create_campaign(campaign_data):
    """Crea una campaña en Klaviyo sin audiencia primero"""

    # Leer HTML
    html_content = read_html_file(campaign_data['html_file'])
    if not html_content:
        return False

    print(f"\n📧 Subiendo: {campaign_data['name']}")

    # Payload CON audiencia (formato correcto)
    payload = {
        "data": {
            "type": "campaign",
            "attributes": {
                "name": campaign_data['name'],
                "subject": campaign_data['subject'],
                "preview_text": campaign_data['preheader'],
                "from": {
                    "email": campaign_data['from_email'],
                    "name": campaign_data['from_name']
                },
                "content": {
                    "html": html_content
                },
                "audiences": {
                    "data": [
                        {
                            "type": "segment",
                            "id": KLAVIYO_AUDIENCE_ID
                        }
                    ]
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
        # 1. Crear campaña
        response = requests.post(
            "https://a.klaviyo.com/api/campaigns/",
            json=payload,
            headers=headers
        )

        if response.status_code in [200, 201, 202]:
            resp_data = response.json()
            campaign_id = resp_data.get('data', {}).get('id', 'N/A')
            print(f"✅ Campaña creada: {campaign_id}")

            # 2. Asignar audiencia a la campaña
            if assign_audience_to_campaign(campaign_id, headers):
                return True
            else:
                print(f"⚠️  Campaña creada pero audiencia no asignada")
                return True  # Campaña creada de todas formas
        else:
            print(f"❌ API: {response.status_code}")
            print(f"   {response.text[:300]}")
            return False

    except Exception as e:
        print(f"❌ Conexión: {str(e)}")
        return False


def assign_audience_to_campaign(campaign_id, headers):
    """Asigna la audiencia/segmento a una campaña"""

    payload = {
        "data": {
            "type": "segment",
            "id": KLAVIYO_AUDIENCE_ID
        }
    }

    try:
        response = requests.post(
            f"https://a.klaviyo.com/api/campaigns/{campaign_id}/relationships/audiences/",
            json=payload,
            headers=headers
        )

        if response.status_code in [200, 201, 202, 204]:
            print(f"   ✅ Audiencia TnRf72 asignada")
            return True
        else:
            # Intentar endpoint alternativo
            return assign_audience_alternative(campaign_id, headers)

    except Exception as e:
        print(f"   ⚠️  No se pudo asignar audiencia: {str(e)}")
        return False


def assign_audience_alternative(campaign_id, headers):
    """Intenta asignar audiencia por método alternativo"""

    payload = {
        "data": [
            {
                "type": "segment",
                "id": KLAVIYO_AUDIENCE_ID
            }
        ]
    }

    try:
        response = requests.patch(
            f"https://a.klaviyo.com/api/campaigns/{campaign_id}/",
            json={"data": {"relationships": {"audiences": {"data": payload["data"]}}}},
            headers=headers
        )

        if response.status_code in [200, 201, 202]:
            print(f"   ✅ Audiencia asignada (método alternativo)")
            return True
        else:
            return False

    except:
        return False

def main():
    """Función principal"""
    print("=" * 60)
    print("🚀 Subiendo campañas a Klaviyo")
    print("=" * 60)
    print(f"Total de campañas: {len(CAMPAIGNS)}")
    print(f"Token: {KLAVIYO_TOKEN[:20]}...")

    success_count = 0
    failed_count = 0

    for campaign in CAMPAIGNS:
        if create_campaign(campaign):
            success_count += 1
        else:
            failed_count += 1

    print("\n" + "=" * 60)
    print(f"📊 Resultado: {success_count} exitosas, {failed_count} fallidas")
    print("=" * 60)

    if failed_count == 0:
        print("✅ Todas las campañas se subieron exitosamente a Klaviyo")
        print("📝 Próximos pasos:")
        print("   1. Ir a Klaviyo y revisar las campañas como borradores")
        print("   2. Seleccionar la lista de contactos (base completa Vitalis)")
        print("   3. Verificar asunto, preheader y contenido")
        print("   4. Programar envío o enviar directamente")
    else:
        print("⚠️  Algunas campañas fallaron. Revisa los errores arriba.")

if __name__ == "__main__":
    main()
