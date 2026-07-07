#!/usr/bin/env python3
import json
import pathlib
import urllib.request


ACCOUNT = "magnolias"
API_KEY = "magnolias-t7prs1QTw0BJr0LvilTWf7pcuNkdk5p3"
SENDER_ID = "sen_cls3khdst003d07391658rqxt"
SENDER_EMAIL = "atencionalcliente@magnoliasdeco.com.ar"
SENDER_NAME = "Magnolias"

ITEMS = [
    {
        "campaign_id": 881,
        "tpl_id": "tpl_cmqtvvtzs8ny80996o8e5oyye",
        "content_id": 881,
        "subject": "Decorá con menos de 50.000",
        "html_file": "01-decorar-con-menos-de-50k.html",
    },
    {
        "campaign_id": 882,
        "tpl_id": "tpl_cmqtw055l8nyt099602fienlg",
        "content_id": 882,
        "subject": "Mantas para abrigar tu hogar",
        "html_file": "02-mantas-para-abrigar-tu-hogar.html",
    },
]


BASE_PEM = f"https://pem-lb.myperfit.com/v2/{ACCOUNT}"
BASE_API = "https://apiv3.myperfit.com"
HEADERS = {
    "accept-language": "es",
    "x-account": ACCOUNT,
    "Authorization": f"Bearer {API_KEY}",
}
JSON_HEADERS = {**HEADERS, "content-type": "application/json"}


def request(method, url, body=None, headers=None):
    data = None
    if body is not None:
        data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(url, data=data, method=method, headers=headers or HEADERS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read().decode("utf-8", "ignore")
        return json.loads(raw) if raw else {}


def main():
    folder = pathlib.Path(__file__).resolve().parent
    for item in ITEMS:
        html = (folder / item["html_file"]).read_text(encoding="utf-8")
        tpl_body = {
            "type": "html",
            "name": f"Magnolias draft {item['campaign_id']}",
            "tags": [],
            "sender_id": SENDER_ID,
            "subject": item["subject"],
            "preheader": "",
            "contents": {"json": "", "html": html, "text": ""},
            "audit_results": {"mode": "campaign", "status": "PASS", "errors": []},
            "tracking": {
                "utm": {"enabled": True, "campaign": "", "source": "perfit", "medium": "email", "content": ""},
                "click": True,
                "open": True,
            },
            "options": {},
        }

        request("PUT", f"{BASE_API}/templates/{item['tpl_id']}", tpl_body, JSON_HEADERS)
        request(
            "PUT",
            f"{BASE_PEM}/campaigns/{item['campaign_id']}/contents/{item['content_id']}/body",
            {"html": html},
            JSON_HEADERS,
        )
        request(
            "PUT",
            f"{BASE_PEM}/campaigns/{item['campaign_id']}/contents/{item['content_id']}",
            {
                "from": SENDER_EMAIL,
                "fromName": SENDER_NAME,
                "replyTo": SENDER_EMAIL,
                "subject": item["subject"],
            },
            JSON_HEADERS,
        )
        validation = request("GET", f"{BASE_PEM}/campaigns/{item['campaign_id']}/validate")
        print(item["campaign_id"], validation.get("success"), validation.get("data", {}).get("valid"))


if __name__ == "__main__":
    main()
