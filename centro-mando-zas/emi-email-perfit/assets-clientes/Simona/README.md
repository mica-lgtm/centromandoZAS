# SIMONA — Design System

> Marca de moda femenina argentina. Prendas cancheras, cómodas, actuales y fáciles de usar todos los días.

SIMONA es una marca de indumentaria femenina **moderna, cercana, simple y comercial**. Combina moda urbana, básicos versátiles, prendas de temporada y looks pensados para el día a día. Este sistema de diseño se usa para **emails HTML, banners, piezas comerciales, placas para redes y comunicaciones de e-commerce**.

La estética debe sentirse **limpia, cálida, urbana, femenina y actual**, con foco en producto, buena jerarquía visual y comunicación comercial clara pero no agresiva. El diseño destaca el producto sin sobrecargar la pieza. La marca **no** debe verse infantil, excesivamente romántica, recargada ni genérica.

---

## Productos / superficies que cubre este sistema

1. **Placas para redes** (Instagram / Facebook feed, cuadrado, historias/reels, ads horizontal) — ver `ui_kits/social/`.
2. **Email marketing / e-commerce** (HTML responsive, mobile-first, dark-mode safe) — ver `ui_kits/email/`.

No hay app ni sitio web en el alcance entregado; el sistema está orientado a piezas comerciales y comunicación.

---

## Fuentes y materiales recibidos

- **Tipografía:** familia Red Hat Display (TTF, 14 archivos: Light→Black + itálicas). Copiados a `fonts/`.
- **Fotografía:** 8 fotos de campaña otoño/invierno (street-style en Buenos Aires). Copiadas a `assets/simona-look-01…08.webp`.
- **Brief de marca:** identidad, tipografía, paleta, estilo visual, composición, formatos, tono. Sintetizado en este README.

> ⚠️ **Sustitución de fuente:** el brief pide **Red Hat Text** para cuerpo y CTAs, pero no se entregaron sus archivos. Se carga desde Google Fonts (`Red Hat Text`) y se usa **Red Hat Display** como fallback. Si tenés los TTF de Red Hat Text, pasámelos y los self-hosteo.

---

## CONTENT FUNDAMENTALS — cómo se escribe

**Idioma:** español rioplatense (Argentina). Voseo: "elegí", "llevá", "sumá", "mirá".

**Tono:** cercano, simple, femenino y comercial. Canchero y directo, **nunca exagerado ni agresivo**. Hablar como **una marca amiga que recomienda prendas reales para usar todos los días**.

**Persona:** se le habla a "vos" (la clienta). La marca es un "nosotras/nosotros" implícito, pocas veces explícito.

**Casing:** títulos en mayúscula/minúscula natural o en MAYÚSCULAS para hooks cortos y labels (`NUEVO`, `OTOÑO 25`, `ENVÍO GRATIS`). Evitar Title Case en inglés.

**Largo:** mínimo. En placas, lo esencial; el copy del post completa. Una idea por placa en carruseles.

**Sí / No de copy:**
- ✅ Concreto y útil: "3 cuotas sin interés", "Nueva colección de abrigos", "Talles del 1 al 4", "Llega mañana".
- ✅ Hooks comerciales directos: "El abrigo que no te vas a sacar", "Listo para el frío".
- ❌ Genérico vacío: "elevá tu look", "be your best self", "lifestyle".
- ❌ Agresivo / griterío: "¡¡¡ÚLTIMO DÍA!!!", urgencia falsa.

**Emoji:** uso muy moderado, opcional, nunca como muleta. La marca no es infantil. Preferir tipografía y composición sobre stickers/emoji.

**Ejemplos de voz:**
- Eyebrow: `NUEVA TEMPORADA`
- Título: `Abrigos que abrazan`
- Subtítulo: `Camperas, tapados y puffers para el frío de verdad.`
- CTA: `VER COLECCIÓN`
- Comercial: `Hasta 30% OFF · 3 cuotas sin interés`

---

## VISUAL FOUNDATIONS

**Vibe general:** editorial-comercial. Fotografía de producto protagonista, mucho aire, bloques amplios, jerarquía clara. Moderno y ordenado, cálido y femenino sin caer en lo romántico ni lo infantil.

### Color
- **Firma:** taupe / gris cálido `#70625f`.
- **Acento:** rosa cálido / piel `#fbbfaf` (blush) — para detalles, labels, fondos suaves; nunca como grito.
- **Texto / oscuros:** negro suave `#2a2a2a` (nunca negro puro #000).
- **Fondos:** off-white cálido `#f7f1ea`, arena `#efe6dc`, arcilla `#e4d6ca`.
- **Prohibido:** rojo, colores saturados, flúo, paletas infantiles o demasiado brillantes.
- La paleta es **monocromática-cálida**: todo gira alrededor del taupe + neutros + un toque de blush.

### Tipografía
- Familia única: **Red Hat** (Display para títulos, Text para cuerpo/CTA).
- Títulos principales: **Red Hat Display Black/ExtraBold** (900/800), tracking ajustado `-0.02em`, line-height apretado.
- Subtítulos: Bold/SemiBold (700/600).
- Cuerpo: Red Hat Text Regular/Medium (400/500).
- CTAs: Red Hat Text Bold (700), a veces en MAYÚSCULAS con tracking leve.
- Labels/eyebrows: MAYÚSCULAS, tracking amplio `0.14em`.
- Sin serif, sin manuscritas, sin decorativas.

### Espaciado y layout
- Escala base 4 (4/8/12/16/24/32/48/64/96).
- **Márgenes amplios**, mucho aire entre texto, foto y botón.
- Jerarquía de composición: 1) Hook/mensaje → 2) Producto/beneficio → 3) Info comercial → 4) CTA/cierre.
- No acumular toda la info en una zona. Lectura rápida.
- **Zona segura** en historias/reels: no poner info clave en el extremo inferior ni donde la UI de IG/TikTok tapa. Mensajes centrados o en zona media-alta.

