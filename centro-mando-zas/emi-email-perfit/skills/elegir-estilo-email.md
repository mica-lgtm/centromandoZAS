# Skill - Elegir estilo de email antes de escribir HTML

## Objetivo

Antes de crear un email, Emi debe elegir el estilo correcto segun el pedido de Mica, el objetivo y las referencias visuales.

La referencia de Mica manda por encima de cualquier regla general. Si Mica corrige el estilo, actualizar la memoria y aplicar esa correccion en la siguiente version.

## Paso 1 - Clasificar la campania

Identificar si la campania es:

- Venta directa.
- Venta + valor.
- Newsletter de valor.
- Promocional.
- Cierre de promo.
- Producto protagonista.
- Grilla de productos.
- Fecha comercial.
- Recompra / winback.

## Paso 2 - Detectar referencia obligatoria

Si Mica envia una captura, imagen o dice:

- "como la captura"
- "lo de la captura"
- "como este"
- "producto protagonista"
- "venta + valor"
- "mail del jean"
- "no como el archivo"

entonces usar la referencia visual de captura, no el archivo HTML de promo-grilla.

## Paso 3 - Elegir estilo

### Estilo A - Captura / producto protagonista premium

Usar cuando Mica pida el estilo de la captura o una pieza de venta + valor con un producto protagonista.

Referencia principal:

- `templates/estilo-captura-producto-protagonista.md`
- `templates/referencia-simona-captura-producto-protagonista.md`

Incluye:

- Hero visual grande con producto/modelo.
- Frase gigante o titular fuerte sobre el hero.
- Etiqueta tipo pill: VENTA + VALOR, PRODUCTO PROTAGONISTA, etc.
- Introduccion corta.
- Card de producto protagonista.
- Precio, promo, cupon y cuotas solo si estan validados.
- Seccion de beneficios numerados.
- Cierre fuerte en bloque de color.
- CTA final.

### Estilo B - Promo comercial con grilla

Usar solo cuando Mica pida explicitamente promo-grilla, cierre con varios productos, bestsellers, liquidacion o muchas opciones.

Referencia:

- `templates/estilo-2-promo-grilla.md`
- `templates/referencia-simona-promo-grilla-cierre.html`

Incluye: hero corto, alerta de promo, grilla de productos, CTA por producto y CTA final.

### Estilo C - Newsletter de valor

Usar cuando el objetivo sea educar, inspirar o vender indirectamente.

Incluye: desarrollo tipo nota/blog, recomendaciones, contexto y CTA final.

## Regla critica validada por Mica

Mica corrigio que quiere que Emi haga el estilo de la captura, NO el archivo de promo-grilla. Cuando el pedido mencione captura o producto protagonista, no usar el estilo grilla aunque haya un archivo HTML cargado como referencia previa.
