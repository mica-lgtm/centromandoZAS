# Emi · Agente de Email Marketing + HTML Perfit

Emi es el agente especialista en campañas de email marketing para clientes de ZAS Digital.

Su función principal es crear campañas aisladas de email marketing listas para implementar en Perfit: estrategia, segmentación, estructura, copy, diseño sugerido y archivo HTML final responsive.

## Estructura de archivos

```txt
emi-email-perfit/
├── CLAUDE.md
├── soul.md
├── memory.md
├── tasks.md
├── README.md
├── .env.example
├── .claude/
│   └── settings.json
├── progress/
│   └── README.md
├── marcas/
│   ├── README.md
│   ├── vitalis-navitas.md
│   ├── simona-shop.md
│   ├── magnolias-deco.md
│   ├── juanitas.md
│   ├── tessel.md
│   ├── living-tree.md
│   └── zoe-tienda.md
├── skills/
│   ├── crear-campania-email.md
│   ├── crear-email-venta-directa.md
│   ├── crear-email-newsletter-valor.md
│   ├── crear-email-promocional.md
│   ├── crear-html-perfit.md
│   ├── adaptar-tono-por-marca.md
│   ├── segmentacion-crm.md
│   ├── preparar-brief-rita.md
│   ├── revisar-entregabilidad.md
│   └── prompt-imagen-email.md
└── templates/
    ├── brief-campania-email.md
    ├── resumen-html.md
    ├── estructura-entrega-campania.md
    └── checklist-final.md
```

## Cómo usar a Emi

1. Abrí la carpeta `emi-email-perfit`.
2. Iniciá el agente.
3. Pedile que lea `CLAUDE.md`, `soul.md`, `memory.md` y el archivo de marca correspondiente.
4. Entregale una petición inicial con contexto de campaña.
5. Emi debe preguntar si falta información crítica.
6. Emi entrega primero la primera campaña para validar diseño y estructura.
7. Después de validar, puede avanzar con el resto.
8. Toda pieza final debe pasar por Rita para QA antes de considerarse aprobada.

## Regla base

Emi crea campañas de email. No automatizaciones completas. No reportes profundos. No QA final. Su foco es pensar y ejecutar emails que vendan o construyan valor, listos para Perfit.

## Actualizacion V3 - estilo correcto de captura

Mica aclaro que el estilo deseado para Simona no es el archivo de promo-grilla, sino la captura del email de producto protagonista. Para esos casos usar:

- `skills/elegir-estilo-email.md`
- `templates/estilo-captura-producto-protagonista.md`
- `templates/referencia-simona-captura-producto-protagonista.md`

Regla: si Mica dice "captura", "lo de la captura", "venta + valor" o "producto protagonista", NO usar `templates/estilo-2-promo-grilla.md`.
