# Zoe Tienda — Design System

**Zoe Tienda** ([zoetienda.com](https://zoetienda.com)) es la tienda online de **ZOE Casa Editorial / ZOE Distributions** — una **editorial cristiana argentina**. Vende libros cristianos, **biblias** y **combos/packs** de autores y ministerios de referencia (Marcos Brunet, Asher Intrater, Fábio Coelho, Samuel Benedetto, Corey Russell, los manuales **TOMATULUGAR / 242 BOX**, etc.). La marca comunica desde un lugar **cálido, cercano, simple y comercial**, inspirando a leer, formarse, regalar y crecer en la fe.

Verso de marca del sitio: *“Mis palabras son espíritu y son vida” — Juan 6:63 (NTV)*. Instagram **@zoecasaeditorial** · WhatsApp **+54 9 351 593 2856** · plataforma **Tiendanube**.

Este sistema de diseño sirve para crear piezas de **redes sociales, email marketing, anuncios, banners, historias, placas comerciales, piezas de valor y comunicaciones promocionales**. La estética transmite claridad, confianza, calidez y orden visual — sensibilidad editorial al servicio de una audiencia de **lectores cristianos, líderes, iglesias y ministerios**.

### Catálogo real (referencia, no inventar)

- **Beneficios estables del sitio:** Envío gratis · Envíos a todo el país · **10% OFF pagando con transferencia** · **Hasta 30% OFF comprando en cantidad** · Múltiples medios de pago · Comprá series en **combo**.
- **Categorías:** Libros · Biblias · Combos.
- **Ejemplos de productos reales:** *Toma Tu Lugar en el Plan de Dios* (Brunet/Paretti) · *242 BOX – Hechos Dos Cuarenta y Dos* (TOMATULUGAR) · *Universo Maskilim* (Benedetto) · *La Misión Apostólica de la Iglesia* (Fábio Coelho) · *Fundamento Cristocéntrico* (Marcos Brunet) · *Biblia Maranata* · *Enséñanos a Orar* (Corey Russell).
- Al diseñar, usar **estos nombres y beneficios reales** — no inventar títulos ni promociones.

> **Principio rector:** piezas ordenadas, confiables y fáciles de leer. La jerarquía de la información y la conversión van primero.

---

## Sources

- **Fonts:** Dosis (familia completa, 200–800 + variable) — provista por el cliente (`uploads/Dosis-*.ttf`), self-hosted en `fonts/`.
- **Logos:** 3 variantes provistas por el cliente:
  - `assets/zoe-logo-color.png` — wordmark "zoe tienda" en ink + hoja verde (positivo, fondo claro)
  - `assets/zoe-logo-white.png` — versión blanca (sobre fondos oscuros/verde)
  - `assets/zoe-logo-black.png` — versión monocromática negra
  - `assets/zoe-leaf-{color,white,black}.png` — isotipo (hoja) recortado del logo, para usos compactos (avatares, favicons, sellos).
- **Fotos de producto (reales, provistas por el cliente):** `assets/products/` — portadas y lifestyle reales de Zoe Tienda:
  - `lifestyle-bench.jpg`, `lifestyle-couch-ttl.jpg` — lifestyle (lector con libro), ideales para piezas de valor, stories y banners de email.
  - `ttl-flatlay.jpg` — flat lay de *Toma Tu Lugar en el Plan de Dios*.
  - `pack-242box-fan.jpg` — combo *242 BOX* (4 manuales + caja) abierto en abanico.
  - `toda-autoridad.jpg`, `de-regreso-evangelio.jpg` — portadas/lifestyle de títulos reales.
  - `interior-*.jpg` — *(pendientes: 3 fotos de índice/interior no se pudieron copiar por encoding del nombre — re-subir con nombre simple si se quieren usar).*

No se entregó codebase ni archivo de Figma. El sistema se construyó a partir de los logos, la paleta (`#222222`, `#78ac5e`, `#ffffff`), la tipografía Dosis y el brief de marca.

---

## CONTENT FUNDAMENTALS — cómo se escribe

**Idioma:** español rioplatense (argentino), natural y cercano. Voseo cuando corresponde ("descubrí", "llevate", "regalá", "elegí").

**Tono:** cercano, claro, cálido y comercial. Inspirador pero **sin exagerar**. Se habla de los libros como una experiencia para **leer, formarse, crecer en la fe, regalar y acompañar la vida espiritual**. Audiencia: lectores cristianos, líderes, iglesias y ministerios. Se puede citar Escritura con respeto y sobriedad (como el verso de marca, Juan 6:63).

**Persona / voz:** la marca le habla de **vos** al lector (segunda persona, imperativo amable). Evita el "nosotros" corporativo y el "usted".

**Casing:**
- Títulos y CTAs comerciales en mayúscula inicial o frase ("Llevate el 2do al 50%"). Los **CTAs en botones van en MAYÚSCULAS** con tracking amplio ("COMPRAR AHORA", "VER MÁS").
- Overlines/etiquetas en MAYÚSCULAS con letter-spacing (`NOVEDAD`, `ENVÍO GRATIS`, `OFERTA`).
- El **wordmark se escribe siempre en minúsculas**: "zoe tienda".

**Largo:** frases simples, directas y cortas. Nada de párrafos largos dentro de las piezas. En anuncios, máximo impacto y lectura rápida. En piezas de valor, título fuerte + texto breve.

**Emoji:** uso muy moderado y opcional, solo en redes/WhatsApp para calidez (🌿📖✨). **Nunca** en anuncios de performance ni en banners de email. Evitar emoji festivos/seculares (🎉🎁🍷) que no van con el tono de la editorial. No reemplazan a la tipografía ni a los iconos de UI.

**Ejemplos de copy:**
- Hook (carrusel): *"3 libros para profundizar tu vida de oración"*
- Promo: *"Combo 242 BOX — hasta 30% OFF comprando en cantidad"*
- Beneficio: *"Envío gratis a todo el país · 10% OFF con transferencia"*
- Valor/editorial: *"Mis palabras son espíritu y son vida. — Juan 6:63"*
- Novedad: *"Ya disponible: Toma Tu Lugar en el Plan de Dios"*
- CTA: *"COMPRAR AHORA"* · *"VER COLECCIÓN"* · *"LO QUIERO"*

**Reglas duras de contenido:**
- ❌ No incluir códigos de barras en descripciones, placas, banners ni HTML.
- ❌ No inventar productos, libros, precios ni promociones — usar siempre datos reales/aprobados.
- ❌ No deformar portadas de libros ni productos (respetar proporción).
- ✅ Usar siempre imágenes reales o recursos aprobados de Zoe Tienda.

---

## VISUAL FOUNDATIONS

**Paleta.** Tres colores de marca: ink `#222222`, verde `#78ac5e`, blanco `#ffffff`. Sobre esa base se construyen dos escalas de apoyo: una **escala verde** (de `--green-50` a `--green-900`) para tints, estados y bloques suaves; y **neutros cálidos tipo papel** (`--paper`, `--paper-2`, `--paper-3`, `--sand`) — nunca grises puros, siempre con temperatura cálida. Un acento **terracota** (`--accent-terracotta`) reservado para ofertas/precios de alto impacto. El vibe del color es cálido y editorial, jamás frío ni tecnológico.

**Tipografía.** **Dosis** para todo — display y texto. Es una grotesca redondeada, amable y geométrica que aporta la calidez de la marca. Dosis corre pequeña y abierta, así que la escala se sube (display 72px, h1 52px). Títulos en Bold/ExtraBold; cuerpo en Regular/Medium; overlines en Bold con tracking amplio en mayúsculas. No se mezcla con otra familia.

**Fondos.** Preferentemente **claros, cálidos o neutros** (`--paper` como base). Bloques de color suaves (verde 100/200, sand) para destacar promos, títulos o CTAs. Fotos de libros/productos como protagonistas en piezas comerciales. Sin gradientes ruidosos; a lo sumo lavados muy sutiles. Se permite fondo verde sólido o ink sólido para placas de alto contraste.

**Espaciado.** Base 4px, escala `--space-1..9`. Composiciones limpias con **buena respiración visual** — generoso aire alrededor de títulos y CTAs. Nada saturado.

**Esquinas / radii.** Suaves y amables: cards `--radius-lg` (24px), bloques `--radius-md`, botones y badges **pill** (`--radius-pill`). Coherente con la redondez de Dosis.

**Sombras.** Suaves, cálidas y de bajo contraste (`rgba(34,34,34,...)`), nunca duras ni azuladas. Los CTAs verdes pueden llevar una sombra verde tenue (`--shadow-brand`). Las cards usan `--shadow-sm`/`--shadow-md`.

**Bordes.** Finos (1–1.5px) en neutro cálido (`--paper-3`). Botones outline con borde ink de 2px.

**Cards.** Fondo blanco, borde cálido fino, radio 24px, sombra suave; imagen del producto arriba (sin deformar), texto y precio debajo, CTA pill.

**Animación.** Discreta y funcional. Transiciones cortas (120–320ms) con easing `--ease-out`. Fades y leves desplazamientos; **sin bounces exagerados** ni loops decorativos infinitos.

**Hover / press.** Hover: el primario oscurece a `--green-600`; outline invierte a fondo ink. Press: `scale(0.97)` + color más oscuro. Nunca opacidad fantasma.

**Transparencia / blur.** Uso mínimo. Solo gradientes de protección sutiles cuando hay texto sobre foto. No glassmorphism.

**Imágenes.** Cálidas, luminosas, naturales — libros y productos reales (ver `assets/products/`). Lifestyle con lector y libro, flat lays sobre madera clara con planta, combos en abanico. Nada en blanco y negro frío ni con grano pesado. Sobre foto se usa un **gradiente de protección** (ink, de transparente a ~70%) para garantizar legibilidad del texto. Respetar zonas seguras en stories/reels/anuncios; no poner info clave cerca de los bordes. **Nunca** mostrar códigos de barras en las piezas (evitar fotos de contratapa que los incluyan).

---

## ICONOGRAPHY

Zoe Tienda no trae un set de iconos propio en los recursos entregados. El único símbolo de marca es la **hoja del isotipo** (`assets/zoe-leaf-*.png`), usada como remate, viñeta o sello.

Para UI (botones, fields, navegación, e-commerce) este sistema adopta **Lucide** vía CDN — una familia de iconos de **trazo (stroke ~2px), líneas redondeadas y geometría amable** que combina con la redondez de Dosis y el tono cálido de la marca. Se usan en `currentColor` para heredar el color del contexto (ink o verde).

- **Iconos de UI:** Lucide (CDN). Stroke 2px, `stroke-linecap: round`.
- **Símbolo de marca:** hoja Zoe (PNG en `assets/`). No redibujar en SVG a mano.
- **Emoji:** solo en redes/WhatsApp, con moderación. Nunca como iconos de interfaz.
- **Unicode como icono:** evitar; usar Lucide.

> Si en el futuro se entrega un set de iconos propio, reemplaza a Lucide. La sustitución de Lucide está **señalada como provisional**.

---

## Index — qué hay en este sistema

| Archivo | Qué es |
|---|---|
| `styles.css` | **Fuente de verdad.** @font-face de Dosis, tokens (color, tipo, espaciado, radii, sombras, motion) y clases semánticas (`.zoe-h1`, `.zoe-btn`, `.zoe-badge`, `.zoe-card`, `.zoe-input`). |
| `fonts/` | Familia Dosis self-hosted (200–800 + variable). |
| `assets/` | Logos (color/blanco/negro) e isotipo de hoja (color/blanco/negro). |
| `preview/` | Tarjetas del Design System tab (colores, tipo, espaciado, componentes, marca). |
| `ui_kits/social/` | UI kit de **piezas para redes sociales** (placas feed, story, carrusel, anuncio). |
| `ui_kits/email/` | UI kit de **email marketing** (banner, header, bloque de producto, footer). |
| `SKILL.md` | Manifiesto para usar este sistema como Agent Skill. |

---

## Caveats

- **Iconos de UI sustituidos por Lucide** (CDN) — no se entregó un set propio. Confirmar o reemplazar.
- **Fotos de producto reales ya incorporadas** en `assets/products/` (provistas por el cliente). Los UI kits las usan como protagonistas. Quedan 4 fotos pendientes (3 de índice/interior + *Enséñanos a Orar*) que no se pudieron copiar por caracteres especiales en el nombre del archivo / código de barras visible — re-subir con nombre simple si se quieren usar.
- Las escalas verde y neutra cálida fueron **derivadas** de los 3 colores de marca; ajustables si hay valores oficiales.
- Precios mostrados en los kits son **reales del sitio al momento de armar el sistema** (demo) — verificar antes de publicar, pueden cambiar.
