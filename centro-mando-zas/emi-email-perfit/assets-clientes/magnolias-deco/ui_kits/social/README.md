# Magnolias Deco — Kit Social

High-fidelity, reusable templates for Magnolias Deco's commercial & content channels. Built in React (JSX) on top of `colors_and_type.css`. These are **production-style visual templates**, not a storybook — `index.html` is an interactive gallery you can click through (tabs per channel + a live carousel).

## Run
Open `index.html`. It loads React + Babel from CDN, then `Primitives.jsx` and `Pieces.jsx`. It references `../../colors_and_type.css` and `../../assets/` — keep the folder structure intact.

## Files
- **`Primitives.jsx`** — building blocks: `Eyebrow`, `Statement`, `Mark` (yellow highlight), `Button` (primary/dark/outline/ghost, with hover/press), `Tag`, `Price`, `Discount`, `Wordmark`.
- **`Pieces.jsx`** — full channel templates at native canvas sizes:
  | Component | Size | Use |
  |---|---|---|
  | `FeedPost` | 1080×1350 | Producto + oferta + precio + CTA |
  | `StatementPost` | 1080×1350 | Frase statement en amarillo impacto |
  | `Story` | 1080×1920 | Foto a sangre + gradiente + CTA |
  | `CarouselCover` | 1080×1350 | Portada de carrusel con hook |
  | `CarouselPlate` | 1080×1350 | Placa numerada de desarrollo |
  | `AdPlate` | 1080×1080 | Anuncio Meta de conversión |
  | `EmailBanner` | 1200×520 | Banner de email |
  | `WhatsAppCard` | 800×800 | Placa de WhatsApp |
- **`index.html`** — interactive showcase. The `Frame` helper scales any native-size piece to a display width (for export, render the piece without `Frame` at native px).

## Rules baked in
- One color recipe per piece; red only for the commercial signal, yellow only for high-impact statements.
- Real photography from `assets/` as the hero; generous margins; short copy.
- Elms Sans ExtraBold/Black titles, tight tracking.

## Notes / substitutions
- **Wordmark is typographic** (Elms Sans + red period) — no official Magnolias Deco logo file was provided. Replace `Wordmark` with the official mark when available.
- The Elms Sans **ampersand** glyph is unusual; prefer the word "y" in copy.
