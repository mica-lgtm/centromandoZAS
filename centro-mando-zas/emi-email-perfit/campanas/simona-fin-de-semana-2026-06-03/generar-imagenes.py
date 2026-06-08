#!/usr/bin/env python3
"""
Genera imágenes para cada email de la campaña Simona Fin de Semana
Usa Google Gemini API (stdlib only, sin dependencias externas)
"""

import json
import urllib.request
import urllib.error
import sys
from pathlib import Path

# API Configuration
API_KEY = "AIzaSyDD0Vfm4ooilfYNWEigO5WvIyssr3hRfts"
MODEL = "gemini-3.1-flash-image-preview"
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/{}:generateContent"

# Prompts para cada email
PROMPTS = {
    "email-1": {
        "name": "Jean Nascar (Viernes Mañana)",
        "prompt": "Young woman wearing classic blue mid-rise denim jeans and soft cream sweater, standing against textured warm beige/tan wall, natural daylight photography, editorial fashion lifestyle, realistic candid pose, warm golden hour light, textured background like aged plaster or rustic wall, professional magazine photography, authentic lifestyle fashion."
    },
    "email-2": {
        "name": "Blazer Mendoza Chocolate (Viernes Tarde)",
        "prompt": "Woman wearing premium chocolate brown tailored blazer over black basic, standing against textured warm aged wall, natural daylight photography, editorial fashion lifestyle, professional confident pose, textured background like rustic plaster, warm golden light, authentic magazine fashion photography, sophisticated everyday styling."
    },
    "email-3": {
        "name": "Sweater Nievre Crudo (Sábado Mañana)",
        "prompt": "Woman wearing soft cream/beige knit sweater with blue jeans, standing against textured warm wall with rustic aesthetic, natural daylight photography, editorial fashion lifestyle, relaxed confident pose, aged plaster or textured background, warm golden hour light, authentic magazine fashion, comfortable elegant style."
    },
    "email-4": {
        "name": "Camisa Brisa (Sábado Tarde)",
        "prompt": "Woman wearing light blue/cream button-up shirt open over soft sweater, standing against textured warm wall, natural daylight photography, editorial fashion lifestyle, casual-elegant pose, textured aged plaster background, warm golden light, authentic magazine fashion, versatile styling showing layering."
    },
    "email-5": {
        "name": "Combo 3 Piezas (Domingo Mañana)",
        "prompt": "Woman wearing blue jeans, cream sweater and light button-up shirt (showing how pieces layer together), standing against textured warm wall, natural daylight photography, editorial fashion lifestyle, showing styling versatility and outfit combinations, textured background, warm golden light, authentic magazine fashion photography."
    }
}

def generate_image(prompt_name, prompt_text):
    """Genera una imagen usando Gemini API"""

    url = API_URL.format(MODEL)

    # Payload para Gemini
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": prompt_text
                    }
                ]
            }
        ],
        "generationConfig": {
            "temperature": 1,
            "topK": 40,
            "topP": 0.95,
            "maxOutputTokens": 1024,
            "responseModalities": ["IMAGE"]
        }
    }

    headers = {
        "Content-Type": "application/json",
    }

    # Agregar API key al URL
    full_url = f"{url}?key={API_KEY}"

    try:
        print(f"\n🎨 Generando: {prompt_name}")
        print(f"   Prompt: {prompt_text[:80]}...")

        request = urllib.request.Request(
            full_url,
            data=json.dumps(payload).encode('utf-8'),
            headers=headers,
            method='POST'
        )

        with urllib.request.urlopen(request, timeout=60) as response:
            result = json.loads(response.read().decode('utf-8'))

            # Extraer imagen
            if 'candidates' in result and len(result['candidates']) > 0:
                candidate = result['candidates'][0]
                if 'content' in candidate and 'parts' in candidate['content']:
                    for part in candidate['content']['parts']:
                        if 'inlineData' in part:
                            image_data = part['inlineData']
                            mime_type = image_data.get('mimeType', 'image/jpeg')
                            image_bytes = image_data.get('data', '')

                            # Guardar imagen
                            filename = f"{prompt_name.replace(' ', '-').lower()}.jpg"
                            filepath = Path(__file__).parent / filename

                            # Decodificar base64
                            import base64
                            image_binary = base64.b64decode(image_bytes)

                            with open(filepath, 'wb') as f:
                                f.write(image_binary)

                            print(f"   ✅ Guardada: {filepath}")
                            return str(filepath)

            print(f"   ⚠️  No se generó imagen")
            return None

    except urllib.error.HTTPError as e:
        print(f"   ❌ Error HTTP {e.code}: {e.reason}")
        if e.code == 400:
            body = e.read().decode('utf-8')
            print(f"      Detalles: {body}")
        return None
    except Exception as e:
        print(f"   ❌ Error: {str(e)}")
        return None

def main():
    print("=" * 60)
    print("🚀 Generador de Imágenes - Campaña Simona Fin de Semana")
    print("=" * 60)
    print(f"Modelo: {MODEL}")
    print(f"Total de imágenes: {len(PROMPTS)}")

    results = {}

    for key, data in PROMPTS.items():
        filepath = generate_image(key, data['prompt'])
        results[key] = {
            "name": data['name'],
            "filepath": filepath,
            "status": "✅" if filepath else "❌"
        }

    # Resumen
    print("\n" + "=" * 60)
    print("📊 RESUMEN DE GENERACIÓN")
    print("=" * 60)

    for key, result in results.items():
        print(f"{result['status']} {key}: {result['name']}")
        if result['filepath']:
            print(f"    → {result['filepath']}")

    success = sum(1 for r in results.values() if r['filepath'])
    print(f"\n✅ Generadas: {success}/{len(PROMPTS)}")

if __name__ == "__main__":
    main()
