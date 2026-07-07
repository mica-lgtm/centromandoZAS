# Simona Shop

## Design system

**Leer antes de arrancar cualquier email de Simona:**
`/Users/mica/Desktop/ZAS-AGENT/madame-social-content-manager/assets-clientes/Simona/README.md`
`/Users/mica/Desktop/ZAS-AGENT/madame-social-content-manager/assets-clientes/Simona/CLAUDE.md`

Incluye: paleta exacta (taupe `#70625f`, blush `#fbbfaf`, negro suave `#2a2a2a`, fondos cálidos), tipografía Red Hat Display/Text, fotografía de campaña en `assets/`, reglas validadas por el cliente (wordmark, CTAs, zona segura, copy, descuentos).

## Estado de contexto

Archivo con reglas de marca activas. Design system completo disponible en madame (ver arriba).

## Performance histórica y contexto de cuenta

Leer antes de proponer asuntos, segmentos o estructura de campaña:
`retroalimentacion-perfit/simonashop-2026-06-18-contexto-inicial.md`

Incluye: 20 campañas con métricas reales, benchmarks internos, patrones de asuntos ganadores, listas disponibles con IDs y sender verificado.

## Tono de voz

Pendiente de completar con información confirmada por Mica o documentos de marca.

## Público objetivo

Pendiente de completar.

## Productos / categorías importantes

Pendiente de completar.

## Promociones confirmadas

No usar promociones si no están confirmadas para la campaña actual.

## Links importantes

Pendiente de completar.

## Referencias de emails anteriores

Agregar referencias de estructura, tono y diseño cuando existan.

## Reglas de copy

- Usar voseo argentino salvo indicación contraria.
- Adaptar intensidad comercial al tono real de la marca.
- No inventar beneficios ni condiciones comerciales.

## Reglas visuales

Pendiente de completar según manual de marca, emails previos o referencias enviadas por Mica.

## Campañas realizadas

| Fecha | Campaña | Tipo | Resultado / aprendizaje |
|---|---|---|---|
| | | | |

## Aprendizajes

Registrar aprendizajes de campañas y correcciones.

### 2026-07-01 · Simona Fest · Diseño y precios

- Simona Fest usa una estetica especial validada por Mica para esta promo: blanco, negro y rojo `#e9261d`, con header negro, banner principal de Fest, bloques de beneficios oscuros y CTA final rojo/negro.
- Modelo base validado: `/Users/denisepenna/Downloads/simona_fest_4_productos.html`.
- En Simona Fest las cards de producto deben incluir foto real, nombre, descripcion corta, descuento Fest, precio anterior tachado, precio actual y precio por transferencia.
- Regla de calculo: `Antes` = precio original, `Ahora` = precio con descuento Simona Fest aplicado, `Transferencia` = 20% OFF adicional calculado sobre `Ahora`.
- No calcular transferencia sobre el precio original cuando el producto ya tiene descuento Fest.
- Si el producto muestra `-30% OFF` o `-20% OFF` en la web, usar esa etiqueta en la card.
- Ejemplo validado por captura de tienda: Sweater Riz muestra Antes `$89.900`, Ahora `$62.930` (-30% OFF) y Transferencia `$50.344`.

### 2026-07-02 · Simona Fest · Centrados y bloques redondeados

- Correccion visual de Mica: en emails de Simona Fest, centrar el bloque del medio cuando sea encabezado/introduccion de la promo.
- Los bloques principales deben tener terminaciones redondeadas: contenedor general, bloque de beneficios, cards de producto e imagenes superiores de las cards.
- Mantener CTAs de producto siempre negros, con letra blanca y bien redondeados tipo pill (`border-radius:999px`).
- Evitar bloques demasiado rectos o duros visualmente; la pieza debe verse mas suave y terminada en mobile y desktop.

## Datos a validar

| Dato | Motivo | Estado |
|---|---|---|
| | | |

## Regla visual validada por Mica - Estilo captura / producto protagonista

Mica corrigio que para Simona quiere que Emi haga emails como la captura del jean, no como el archivo HTML de promo-grilla.

Cuando el pedido sea de producto protagonista, venta + valor, o Mica mencione "captura", usar como referencia principal:

- `templates/estilo-captura-producto-protagonista.md`
- `templates/referencia-simona-captura-producto-protagonista.md`

El estilo esperado tiene:

- Hero visual grande con modelo/producto.
- Titular gigante integrado al hero.
- Bloque de introduccion con etiqueta tipo `VENTA + VALOR`.
- Producto protagonista en card.
- Precio, cupon, cuotas y CTA solo con datos validados.
- Seccion `Por que funciona tan bien` con 3 beneficios numerados.
- Cierre fuerte en bloque oscuro o color de marca.
- CTA final.

Evitar en este caso:

- estructura de promo-grilla,
- alerta amarilla de promo,
- muchos productos,
- hero generico con urgencia,
- estilo de cierre de promo.

Si Mica pide explicitamente grilla, cierre o bestsellers, ahi si usar el template de promo-grilla.
