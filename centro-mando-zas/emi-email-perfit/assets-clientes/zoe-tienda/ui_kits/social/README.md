# UI Kit — Redes sociales

Placas comerciales y editoriales de Zoe Tienda para feed, historias, carrusel y anuncios.

**Abrir:** `index.html` — galería interactiva con selector de formato y toggle de zonas seguras (stories).

## Formatos
| Formato | Medida | Uso |
|---|---|---|
| Feed 1:1 | 1080×1080 | Producto visible + beneficio + CTA directo. |
| Story 9:16 | 1080×1920 | Vertical. Respetar zonas seguras (arriba/abajo). |
| Carrusel | 1080×1080 | 1ra placa = hook fuerte que invita a deslizar/guardar. |
| Anuncio | 1080×1080 | Performance: alto contraste, promo destacada, CTA fuerte. |

## Componentes
- `Primitives.jsx` — `Logo`, `Leaf`, `Cover` (placeholder de portada), `Badge`, `Btn`.
- `Placas.jsx` — `FeedPlaca`, `StoryPlaca`, `CarouselHook`, `AdPlaca`.

## Notas
- Las portadas usan **placeholders** (`Cover`) — reemplazar con fotos reales aprobadas, sin deformar.
- Copy de ejemplo; no inventar precios/promos reales.
