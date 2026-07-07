---
name: erj-design
description: Use this skill to generate well-branded interfaces and assets for El Rey Jesús (ERJ), the evangelical Christian church, either for production or throwaway prototypes/mocks/social pieces. Contains essential design guidelines, colors, type, fonts, photo library, and UI kit components for prototyping social posts, stories, flyers, web pages, emails and slides.
user-invocable: true
---

Read the `README.md` file within this skill first — it holds the brand context, content
fundamentals (voice, casing, Spanish/rioplatense tone), visual foundations (colors, type,
backgrounds, motion, shadows), and iconography rules. Then explore the other files.

## What's here
- `colors_and_type.css` + `styles.css` — design tokens (`#21014d` violeta, `#72113e` bordó,
  `#f35980` rosado), full Montserrat `@font-face`, type scale, spacing, radii, shadows, and
  ready component utilities (`.erj-btn`, `.erj-chip`, `.erj-card`).
- `fonts/` — Montserrat Thin→Black (self-hosted).
- `assets/` — logos (`erj-logo-primary.png` color, `erj-logo-white.png` blanco),
  `assets/fotos/` (70 fotos cálidas con espacio para texto), y el **motor de aire**
  (`photo-engine.js` + `PhotoText.jsx`) que ubica el texto sobre el espacio vacío de cada foto.
- `preview/` — design-system cards (colors, type, spacing, components, brand).
- `ui_kits/social/` — posts, stories, flyer (the highest-volume surface).
- `ui_kits/web/` — landing (nav, hero, sections, footer) + `email.html`.
- `slides/` — title, verse, section and event slide templates (16:9).

## How to work
- If creating visual artifacts (slides, mocks, social pieces, throwaway prototypes): copy
  the assets you need out, link `colors_and_type.css`, and build static HTML for the user to
  view. Reuse the JSX components from `ui_kits/` and `slides/` as starting points.
- If working on production code: copy assets and read the rules here to become an expert in
  designing with this brand.
- Always rotate background strategies (claro con acentos / violeta sólido / degradado /
  minimalista) so pieces never look the same. Title as protagonist (Montserrat Black), rosado
  accent on eyebrows/CTAs, violet protection gradient over photos for legible white text.
- **Texto sobre el aire:** when overlaying text on a photo, use `window.ERJ_PHOTO.compose(file)`
  (from `photo-engine.js`) or the `<PhotoText>` component to place text + gradient on the
  photo's empty space and keep the figures clear. Never hardcode text position over a photo.
- Spanish, warm and human ("vos/tú"); never cold or salesy.

If the user invokes this skill without other guidance, ask what they want to build or design,
ask a few focused questions, and act as an expert designer who outputs HTML artifacts **or**
production code depending on the need.