### Fondos
- Limpios y planos: off-white, arena, taupe o negro suave en bloques sólidos.
- Fotografía full-bleed o en bloques recortados con esquinas redondeadas.
- Sin gradientes llamativos, sin texturas ruidosas, sin patrones recargados. Como mucho, un blush suave o un degradé tenue de protección sobre foto para legibilidad.

### Fotografía
- **Siempre fotos reales** de producto/modelos provistas por la marca. No inventar prendas, no modificar estampas, no cambiar colores, no deformar ropa.
- Estilo: street-style en Buenos Aires, luz natural, paleta **cálida y ligeramente desaturada**, fondos urbanos (puertas coloniales, rejas de hierro, paredes descascaradas, adoquines). Tonos tierra/neutros.
- Se pueden recortar, ampliar y componer; el producto se mantiene fiel.
- Para HTML/emails: imágenes alojadas en web/CDN.

### Esquinas, bordes, sombras
- **Radii redondeados y suaves:** 8/14/22/32px y pill (999px) para botones y chips.
- Bordes: hairlines finos `#e2d7cd`. Sin bordes duros ni gruesos.
- **Sombras siempre suaves y cálidas** (tinte taupe), nunca duras ni negras: `0 6px 20px rgba(112,98,95,.10)`. Muchas piezas funcionan sin sombra, solo con bloques de color.

### Animación e interacción (para piezas digitales/HTML)
- Transiciones suaves: fades y desplazamientos cortos, easing `cubic-bezier(.4,0,.2,1)`, 200–320ms. Sin rebotes exagerados, sin loops decorativos.
- **Hover:** botón oscuro → leve aclarado (`#3a3836`); links → blush o subrayado; cards/fotos → leve zoom de imagen (scale 1.03) o sombra que crece.
- **Press/active:** leve scale-down (0.98) y/o color un punto más oscuro.
- Transparencia/blur: uso mínimo. Solo degradés de protección sobre foto para texto legible.

### Cards
- Fondo claro (white / cream), radius `--r-lg` (22px), sombra suave o solo borde hairline. Foto arriba con esquinas redondeadas, texto con padding generoso. Nada de borde de color a la izquierda ni stickers.

---

## ICONOGRAPHY

La marca es **tipográfica y fotográfica**, no iconográfica. No hay un set de íconos propio en los materiales entregados.

- **Sistema recomendado:** [Lucide](https://lucide.dev) vía CDN — trazo fino y redondeado (stroke ~1.5–2px), coherente con la suavidad de la marca. Se usa con moderación: carrito, flecha de CTA, corazón/favorito, hamburguesa, redes. (Sustitución señalada: no había íconos en los assets; Lucide es la elección por coherencia de estilo.)
- **Flechas/CTA:** preferir flecha fina (→) o ícono Lucide `arrow-right`.
- **Emoji:** uso muy moderado; la marca no es infantil. Evitar emoji como elemento decorativo principal.
- **Unicode:** se puede usar `·` (punto medio) como separador en info comercial ("3 cuotas · envío gratis").
- **Marca gráfica:** el **osito con suéter de la "S"** (ver `assets/simona-look-07.webp`) es un estampado de producto característico, no un logotipo. El wordmark de la marca es **SIMONA** en Red Hat Display Black, en mayúsculas, tracking ajustado.

> No hay archivo de logo entregado. El wordmark se compone tipográficamente (Red Hat Display Black, "SIMONA"). Si existe un logo oficial, pasámelo y lo incorporo a `assets/`.

---

## Índice de archivos (manifest)

| Archivo / carpeta | Qué es |
|---|---|
| `README.md` | Este documento: contexto, contenido, foundations visuales, iconografía. |
| `colors_and_type.css` | Variables CSS de color, tipografía, espaciado, radii, sombras + clases semánticas. |
| `SKILL.md` | Definición de skill (compatible con Agent Skills / Claude Code). |
| `fonts/` | Red Hat Display TTF (self-hosted). |
| `assets/` | Fotografía de campaña (`simona-look-01…08.webp`). |
| `preview/` | Cards del Design System (color, tipografía, espaciado, componentes). |
| `ui_kits/social/` | UI kit de placas para redes (feed, cuadrado, story, ad). |
| `ui_kits/email/` | UI kit de email marketing HTML responsive. |

### Wordmark
`SIMONA` — Red Hat Display Black, mayúsculas, letter-spacing `-0.01em` a `0.02em` según tamaño.
