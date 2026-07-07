# ERJ · UI Kit — Sitio Web + Email

Recreación de alta fidelidad de la presencia institucional de El Rey Jesús en web y
email. Estética ordenada, confiable y profesional.

## Archivos
- `index.html` — landing completa: nav, hero, secciones de valor, agenda y footer.
- `WebNav.jsx` — barra superior sticky con blur, links y CTA.
- `WebHero.jsx` — hero full-bleed con gradiente de protección y título protagonista.
- `WebSections.jsx` — `WebValues` (3 columnas), `WebEvents` (grid de eventos sobre
  fondo violeta), `WebFooter`.
- `email.html` — newsletter institucional (carta semanal + agenda).

## Uso
```jsx
<WebNav />
<WebHero photo="../../assets/fotos/erj-19.png" />
<WebValues />
<WebEvents photos={[...]} />
<WebFooter />
```

## Reglas aplicadas
- Alternancia de fondos: hero violeta sobre foto → valores en crema → eventos en violeta
  sólido → footer violeta profundo. Nunca dos bloques iguales seguidos.
- Botón primario rosado con glow; botón claro `on-dark` sobre violeta.
- Tarjetas con esquinas 24px y sombra teñida de violeta. Sin borde-izquierdo de color.
- Email: ancho fijo 580px, jerarquía clara, agenda con bloques de fecha.
