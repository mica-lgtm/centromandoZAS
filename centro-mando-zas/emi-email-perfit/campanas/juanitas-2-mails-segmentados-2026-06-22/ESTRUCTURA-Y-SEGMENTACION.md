# Juanitas · 2 mails segmentados

Fecha de armado: 2026-06-22

## Borradores creados en Perfit

- Mail 1 · `Básicos para resolver la semana`: campaign ID `765`.
- Mail 2 · `Qué básico elegir para cada día`: campaign ID `766`.
- Estado: borradores, sin programar ni enviar.

## Lectura de métricas

Para Juanitas conviene cuidar la presión sobre base porque los envíos segmentados funcionan mejor que los masivos y los reenvíos caen bastante.

Datos relevantes de Perfit:

- Mejor envío principal: `VENTA - 01 - 14/04/25`, 8.626 enviados, 1,50% CTR y 15 conversiones.
- Promo directa fuerte: `45% OFF`, 5.556 enviados, 1,40% CTR y 10 conversiones.
- Newsletter de valor/fidelización: 2.607 enviados, 1,10% CTR y 7 conversiones.
- Producto protagonista estable: `COLALESS TIRO ALTO ESTAMPADA` y `una para cada dia`, cerca de 0,74% CTR.
- Reenvíos bajan fuerte: algunos quedan en 0,23% a 0,51% CTR. No conviene armar dos impactos como envío + reenvío amplio.
- Funnel a bases grandes rindió bajo: 7.124 enviados con 0,25% CTR y 12.402 enviados con 0,16% CTR.

Conclusión:

- Usar 2 mails con universos distintos, no dos envíos a la misma base.
- No usar lista total `1`.
- No usar `32` Contactos inutilizables.
- No usar `33` Contactos sin actividad.
- Evitar reenvío automático a no abiertos salvo que haya una promo muy fuerte y se limite bien el segmento.

## Mail 1 · Venta directa a intención alta

### Objetivo

Activar compra en contactos con mayor intención y mejor probabilidad de conversión sin tocar toda la base.

### Ángulo recomendado

`Básicos que resolvés una vez y usás toda la semana`

El patrón `una para cada día` ya fue usado y rindió estable. Conviene retomar la idea, pero no repetir el mail igual: convertirlo en un enfoque más práctico de reposición de básicos, con producto/pack y CTA claro.

### Producto o categoría sugerida

Opción recomendada:

- Packs de algodón / básicos diarios.
- Ejemplo de referencia previa: Vedetina Algodón Pack x6.

Alternativa si quieren más variedad:

- Grilla corta de Sport Basics: vedetina, colaless, culotteless.

### Asunto

`Básicos para resolver la semana`

### Preheader

`Algodón, packs y modelos cómodos para todos los días.`

### Asunto de reenvío

`Tu cajón de básicos puede quedar listo`

### Segmento recomendado

Incluir:

- Lista `7` · Compradores - 3. Recientes
- Lista `41` · Compras recientes
- Lista `29` · Contactos con actividad - interacción alta
- Lista `6` · Compradores - 2. Leales
- Lista `43` · Compradoras de corpiños - último año, solo si el contenido incluye cross-sell hacia bombachas/básicos

Excluir:

- Lista `32` · Contactos inutilizables
- Lista `33` · Contactos sin actividad
- Lista `1` · Contactos de Tienda Nube

Configuración cargada en Perfit:

- Incluye listas: `7`, `41`, `29`, `6`, `43`.

### Por qué este segmento

Es intención alta, pero sin ir a base total. Combina compradores recientes, leales e interacción alta. Es el segmento donde una venta directa con producto concreto debería acercarse al rango bueno de Juanitas: 0,80%+ CTR.

### Estructura del mail

1. Preheader oculto.
2. Header con logo Juanitas.
3. Franja de beneficios solo si están vigentes y validados:
   - cuotas,
   - envío gratis,
   - beneficio real de la tienda.
4. Hero:
   - Titular: `Básicos para resolver la semana`
   - Bajada: `Packs cómodos, suaves y fáciles de repetir todos los días.`
   - CTA: `Ver básicos`
5. Módulo producto protagonista:
   - Pack principal.
   - Foto de producto.
   - Beneficio concreto: algodón, comodidad, cantidad, uso diario.
   - Precio y descuento solo si están validados.
   - CTA: `Comprar pack`
6. Módulo argumento:
   - `Por qué conviene tenerlos en pack`
   - 3 bullets/cards:
     - Menos vueltas al elegir.
     - Siempre tenés uno limpio a mano.
     - Calce cómodo para todos los días.
