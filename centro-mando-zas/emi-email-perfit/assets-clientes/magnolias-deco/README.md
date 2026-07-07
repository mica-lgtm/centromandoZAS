# Magnolias Deco — Design System

> Sistema visual de referencia para todas las piezas de **Magnolias Deco**: redes sociales (Instagram / Facebook), anuncios, stories, carruseles, reels covers, email marketing, banners web, WhatsApp marketing y campañas comerciales.

Magnolias es una marca de **decoración y productos para el hogar**: muebles, textiles, bazar, cocina, baño, iluminación, organización y objetos decorativos. La estética transmite **hogar cálido, buen gusto, inspiración, cercanía y practicidad** — deco/editorial con claridad comercial. Cada pieza debe verse elegante, cálida, ordenada, aspiracional pero accesible, y sobre todo **efectiva para vender**.

This is the canonical reference. **Do not invent a new aesthetic, reinterpret the brand freely, or apply generic decoration styles.** Match this system.

---

## Sources provided

- **Fonts:** `Elms Sans` full family (18 styles, Thin → Black + italics), uploaded as `.ttf`. Copied into `fonts/`.
- **Photography:** ~45 real product / lifestyle `.webp` photos (official Magnolias Deco shots — bedrooms, living rooms, table settings, bathrooms, textiles, furniture, natural-fiber decor). A curated subset is copied into `assets/`.
- **Brief:** full written brand/visual guideline (palette, color usage rules, typography, hierarchy, channel rules, composition do's & don'ts). Summarized throughout this README.

No codebase or Figma was provided — this system is built from the written brief + real brand photography.

---

## CONTENT FUNDAMENTALS

**Language:** Spanish (Rioplatense / neutral LatAm). Warm, close, conversational — talks *to* the reader using **vos/tú implied "you"** ("Renová tu living", "Tu casa no está fea"). Never corporate or cold.

**Tone:** Aspirational but accessible. Inspires the desire to renovate a space, then makes it feel easy and affordable. Confident, a little provocative in hooks, reassuring in the body.

**Casing:**
- **Titles / hooks:** Often **UPPERCASE** for maximum impact, or sentence case with a strong period for editorial rhythm. Short. Statement-style.
- **Body / supporting:** Sentence case, simple, clear.
- **Labels / eyebrows:** UPPERCASE tracked (e.g. `NUEVO`, `OFERTA`, `TEXTILES`).

**Voice — statement hooks** (core to the brand): short, punchy, slightly contrarian, value-driven. Real examples from the brief:
- *"Tu casa no está fea. Está mal decorada."*
- *"La diferencia no es gastar más. Es comprar mejor."*
- *"No hace falta cambiar todo."*
- *"Pequeños detalles que cambian un ambiente."*

**Commercial copy:** direct benefit first, then product/category, then the offer (precio, cuotas, envío, descuento), then a clear CTA ("Comprá ahora", "Descubrí más", "Renová hoy").

**Emoji:** Avoid. The brand is editorial and elegant — no emoji, no stickers, no excess. Unicode arrows (→) are acceptable as quiet CTA cues.

**Vibe:** Revista de decoración meets tienda de barrio que te conoce. Editorial calm + commercial clarity.

---

## VISUAL FOUNDATIONS

**Overall feeling:** clean, warm, balanced, editorial with commercial punch. Lots of visual breathing room. High contrast between text and background. Home, inspiration, practicality, good taste, the desire to renovate.

### Color
- **Warm neutral base** carries almost everything: off-white `#F8F3EA`, beige `#E9D8C3`, sand `#D8BFA3`, wood/tan `#B98A5F`, warm gray `#BEB7AE`. These keep the brand soft, homey, never aggressive.
- **Red `#B32626`** = the commercial signal. Reserved for **CTAs, prices, discounts, sale tags, promos, urgency, important calls**. `#8F1D1D` for hover/depth. `#F5E7E4` soft red for delicate secondary backgrounds. **Do not flood editorial/value content with red.**
- **Yellow `#FFCC00`** = high-impact attention. Statement plates, strong phrases, carousel highlights, anything that must grab the eye fast. `#E6B800` as its support/shadow.
- **Black `#0A0A0A`** = the workhorse for big titles. **White `#FFFFFF`** = high-contrast text blocks over photos / intense backgrounds.
- **Combination rule — never mix everything in one piece.** Pick one recipe per design:
  1. Neutral bg + black text + red accent
  2. Photo hero + white blocks + black text
  3. Yellow bg + white blocks + black text
  4. Light bg + product hero + red CTA
  5. Dark/photographic bg + white text + yellow or red accent

### Type
- **Elms Sans** only. Modern geometric-humanist sans, very legible.
- **Titles:** very heavy (ExtraBold 800 / Black 900), tight letter-spacing (−0.02 to −0.03em), tight line-height (0.94–1.08). Big, direct, instant-read. This is the "condensed/impactful extra-bold" look the brief asks for.
- **Body:** Regular 400 / Medium 500, generous line-height (1.45–1.5), simple and ordered.
- **Labels/eyebrows:** SemiBold 600, uppercase, tracked +0.16em.
- Never use more than the one family; vary by weight, not by typeface.

