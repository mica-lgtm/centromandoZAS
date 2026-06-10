#!/usr/bin/env python3
"""
Analizar performance de campañas Perfit cada 48 horas.
Conectarse a múltiples cuentas, traer datos de campañas enviadas recientemente,
detectar patrones ganadores/perdedores, y generar reportes automáticos.

Uso:
    python3 analizar_performance_perfit.py

Requisitos:
    - retroalimentacion-perfit/cuentas.json (copiar desde .example)
    - Acceso a Perfit API para cada cuenta
"""

import json
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime, timedelta


def load_config():
    """Load accounts from cuentas.json."""
    config_path = Path("retroalimentacion-perfit/cuentas.json")
    if not config_path.exists():
        print(f"❌ Config file not found: {config_path}")
        print(f"   Copy from cuentas.json.example and fill in API keys")
        return None

    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"❌ Error loading config: {e}")
        return None


def get_campaigns(account, api_key, hours=48):
    """Get sent campaigns from last N hours."""
    url = f"https://pem-lb.myperfit.com/v2/{account}/campaigns"

    headers = {
        "Authorization": f"Bearer {api_key}",
        "x-account": account,
        "accept-language": "es"
    }

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))

            campaigns = data.get("data", [])
            if not isinstance(campaigns, list):
                campaigns = [campaigns] if campaigns else []

            # Filter by status and recent update
            sent_campaigns = [
                c for c in campaigns
                if c.get("status") == "sent" or c.get("launch_status") == "sent"
            ]

            return sent_campaigns

    except urllib.error.HTTPError as e:
        if e.code == 401:
            print(f"   ❌ 401 Unauthorized — API key invalid")
        else:
            print(f"   ❌ HTTP {e.code}: {e.read().decode('utf-8', 'replace')}")
        return []
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return []


def extract_metrics(campaign):
    """Extract performance metrics from campaign object."""
    metrics = {
        "id": campaign.get("id"),
        "name": campaign.get("name"),
        "subject": campaign.get("subject", "N/A"),
        "sent_at": campaign.get("sent_at"),
        "recipients": campaign.get("recipients", 0),
        "delivered": campaign.get("delivered", campaign.get("recipients", 0)),
        "opened": campaign.get("opened", 0),
        "open_rate": campaign.get("open_rate", 0),
        "clicked": campaign.get("clicked", 0),
        "click_rate": campaign.get("click_rate", 0),
        "bounced": campaign.get("bounced", 0),
        "bounce_rate": campaign.get("bounce_rate", 0),
        "unsubscribed": campaign.get("unsubscribed", 0),
        "unsubscribe_rate": campaign.get("unsubscribe_rate", 0),
    }

    # Fallback to nested structures if needed
    if isinstance(campaign.get("data"), dict):
        data = campaign["data"]
        metrics.update({
            k: data.get(k, metrics.get(k))
            for k in metrics.keys()
        })

    return metrics


def analyze_campaigns(campaigns):
    """Analyze campaigns and find patterns."""
    if not campaigns:
        return {"winners": [], "losers": [], "alerts": []}

    metrics_list = [extract_metrics(c) for c in campaigns]

    # Calculate averages
    avg_open_rate = sum(m["open_rate"] for m in metrics_list) / len(metrics_list) if metrics_list else 0
    avg_click_rate = sum(m["click_rate"] for m in metrics_list) / len(metrics_list) if metrics_list else 0

    # Find winners (top 3 by open rate)
    winners = sorted(metrics_list, key=lambda x: x["open_rate"], reverse=True)[:3]

    # Find losers (low open rate, high bounce)
    losers = [
        m for m in metrics_list
        if m["open_rate"] < 5.0 or m["bounce_rate"] > 3.0
    ]

    # Find alerts
    alerts = [
        m for m in metrics_list
        if m["bounce_rate"] > 5.0 or m["unsubscribe_rate"] > 0.2
    ]

    return {
        "avg_open_rate": avg_open_rate,
        "avg_click_rate": avg_click_rate,
        "winners": winners,
        "losers": losers,
        "alerts": alerts,
        "total": len(metrics_list),
        "total_sent": sum(m["recipients"] for m in metrics_list),
        "all_metrics": metrics_list
    }


