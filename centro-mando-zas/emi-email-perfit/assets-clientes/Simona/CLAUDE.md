# SIMONA — Reglas de proyecto (aprendidas con el cliente)

Estas reglas se suman a `README.md` y `SKILL.md`. Surgieron de correcciones reales del cliente y se aplican a **todos** los diseños (placas, ads, emails, etc.) salvo que se indique lo contrario.

## Wordmark / logo
- El wordmark "SIMONA" va **siempre en un solo color sólido** (nunca una letra en otro color). Sin partir la palabra en colores.

## Contenido orgánico vs. ads
- **Feed orgánico (feed, cuadrado, historia que NO sean ads): SIN botón de acción.** Usar CTA de texto con flecha, "Deslizá para ver", o flechas de carrusel. El contenido orgánico no tiene función de clic.
- **Botón (pill) solo en ADS** (Meta/Google Ads), que sí llevan a la tienda.

## Botones / CTA
- En ads, el botón "Comprar ahora" lleva directo a la tienda: **sin flecha** (la flecha es para carruseles/avanzar, no para un CTA de clic único).
- No repetir condiciones comerciales que ya están implícitas. Ej.: si el hook dice "Hasta 40% OFF", **no** agregar un badge aparte de "20% OFF con transferencia" (ya está incluido en el "hasta").

## Zona segura (historias/reels)
- La zona UI inferior es solo una **guía de trabajo**: NO debe quedar ningún marcador/etiqueta visible ("Zona UI", líneas punteadas, etc.) en la pieza final. El contenido se posiciona respetando esa zona, pero sin dibujarla.

## Fotografía y composición
- **Mobile-first siempre.** Textos grandes y legibles; nada de tipografías diminutas. Pensar en alguien scrolleando en el celular.
- Fotos reales de la tienda (CDN). Cada **versión de diseño** usa fotos distintas; se puede repetir la misma foto entre formatos de una misma versión, pero no entre versiones.
- Composición equilibrada: evitar grandes espacios vacíos; que el texto no tape caras ni el producto.
- Reencuadrar **haciendo zoom DENTRO de la foto** (acercar nunca deja huecos). Para mover una modelo hacia un lado/arriba sin perder fondo, usar `background-size` > 100% + `background-position` (paneo), no achicar la foto.
- Si la foto se ve mal por estar muy alejada/cortada (ej. solo la cabeza), reencuadrar a un plano que funcione (ej. de la cadera/rodillas para arriba).
- **Importante — sin IA generativa:** en este entorno NO hay herramienta de generación/outpainting de imágenes. No se puede "agrandar" la pared/fondo más allá de la foto original. Si hace falta extender fondo de verdad, pedir al cliente la foto ya expandida (Photoshop Generative Fill, Canva, Firefly, etc.). Alternativa sin IA: clonar/estirar bordes de pared lisa con Canvas para ganar unos cm.

## Descuentos / cómo escribir el porcentaje
- Un descuento se puede escribir **"40% OFF"** o **"−40%"**, lo que mejor entre según el espacio disponible en la pieza.
- Copy de descuento **siempre coherente**: estructura "Hasta (descuento) en (producto/categoría)". Nunca cortes raros tipo "Hasta, en todos los sweaters". Ej. correcto: "Hasta 40% en sweaters" / "Hasta −40% en toda la categoría Invierno".

## Color en cifras de descuento
- **No mezclar rosa y gris dentro de una misma palabra/expresión corta** (ej. "−40%" o "40%"). Una cifra corta va toda de un solo color (ink/gris). El blush se reserva para frases largas o para una línea aparte (ej. "en sweaters" en rosa, número en gris).
- Los textos deben ser **grandes y legibles** (mobile-first). Si hay espacio libre arriba/abajo o a los lados, **agrandar los textos** para aprovecharlo.
- **No partir un texto en varios renglones si entra en uno solo.** Si hay ancho disponible (ej. formato horizontal), poner el texto en una línea para poder agrandarlo más. Prioridad = legibilidad.
- Al agrandar, **respetar siempre un margen de seguridad en los bordes** de la pieza. Estética y equilibrio ante todo; que nada quede pegado al borde ni cortado.

## Encuadre del producto/modelo
- **El foco SIEMPRE es el producto, no la cara ni la pared.** Mostrar la prenda lo más completa posible (ej. de la cabeza a la cadera/muslo), con la modelo **centrada** en el recuadro de foto.
- **No hacer zoom exagerado a la cara** (es lo que menos importa) **ni tapar la cara** de la modelo. Equilibrio: cara visible + sweater/prenda bien visible.
- Evitar "cachos" grandes de pared a un costado: ese espacio se aprovecha para que se vea mejor el producto. Se acepta algo de pared si queda balanceada/centrada, nunca desequilibrada.
- Reencuadre por zoom DENTRO de la foto (`background-size`/`background-position`), nunca achicando la foto (deja huecos).
- **Si la modelo está a un costado del encuadre original, hay que PANEAR la foto hacia ella (mover `background-position` en X), no solo agrandar.** Agrandar sin panear deja un cacho de pared al costado. El cuerpo de la modelo debe llenar la columna; la pared sale de cuadro.

- Si un texto sobre foto no se lee (ej. eyebrow sobre sweater claro), agregar un **chip/rectángulo sólido detrás** del texto en vez de mover la foto.
- Usar degradés de protección solo para legibilidad, nunca decorativos.

## Paleta y tono (recordatorio)
- Taupe `#70625f`, blush `#fbbfaf`, negro suave `#2a2a2a`, cream/off-white, neutros cálidos. Sin rojo, sin flúo, sin saturados.
- Voseo rioplatense, tono cercano, canchero y comercial pero no agresivo. Copy breve y concreto.
