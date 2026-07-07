# Juanitas — Sistema de Diseño

**Juanitas** es una marca argentina de **ropa interior femenina**. Comunica de amiga a amiga: cercana, canchera, cálida y comercial. El sistema existe para que cualquier diseñador (o Claude) pueda generar piezas consistentes para todos los canales de la marca manteniendo identidad visual, tono y criterio comercial.

## Qué vende Juanitas
- **Bombis** (ropa interior — evitar la palabra "bombacha" como término principal)
- **Packs** de ropa interior
- **Camisetas**, **shorts**, **conjuntos**
- **Básicos** de uso diario
- **Productos de temporada** y **promociones especiales**

## Para qué sirve este sistema
Crear piezas para **redes sociales, anuncios, email marketing, WhatsApp, banners web** y toda la comunicación de la marca. Las piezas deben destacar **producto, promoción y beneficio** con lectura rápida (una promo se entiende en menos de 3 segundos) sin perder calidez.

## Formatos objetivo
| Formato | Medida | Uso |
|---|---|---|
| Feed cuadrado / anuncio | 1080×1080 | Posteos y ads cuadrados |
| Feed vertical | 1080×1350 | Posteos verticales |
| Historias / Reels | 1080×1920 | Stories, Reels |
| Anuncio horizontal | 1200×628 | Ads display, Meta |
| Banner email | ~600px ancho | Email marketing (mobile + desktop) |
| WhatsApp / directo | cuadrado o vertical | Difusión, comunicación directa |

## Fuentes provistas por la marca
- **Logo:** `uploads/Juanitas LOGO vectorizado.png` → copiado a `assets/juanitas-logo.png` (lettering manuscrito en bordó **#A00048**). Variantes generadas: `juanitas-logo-white.png`, `juanitas-logo-cream.png`.
- **Tipografía:** familia **Poppins** completa (.otf, todos los pesos e itálicas) en `uploads/` → pesos clave copiados a `fonts/`.

No se entregó codebase, Figma ni decks. El sistema se construyó a partir del logo, las fuentes y el brief de marca, y se **calibró con la tienda real** [juanitas.ar](https://juanitas.ar) (Tiendanube): catálogo, precios, copys y piezas reales. Fotos de producto reales en `assets/productos/` e infografías de marca de referencia en `assets/referencia/`.

**Datos reales de la marca:** WhatsApp +54 11 3011-4317 · Instagram [@juanitaslingerie](https://instagram.com/juanitaslingerie) · Envío gratis +$50.000 · 3 y 6 cuotas sin interés · 5% OFF por transferencia · packs x3 / x6 / x12 · talles 1–8 (S a 5XL) · evento "HOT DAYS / SALE" hasta 50% OFF.

---

# CONTENT FUNDAMENTALS — cómo escribe Juanitas

**Voz:** una amiga que te recomienda prendas lindas, cómodas y útiles para todos los días. Nunca distante ni institucional. Español rioplatense (Argentina), con voseo.

- **Persona:** habla de **vos** ("llevate", "elegí", "mirá", "no te lo pierdas"). Trato directo y cálido.
- **Tono:** cercano, canchero, alegre, vendedor pero amable. Optimista. Cero corporativo.
- **Largo:** textos **breves**. En placa: un hook + un beneficio + CTA. Nada de párrafos.
- **Casing:** títulos en **mayúscula y minúscula natural** o full mayúsculas para impacto comercial (ej. "3x2 EN BOMBIS"). El número de la oferta siempre es protagonista.
- **Jerarquía de mensaje:** 1) hook/título → 2) beneficio principal → 3) beneficios secundarios → 4) CTA (cuando corresponde).
- **Emoji:** **sí se usan** (la tienda los usa en títulos de sección): 🤍✨💕👌🔥🌶️ en redes, email y placas de comunidad. Uso con mesura — evitar en placas de precio donde resten claridad. Nunca recargar.
- **Vocabulario:** el brief pide priorizar **"bombi", "ropa interior", "pack", "conjunto", "camiseta", "short"**. *Nota real:* la tienda usa "BOMBACHAS" en navegación y nombres de producto (COLALESS, VEDETINA, CULOTTELESS, CULOTTE, TRUSA, TIRO ALTO/CORTO). Para comunicación de marca preferir "bombi/ropa interior"; para SEO y nombres de producto, respetar la nomenclatura de la tienda.

**Ejemplos de copy en tono Juanitas:**
- Hook: *"El pack que no te puede faltar 💕"*
- Oferta: *"3x2 en bombis — llevá 3, pagá 2"* · *"🔥 HOT DAYS — hasta 50% OFF"*
- Beneficio (real): *"Estiliza tu figura"* · *"No marca bajo la ropa"* · *"Algodón suave, para todos los días"* · *"Viene con packaging reutilizable"*
- CTA: *"Conseguilo ahora"* · *"Aprovechá"* · *"Lo quiero"* · *"Mirá la colección"* · *"Pedí por WhatsApp"*
- Anotación manuscrita (real): *"Mili está usando un talle 7"* · *"¡solo por hoy!"*
- Urgencia (cálida): *"Solo por esta semana"* · *"¡No te lo pierdas, es el último!"*