def generate_proposals(account, analysis):
    """Generate 3 campaign proposals based on analysis."""
    winners = analysis['winners']
    avg_open = analysis['avg_open_rate']
    avg_ctr = analysis['avg_click_rate']

    proposals = []

    # Proposal 1: Based on best performer (subject pattern)
    if winners:
        best = winners[0]
        proposal1 = {
            "numero": 1,
            "estrategia": "Replicar patrón ganador #1",
            "descripcion": f"Usar el patrón que mejor abrió ({best['open_rate']:.1f}%): urgencia + beneficio claro",
            "asunto_propuesto": f"[Basado en: {best['subject'][:40]}...]",
            "preheader_propuesto": "Tu próxima acción importante espera",
            "angulo": "Urgencia + Beneficio",
            "segmentacion": "Base completa",
            "cta_propuesto": "Ir ahora",
            "nota": "Ajustar asunto y preheader con datos de marca",
            "estado": "pendiente_aprobacion"
        }
        proposals.append(proposal1)

    # Proposal 2: Test en segmento pequeño (si hay data)
    if len(analysis['all_metrics']) > 3:
        proposal2 = {
            "numero": 2,
            "estrategia": "Test en segmento pequeño",
            "descripcion": "Enviar a segmento pequeño (<5k) para validar nuevo ángulo antes de escalar",
            "asunto_propuesto": "[Test] - Usa pregunta provocadora o estadística",
            "preheader_propuesto": "Solo para ti",
            "angulo": "Educativo + Pregunta",
            "segmentacion": "Segmento pequeño (últimos 3 meses de interacción)",
            "cta_propuesto": "Ver más",
            "nota": "Diseñado para alto open rate en segmento reducido",
            "estado": "pendiente_aprobacion"
        }
        proposals.append(proposal2)

    # Proposal 3: Re-engagement o winback
    proposal3 = {
        "numero": 3,
        "estrategia": "Winback / Reactivación",
        "descripcion": "Dirigirse a usuarios inactivos >90 días con oferta/valor fuerte",
        "asunto_propuesto": "[Exclusivo] Volvé y descubrí qué es nuevo",
        "preheader_propuesto": "Te echamos de menos",
        "angulo": "Reencuentro + Novedad",
        "segmentacion": "Inactivos >90 días",
        "cta_propuesto": "Volver ahora",
        "nota": "Estrategia para recuperar usuarios dormidos",
        "estado": "pendiente_aprobacion"
    }
    proposals.append(proposal3)

    return proposals


def generate_report(account, client_name, analysis):
    """Generate markdown report for this account."""
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    filename = f"retroalimentacion-perfit/{account}-{date_str}-ciclo-01.md"

    # Build markdown
    lines = [
        f"# {account} · {date_str} — Análisis Performance 48hs — Ciclo 1",
        "",
        "## Resumen",
        "",
        f"**Cliente:** {client_name}",
        f"**Período:** {(now - timedelta(hours=48)).strftime('%Y-%m-%d %H:%M')} a {now.strftime('%Y-%m-%d %H:%M')}",
        f"**Campañas analizadas:** {analysis['total']}",
        f"**Enviados totales:** {analysis['total_sent']}",
        f"**Promedio open rate:** {analysis['avg_open_rate']:.1f}%",
        f"**Promedio CTR:** {analysis['avg_click_rate']:.1f}%",
        "",
        "---",
        "",
        "## 📊 Campañas analizadas",
        "",
        "| # | Nombre | Asunto | Enviados | Open % | CTR % | Bounce % |",
        "|---|--------|--------|----------|--------|-------|----------|",
    ]

    for i, m in enumerate(analysis['all_metrics'], 1):
        asunto_short = m["subject"][:40] if m["subject"] != "N/A" else "N/A"
        lines.append(
            f"| {i} | {m['name'][:30]} | {asunto_short} | {m['recipients']} | "
            f"{m['open_rate']:.1f}% | {m['click_rate']:.1f}% | {m['bounce_rate']:.1f}% |"
        )

    lines.extend([
        "",
        "---",
        "",
        "## ✅ Qué funcionó",
        "",
    ])

    if analysis['winners']:
        lines.extend([
            "### Top asuntos por open rate",
            "",
        ])
        for i, w in enumerate(analysis['winners'], 1):
            lines.append(
                f"{i}. \"{w['subject']}\" — {w['open_rate']:.1f}% "
                f"(Enviados: {w['recipients']})"
            )
        lines.append("")

    lines.extend([
        "---",
        "",
        "## ❌ Qué no funcionó",
        "",
    ])

    if analysis['losers']:
        lines.extend([
            "### Campañas con bajo performance",
            "",
        ])
        for l in analysis['losers']:
            lines.append(
                f"- **{l['name']}** — Open {l['open_rate']:.1f}% / Bounce {l['bounce_rate']:.1f}%"
            )
        lines.append("")

    if analysis['alerts']:
        lines.extend([
            "### ⚠️ Alertas críticas",
            "",
        ])
        for a in analysis['alerts']:
            if a['bounce_rate'] > 5.0:
                lines.append(
                    f"- **{a['name']}**: Bounce rate {a['bounce_rate']:.1f}% "
                    f"(crítico > 5%) — Revisar lista y HTML"
                )
            if a['unsubscribe_rate'] > 0.2:
                lines.append(
                    f"- **{a['name']}**: Unsubscribe {a['unsubscribe_rate']:.1f}% "
                    f"— Posible falta de relevancia"
                )
        lines.append("")

    lines.extend([
        "---",
        "",
        "## 🧠 Reglas aprendidas este ciclo",
        "",
        f"- Promedio open rate es {analysis['avg_open_rate']:.1f}% — campañas arriba tienen potencial de replicarse",
        f"- Promedio CTR es {analysis['avg_click_rate']:.1f}% — focus en CTA clarity",
        "",
        "---",
        "",
        "## 📝 Notas operativas",
        "",
        f"- Generado: {now.strftime('%Y-%m-%d %H:%M:%S')}",
        f"- Próximo ciclo: {(now + timedelta(hours=48)).strftime('%Y-%m-%d %H:%M')}",
        "- Generado por: Emi (agente automático)",
    ])

    return filename, "\n".join(lines)


