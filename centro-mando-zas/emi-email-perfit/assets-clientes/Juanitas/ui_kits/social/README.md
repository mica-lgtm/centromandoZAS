# UI Kit · Social / Comercial — Juanitas

Plantillas de alta fidelidad para las piezas de comunicación de Juanitas, armadas con **recursos de marca reales**: paleta multicolor, resaltador (marker), lettering manuscrito, doodles y **fotos reales del catálogo** (juanitas.ar).

## Archivos
- **`index.html`** — galería interactiva con las 5 plantillas a escala. Abrir esto primero.
- **`templates.jsx`** — componentes reutilizables + plantillas con datos reales.

## Bloques reutilizables (`templates.jsx`)
- **`<Logo variant="color|cream" h={px}/>`** — logo Juanitas.
- **`<Mark color="fucsia|coral|azul|naranja|amarillo|rosa|tinta">`** — resaltador (bloque de color tras la palabra clave). *Recurso estrella.*
- **`<Hand size color>`** — lettering manuscrito de acento (Caveat).
- **`<Pill tone="primary|dark|light|fucsia" size="md|lg">`** — botón/CTA pill.
- **`<Price now was scale color/>`** — precio actual + tachado.
- **`<Sparkle x y s c r/>`** — doodle sparkle decorativo.

## Plantillas (formatos objetivo)
| Componente | Formato | Fondo | Uso |
|---|---|---|---|
| `PromoSquare` | 1080×1080 | Coral | HOT DAYS / promo, oferta protagonista |
| `ProductSquare` | 1080×1080 | Crema | Producto protagonista + beneficios + precio |
| `StoryPiece` | 1080×1920 | Rosa wash | Historias / Reels (3x2) |
| `HorizontalAd` | 1200×628 | Azul | Anuncios Meta / display |
| `EmailBanner` | 600px | Blanco | Email marketing |

## Datos reales usados
COLALESS TIRO ALTO ALGODÓN (PACK x3) · $25.900 (antes $33.000, -22% OFF) · talles 2–7 · envío gratis · 3 y 6 cuotas · HOT DAYS hasta 50% OFF. Editables en `templates.jsx`.

## Reglas al usar
- Usar **fotos reales** (`assets/productos/`). Nunca inventar prendas ni alterar color/forma.
- Respetar la jerarquía: **hook → beneficio → CTA**. Una promo se lee en <3 s.
- Coral/fucsia para lo importante; fondo claro cuando manda el producto. Marker para el dato clave.