**Qué NO hacer en copy:** sonar frío/corporativo, textos largos en placa, juntar muchas promos, prometer cosas del producto que no son reales.

---

# VISUAL FOUNDATIONS

**Vibra general:** femenina, actual, comercial, **limpia y cálida**. Producto protagonista, mucho aire, jerarquía clara. NO frío, NO minimalismo extremo, NO corporativo.

### Color
Paleta oficial de **8 colores** + neutros. Sistema cálido, femenino y amigable; **multicolor** (no monocromo). El logo de la marca es bordó `#A00048` (lettering manuscrito) y convive con la paleta — sobre fondos de color usar las variantes de logo crema/blanco.

- **Rosa `#E698AC`** — **ancla femenina**. Identidad, washes y fondos suaves. Texto en tinta sobre rosa.
- **Coral `#D85F4A`** — **color de acción / oferta**. CTAs, % OFF, urgencia y fondos fuertes. Texto blanco. Hover: `#BE4631`.
- **Naranja `#E6783F`** — acento cálido, destacados, energía.
- **Amarillo `#E3C759`** — acento luminoso, highlights, beneficios.
- **Verde `#95CA9E`** — acento fresco, positivo ("envío gratis").
- **Celeste `#82B9D3`** — acento suave, calma.
- **Azul `#3B6EC5`** — acento profundo, contraste, fondos de impacto, links. Texto blanco.
- **Tinta `#28282F`** — texto principal (casi negro neutro) y botón oscuro.
- **Fucsia `#E5197F`** (extra, no listado en los 8) — rosa fuerte de la marca, presente en el **logo, los resaltadores y la tabla de talles** reales. Acento de máximo impacto / color del marker por defecto.
- **Neutros cálidos:** crema `#FBF6F2`, beige `#F1EAE2`, arena `#E3D7CC`, blanco. Fondos cuando manda el producto.
- Cada acento tiene una **versión suave** (`-soft`) para usar como fondo de chip o sección.
- **Reglas:** coral para lo importante (acción/oferta); rosa para identidad femenina; azul/verde/amarillo/celeste/naranja para dar variedad y **codificar categorías o temporadas**. Máximo **1–2 colores de fondo** por pieza; el resto, acentos puntuales.

### Tipografía
- **Poppins** siempre. Títulos: **Bold / ExtraBold / SemiBold**. Bajadas y secundarios: **Regular / Medium**.
- Geométrica, redondeada, amigable. Tracking levemente negativo en títulos grandes (`-0.02em`), positivo en eyebrows en mayúscula (`+0.16em`).
- El **número de la oferta** se trata como elemento gráfico gigante (peso Black, hasta 120px+).
- Textos bien espaciados, line-height generoso en cuerpo (1.45).
- **Lettering manuscrito (Caveat, sustituto):** para palabras de acento sobre titulares ("colaless") y anotaciones tipo nota a mano ("Mili usa talle 7", "¡solo por hoy!"). Color fucsia/coral. Siempre combinado con Poppins bold, nunca para cuerpo.

### Recursos gráficos de marca (vistos en piezas reales)
- **Resaltador / marker** — *recurso estrella.* Bloque de color sólido detrás de la palabra clave, como un fibrón (`.mark .mark-fucsia/coral/azul/...`). Se usa para destacar el dato clave y para **codificar info por color** (cada sección/beneficio un color distinto).
- **Fotos recortadas tipo sticker** — producto con contorno blanco y sombra suave (`.sticker`), recortado del fondo. Muy usado en heroes.
- **Insets circulares de detalle** — círculo con zoom del producto o de un detalle ("refuerzo de algodón", "packaging reutilizable"), con sombra (`.inset-circle`).
- **Doodles sutiles** — sparkles ✦✧, corazones ♥, florcitas ❀✿, líneas punteadas curvas y flechas dibujadas a mano. Color rosa/fucsia/coral/amarillo. Decoración liviana, nunca recargar.
- **Color como código de información** — tablas, beneficios y bloques usan distintos colores de la paleta para diferenciar (ver tabla de talles e infografías en `assets/referencia/`).

### Fondos
- Modos de fondo: **claro/neutro** (producto protagonista), **rosa suave** (femenino/comunidad), o **color pleno** (coral o azul para impacto / lanzamientos / promos). Elegir 1.
- Sin gradientes ruidosos. Si se usa gradiente, suave y tonal (coral→coral profundo, o rosa→crema).
- Texturas/patrones: opcional y muy sutil (no obligatorio). Preferir color plano limpio.
- **Imágenes:** SIEMPRE fotos reales de producto/campaña de la marca. Se puede recortar, hacer zoom, limpiar fondo, mejorar composición — **nunca** alterar la prenda, su forma ni su color, ni generar fotos nuevas si hay reales.

