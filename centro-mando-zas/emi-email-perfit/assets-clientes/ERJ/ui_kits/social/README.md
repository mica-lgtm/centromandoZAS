# ERJ · UI Kit — Redes Sociales

Plantillas de alta fidelidad para la comunicación de El Rey Jesús en redes sociales.
Es la superficie de mayor volumen: posts de feed, stories y flyers de evento.

## Archivos
- `index.html` — showcase interactivo con tabs (Posts / Stories / Flyer).
- `PostFeed.jsx` — post de feed 1080×1080, 3 variantes: `photo`, `violeta`, `gradient`.
- `Story.jsx` — story vertical 1080×1920, 3 variantes: `photo`, `verse`, `event`.
- `Flyer.jsx` — flyer de evento vertical imprimible (foto + datos + CTA).

## Uso
```jsx
<PostFeed variant="photo" photo="../../assets/fotos/erj-19.png" />
<Story variant="verse" />
<Flyer photo="../../assets/fotos/erj-65.png" />
```

## Formatos (tamaños de entrega)
- **Feed orgánico → 1080×1350** (4:5 vertical) — el formato por defecto para posteos.
- **Anuncios / ads → 1080×1080** (cuadrado).
- **Historias → 1080×1920** (9:16).

> Nota: las cards del kit se muestran a escala reducida para previsualización; al producir
> piezas reales usar los tamaños de arriba. El motor de "aire" funciona igual en cualquier ratio.

## Reglas aplicadas
- Logo blanco sobre fondos oscuros/foto; logo color sobre claro.
- Gradiente de protección violeta para texto blanco legible sobre foto.
- Acento rosado en eyebrows y CTAs. Título protagonista en Montserrat Black.
- Rotar variantes para que las piezas no se vean siempre iguales.
- Las fotos viven en `assets/fotos/` (70 imágenes cálidas con espacio para texto).