def main():
    print("\n🚀 Iniciando análisis de performance Perfit...\n")

    config = load_config()
    if not config:
        return 1

    cuentas = config.get("cuentas", [])
    if not cuentas:
        print("❌ No accounts configured in cuentas.json")
        return 1

    print(f"📊 Procesando {len(cuentas)} cuenta(s)...\n")

    reports_generated = []

    for account_cfg in cuentas:
        account = account_cfg.get("code")
        api_key = account_cfg.get("api_key")
        client_name = account_cfg.get("nombre_cliente", account)

        print(f"📧 {client_name} ({account})")

        # Get campaigns
        campaigns = get_campaigns(account, api_key)

        if not campaigns:
            print(f"   ℹ️  Sin campañas enviadas en las últimas 48hs\n")
            continue

        print(f"   ✓ {len(campaigns)} campañas encontradas")

        # Analyze
        analysis = analyze_campaigns(campaigns)

        # Generate report
        filename, content = generate_report(account, client_name, analysis)

        # Save report
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"   ✓ Reporte guardado: {filename}")
            reports_generated.append((account, filename))
        except Exception as e:
            print(f"   ❌ Error saving report: {e}\n")
            return 1

        # Generate proposals
        proposals = generate_proposals(account, analysis)
        proposals_filename = f"retroalimentacion-perfit/{account}-{now.strftime('%Y-%m-%d')}-propuestas.json"

        try:
            with open(proposals_filename, 'w', encoding='utf-8') as f:
                json.dump({
                    "account": account,
                    "cliente": client_name,
                    "fecha_generacion": now.isoformat(),
                    "propuestas": proposals,
                    "instrucciones": "1. Revisar propuestas. 2. Editar asuntos/preheaders según marca. 3. Cambiar 'estado' a 'aprobada' para cada campaña que quieras crear. 4. Ejecutar: python3 crear_campanas_aprobadas.py --config propuestas.json"
                }, f, indent=2, ensure_ascii=False)
            print(f"   ✓ Propuestas guardadas: {proposals_filename}\n")
        except Exception as e:
            print(f"   ❌ Error saving proposals: {e}\n")
            return 1

    # Summary
    print("="*70)
    print("📈 Resumen")
    print("="*70)

    if reports_generated:
        print(f"\n✓ {len(reports_generated)} reporte(s) generado(s):\n")
        for account, filename in reports_generated:
            print(f"   • {filename}")
        print(f"\n✅ Próximo ciclo en 48 horas")
    else:
        print("\nℹ️  Sin reportes para generar (sin movimiento en campañas)")

    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
