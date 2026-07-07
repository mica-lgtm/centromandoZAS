import requests

TOKEN = "pk_Vc54qV_7b44751666b980c17fba9fb5ae51589a11"
AUDIENCE_ID = "TnRf72"

payload = {
    "data": {
        "type": "campaign",
        "attributes": {
            "name": "Vitalis TEST 01",
            "audiences": {"included": [AUDIENCE_ID]},
            "campaign-messages": {
                "data": [{
                    "type": "campaign-message",
                    "attributes": {
                        "label": "Email 1",
                        "channel": "email",
                        "from": {
                            "email": "agus@vitalisnavitas.com",
                            "name": "Vitalis Navitas"
                        },
                        "content": {
                            "subject": "TEST",
                            "preview_text": "test"
                        }
                    }
                }]
            }
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
print(f"Response: {r.text[:400]}")

if r.status_code in [200, 201, 202]:
    print(f"✅ Campaign creada!")
