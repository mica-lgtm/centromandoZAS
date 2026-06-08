#!/usr/bin/env python3
"""
Script para subir campañas a Perfit como borrador
Flujo:
1. POST /v2/[account]/campaigns → crear campaña
2. POST /v2/[account]/campaigns/{id}/contents → agregar contenido HTML
"""

import requests
import json
import os
from pathlib import Path

# Configuración
API_KEY = "simonashop-r9NSUAgw3TxyimMTrEDFr5rNLh6ah0an"
ACCOUNT = "simonashop"
BASE_URL = f"https://api.myperfit.com/v2/{ACCOUNT}"
CAMPAIGN_DIR = "/Users/mica/Desktop/centro-mando-zas/emi-email-perfit/campanas/simona-fin-de-semana-2026-06-03"

# Mapeo de archivos HTML a datos de campaña
CAMPANAS = [
    {
        "file": "email-1-viernes-manana-jean-nascar.html",
        "name": "Simona - Viernes Mañana - Jean Nascar",
        "subject": "El jean que funciona con todo",
        "preheader": "Fit perfecto, precio accesible. 12 cuotas sin interés.",
    },
    {
        "file": "email-2-viernes-tarde-blazer-mendoza.html",
        "name": "Simona - Viernes Tarde - Blazer Mendoza",
        "subject": "El blazer que te hace más fuerte",
        "preheader": "Corte impecable, 12 cuotas sin interés.",
    },
    {
        "file": "email-3-sabado-manana-sweater-nievre.html",
        "name": "Simona - Sábado Mañana - Sweater Nievre",
        "subject": "El sweater que se adaptá a vos",
        "preheader": "Suave, cómodo, 12 cuotas sin interés.",
    },
    {
        "file": "email-4-sabado-tarde-camisa-brisa.html",
        "name": "Simona - Sábado Tarde - Camisa Brisa",
        "subject": "La camisa que se lleva con todo",
        "preheader": "Versátil, fresca, 12 cuotas sin interés.",
    },
    {
        "file": "email-5-domingo-manana-combo.html",
        "name": "Simona - Domingo Mañana - Combo 3 Piezas",
        "subject": "Combo 3: vistete completo",
        "preheader": "Jean + Blazer + Camisa. 12 cuotas sin interés.",
    },
    {
        "file": "email-6-domingo-tarde-remate.html",
        "name": "Simona - Domingo Tarde - Remate Urgencia",
        "subject": "Últimas piezas: remate de fin de semana",
        "preheader": "Se agotan. 12 cuotas sin interés.",
    }
]

def read_html(filepath):
    """Lee el contenido del archivo HTML"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def create_campaign(name):
    """Crea una campaña en Perfit como borrador"""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    endpoint = f"{BASE_URL}/campaigns"
    payload = {"name": name}

    try:
        response = requests.post(endpoint, json=payload, headers=headers, timeout=30)

        if response.status_code in [200, 201]:
            data = response.json()
            if data.get("success") or "data" in data:
                campaign_id = data.get("data", {}).get("id")
                return campaign_id
        return None
    except Exception as e:
        return None

def update_campaign_content(campaign_id, subject, html, preheader):
    """Actualiza el contenido HTML de una campaña"""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    endpoint = f"{BASE_URL}/campaigns/{campaign_id}/contents"
    payload = {
        "subject": subject,
        "html": html,
        "preview": preheader
    }

    try:
        response = requests.post(endpoint, json=payload, headers=headers, timeout=30)

        if response.status_code in [200, 201]:
            data = response.json()
            return data.get("success") or "data" in data
        return False
    except Exception as e:
        return False

def upload_campaign(campaign_data):
    """Sube una campaña completa a Perfit"""

    filepath = os.path.join(CAMPAIGN_DIR, campaign_data["file"])

    if not os.path.exists(filepath):
        print(f"❌ Archivo no encontrado: {filepath}")
        return False

    html_content = read_html(filepath)

    print(f"\n📧 Subiendo: {campaign_data['name']}")
    print(f"   Archivo: {campaign_data['file']}")

    # Paso 1: Crear campaña
    print(f"   [1/2] Creando campaña...")
    campaign_id = create_campaign(campaign_data["name"])

    if not campaign_id:
        print(f"   ❌ Error creando campaña")
        return False

    print(f"        ✓ ID: {campaign_id}")

    # Paso 2: Actualizar contenido HTML
    print(f"   [2/2] Agregando contenido HTML...")
    success = update_campaign_content(
        campaign_id,
        campaign_data["subject"],
        html_content,
        campaign_data["preheader"]
    )

    if success:
        print(f"   ✅ Campaña subida exitosamente!")
        print(f"      Asunto: {campaign_data['subject']}")
        return True
    else:
        print(f"   ❌ Error actualizando contenido")
        return False

def main():
    print("🚀 Iniciando subida de campañas a Perfit...")
    print(f"   Account: {ACCOUNT}")
    print(f"   Directorio: {CAMPAIGN_DIR}\n")

    success_count = 0
    error_count = 0

    for campaign in CAMPANAS:
        if upload_campaign(campaign):
            success_count += 1
        else:
            error_count += 1

    print(f"\n📊 Resumen:")
    print(f"   ✅ Exitosas: {success_count}/{len(CAMPANAS)}")
    print(f"   ❌ Con error: {error_count}/{len(CAMPANAS)}")

    if success_count == len(CAMPANAS):
        print("\n🎉 ¡Todas las campañas fueron subidas exitosamente a Perfit como borrador!")
        print("📝 Próximo paso: Validar en Perfit y enviar a Rita para QA final")

if __name__ == "__main__":
    main()
