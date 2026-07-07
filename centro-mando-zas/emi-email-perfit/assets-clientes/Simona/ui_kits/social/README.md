# SIMONA · UI Kit — Placas para redes

Plantillas comerciales para Instagram / Facebook. Jerarquía siempre: **hook → producto/beneficio → info comercial → CTA**. Fotografía real de campaña, paleta cálida, mucho aire. Una idea por placa.

## Componentes (`Placas.jsx`)

| Componente | Formato | Uso |
|---|---|---|
| `FeedPlaca` | 1080 × 1350 | Feed orgánico. Foto full-bleed + degradé de protección abajo, hook grande, CTA pill claro. |
| `SquarePlaca` | 1080 × 1080 | Cuadrado. Split foto / bloque de color con oferta y CTA. |
| `StoryPlaca` | 1080 × 1920 | Historia / Reel. Texto en zona media-alta; banda inferior marcada como **zona UI** (no poner texto clave ahí). |
| `AdPlaca` | 1200 × 628 | Ad horizontal. Texto + oferta a la izquierda, foto a la derecha. Lectura rápida. |

Cada componente acepta `img` (1–8) para elegir la foto de `assets/simona-look-0N.webp`.

## Reglas
- **Orgánico (feed, cuadrado, historia) NO lleva botón de acción.** El contenido orgánico no tiene esa función: usar CTA de **texto con flecha** (ej. "Mirá la colección →"), flechas para avanzar en carruseles, o "Deslizá para ver". El botón-pill queda **solo para ads**.
- Negro suave `#2a2a2a` o cream `#f7f1ea` para CTAs de alto contraste; blush solo como acento.
- Degradé de protección únicamente para legibilidad sobre foto — nunca decorativo.
- En historias/reels respetar la **zona segura**: mensajes centrados o en zona media-alta.
- Copy mínimo, voseo, concreto. El copy del post completa la información.

`index.html` es una galería interactiva: cambiá de formato con las pestañas.
