# ERJ — El Rey Jesús · Design System

> **El Rey Jesús (ERJ)** es una iglesia cristiana evangélica con una identidad visual
> moderna, espiritual y cercana. Su comunicación transmite **fe, esperanza, comunidad,
> propósito, transformación y cercanía**, con una estética actual, cálida y profesional
> para redes sociales, campañas, mails, banners, flyers y piezas institucionales.

This is a **brand identity & communications design system** — not a software product.
The "products" here are *communication surfaces*: social media (Instagram posts &
stories), email newsletters, web/landing pages, flyers/banners, and slide decks.

---

## Sources provided

| Source | Status |
|---|---|
| `Logos Marca ERJ_2023_LOGO-1.png` (primary logo, color) | ✅ imported → `assets/erj-logo-primary.png` |
| `Logos Marca ERJ_2023_LOGO-13 (3).png` (white logo) | ✅ imported → `assets/erj-logo-white.png` |
| Montserrat font family (18 TTF + 1 OTF) | ✅ self-hosted in `fonts/` |
| **`Manual de Marca ERJ_2023.pdf`** | ⚠️ **NOT uploaded** — referenced in brief but absent from the project. Color, tone and usage rules below were reconstructed from the written brief. *Please re-upload the manual so we can refine spacing/clearspace/usage exactness.* |
| Brand colors | `#21014d` (violeta), `#72113e` (bordó), `#f35980` (rosado) |

---

## Brand at a glance

- **Name:** El Rey Jesús — *Iglesia Cristiana*. Diminutive: **ERJ**.
- **Logo:** a combined **dove + flame** mark (Holy Spirit) beside the **ERJ** wordmark,
  with "IGLESIA CRISTIANA" set in pink below.
- **Voice:** inspirador, claro y humano. Español rioplatense/neutro.
- **Core palette:** deep violet, bordó (wine), rosado (pink), warm whites & light tones.
- **Type:** **Montserrat** across the whole range (Thin → Black).

---

## CONTENT FUNDAMENTALS

How ERJ writes.

- **Language:** Spanish. Warm, neutral/Latin-American register.
- **Person:** speaks **to "vos/tú" — second person, direct and inviting** ("Te esperamos",
  "Sumate", "Encontrá tu lugar"). Institutional pieces shift to a calm "nosotros" /
  "la iglesia" for trust ("Creemos que…", "Nuestra comunidad").
- **Tone:** inspirational, hopeful, human. Never cold, corporate, or salesy. Faith-forward
  but welcoming — not preachy or heavy.
- **Casing:**
  - Titles → strong, often **UPPERCASE or Title Case** in Montserrat Black/ExtraBold.
  - Eyebrows / labels → **UPPERCASE with wide tracking** (`--tracking-wider`).
  - Body → sentence case, comfortable line length.
- **Punctuation & emphasis:** short declarative phrases with intention. A title is a
  *protagonist*. Use a single key word emphasized in **rosado** or **bordó** for warmth.
- **Emoji:** sparingly and only on social — never in institutional/email headers. Prefer
  a small flame/dove glyph or a clean icon over decorative emoji.
- **Scripture:** quotes are framed cleanly (reference in small caps/label), never crowded.

**Copy examples (style, not literal assets):**
- Eyebrow: `DOMINGO · 10:30 H`
- Title: `TU CASA TE ESTÁ ESPERANDO`
- Lead: `Una comunidad donde la fe se vive en familia. Vení y encontrá tu lugar.`
- CTA: `Sumate este domingo` · `Conocé más` · `Reservá tu lugar`
- Institutional: `Creemos en una iglesia que transforma vidas y acompaña a cada familia.`