7. Módulo complementario opcional:
   - 2 productos relacionados si hay stock/precios.
8. Cierre:
   - `Tu cajón de básicos puede quedar listo hoy.`
   - CTA final: `Ver todos los packs`
9. Footer con redes y `${urls.unsubscribe}`.

## Mail 2 · Valor + guía para no saturar

### Objetivo

Hablarle a una base activa de menor intensidad y leads sin caer en promo agresiva ni repetir el primer mail.

### Ángulo recomendado

`Qué básico elegir según cómo querés sentirte`

Este formato toma el aprendizaje de la newsletter de valor/fidelización, que tuvo 1,10% CTR en 2.607 enviados. La clave es que no sea “contenido por contenido”: debe terminar en una guía de compra clara.

### Producto o categoría sugerida

Categoría:

- Sport Basics o bombachas por calce.

Estructura ideal:

- Vedetina: para todos los días.
- Colaless: para menos marcas.
- Culotteless: punto medio cómodo.

### Asunto

`Qué básico elegir para cada día`

### Preheader

`Una guía simple por calce, uso y comodidad.`

### Asunto de reenvío

`Elegí el modelo que mejor va con vos`

### Segmento recomendado

Incluir:

- Lista `28` · Contactos con actividad
- Lista `31` · Contactos con actividad - interacción baja
- Lista `34` · Contactos nuevos
- Lista `44` · Leads - Sorteo abril 2026
- Lista `45` · Hot sale leads 2026

Excluir:

- Todas las listas usadas en Mail 1: `7`, `41`, `29`, `6`, `43`.
- Lista `32` · Contactos inutilizables.
- Lista `33` · Contactos sin actividad.
- Lista `1` · Contactos de Tienda Nube.

Configuración cargada en Perfit:

- Incluye listas: `28`, `31`, `34`, `44`, `45`.
- Excluye listas del Mail 1: `7`, `41`, `29`, `6`, `43`.

### Por qué este segmento

Este mail tiene menos presión comercial y sirve para activar contactos que todavía no están tan cerca de comprar. La guía reduce fricción, educa y lleva a categoría/productos sin quemar a los mejores compradores, que ya recibieron el mail comercial.

### Estructura del mail

1. Preheader oculto.
2. Header con logo Juanitas.
3. Hero:
   - Titular: `Qué básico elegir para cada día`
   - Bajada: `No todos los modelos se sienten igual. Elegí según calce, uso y comodidad.`
   - CTA: `Ver guía de modelos`
4. Módulo guía por calce:
   - Card 1: Vedetina
     - Para uso diario, comodidad clásica, buena cobertura.
     - CTA: `Ver vedetinas`
   - Card 2: Colaless
     - Para menos marcas y prendas más ajustadas.
     - CTA: `Ver colaless`
   - Card 3: Culotteless
     - Para un punto medio entre comodidad y menos cobertura.
     - CTA: `Ver culotteless`
5. Módulo de ayuda:
   - `Si dudás entre dos modelos, pensá en esto:`
   - Tipo de prenda que vas a usar.
   - Cuánta cobertura querés.
   - Si priorizás algodón, elasticidad o terminación invisible.
6. Grilla corta de productos:
   - 3 productos máximo, uno por modelo.
   - Precio solo validado.
7. Cierre:
   - `Cuando el calce acompaña, el día se siente más cómodo.`
   - CTA final: `Encontrar mi modelo`
8. Footer con redes y `${urls.unsubscribe}`.

## Plan de envío recomendado

### Opción conservadora

- Mail 1: mañana o mediodía.
- Mail 2: al día siguiente, no el mismo día.

Esta opción cuida más la base y evita que contactos con listas superpuestas reciban dos comunicaciones en pocas horas.

### Opción de mismo día, si hace falta mover rápido

- Mail 1: 10:30.
- Mail 2: 18:00.
- Usar exclusiones cruzadas obligatorias.
- No hacer reenvío al día siguiente.

## Regla anti-solapamiento

Mail 1 tiene prioridad. Mail 2 debe excluir las listas del Mail 1: `7`, `41`, `29`, `6`, `43`.

Si un contacto pertenece a un segmento de compradores/intención alta y también a una lista de leads o actividad general, recibe Mail 1 y no Mail 2.

## Datos a validar antes de HTML

- Producto exacto del Mail 1.
- Precios actuales.
- Promoción vigente, si existe.
- Beneficios de cuotas/envío.
- Links finales de categoría o producto.
- Imágenes nuevas/no repetidas de Juanitas.