### Spacing & layout
- 4px base scale (`--space-1`…`--space-9`).
- **Generous margins — never glue text to edges.** Keep consistent margins across carousel plates.
- Don't cover important products with text or graphics. Product/ambiente is the protagonist.
- Balance image, text and empty space. Don't crowd products.
- Key info never in low-visibility zones (avoid extreme corners / under-the-fold of a story).

### Backgrounds
- Three modes: **(a) warm solid** (off-white/beige/sand), **(b) full-bleed photo** (the lifestyle shots), **(c) bold solid color** (yellow statement plate, or red sale plate).
- No gradients, no noise/grain overlays, no busy patterns. Flat warm color or real photography.
- On photos, use **solid white/black/red plates** behind key phrases for legibility — not blurry scrims unless needed.

### Imagery (critical)
- **Always real Magnolias Deco product/ambiente photos.** Never invent products, never deform shapes/colors/textures/proportions.
- Look is **warm, luminous, natural light, neutral palette** — wood, rattan, jute, linen, cotton, ceramics, plants. Soft daylight, airy. Cozy but uncluttered.
- Product/room is the hero; never bury it under text or graphics.
- Photos sit either full-bleed or in soft-cornered frames (`--radius-lg`/`--radius-xl`).

### Corners, borders, shadows, cards
- **Corner radii:** soft but restrained — `8–24px` on cards/photo frames. Pills only for small chips/tags. Sharp 0px edges are fine for editorial color plates.
- **Borders:** mostly borderless; when used, hairline warm `#E2D7C6`, or a bold black editorial keyline `#0A0A0A` for emphasis.
- **Shadows:** soft, warm-tinted, low elevation (`--shadow-sm/md/lg`). Never harsh or neon. Many surfaces use none — relying on color contrast instead.
- **Cards:** warm white surface, soft radius, soft shadow OR thin warm border. Calm, not floaty.

### Motion / interaction (for web banners, email, prototypes)
- Calm and quick. Fades and gentle 150–250ms ease-out transitions. No bounces, no infinite loops on content.
- **Hover:** CTAs darken (red → `#8F1D1D`); cards lift slightly (shadow-sm → shadow-md) and/or image scales ~1.03.
- **Press:** subtle darken + ~0.98 scale.
- Use transparency/blur sparingly — only for legibility scrims over busy photos.

### What to avoid
Cold/tech/corporate aesthetics · generic marketplace designs · excess stickers/shadows/glows/effects · crowded products · long paragraphs on plates · off-palette loud colors · invented or deformed products · gradients · emoji · anything that looks like another brand.

---

## Index — what's in this system

| File / folder | What it is |
|---|---|
| `README.md` | This document — context, content & visual foundations, iconography, index. |
| `SKILL.md` | Agent Skill manifest (for use as a downloadable Claude skill). |
| `colors_and_type.css` | All design tokens: fonts `@font-face`, color primitives + semantic vars, type scale, spacing, radii, shadows. **Import this in every piece.** |
| `fonts/` | Elms Sans `.ttf` weights used by the system. |
| `assets/` | Curated real Magnolias Deco photography (lifestyle + product). |
| `preview/` | Design-system spec cards (rendered in the Design System tab). |
| `ui_kits/social/` | Social & commercial piece kit — posts, stories, carousels, ad plates, email & WhatsApp, with reusable JSX components. |
| `slides/` | (Only if a deck template is provided — none was, so not generated.) |

### Iconography — see `ICONOGRAPHY` section below.

---

## ICONOGRAPHY

No proprietary icon set or icon font was provided with the brand. Magnolias Deco is a **photography-led, type-led brand** — iconography is intentionally minimal and never decorative-for-its-own-sake (the brief explicitly warns against "exceso de stickers… brillos o efectos").

**Approach for this system:**
- **Primary "icons" are real photography and bold type**, not glyphs. Lead with product/ambiente.
- When functional UI icons are genuinely needed (cart, arrow, check, location, WhatsApp, share, search), use **[Lucide](https://lucide.dev)** via CDN — a clean, even-stroke (1.75–2px) outline set that matches the brand's restrained, modern feel. This is a **flagged substitution** (no brand icon set exists); swap for a brand set if one is later provided.
  - Load: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
  - Stroke weight 2px, color inherits `currentColor`, sized 20–24px in UI, never multicolor.
- **Commercial markers** (discount %, "OFERTA", "NUEVO", price tags) are typographic plates in red/yellow — not icons.
- **No emoji. No unicode emoji as icons.** A plain unicode arrow `→` is permitted as a quiet CTA cue.
- Channel logos (Instagram/WhatsApp/Facebook) only when contextually required (e.g. a WhatsApp CTA button) — use official brand marks, monochrome where possible.

---

## How to use

1. Link `colors_and_type.css` (it `@font-face`s Elms Sans and exposes every token).
2. Pick **one** color recipe from the combination rules.
3. Lead with a real photo from `assets/` (or a bold solid plate).
4. Title in Elms Sans ExtraBold/Black, tight. Keep copy short.
5. Red only for the commercial signal; yellow only for high-impact statements.
6. Leave air. Don't crowd. Don't mix everything.