Avoid: frases frías, comerciales o impersonales; títulos genéricos ("Bienvenidos a
nuestra web"); bloques de texto largos sin jerarquía.

---

## VISUAL FOUNDATIONS

The motifs and rules that make a piece feel like ERJ.

### Color
- **Primary:** Violeta profundo `#21014d` — titulares, fondos oscuros, logo.
- **Secondary:** Bordó `#72113e` — degradados, acentos cálidos, enlaces.
- **Accent:** Rosado `#f35980` — CTAs, detalles, palabras destacadas, energía.
- **Neutrals:** warm white `--crema #fbf8fc`, violet-tinted fog `--niebla`, ink `--tinta`.
- Full tint/shade scales for each in `colors_and_type.css`.

### Background strategies (rotate these — never the same composition twice)
1. **Claro con acentos** — fondo blanco/crema con titulares violetas y detalles rosados.
2. **Violeta sólido con bloques claros** — fondo `#21014d`, texto blanco, tarjetas claras.
3. **Degradado bordó→violeta** (`--grad-bordo-violeta`) o **amanecer** rosa→bordó→violeta
   para piezas emocionales/campañas.
4. **Minimalista** — mucho aire, un título protagonista, un acento.

### Type
- **Montserrat** only. Black/ExtraBold for titles, Medium/Regular for body, Bold uppercase
  for eyebrows. Tight tracking on big titles, wide tracking on small labels.

### Spacing & layout
- 4px base scale (`--space-1…10`). Generous air; clear hierarchy; left-aligned or centered.
- Titles are protagonists; CTAs are always visible. Clean, ordered text blocks.
- Avoid overcrowding, generic stock layouts, dark-without-contrast.

### Backgrounds / imagery
- Imagery is **warm**, hopeful, human (community, worship, families). Slight warm grade.
- Photos sit behind a **protection gradient** (violeta→transparent) for legible white text,
  or inside **rounded image capsules** (`--radius-lg/xl`).
- Decorative motif: the **flame/dove** silhouette used large, low-opacity, as a watermark.

### "Aire" — composing text over negative space
Every photo has a **figure** (people/objects) and an **aire** (empty space). **Text and the
protection gradient always go on the aire, never on the figures.** This is automated:
- `assets/photo-engine.js` holds a hand-classified map of all 70 photos: each has an
  `air` zone (`top` / `bottom` / `left` / `right`) and a `focal` point (`object-position`
  that keeps the subject in frame when cropping). `window.ERJ_PHOTO.compose(file)` returns
  `{ air, focal, gradient, place }` ready for a template.
- `assets/PhotoText.jsx` is the reusable React frame: `<PhotoText photo="…">…</PhotoText>`
  reads the air and positions the gradient + text block automatically. Atoms:
  `PhotoEyebrow`, `PhotoTitle`, `PhotoSub`, `PhotoPill`.
- Used live in the social posts/stories, the web hero, and the title/event slides — the
  same headline lands top, left, or right depending on each photo's aire.
- Most photos are **aire arriba** (portrait, wall/sky above the people); clear side-air
  examples: left → #28 #34 #35 #45 #55 #66 #68 #70; right → #29 #43 #67.

### Corner radii & cards
- Rounded, friendly: cards `--radius-lg (24px)`, image capsules up to `--radius-xl (32px)`,
  pills fully round (`--radius-pill`). Cards have soft violet-tinted shadows (`--shadow-md`),
  optional 1px `--border-soft`. **No** rounded-corner + colored-left-border cliché.

### Shadows & elevation
- Soft, violet-tinted (`rgba(33,1,77,…)`). `--shadow-sm…xl`. Accent buttons carry a
  rosado glow (`--shadow-rosa`).

### Borders
- Hairline `--border` / `--border-soft` on light; `--border-dark` (white @16%) on violet.

### Motion
- Gentle and warm. Fades + soft rises (translateY 8–16px), `--ease-out`
  `cubic-bezier(.22,1,.36,1)`, 140–420ms. No bounce, no aggressive parallax, no infinite loops.
- **Hover:** accent buttons darken (rosa-500→600); ghost buttons fill violet; cards lift
  (shadow-md→lg). **Press:** slight shrink (`scale .985`) + 1px down.

### Transparency & blur
- Used lightly: glass chips/nav over imagery (`backdrop-filter: blur`), low-opacity
  watermark motifs. Never heavy glassmorphism.

---

## ICONOGRAPHY

- **No proprietary icon font** was provided. The system uses **[Lucide](https://lucide.dev)**
  (loaded from CDN) as the line-icon set — rounded caps/joins, ~2px stroke — which matches
  the brand's friendly, modern feel. *Flagged substitution: confirm or replace if the brand
  manual specifies a different set.*
- **Brand glyphs:** the **flame** and **dove** come from the logo and are the brand's own
  iconographic signature — use the logo mark (`assets/`) rather than redrawing them.
- **Style rule:** line icons, rounded, in `--violeta-900` or `--rosa-500`; never multicolor,
  never emoji as UI icons. Emoji only as occasional warmth on social posts.
- Icon sizes follow the spacing scale (16 / 20 / 24 / 32 px).

---

## INDEX — what's in this system

**Root foundations**
- `styles.css` — root stylesheet (imports the below) + component utilities (buttons, chips, cards).
- `colors_and_type.css` — `@font-face` (Montserrat), color scales, type scale, spacing, radii, shadows, semantic type classes.
- `README.md` — this file.
- `SKILL.md` — portable Agent-Skill entry point.

**Assets** — `assets/`
- `erj-logo-primary.png` — full color primary logo (dove+flame + ERJ + IGLESIA CRISTIANA).
- `erj-logo-white.png` — all-white logo for violet/bordó/photo backgrounds.
- `fotos/` — **70 fotos** cálidas, humanas y verticales (oración, adoración, jóvenes,
  familias, lectura bíblica), con amplio espacio negativo para texto. Generadas para ERJ.
- `photo-engine.js` — mapa de "aire" de las 70 fotos + helpers para componer texto sobre
  el espacio vacío (`window.ERJ_PHOTO`).
- `PhotoText.jsx` — componente React que ubica texto/gradiente sobre el aire automáticamente.

**Fonts** — `fonts/` — Montserrat Thin→Black + italics (self-hosted).

**Design System tab cards** — `preview/` — color, type, spacing, component & brand specimens.

**UI kits** — `ui_kits/`
- `social/` — Instagram post & story templates, event flyer (the highest-volume surface).
- `web/` — landing/homepage hero, sections, footer; plus `email.html` newsletter layout.

**Slides** — `slides/` — title, scripture/verse, section, and event templates (16:9).

---

## Caveats
- The **brand manual PDF was not uploaded** — clearspace, minimum sizes, and any official
  secondary palette / pattern library are reconstructed from the brief. Re-upload to refine.
- Lucide icons are a **substitution**, pending confirmation against the manual.
- The 70 photos in `assets/fotos/` are **AI-generated** stand-ins (warm, on-brand, with copy
  space). Replace with real ERJ photography for final/published pieces where authenticity matters.
