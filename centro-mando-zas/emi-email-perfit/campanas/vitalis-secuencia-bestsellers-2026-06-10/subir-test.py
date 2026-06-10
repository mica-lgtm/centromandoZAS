import requests
from pathlib import Path

TOKEN = "pk_Vc54qV_7b44751666b980c17fba9fb5ae51589a11"
AUDIENCE_ID = "TnRf72"

html = Path("email-1-colageno-antiage.html").read_text(encoding='utf-8')
html = html.replace('${urls.unsubscribe}', "{% unsubscribe 'Desuscribirse' %}")

payload = {
    "data": {
        "type": "campaign",
        "attributes": {
            "name": "TEST",
            "audiences": {"included": [AUDIENCE_ID]},
            "campaign-messages": [{
                "channel": "email",
                "content": {
                    "subject": "TEST",
                    "preview_text": "test",
                    "html": html,
                    "from": {"email": "agus@vitalisnavitas.com", "name": "Vitalis"}
                }
            }]
        }
    }
}

headers = {
    "Authorization": f"Klaviyo-API-Key {TOKEN}",
    "Content-Type": "application/json",
    "revision": "2024-02-15"
}

r = requests.post("https://a.klaviyo.com/api/campaigns/", json=payload, headers=headers)
print(f"Status: {r.status_code}")
print(f"Response: {r.text[:500]}")

if r.status_code in [200, 201, 202]:
    print(f"✅ Campaign ID: {r.json().get('data', {}).get('id')}")