### Forma, bordes y cards
- **Radios redondeados y amables:** chips/botones tipo **pill** (999px); cards `28px`; contenedores `16px`. Nada de esquinas vivas duras.
- **Cards:** fondo blanco/crema, esquinas redondeadas, **sombra suave** (tinte tinta, no gris frío): `0 10px 30px rgba(40,40,47,.12)`. Borde hairline `#ECE6E0` opcional.
- **Badges de precio/OFF:** pill o "globo" sólido en coral (o tinta para máximo contraste) con texto claro.
- Bordes hairline `#ECE6E0`; evitar líneas grises frías.

### Sombras y elevación
- Suaves, tinte tinta `rgba(40,40,47,…)`: `sm 0 2px 8px / .08`, `md 0 10px 30px / .12`, `lg 0 24px 60px / .16`.
- Sin inner-shadows duros. Elevación = producto/CTA por encima del fondo.

### Botones / CTA
- **Pill** (radio completo), sólido, alto contraste. Primario/acción: **coral** (texto blanco). Secundario: **tinta** (oscuro) o **rosa soft**. Sobre fondos de color: pill **blanco** con texto tinta. % OFF / urgencia: coral.
- Texto SemiBold/Bold. Generoso padding horizontal. Legibles siempre.

### Animación (para piezas digitales/animadas)
- Suave y femenina: **fades** y **slides** cortos, easing `cubic-bezier(.22,1,.36,1)` (ease-out suave). Pequeño **pop/scale** en badges de oferta. Sin rebotes exagerados ni loops mareadores en texto.

### Estados (hover / press) — para web/email interactivo
- **Hover:** oscurecer levemente el sólido (coral→`#BE4631`, naranja→`#C45F2C`, azul→`#2C549B`) o subir 1–2px con sombra md.
- **Press:** `scale(.98)` + sombra sm. Nunca cambio brusco de color.

### Transparencia y blur
- Uso puntual: overlays de **protección** sobre foto para asegurar legibilidad del texto (degradé tinta al 0→78%). Blur sólo en superficies tipo "glass" sobre imagen, con moderación.

### Layout
- Composiciones ordenadas, con **aire**. Margen de seguridad ~6–8% del lado en cada borde.
- Un foco visual por pieza. Jerarquía: hook → beneficio → secundarios → CTA.
- Logo presente pero sin competir con el mensaje (esquina o pie).
- En historias 1080×1920: zona segura central, CTA en el tercio inferior.

---

# ICONOGRAPHY

La marca **no** trae un set de íconos propio ni icon-font en los assets entregados. Criterio definido para el sistema:

- **Estilo:** íconos **de trazo (line)** redondeados, peso medio (~2px), esquinas suaves — coherentes con la geometría redondeada de Poppins y el lettering manuscrito. Tamaño cómodo, nunca decorativos en exceso.
- **Set recomendado (sustitución, vía CDN):** **Lucide** (`https://unpkg.com/lucide@latest`) — trazo redondeado que combina con la marca. **Flag de sustitución:** Lucide es un reemplazo elegido por el sistema, no un set oficial de Juanitas; si la marca tiene íconos propios, reemplazar.
- **Color de íconos:** tinta `#28282F` o coral `#D85F4A` sobre claro; blanco/crema sobre fondos de color. Coral para íconos de oferta/urgencia; acentos (azul/verde/etc.) para categorías.
- **Emoji como ícono:** permitido con mesura en redes/WhatsApp (💕✨🛍️🔥💌) para calidez; evitar en ads de precio.
- **Unicode/flechas:** flechas simples (→) admitidas en CTAs.
- **Logo:** el lettering manuscrito "juanitas" es el activo gráfico principal. No redibujarlo ni alterarlo. Variantes en `assets/`: color (`juanitas-logo.png`), blanco (`-white`), crema (`-cream`).
- **Regla:** nunca dibujar íconos a mano en SVG improvisado; usar el set CDN o copiar assets reales si la marca los provee.

---

# Índice de archivos

- **`README.md`** — este documento (contexto, contenido, foundations, iconografía).
- **`colors_and_type.css`** — variables CSS de color (núcleo + semántico), tipografía, escala, espaciado, radios y sombras. Importar en toda pieza.
- **`SKILL.md`** — definición de skill (uso del sistema por un agente).
- **`fonts/`** — Poppins (.otf), pesos clave.
- **`assets/`** — logo Juanitas (color / blanco / crema), `productos/` (fotos reales de catálogo) y `referencia/` (infografías de marca: tabla de talles, políticas, recomendaciones).
- **`preview/`** — tarjetas del Design System (color, tipografía, espaciado, componentes, marca).
- **`ui_kits/social/`** — kit de plantillas comerciales: placas de feed, historia, anuncio y banner de email, con componentes JSX reutilizables.

## Para empezar una pieza
1. Importar `colors_and_type.css`.
2. Elegir formato (ver tabla de formatos).
3. Definir el modo de fondo (claro/neutro, rosa suave o color pleno coral/azul).
4. Aplicar jerarquía: hook → beneficio → secundarios → CTA.
5. Sumar logo y foto real de producto. Mantener aire y lectura rápida.
