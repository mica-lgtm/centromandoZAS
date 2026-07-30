# memory.md · Memoria operativa de Emi

Este archivo guarda aprendizajes, correcciones y reglas que Emi debe recordar para no repetir errores.

## Reglas aprendidas iniciales

- El agente se llama Emi, no Emilia.
- Emi forma parte de ZAS Digital y reporta al Panel Central.
- Mica tiene aprobación final.
- Emi debe ser experta, cercana y limpia.
- Emi trabaja solo para clientes de ZAS.
- Emi crea campañas aisladas de email marketing, no automatizaciones completas.
- Puede crear emails puntuales para carrito abandonado y bienvenida si se pide, pero no diseña el flujo completo.
- Debe buscar contexto de marca en el proyecto principal y en archivos de marca, sin sobrecargar `CLAUDE.md`.
- Marcas iniciales prioritarias: Vitalis Navitas, Simona Shop, Magnolias Deco, Juanitas, Tessel, Living Tree y Zoe Tienda.
- Siempre debe adaptar tono por marca.
- Siempre debe proponer segmento recomendado.
- Siempre debe entregar asunto, preheader y asunto de reenvío.
- Siempre debe entregar campaña completa, no versión corta.
- HTML final debe entregarse como archivo `.html` listo para Perfit.
- El HTML debe incluir footer y desuscripción con `${urls.unsubscribe}`.
- Si no hay imágenes públicas, debe proponer prompt de imagen y una alternativa sin imagen.
- No debe inventar promociones, precios, links ni beneficios.
- Todo email importante debe poder pasar por Rita.

## Estilo de campañas según ejemplos

### Newsletter / valor

Referencia conceptual: email tipo Zoe Tienda. Más editorial, más texto, guía, recomendación y venta indirecta con CTA al final o por producto.

### Venta directa

Referencia conceptual: emails tipo Vitalis Navitas. Hero fuerte, beneficio central, producto claro, módulos de apoyo, CTA visible, urgencia o razón de compra.

### Grilla de producto

Referencia conceptual: email tipo Juanitas. Productos destacados, precios, beneficios, colores de marca, CTA por producto y CTA final.

### Promocional con urgencia

Referencia conceptual: email tipo Mini Ánima. Cupón claro, fecha límite, productos destacados, beneficios comerciales y CTA directo.

## 2026-06-11 · Ciclo 01 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 01.1:** Asunto tipo "Sustantivo: adjetivo/dato concreto" supera preguntas retóricas largas — "Colágeno: tiempos reales" (17%) vs. "¿Qué le pasa a tu piel cuando baja la temperatura?" (7.25%)
- **Regla ciclo 01.2:** Ángulo educativo-comparativo o desmitificador = open rate 20-37% consistente — "mitos y evidencia", "comparativa", "guía simple", "tiempos reales" funcionan muy bien
- **Regla ciclo 01.3:** Segmentación comportamental multiplica CTR 18x — segmentos < 600 por intención/comportamiento logran hasta 9.96% CTR vs. 0.14% en listas grandes
- **Regla ciclo 01.4:** CTOR > 25% señal de match perfecto segmento-contenido — si el segmento ya mostró intención y el email responde exactamente a esa intención, más de 1 de 4 personas que abre hace click
- **Regla ciclo 01.5:** Preheader vacío en 83% de campañas — implementar como bloqueante obligatorio antes de envío, pasar por QA
- **Regla ciclo 01.6:** Apple Mail Privacy inflación — segmento "Interacción alta" mostró 81% open (imposible). Usar CTR como KPI primario cuando open rate supere 40%
- **Regla ciclo 01.7:** Lista VIP Champions (WmEPCF) tiene bounce 0.45-0.50% — necesita auditoría y limpieza antes del próximo envío masivo a ese segmento
- **Regla ciclo 01.8:** Emoji solo al inicio sin beneficio concreto NO diferencia — "✨" sin promesa real en el asunto = peor performance del ciclo (5.95%)
- **Regla ciclo 01.9:** QA obligatorio de ortografía en asunto — "Instestino" fue enviado en campaña real sin detectar error
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-11

## 2026-06-13 · Ciclo 02 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 02.1:** Cross-sell post-compra = mayor CTR del ciclo — compradores recientes de un producto con email sobre producto complementario: CTR 2.63-2.77%, CTOR 8-10%. Sistematizar para todas las líneas.
- **Regla ciclo 02.2:** Testimonios como email standalone no convierte — CTOR 0.17% (peor del ciclo). Integrar testimonios DENTRO de emails de venta o educativos, nunca como tipo único de email.
- **Regla ciclo 02.3:** Segmentos "Vieron pero no compraron" tienen riesgo de bounce elevado (hasta 3.13%) — pueden incluir emails temporales o spam traps. Filtrar o limpiar antes de enviar.
- **Regla ciclo 02.4:** Preheader vacío sigue sin resolverse — 80% de campañas sin preheader en ciclo 02 (era 83% en ciclo 01). Necesita proceso bloqueante real, no solo recordatorio.
- **Regla ciclo 02.5:** VIP Champions (WmEPCF) con open rate 8.54% en 6,753 enviados — tercer ciclo con baja performance. Lista urgentemente degradada, requiere segmentación interna o limpieza total antes del próximo envío masivo.
- **Regla ciclo 02.6:** Segmentos dormidos (91-180 días sin actividad) + asunto genérico = 0% apertura y 0% CTR. Si se reactiva segmento dormido, usar asunto de alto impacto con beneficio o promo muy concreta.
- **Regla ciclo 02.7:** El patrón "Asunto: dato educativo" es el más consistente en open rate real por tercer ciclo consecutivo — "Colágeno: tiempos reales" (22.40%), confiable incluso en segmentos medianos (3,252 enviados).
- **Regla ciclo 02.8:** Preheader con 3 beneficios claros potencia CTOR — "Menos tensión, mejor sueño, más energía sostenida" acompañando asunto educativo logró 9.09% CTOR en segmento de intención.
- **Alerta CRÍTICA ciclo 02:** Bounce 3.13% en segmento "Vieron Citrato y no compraron" (64 enviados) — supera umbral de 2%. Auditar ese segmento antes del próximo envío.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-13

## 2026-06-15 · Ciclo 03 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 03.1:** Reconexión emocional en segmento dormido (91-180d) = mejor performance del ciclo — "Volvé a elegir bienestar" logró 17.43% open + 3.57% CTOR en 482 contactos. Sistematizar emails de reconexión mensuales para este segmento.
- **Regla ciclo 03.2:** Asunto filosófico/metafórico sin beneficio ("Desconectá para reconectar") = 6.61% open en lista grande (9,674). Nunca usar asuntos que no respondan "¿qué voy a encontrar si abro?".
- **Regla ciclo 03.3:** Email de fidelización a compradores recientes con 0 clicks (14.4% open) → CTA debe ser explícito y comercial incluso en emails de valor. Sin CTA claro, el contenido no convierte.
- **Regla ciclo 03.4:** Lista inactivos (90-365d) + asunto educativo suave = apertura <8%. Para reactivar inactivos: beneficio concreto + urgencia real, no educativo genérico.
- **Regla ciclo 03.5:** Segmento "Vieron Citrato y no compraron" RETIRADO — bounce 3.13% (ciclo 02) + unsubscribe 2.63% (ciclo 03). No usar hasta limpieza y auditoría completa.
- **Regla ciclo 03.6:** Producto de nicho (Creatina) enviado a Base Completa Marketing = unsubscribe 0.36%. Siempre segmentar por interés/comportamiento para productos con target específico.
- **Regla ciclo 03.7:** CTOR del 3.57% en dormidos reactivados confirma que segmento con intención latente + asunto correcto = alta conversión dentro del email. Usar CTOR como señal de calidad de contenido.
- **Regla ciclo 03.8:** Preheader vacío empeoró a 100% en ciclo 03 (era 80% en ciclo 02). Se necesita proceso BLOQUEANTE real: checklist pre-envío o campo obligatorio en Klaviyo — los recordatorios no funcionan.
- **ALERTA CRÍTICA ciclo 03:** Segmento "Vieron Citrato y no compraron" — unsubscribe 2.63% (1 de 38 contactos). Combinado con bounce 3.13% del ciclo anterior, este segmento está dañado. No usar hasta auditoría.
- **Nuevo producto:** Primera campaña de Creatina para mujeres detectada. A seguir en próximos ciclos.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-15

## 2026-06-17 · Ciclo 04 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 04.1:** Segmento "Nunca han interaccionado (email)" es TÓXICO — 0.89% open rate + 1.01% bounce en 44.949 envíos. Riesgo real de reputación de IP. No usar en campañas estándar. Si se usa alguna vez, máximo 5.000 contactos con asunto de alto impacto + incentivo concreto.
- **Regla ciclo 04.2:** Cross-sell post-compra confirmado por TERCER ciclo consecutivo como patrón de mayor CTR — Compradores de Citrato + email Omega 3: 1.43% CTR, 8.70% CTOR. Sistematizar para todas las líneas: Citrato→Omega3, Colágeno→Magnesio, Omega3→NeuroCalm.
- **Regla ciclo 04.3:** Segmentos "Interacción alta/media/baja" en Klaviyo están completamente distorsionados por Apple Mail Privacy. Open rates 44-70% son imposibles. Para CUALQUIER campaña a estos segmentos, usar SOLO CTR y CTOR como KPIs. Ignorar open rate.
- **Regla ciclo 04.4:** Asunto emoji + adjetivo genérico sin número ("Belleza desde adentro ✨", "Energía desde tus células ⚡") → open rate bajo umbral (8-10%). La fórmula ganadora sigue siendo: Sustantivo concreto + beneficio + número/timeframe (confirmado desde ciclo 01).
- **Regla ciclo 04.5:** Preheader vacío al 100% por CUARTO ciclo consecutivo. Recordatorios verbales inútiles. Requiere proceso bloqueante real: QA checklist con campo obligatorio antes de schedule.
- **Regla ciclo 04.6:** Ángulo educativo pre-decisión ("Antes de elegir un suplemento, leé esto") logró CTOR 25% en suscriptores recientes (muestra pequeña, 40 contactos). Escalar con mayor volumen en ciclo 05.
- **Nuevo producto:** Cellular NAD+ detectado en primer lanzamiento. Asunto débil en debut ("Energía desde tus células ⚡💪🏻") sin número ni beneficio concreto. Próxima campaña debe usar fórmula validada: "Cellular NAD+: [beneficio] en [N] días".
- **ALERTA CRÍTICA ciclo 04:** Segmento "Nunca han interaccionado (email)" — 1.01% bounce en 44.949 enviados (454 rebotes). Combinado con 0.89% open rate, este segmento debe retirarse de rotación inmediatamente.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-17

## 2026-06-11 · Corrección de Mica · Botones de producto

- Corrección recibida: los botones de los productos siempre deben ser redondeados, negros y con letra blanca.
- Regla nueva: en todas las campañas, cada CTA dentro de una card o módulo de producto debe usar fondo negro, texto blanco y borde tipo pill.
- Aplicar en: todas las marcas y campañas, salvo indicación explícita de Mica.

## 2026-06-11 · Corrección de Mica · Magnolias identidad y precios

- Tipografía oficial de Magnolias: `Elms Sans`. Usarla en todos los diseños con fallback `Arial, sans-serif`.
- Familia completa validada: Regular, Medium, SemiBold, Bold, ExtraBold, Black, pesos livianos, itálicas y fuentes variables.
- Todos los logos deben verse redondeados en las piezas de Magnolias.
- El Instagram de Magnolias es referencia visual prioritaria para diseñar emails. Pedir capturas a Mica cuando sean necesarias.
- Los precios deben aparecer en los emails comerciales de Magnolias.
- Destacar en rojo el precio pagando con efectivo.
- Validar siempre el precio principal y el precio con efectivo antes de cerrar el HTML.
- No entregar emails comerciales de Magnolias sin precios ni usar otra tipografía como identidad principal.

## 2026-06-22 · Corrección de Mica · Magnolias no repetir mails ni imágenes

- Corrección recibida: en la campaña de Magnolias para martes se reutilizó una imagen que ya se había usado.
- Aprendizaje: antes de crear piezas nuevas para Magnolias hay que revisar campañas recientes para evitar repetir imagen protagonista, hero o estructura.
- Regla nueva: no repetir mails, imágenes protagonistas ni assets visuales recientes de Magnolias, salvo pedido explícito de Mica.
- Aplicar en: todas las campañas nuevas de Magnolias Deco.
- Revisión obligatoria: buscar campañas Magnolias recientes y chequear que el hero/imagen principal no esté repetido antes de cerrar el HTML.

## 2026-06-12 · Corrección de Mica · Asunto y preheader sin repeticiones

- Corrección recibida: nunca repetir palabras relevantes entre el asunto y el preheader.
- Regla nueva: asunto y preheader deben complementarse y aportar información diferente.
- Evitar repetir especialmente: marca, promoción, beneficio, urgencia, producto y verbo principal.
- Las palabras funcionales inevitables pueden aparecer, pero no se debe duplicar el mensaje central.
- Aplicar en: todas las marcas y todas las campañas de Emi.

## 2026-06-19 · Ciclo 05 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 05.1:** Retargeting comportamental "Vieron X sin comprar" → CTR 7%+ incluso con asuntos simples sin emoji ni urgencia ("Bienestar duradero con Omega 3" → 7.04% CTR en 71 enviados). La segmentación sola convierte cuando hay intención declarada. Sistematizar para todos los productos con segmentos de "Vieron".
- **Regla ciclo 05.2:** Post-compra educativo (sobre producto que ya compraron) = mayor CTOR del ciclo — "🧠 Foco con más criterio" a Compradores de Melena de León: 7.14% CTR, 27.27% CTOR. Después de la compra, enseñar cómo usar el producto convierte mejor que vender algo nuevo. CTA ideal: "Aprovechá mejor tu X".
- **Regla ciclo 05.3:** Comparativa directa de productos en el asunto ("¿Qué magnesio elegir? 🤔") resuelve objeción de decisión y activa conversión en segmento indeciso. CTOR 5.56% validado en 332 contactos (Vieron Bisglicinato/Citrato sin comprar).
- **Regla ciclo 05.4:** Segmento "Nunca han interaccionado (email)" PROHIBIDO PERMANENTEMENTE — segunda infracción: 0.48% open + 2.56% bounce (supera umbral crítico de 2%) + 0.00% CTR en 7.727 envíos. Ninguna optimización de copy lo rescata. Archivar o eliminar de Klaviyo para prevenir uso futuro.
- **Regla ciclo 05.5:** Preheader vacío al 100% por QUINTO ciclo consecutivo. Los recordatorios verbales son inefectivos en 10 semanas de análisis. Requiere implementación técnica bloqueante: checklist pre-schedule o campo obligatorio en template/proceso de envío.
- **Regla ciclo 05.6:** NAD+ con asunto "Descubre el rol del NAD+ en tu salud" en base grande (12.157) logra solo 0.44% CTR. Dos problemas: (1) "Descubre" es español neutro (usar "Descubrí"); (2) "el rol de X en tu salud" no activa urgencia. Próxima campaña NAD+: segmento chico con intención + fórmula "Cellular NAD+: [beneficio concreto] en [N días]".
- **Regla ciclo 05.7:** Cross-sell post-compra confirmado por CUARTO ciclo consecutivo — Compradores de Bisglicinato + email complementario: 2.82% CTOR. Continuar rotación: Colágeno→Omega3, Omega3→NeuroCalm, Melena de León→NAD+.
- **Alerta QA:** Asunto cortado detectado en Probióticos — "seguí acompañando tu bienesta" (falta "r"). Agregar revisión de ortografía y longitud en checklist pre-schedule.
- **ALERTA CRÍTICA ciclo 05:** Segmento "Nunca han interaccionado" usado por segunda vez a pesar de retiro explícito en Ciclo 04. Bounce 2.56% en 7.727 enviados. Comunicar bloqueo a toda persona con acceso a Klaviyo.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-19

## 2026-06-21 · Ciclo 06 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 06.1:** Educativo comparativo directo en segmento de alta intención = CTOR 11.01% — "Qué mirar en un Omega 3" (Compradores potenciales, 2.520 enviados). Patrón validado por quinta vez consecutiva. Aplicar obligatoriamente en campañas a "Compradores potenciales".
- **Regla ciclo 06.2:** Suscriptores nuevos + pregunta con timeframe = CTOR 25% en muestra pequeña (57 enviados, "¿Qué pasa en 90 días?"). Escalar en ciclo 07 con muestra 300-500 y segmento específico por producto.
- **Regla ciclo 06.3:** Lista "Leads Fríos / Quiz" (excluyendo Shopify Customers) = bounce 0.93%, open 4.30%, CTR 0.03% — comportamiento idéntico a "Nunca interaccionaron". No usar hasta auditoría y limpieza. Si se usa, solo con asunto de altísimo impacto + incentivo concreto.
- **Regla ciclo 06.4:** Frecuencia máxima a Base Completa = 1 campaña por día. Dos envíos a Base Completa el mismo día genera fatiga documentada y CTR < 0.05%. Implementar frequency cap operativo.
- **Regla ciclo 06.5:** El naming formal "20JUN-XX" fue el primer factor que mejoró la tasa de preheader (de 100% a 64%). Mantener obligatoriamente el naming con fecha + número de secuencia para que el proceso de preheader sea natural.
- **Regla ciclo 06.6:** "Interacción alta" infladísima por Apple Mail (79.48% open, CTOR 0.31%) + unsubscribe 0.45% supera límite. Asunto genérico "Descanso y recuperación" posible causa. Solo CTR/CTOR como KPIs en ese segmento.
- **Regla ciclo 06.7:** Cross sell con asunto genérico = 0% CTR. Fórmula obligatoria para cross sell: "[Producto que ya tienen] + [beneficio del complementario]" — ej: "Tu Colágeno Flex funciona mejor con esto".
- **Regla ciclo 06.8:** Segmento "Vieron Citrato y no compraron nunca ese producto" — TERCER ciclo consecutivo en que se usa a pesar de retiro explícito (ciclos 03 y 05). Requiere bloqueo técnico en Klaviyo: archivar segmento o agregar tag "PROHIBIDO". Los recordatorios verbales no funcionan.
- **ALERTA CRÍTICA ciclo 06:** "20JUN-04 NeuroCalm" (Base Completa, 64.737 enviados) generó 511 bounces (0.79%) y solo 16 clicks (0.02% CTR). NeuroCalm es producto de nicho (sueño/cerebro) — no debe enviarse a Base Completa sin filtro de interés. 511 bounces en un envío = riesgo real de reputación de IP.
- **ALERTA ciclo 06:** Doble campaña NAD+ en menos de 17hs a Base Completa — "Nuevo lanzamiento" (19-jun 18:30) y "Creatina/NAD+ informativo" (20-jun 11:00) solaparon audiencia. Evitar duplicar producto en 48hs a misma lista.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-21

## 2026-06-23 · Ciclo 07 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 07.1:** Ángulo estacional natural (invierno + articulaciones) = open rate 20% y CTR 0.64% en segmento de intención (Colágeno Flex). "Dale vida a tus movimientos este invierno❄️" funciona. Sistematizar ángulos estacionales para Flex/Omega 3/Magnesio en invierno argentino (junio-agosto).
- **Regla ciclo 07.2:** Segmento "04 - Nuevos Lanzamientos (activos 180d)" con 2.54% open rate — comportamiento de lista fría. Auditar antes del próximo uso. No usar sin limpieza previa.
- **Regla ciclo 07.3:** Social proof con números grandes ("25.000 personas ya lo usan") a inactivos 90-365d = 6.07% open + 0.013% CTR. Social proof NO reactiva inactivos. Para este segmento: beneficio concreto + urgencia real (confirmado 3er ciclo consecutivo).
- **Regla ciclo 07.4:** Naming estructurado garantiza preheader. Campañas con naming formal (22JUN-XX, Vitalis Email X, Email X-tema) tienen 100% preheader. Campañas sin naming formal tienen 0% preheader. El naming es el único control que funciona en la práctica.
- **Regla ciclo 07.5:** Frecuencia cap urgente Base Completa. Dos envíos masivos en <24hs generaron 1.292 bounces acumulados. Máximo 1 envío a Base Completa cada 3-4 días para proteger reputación de IP.
- **Regla ciclo 07.6:** Retargeting Probióticos "Vieron sin comprar" + dato estadístico en asunto = 12.50% CTOR (310 enviados). Sexta confirmación del patrón retargeting comportamental. Sistematizar para todos los productos.
- **Regla ciclo 07.7:** Dormidos 91-180d + NAD+ = 23.79% open + 1.29% CTR (618 enviados). Escalar con segmento más amplio y asunto con número concreto.
- **Regla ciclo 07.8:** Asunto-pregunta educativa abre pero NO convierte si el CTA no es explícito y comercial. "¿Se pueden combinar suplementos?" → 18.63% open / 0% CTR. Toda pieza educativa debe tener CTA visible y activo.
- **MEJORA HISTÓRICA ciclo 07:** Preheader compliance del 0% (ciclos 04-06) al 59% (ciclo 07). El naming formal de series es el único mecanismo que funciona. Mantener y escalar.
- **ALERTA CRÍTICA ciclo 07:** 1.292 bounces acumulados en dos envíos masivos consecutivos a Base Completa (<24hs). Auditar reputación de IP y lista Base Completa antes del próximo envío masivo.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-23

## 2026-06-25 · Ciclo 08 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 08.1:** Ángulo "menopausia + colágeno" a segmento de potenciales antiage = CTOR 8.40% (1.512 enviados). Primer test de ángulo hormonal exitoso. Escalar: "perimenopausia", "colágeno después de los 40", "piel y hormonas". Nuevo eje de contenido validado.
- **Regla ciclo 08.2:** NeuroCalm a Base Completa = 1.35% open rate (record mínimo histórico absoluto) + 507 bounces (0.75%). NeuroCalm, Melena de León, Cellular NAD+, Creatina = productos de nicho que NO van a Base Completa NUNCA. Solo a segmentos de intención específica.
- **Regla ciclo 08.3:** Asunto > 55 caracteres = open rate catastrófico. "Tu piel en invierno necesita esto: rutina completa día y noche con -20% OFF" (72 chars) → 2.72% open. Límite de 55 caracteres pasa de recomendación a REGLA BLOQUEANTE. Si supera 55 chars, se acorta antes del envío.
- **Regla ciclo 08.4:** Preheader compliance al 69% — récord histórico. Naming formal (24JUN-XX, Vitalis Miercoles X, Email X — Tema) = preheader siempre presente. Naming informal (Campaña ZAS, Campaña del DD jun) = preheader siempre vacío. Objetivo: 100% con naming estandarizado.
- **Regla ciclo 08.5:** "Nunca han interaccionado (email)" — CUARTA INFRACCIÓN CONSECUTIVA a pesar de retiro explícito en ciclos 04, 05 y 06. Los recordatorios verbales son definitivamente inefectivos. Único camino: eliminar o archivar el segmento de Klaviyo. Tag "PROHIBIDO-NO USAR" inmediato.
- **Regla ciclo 08.6:** WARMING W2/W3 (Openers & Clickers 14d/30d) infladísimas por Apple Mail — 31%+ open irreal. CTR real 0.48-0.52%, CTOR 1.54-1.65% — segmentos valiosos, pero open rate inutilizable. Reportar SOLO CTR y CTOR en campañas a estos segmentos.
- **Regla ciclo 08.7:** Educativo comparativo corto ("Antes de elegir un colágeno, leé esto") + segmento alta intención = 37.68% open, 3.85% CTOR. Patrón confirmado por octavo ciclo consecutivo como el más consistente del proyecto.
- **RÉCORD HISTÓRICO ciclo 08:** Preheader compliance 69% (sube de 59% en ciclo 07, de 0% en ciclos 04-06).
- **ALERTA CRÍTICA ciclo 08:** 24JUN-04 NeuroCalm a Base Completa — 507 bounces en un envío + 1.35% open rate (record mínimo histórico). Auditar reputación IP antes del próximo envío masivo. No enviar a Base Completa en los próximos 3-5 días.
- **ALERTA CRÍTICA ciclo 08:** Segmento "Nunca han interaccionado (email)" sigue activo en Klaviyo — eliminar o archivar inmediatamente.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-25

## 2026-06-27 · Ciclo 09 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 09.1:** Asunto ultra-corto (22 chars) con evocación estacional a compradores históricos activos = 27.45% open en 2.497 enviados. "Tu piel en invierno" a compradores de Colágeno antiage desde siempre supera benchmarks sin número, sin urgencia y sin emoji. El atajo relacional supera la fórmula transaccional cuando el segmento tiene historial de compra fuerte y la marca comparte contexto con el comprador.
- **Regla ciclo 09.2:** Dato de bounce en Klaviyo NO es final hasta 72hs post-envío. NeuroCalm reportó 507 bounces (0.75%) a las ~24hs (Ciclo 08) y 722 bounces (1.07%) a las ~72hs (Ciclo 09). Diferencia: 215 bounces adicionales. Para decisiones de reputación IP, nunca usar el bounce rate antes de 72hs del envío.
- **Regla ciclo 09.3:** NeuroCalm a Base Completa = 722 bounces totales (1.07%), PEOR REGISTRO ABSOLUTO del proyecto en bounces individuales. Validado definitivamente por 5 ciclos consecutivos (06-09). El bloqueo técnico en Klaviyo (archivar segmento BC para NeuroCalm) es obligatorio e impostergable.
- **Regla ciclo 09.4:** CTOR 0% en Omega 3 PLUS con asunto correcto (45 chars, dato concreto) → segmento "Contactos con actividad" no diferencia comportamiento real de Apple Mail phantom opens. Para campañas de conversión, solo usar segmentos con comportamiento real demostrado (clickers, compradores, vieron producto).
- **Regla ciclo 09.5:** Pausa post-crisis validada operativamente — 0 envíos el 26-27/06 post-alerta NeuroCalm. Patrón correcto: alerta crítica → pausa 3-5 días → retomar con segmentos chicos (< 3.000) y productos core. No retomar Base Completa sin auditar sender score primero.
- **Regla ciclo 09.6:** Datos de Klaviyo para envíos grandes pueden subestimar recipients en las primeras 24hs. Email 1 Colágeno: 325 enviados en Ciclo 08 → 2.497 enviados en Ciclo 09. Confirmar siempre con datos de 72hs antes de usar "total enviados" para decisiones de segmentación o proyecciones.
- **ALERTA CRÍTICA ciclo 09:** Bounce acumulado en IP Vitalis — 722 bounces NeuroCalm (Ciclo 09) + ~550 Ciclo 07 + ~454 Ciclo 04 = patrón de deterioro de reputación IP. Auditar sender score en MxToolbox/Mail-Tester antes del próximo envío masivo. Si sender score < 80, implementar calentamiento gradual.
- **ALERTA CRÍTICA ciclo 09:** NeuroCalm sigue sin bloqueo técnico después de 6 advertencias (Ciclos 06-09). Único camino efectivo: archivar o etiquetar "PROHIBIDO-NO USAR" en Klaviyo esta semana. Los recordatorios verbales son definitivamente inefectivos.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-06-27

## 2026-07-01 · Ciclo 10 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 10.1:** Variante "Sustantivo: qué [verbo]" y "Sustantivo: cuándo [verbo]" confirmadas como fórmula ganadora — "Omega 3: qué esperar" (CTOR 13.64%, 672 enviados) y "Citrato: cuándo elegirlo" (CTOR 8.11%, 144 enviados). Agregar como variantes válidas de la fórmula "Sustantivo: dato concreto" validada desde ciclo 01.
- **Regla ciclo 10.2:** Post-purchase educativo = CTOR 13.64% — confirmado por SÉPTIMO ciclo consecutivo como patrón de mayor CTOR con volumen real. "Omega 3: qué esperar" a Compradores recientes de Omega 3 = mejor CTR (2.24%) y CTOR del ciclo. Sistematizar como email obligatorio en secuencia post-compra para TODAS las líneas activas.
- **Regla ciclo 10.3:** Retargeting Probióticos + número en asunto = CTOR 18.18% (mejor CTOR del ciclo) — "5 señales de que tu digestión pide más atención" a Vieron probióticos (72 enviados). Número + síntomas + categoría en retargeting comportamental = conversión máxima. Replicar con otras líneas.
- **Regla ciclo 10.4:** Naming formal = 100% preheader, naming genérico "Campaña del XX" = 0% preheader — confirmado DÉCIMO ciclo consecutivo. Series "Email X lunes" y "M30 Email X" tuvieron 8/8 con preheader. "Campaña del XX" tuvo 5/5 sin preheader. Prohibir naming genérico para cualquier campaña sin verificación manual de preheader.
- **Regla ciclo 10.5:** Base Completa + educativo genérico sin producto específico = 555 bounces + CTR 0.13% — "Cómo elegir suplementos con criterio" a 88,104 enviados. Base Completa solo acepta: (a) producto core con beneficio claro + CTA directo, (b) promo con urgencia real. Nunca educativo genérico sin ancla de producto.
- **Regla ciclo 10.6:** VIP Champions + asunto genérico/filosófico = 0% CTR — "Una rutina premium también se construye con criterio" a VIP Champions: 0 clicks. Segmento VIP requiere beneficio explícito o descuento real en el asunto para convertir.
- **RÉCORD HISTÓRICO ciclo 10:** Preheader compliance 62% (8/13 campañas con preheader) — primer ciclo con mayoría de campañas con preheader. Causado por naming de series estructuradas ("Email X lunes", "M30 Email X").
- **Monitorear ciclo 11:** (a) M30 Email 4 "Encontrá tu fórmula" → 0% open con 58 enviados (datos prematuros, < 18hs). (b) Segmento "Vieron Citrato" reactivado → bounce 1.39% (2/144). Si supera 2% en ciclo 11, retirar nuevamente.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-07-01

## 2026-07-03 · Ciclo 11 · Vitalis Klaviyo · Reglas de performance comprobadas

- **Regla ciclo 11.1:** Nueva variante ganadora de asunto: "Producto: qué mirar en [componentes técnicos]" — "Omega 3: qué mirar en EPA y DHA" → CTOR 10% en 365 enviados (Interesados en omega 3). Extensión de la fórmula "Sustantivo: dato concreto" validada desde ciclo 01. Aplicar para comparativas de ingredientes.
- **Regla ciclo 11.2:** Prueba social (testimonios) FUNCIONA solo en segmento de alta intención — "Lo que otros ya notaron" → 4.48% CTOR en 3.938 Compradores potenciales. Contrasta con ciclo 02 (testimonios a lista genérica = 0.17% CTOR). Regla: testimonios a alta intención = válido; testimonios a listas amplias = prohibido.
- **Regla ciclo 11.3:** Educativo de acompañamiento alimentario = nuevo eje de contenido — "Alimentos y magnesio" a Interesados en citrato → 5.03% CTOR en 1.164 enviados. Replicar: "Alimentos para el colágeno", "Qué potencia el Omega 3". Bajo riesgo de unsubscribe (0.26%).
- **Regla ciclo 11.4:** Asunto metafórico sin producto + segmento de interés = CTR < 0.05% — "Tu piel también tiene estructura" en "Interesados en belleza antiage" = 0.034% CTR. La metáfora no activa el clic incluso cuando el interés es real. Mantener fórmula "Ingrediente: [beneficio concreto]".
- **Regla ciclo 11.5:** Preheader compliance 72.7% (8/11) — récord histórico (↑ de 62% ciclo 10). Series M01 y J02 = 100% preheader. "Campaña del XX" = 0% preheader (11 ciclos de evidencia). Próximo objetivo: 85%+.
- **Regla ciclo 11.6:** Creatina a WARMING W3 (19k) = 0.096% CTR — cuarta infracción documentada. Regla definitiva: Creatina, NeuroCalm, Cellular NAD+, Melena de León NUNCA a listas > 3.000 sin segmentación de interés. Evaluar bloqueo técnico.
- **Regla ciclo 11.7:** Segmento "Compradores recientes de Colágeno Antiage" con bounce 1.32% (11/835) — anomalía para compradores. Monitorear ciclo 12. Si > 0.8% otra vez, auditar ventana temporal del segmento.
- **Nuevo producto:** Vitamina D3 — primera aparición en campaña (M01 Email 2). Verificar SKU en tienda antes de construir secuencia dedicada.
- **Alerta operativa:** 5 remitentes distintos en un ciclo (hola@, agus@, tienda@, info@, matias@vitalisnavitas.com). Unificar a máximo 2 addresses activos.
- Aplicar en: todas las campañas Vitalis Navitas desde 2026-07-03

## Aprendizajes futuros

Agregar acá aprendizajes por correcciones de Mica o Rita.

Formato sugerido:

```md
## AAAA-MM-DD · Marca · Tema
- Corrección recibida:
- Aprendizaje:
- Regla nueva:
- Aplicar en:
```

## 2026-06-03 · Correccion de Mica · Estilo de Simona

- Correccion recibida: Mica aclaro que quiere que Emi haga los mails como la captura del jean de Simona, no como el archivo HTML de promo-grilla/cierre.
- Aprendizaje: cuando Mica diga "captura", "lo de la captura", "producto protagonista", "venta + valor" o "como el mail del jean", Emi debe usar estilo visual premium de producto protagonista.
- Regla nueva: priorizar `templates/estilo-captura-producto-protagonista.md` sobre `templates/estilo-2-promo-grilla.md` cuando haya duda.
- Aplicar en: especialmente Simona Shop, pero tambien en cualquier marca cuando Mica pida producto protagonista con venta + valor.
- No repetir: no usar hero generico, alerta de promo ni grilla de productos si Mica pide el estilo de captura.

## 2026-06-23 · Corrección de Mica · Fotos de producto y orden de bloques

- Corrección recibida: los productos siempre van con su foto real dentro de cada bloque.
- Aprendizaje: no entregar cards de producto solo con texto; cada producto debe mostrar imagen, nombre, precio y CTA.
- Regla nueva: en Simona, la estructura debe ir en una sola secuencia continua, sin partir el hero en dos bloques laterales.
- Regla nueva: usar bloques apilados y legibles en orden lineal: header, hero, beneficios, cards de producto con foto, cierre y footer.
- Aplicar en: todas las próximas campañas de Simona y en cualquier pieza donde Mica pida una estructura similar.

## 2026-06-23 · Corrección de Mica · Segmentación semanal sin solaparse

- Corrección recibida: en la semana, los envíos de Simona no deben ir a toda la base ni repetir a los mismos usuarios.
- Aprendizaje: las campañas del mismo día o de días distintos tienen que repartirse por audiencias complementarias para cuidar reputación.
- Regla nueva: cuando un mail va a compradores prioritarios, el siguiente mail debe ir a leads, incentivo o carritos, con exclusión explícita de las listas ya usadas.
- Regla nueva: siempre revisar include/exclude antes de subir un borrador para confirmar que no se repite la base ya impactada.
- Aplicar en: toda la planificación semanal de Simona.

## 2026-06-24 · Corrección de Mica · Simona jueves cupón ARGENTINA

- Corrección recibida: para la secuencia del jueves, los dos mails de Simona tienen que usar bases diferentes y no pisarse entre sí.
- Aprendizaje: sweaters puede trabajar con señal reciente y blazers con una base de mayor valor/afinidad, pero siempre con exclusiones cruzadas.
- Regla nueva: si una campaña usa listas `22` y `49`, la otra debe excluirlas; si una usa `20`, `21` y `23`, la otra debe excluirlas.
- Regla nueva: documentar la separación de audiencias en el resumen de campaña antes de cargar a Perfit.
- Aplicar en: secuencias semanales de Simona con más de un mail el mismo día.

## 2026-06-24 · Corrida Perfit · Simona jueves cupón ARGENTINA

- Resultado: se crearon dos campañas como borrador en Perfit.
- ID sweaters: `1346`.
- ID blazers: `1347`.
- Regla confirmada: mantener la segmentación separada entre ambas campañas antes de programar o enviar.
- Aplicar en: seguimiento final y QA de la secuencia del jueves de Simona.

## 2026-06-24 · Corrida Perfit · Simona secuencia jueves cupón ARGENTINA

- Resultado: se crearon dos campañas como borrador en Perfit para la secuencia exacta del folder `simona-secuencia-jueves-cupon-argentina-2026-06-25`.
- ID mail 1 sweaters: `1348`.
- ID mail 2 camperas: `1349`.
- Regla nueva: no confundir esta secuencia con la variante de blazer; son dos pares distintos y deben quedar documentados por separado.
- Aplicar en: próximas subidas de secuencias Simona con naming parecido.

## 2026-07-01 · Corrección de Mica · Simona Fest precios

- Corrección recibida: en Simona Fest los precios estaban mal porque se mostraba el precio original como precio web y se calculaba transferencia sobre ese valor.
- Aprendizaje: en Simona Fest hay que respetar la lógica real de tienda: primero se aplica el descuento del Fest al precio original y después el 20% OFF por transferencia se calcula sobre el precio ya rebajado.
- Regla nueva: cada producto de Simona Fest debe mostrar `Antes $X` tachado, `Ahora $Y` con descuento Fest aplicado y `Transferencia $Z` calculado como 20% OFF sobre `Ahora`.
- Regla nueva: si la web muestra una etiqueta tipo `-30% OFF` o `-20% OFF`, esa etiqueta debe ir en la card del producto; no usar una etiqueta genérica de transferencia como descuento principal.
- Ejemplo validado: Sweater Riz: Antes `$89.900`, Ahora `$62.930` (-30% OFF), Transferencia `$50.344`.
- Aplicar en: todas las campañas de Simona Fest y cualquier promo Simona donde convivan descuento de producto + transferencia.

## 2026-06-23 · Corrección de Mica · Mobile sin cortes

- Corrección recibida: en mobile el mail se veía cortado y eso no puede volver a pasar.
- Aprendizaje: no basta con que el HTML se vea bien en desktop; hay que validar explícitamente un ancho angosto antes de subirlo.
- Regla nueva: en Simona, si un bloque puede desbordar o quedar apretado en móvil, debe apilarse en vertical y ocupar ancho completo.
- Regla nueva: revisar siempre la versión mobile antes de subir el borrador a Perfit, especialmente hero, CTA y módulos de producto.
- Aplicar en: todas las campañas nuevas y rearmados de Simona.

## 2026-06-03 · Instalacion de herramientas · Skill find-skills

- Instalado: `find-skills` skill en `.agents/skills/find-skills`
- Propósito: herramienta para crear HTML y assets cuando se desarrollan las campañas de email
- Disponible para: Claude Code y otros agentes
- Usar cuando: estés creando archivos HTML finales para Perfit

## 2026-06-03 · Campaña Simona Shop · Fin de Semana 6 emails

- Solicitado por: Mica
- Período: viernes 6 a domingo 8 de junio 2026
- Estructura: 6 emails (2 por día, producto protagonista cada uno)
- Productos: Jean Nascar, Blazer Mendoza, Sweater Nievre, Camisa Brisa, Combo 3 piezas, Remate urgencia
- Estilo: captura/producto protagonista (validado por Mica, referencia visual confirmada)
- Promociones: 12 cuotas sin interés + 15% OFF + 20% OFF con transferencia + envío gratis
- **Estado: ✅ SUBIDA A PERFIT MANUALMENTE - Listo para validación en Perfit**
- HTMLs: 6 responsive + imágenes (5 Gemini + 1 real en Email 3)
- Imágenes: 5 generadas con Gemini (editorial lifestyle), Email 3 con foto real Simona
- Documentación: RESUMEN-CAMPANIA.md, BRIEF-RITA-QA.md, CHECKLIST-LANZAMIENTO.md, PROMPTS-IMAGENES.md
- Ubicación: `campanas/simona-fin-de-semana-2026-06-03/`
- **Intento de subida por API (2026-06-03):** 
  - Script creado: `subir-campanas-perfit.py`
  - Resultado parcial: POST `/v2/campaigns` funcionó ✅ (IDs 1282-1287)
  - Fallo: POST `/v2/campaigns/{id}/contents` no persistió HTML ❌
  - Solución temporal: Subida manual a través de interfaz web
  - Escalabilidad: Bloqueada hasta que Diego resuelva API issue
- **Subida final a Perfit: 2026-06-04 (interfaz web)**
  - Email 1 (Jean Nascar): ID 1282
  - Email 2 (Blazer Mendoza): ID 1283
  - Email 3 (Sweater Nievre): ID 1284
  - Email 4 (Camisa Brisa): ID 1285
  - Email 5 (Combo 3 piezas): ID 1286
  - Email 6 (Remate urgencia): ID 1287
- Próximo paso: Mail con Diego Sánchez (Perfit Engineering Manager) en progreso para resolver API issue

## 2026-06-09 · Sistema Automático · Retroalimentación Vitalis cada 48hs

- **Activación:** Sistema de análisis automático de performance cada 48 horas
- **Skill:** `skills/analizar-performance-klaviyo.md` (nuevo)
- **Herramienta:** Agente cloud vía `/schedule` skill, cron cada 2 días a las 9am Argentina (12:00 UTC)
- **Almacenamiento:** `retroalimentacion-vitalis/AAAA-MM-DD-ciclo-N.md` (uno por ciclo)
- **Primer análisis:** Ciclo 00 (histórico) — 100 campañas mayo-junio 2026
- **Benchmarks internos Vitalis** (referencias, no absolutos):
  - Open Rate mínimo aceptable: 10%
  - Open Rate bueno: 15%+
  - CTR mínimo: 0.5%
  - CTR bueno: 2%+
  - Bounce Rate máximo: 2% (crítico si > 5%)
  - Unsubscribe máximo: 0.3%
- **Comparación:** Solo contra datos propios de Vitalis — ciclo a ciclo, no benchmarks externos
- **Cómo funciona:**
  1. Cada 48hs, agente trae campañas Vitalis enviadas recientemente desde Klaviyo
  2. Analiza performance: open rate, CTR, bounce, unsubscribe
  3. Detecta patrones ganadores y perdedores
  4. Genera archivo nuevo de ciclo con hallazgos
  5. Reporta a Mica con top insights
  6. Emi aplica reglas en próxima campaña
- **Próximo paso:** Leer ciclo 00 (2026-06-09), aplicar reglas en Vitalis Navitas emails próximos

## 2026-06-09 · Skill · Crear Campaña en Perfit por API

- **Ubicación:** `skills/crear-campana-perfit-api.md`
- **Propósito:** Automatizar creación de campañas completas en Perfit (sin interfaz web)
- **Alcance:** Cualquier cuenta Perfit de clientes ZAS
- **Flujo:** 10 pasos (crear campaña → crear template → HTML → sender → validar → opcionalmente lanzar)
- **Opciones de lanzamiento:** DRAFT (borrador), NOW (inmediato), SCHEDULED (programado)
- **Script base:** `create_campaign_script/create_campaign.py` (con opción --draft)
- **Uso:** Python 3, sin dependencias externas
- **Caso de uso real:** Simona Shop 6 campañas fin de semana (2026-06-09 validado - IDs 1309-1314)

### Artefactos creados

1. **Skill documentado:** `skills/crear-campana-perfit-api.md` - Guía completa con procedimiento, argumentos, ejemplos
2. **Script batch:** `batch_create_campaigns.py` - Crear múltiples campañas desde JSON config en un comando
3. **Config ejemplo:** `batch_config_example.json` - Plantilla de configuración (Simona 6 campañas)
4. **Script draft:** `create_campaign_script/create_campaign.py` - Versión con --draft flag (crear sin lanzar)

### Cómo usar

**Opción 1 - Una campaña por vez:**
```bash
python3 create_campaign_script/create_campaign.py \
  --account simonashop --api-key $PERFIT_API_KEY \
  --name "Mi Campaña" --subject "Asunto" \
  --sender-id sen_xxx --html-file email.html \
  --list-ids 1 --draft
```

**Opción 2 - Batch de múltiples campañas:**
```bash
python3 batch_create_campaigns.py --config batch_config_example.json
```

### Próximas mejoras
- Integración con workflows Emi para crear campañas automáticamente después de QA
- UI Perfit para visualizar IDs creados
- Sincronización bidireccional (traer performance desde Perfit)

## 2026-06-09 · Sistema Automático · Retroalimentación Perfit cada 48hs

- **Activación:** Sistema de análisis automático de performance cada 48 horas para todas las cuentas Perfit
- **Skill:** `skills/analizar-performance-perfit.md`
- **Script:** `analizar_performance_perfit.py`
- **Herramienta:** Agente cloud vía `/schedule`, cron cada 2 días a las 9am Argentina (12:00 UTC)
- **Almacenamiento:** `retroalimentacion-perfit/{account}-AAAA-MM-DD-ciclo-N.md` (uno por cuenta, por ciclo)
- **Cuentas monitoreadas:** Se leen desde `retroalimentacion-perfit/cuentas.json`
- **Cuentas activas en la rutina (2026-07-07):**
  - simonashop (Simona Shop)
  - juanitas (Juanitas)
  - magnolias (Magnolias Deco)
  - zoetienda (Tienda ZOE)
  - tessel (Tessel Home)
- **Excluidas a pedido de Mica:** Living Tree y ERJ (instagrammyh) — quedan fuera de la rutina automática hasta nuevo aviso.
- **Benchmarks internos Perfit** (referencias, no absolutos):
  - Open Rate mínimo aceptable: 5%
  - Open Rate bueno: 10%+
  - CTR mínimo: 0.3%
  - CTR bueno: 1%+
  - Bounce Rate máximo: 3% (crítico si > 5%)
  - Unsubscribe máximo: 0.2%
- **Comparación:** Solo contra datos propios de cada cuenta — ciclo a ciclo, no benchmarks externos
- **Cómo funciona:**
  1. Cada 48hs, script trae campañas enviadas recientemente desde Perfit (por cada cuenta)
  2. Analiza performance: open rate, CTR, bounce, unsubscribe
  3. Detecta patrones ganadores y perdedores
  4. Genera archivo nuevo de ciclo con hallazgos (uno por account)
  5. Reporta a Mica con top insights
  6. Emi aplica reglas en próximas campañas
- **Seguridad:**
  - API keys en `cuentas.json` NO commitear a git
  - Archivo está en `.gitignore`
- **Próximo paso:** Agregar más cuentas a `cuentas.json` (una por cliente Perfit), leer reportes después de cada ciclo

## 2026-06-10 · CRÍTICO · Klaviyo MCP es obligatorio

- **Regla:** SOLO usar MCP de Klaviyo para crear campañas, templates y actualizaciones
- **NO usar:** API requests directos, curl, tokens, ni scripts de requests
- **Por qué:** MCP maneja autenticación, formato de payload y versionado automáticamente
- **Flujo correcto:**
  1. Crear template con `mcp__claude_ai_Klaviyo__klaviyo_create_email_template`
  2. Crear campaña con `mcp__claude_ai_Klaviyo__klaviyo_create_campaign` (incluye campaignMessages)
  3. Asignar template con `mcp__claude_ai_Klaviyo__klaviyo_assign_template_to_campaign_message`
  4. NO crear scripts con requests — el MCP es la única interfaz válida
- **Documentación:** Ver `KLAVIYO-MCP-PROCEDURE.md` en carpeta de marcas (global, no por campaña)
- **Aplicar en:** Todos los clientes que usen Klaviyo (Vitalis, futuros)

## 2026-06-09 · Sistema Completo · Análisis → Propuestas → Creación → Envío

### Descripción

Sistema end-to-end que automatiza:
1. **Análisis de performance** (cada 48hs)
2. **Generación de 3 propuestas de campaña** basadas en patrones ganadores
3. **Aprobación manual** de propuestas (editar asuntos, cambiar estado a "aprobada")
4. **Creación en borrador** en Perfit (sin HTML)
5. **Emi agrega HTML** personalizado
6. **Validación manual** en Perfit
7. **Envío final** (lanzar campañas)

### Flujo principal

```
Análisis automático (48hs)
    ↓
Genera 3 propuestas → Tú apruebas
    ↓
Crea en borrador (Perfit)
    ↓
Emi agrega HTML
    ↓
Tú validas en Perfit
    ↓
Lanza campañas → Monitorear performance
```

### Artefactos creados

1. **Skill actualizado:** `skills/analizar-performance-perfit.md`
   - Ahora incluye generación de propuestas
   - Detalla qué datos genera

2. **Scripts Python:**
   - `analizar_performance_perfit.py` — Análisis + generación de propuestas
   - `crear_campanas_aprobadas.py` — Crear drafts en Perfit desde propuestas aprobadas
   - `enviar_campanas_aprobadas.py` — Lanzar campañas aprobadas y validadas

3. **Documentación:**
   - `FLUJO_RETROALIMENTACION_Y_PROPUESTAS.md` — Guía visual y completa del workflow

### Archivos JSON generados por ciclo

- `{account}-AAAA-MM-DD-ciclo-N.md` — Reporte de análisis
- `{account}-AAAA-MM-DD-propuestas.json` — 3 propuestas para revisar/editar
- `{account}-AAAA-MM-DD-propuestas-creadas.json` — Campañas creadas en Perfit
- `{account}-AAAA-MM-DD-envios.json` — Reporte de envío final

### Próximas mejoras

- Script para que Emi agregue HTML automáticamente (`subir_html_a_campanas_creadas.py`)
- Integración con `/schedule` para programar rutina automática
- Dashboard para visualizar propuestas y performance ciclo a ciclo

## 2026-06-23 · Magnolias · Caja Seagrass
- Se validó en la ficha pública que `Caja Seagrass Santi` cambió respecto del valor anterior.
- Regla nueva: revalidar precio y efectivo justo antes de cerrar el HTML cuando el producto es mail de venta directa.
- Regla nueva: si la ficha muestra "último" o stock no consolidado, no prometer cantidad exacta en el email.
- Aplicar en: campañas de venta directa de Magnolias y rearmados de piezas con producto protagonista.

## 2026-06-23 · Magnolias · Financiación
- Corrección recibida: Magnolias no tiene 12 cuotas y no debe mencionarse.
- Regla nueva: no poner `12 cuotas` ni equivalentes en Magnolias salvo confirmación explícita y actual de Mica o de la tienda.
- Regla nueva: si no hay financiación validada, comunicar solo precio publicado, efectivo destacado y beneficios reales de la ficha.
- Aplicar en: todas las campañas nuevas y rearmados de Magnolias Deco.

## 2026-06-23 · Magnolias · Mobile layout
- Corrección recibida: algunos bloques de Magnolias se veían descentrados o cortados en celular.
- Regla nueva: en Magnolias, las cards apiladas deben llevar reset de paddings en mobile para que imagen, copy y CTA queden centrados y sin cortes.
- Regla nueva: revisar siempre la vista mobile antes de cerrar el HTML y antes de sincronizarlo en Perfit.
- Aplicar en: todas las campañas nuevas de Magnolias Deco.

## 2026-06-23 · Juanitas · Últimos 7 envíos y split de bases

- Últimos 7 envíos reales detectados en Perfit al 2026-06-23: `765`, `764`, `763`, `762`, `761`, `759`, `758`.
- Hallazgo: `764` a `758` fueron envíos amplios a `i18n_masterlist` / lista `0`, mientras que `765` sí salió segmentado a compradores y actividad alta.
- Regla nueva: en Juanitas, si el último envío ya fue segmentado, el siguiente split debe separar compradores vs. leads/actividad y evitar repetir el mismo universo.
- Regla nueva: revisar include/exclude antes de subir un draft para no volver a impactar los mismos contactos.
- Drafts creados en Perfit el 2026-06-23:
  - `768` · `[EMI] Juanitas - Corpiño taza soft - 23/06` · incluye `2, 9, 11, 12` y excluye `6, 7, 28, 29, 31, 34, 41, 43, 44, 45`.
  - `769` · `[EMI] Juanitas - Colaless tiro alto - 23/06` · incluye `28, 31, 34, 44, 45` y excluye `2, 6, 7, 9, 11, 12, 29, 41, 43`.
- Aplicar en: próximas secuencias dobles de Juanitas y cualquier split de buyer/lead que siga a un envío segmentado reciente.

## 2026-07-07 · Verificación de conexión · Campaña de prueba en borrador en 6 cuentas

- Contexto: Mica pidió confirmar que Perfit y Klaviyo estaban conectados para crear/programar campañas, y probarlo con una campaña técnica en borrador (no comercial, sin promociones) en todas las cuentas activas.
- HTML de prueba: `campanas/test-conexion-2026-07-07/test-tecnico-emi.html` (versión Perfit con `${urls.unsubscribe}`; versión Klaviyo con `{% unsubscribe 'Desuscribirse' %}`).
- Resultado — todas quedaron en DRAFT, ninguna programada ni enviada:
  - Simona Shop: campaign id `1379`, template `tpl_cmrarkzxu9c1x0996uo05rm9y`, lista `20` (Campeones).
  - Juanitas: campaign id `790`, template `tpl_cmrarl45d9bt20a04vtb79vdc`, lista `5` (Campeones).
  - Magnolias Deco: campaign id `904`, template `tpl_cmrarl7qn9bn40978qc3oltcj`, lista `10` (Campeones).
  - Tienda ZOE: campaign id `55`, template `tpl_cmrarlbgo9bt40a04q7k3s7yp`, lista `3` (Campeones).
  - Tessel Home: campaign id `37`, template `tpl_cmrarlfu69bnd0978s4nxy5ap`, lista `5` (Campeones).
  - Vitalis Navitas (Klaviyo): campaign id `01KWYGY5C1QYSMH4PP2P9GCRJA`, template `V7MwS2`, segmento `QZCHsg` (Vieron Bisglicinato y no compraron).
- Regla nueva: el campo `name` de campaña en Perfit tiene máximo 50 caracteres — validar longitud antes de crear (error `VALIDATION_ERROR` si se excede).
- Aplicar en: cualquier verificación futura de conexión o test técnico multi-cuenta.

## 2026-07-09 · Rutina automática Perfit · Ciclo BLOQUEADO — sin reportes generados

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas).
- **Bloqueo 1 — red:** el entorno cloud de esta sesión rechaza la conexión saliente a `pem-lb.myperfit.com` (proxy devuelve `403 Forbidden` en el CONNECT, `connect_rejected` por política de red del entorno). No se pudo hacer ningún request a la API de Perfit, ni siquiera para simonashop. Verificado con `curl` directo y con Python `urllib` — mismo resultado.
- **Bloqueo 2 — configuración:** independientemente de la red, `retroalimentacion-perfit/cuentas.json` solo tiene la `api_key` de `simonashop`. Faltan las keys de juanitas, magnolias, zoetienda y tessel — pendiente desde el 2026-06-09 (ver entrada de esa fecha) y no resuelto pese a que las 5 cuentas están confirmadas como activas y conectadas (test de conexión 2026-07-07).
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance — no hay reporte parcial ni siquiera para simonashop.
- No se tocó ningún archivo de ciclos anteriores.
- **Pendiente para Mica / infraestructura:**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- Aplicar en: próxima corrida de la rutina — reintentar apenas se resuelva el bloqueo de red; no reintentar automáticamente sin intervención porque el bloqueo es de infraestructura, no transitorio.

## 2026-07-10 · Rutina automática Perfit · Ciclo BLOQUEADO otra vez — mismos dos bloqueos sin resolver

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy. Sigue sin habilitarse.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, van dos ciclos (07-09 y hoy) sin resolverse pese al pedido explícito.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada).
- No se tocó ningún archivo de ciclos anteriores.
- **Pendiente para Mica / infraestructura (repetido, sin avance desde 07-09):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- Aplicar en: próxima corrida — si para el próximo ciclo ninguno de los dos bloqueos se resolvió, evaluar si tiene sentido seguir reintentando la rutina diaria sin cambios, o pausarla hasta que infraestructura resuelva esto.

## 2026-07-11 · Rutina automática Perfit · Ciclo BLOQUEADO tercer día consecutivo — sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-11T12:05:15Z). Sigue exactamente igual que 07-09 y 07-10.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, van tres ciclos (07-09, 07-10 y hoy) sin resolverse pese al pedido explícito. Se buscó en el resto del repo por si las keys faltantes estaban en otro lado (scripts de campañas, `.env`, docs de credenciales): solo apareció la key de `magnolias` hardcodeada en `campanas/magnolias-deco-bajo-50k-mantas-2026-06-25/update_perfit_drafts.py` (no se copió a `cuentas.json` sin confirmación de Mica, y de todos modos el bloqueo de red impide usarla hoy). Siguen sin aparecer las de juanitas, zoetienda y tessel.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores.
- **Pendiente para Mica / infraestructura (repetido, van 3 ciclos sin avance):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- **Recomendación:** este es el tercer ciclo idéntico sin ningún avance en los dos bloqueos. Sugiero pausar la rutina diaria (o bajar su frecuencia) hasta que infraestructura resuelva al menos el bloqueo de red, en vez de seguir corriendo en automático sin producir ningún resultado.

## 2026-07-13 · Rutina automática Perfit · Ciclo BLOQUEADO — cuarto+ día consecutivo, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica). No hay entrada de ciclo para 2026-07-12 en esta memoria ni commit asociado — esa corrida no quedó registrada (no se puede determinar desde acá si no se ejecutó o si falló antes de loguear).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-13T12:05:29Z). Idéntico a 07-09, 07-10 y 07-11.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes sin resolverse pese al pedido explícito.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores.
- **Pendiente para Mica / infraestructura (repetido, van al menos 4 ciclos sin avance):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- **Recomendación:** se repite la recomendación de 07-11 sin que se haya tomado acción — sugiero pausar esta rutina diaria hasta que se resuelva al menos uno de los dos bloqueos, en vez de seguir consumiendo ciclos de ejecución sin producir ningún reporte.

## 2026-07-14 · Rutina automática Perfit · Ciclo BLOQUEADO — quinto+ día consecutivo, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. Idéntico a 07-09, 07-10, 07-11 y 07-13.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, ya más de un mes sin resolverse pese al pedido explícito.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores.
- **Pendiente para Mica / infraestructura (repetido, van al menos 5 ciclos sin avance):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- **Recomendación:** se repite la recomendación de 07-11 y 07-13 sin que se haya tomado acción alguna sobre ninguno de los dos bloqueos — se reitera pausar esta rutina diaria hasta que infraestructura resuelva al menos uno de los dos, en vez de seguir consumiendo ciclos de ejecución sin producir ningún reporte.

## 2026-07-15 · Rutina automática Perfit · Ciclo BLOQUEADO — sexto+ día consecutivo, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-15T12:04:24Z). Idéntico a 07-09, 07-10, 07-11, 07-13 y 07-14.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes sin resolverse pese al pedido explícito.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores.
- **Pendiente para Mica / infraestructura (repetido, van al menos 6 ciclos sin avance):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- **Recomendación:** se repite por cuarta vez consecutiva (07-11, 07-13, 07-14 y hoy) sin que se haya tomado acción alguna sobre ninguno de los dos bloqueos — se reitera pausar esta rutina diaria hasta que infraestructura resuelva al menos uno de los dos, en vez de seguir consumiendo ciclos de ejecución sin producir ningún reporte.

## 2026-07-16 · Rutina automática Perfit · Ciclo BLOQUEADO — séptimo+ día consecutivo, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-16T12:04:58Z). Idéntico a 07-09, 07-10, 07-11, 07-13, 07-14 y 07-15.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes sin resolverse pese al pedido explícito. Se volvió a buscar en env vars y en el resto del repo por si aparecieron keys nuevas — no aparecieron.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores.
- **Pendiente para Mica / infraestructura (repetido, van al menos 7 ciclos sin avance):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- **Recomendación:** quinta vez consecutiva (07-11, 07-13, 07-14, 07-15 y hoy) sin ninguna acción sobre los dos bloqueos. Se avisa a Mica por notificación hoy en vez de solo dejarlo en memoria, porque ya lleva más de un mes sin resolverse. Se reitera pausar esta rutina diaria hasta que infraestructura resuelva al menos uno de los dos bloqueos.

## 2026-07-18 · Rutina automática Perfit · Ciclo BLOQUEADO — octavo+ día consecutivo, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica). No hay entrada de ciclo para 2026-07-17 en esta memoria ni commit asociado — esa corrida tampoco quedó registrada (mismo patrón que el hueco de 07-12).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-18T12:04:29Z). Se corrió también `python3 analizar_performance_perfit.py` directamente — mismo error (`Tunnel connection failed: 403 Forbidden`) para simonashop, la única cuenta con key configurada. Idéntico a 07-09, 07-10, 07-11, 07-13, 07-14, 07-15 y 07-16.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes sin resolverse pese al pedido explícito.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API (el script actual confunde este caso con "sin campañas", pero no es así: es un fallo de red).
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido, van al menos 8 ciclos sin avance en más de un mes):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- **Recomendación:** se repite por sexta vez consecutiva (07-11, 07-13, 07-14, 07-15, 07-16 y hoy) sin ninguna acción sobre ninguno de los dos bloqueos. Se notifica a Mica de nuevo. Se reitera con más fuerza: pausar esta rutina diaria hasta que se resuelva al menos uno de los dos bloqueos — seguir corriendo a diario sin cambios en la causa raíz ya no aporta información nueva.

## 2026-07-19 · Rutina automática Perfit · Ciclo BLOQUEADO — noveno+ día consecutivo, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. Se corrió también `python3 analizar_performance_perfit.py` directamente — mismo error (`Tunnel connection failed: 403 Forbidden`) para simonashop, la única cuenta con key configurada. Idéntico a 07-09, 07-10, 07-11, 07-13, 07-14, 07-15, 07-16 y 07-18.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes sin resolverse pese al pedido explícito.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido, van al menos 9 ciclos sin avance en más de un mes):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
- **Notificación:** no se envía push hoy — el estado es idéntico al ya notificado el 07-18 (mismos dos bloqueos, sin novedad), y una alerta repetida sin información nueva no aporta valor. Se retoma la notificación si hay cambio de estado o pasan varios días más sin ninguna señal de avance.

## 2026-07-20 · Rutina automática Perfit · Ciclo BLOQUEADO — décimo+ día consecutivo, sin avance + hallazgo nuevo de seguridad

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-20T12:05:06Z). Se corrió también `python3 analizar_performance_perfit.py` directamente — mismo error (`Tunnel connection failed: 403 Forbidden`) para simonashop, la única cuenta con key configurada. Idéntico a todos los ciclos desde 07-09.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes sin resolverse pese al pedido explícito.
- **Hallazgo nuevo — seguridad:** la entrada del 2026-06-09 en esta misma memoria daba por hecho que `retroalimentacion-perfit/cuentas.json` estaba en `.gitignore` ("Archivo está en `.gitignore`"). Se verificó hoy y **es falso**: el archivo está trackeado en git desde el commit `a59c006` ("Add files via upload"), no aparece en ningún `.gitignore` del repo (`git check-ignore` no lo reconoce), y por lo tanto la `api_key` de simonashop está expuesta en el historial del repo desde ese commit. No se tocó el archivo ni se intentó reescribir historia de git (acción destructiva que requiere confirmación explícita de Mica). Recomendación: (a) rotar la `api_key` de simonashop en Perfit, (b) agregar `retroalimentacion-perfit/cuentas.json` a un `.gitignore`, (c) evaluar si conviene limpiar el historial de git (`git filter-repo` o similar) — esto último es una operación destructiva sobre historia compartida y no se debe hacer sin autorización explícita.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido, van al menos 10 ciclos sin avance en más de un mes, + 1 hallazgo nuevo):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
  3. **Nuevo:** rotar la `api_key` de simonashop (expuesta en historial de git) y agregar `cuentas.json` a `.gitignore`.
- **Notificación:** se envía push hoy — aunque los dos bloqueos de red/config no cambiaron, el hallazgo de la API key expuesta en git es información nueva y accionable que Mica debe conocer ahora, no solo quedar en memoria.

## 2026-07-21 · Rutina automática Perfit · Ciclo BLOQUEADO — undécimo+ día consecutivo, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-21T12:05:34Z). Se corrió también `python3 analizar_performance_perfit.py` directamente — mismo error (`Tunnel connection failed: 403 Forbidden`) para simonashop, la única cuenta con key configurada. Idéntico a todos los ciclos desde 07-09.
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes sin resolverse pese al pedido explícito.
- **Seguridad:** se verificó de nuevo si `retroalimentacion-perfit/cuentas.json` quedó en `.gitignore` tras el hallazgo del 07-20 — sigue sin estarlo (no existe ningún `.gitignore` en el repo) y la `api_key` de simonashop sigue expuesta en el historial de git sin rotar.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido, van al menos 11 ciclos sin avance en más de un mes):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`) y agregar `cuentas.json` a `.gitignore`.
- **Notificación:** no se envía push hoy — el estado es idéntico al ya notificado el 07-20 (mismos dos bloqueos + mismo hallazgo de seguridad, sin novedad), y una alerta repetida sin información nueva no aporta valor. Se retoma la notificación si hay cambio de estado, o si pasan varios días más sin ninguna señal de avance sobre la rotación de la key expuesta.

## 2026-07-22 · Rutina automática Perfit · Ciclo BLOQUEADO — duodécimo+ día consecutivo, sin avance en ningún pendiente

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido explícito de Mica).
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-22T12:04:56Z). Se corrió también `python3 analizar_performance_perfit.py` directamente — mismo error (`Tunnel connection failed: 403 Forbidden`) para simonashop, la única cuenta con key configurada. Idéntico a todos los ciclos desde 07-09 (14 días corridos, con huecos de registro en 07-12 y 07-17).
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes y medio sin resolverse pese al pedido explícito.
- **Seguridad:** se verificó de nuevo si `retroalimentacion-perfit/cuentas.json` quedó en `.gitignore` tras el hallazgo del 07-20 — sigue sin estarlo (el único `.gitignore` del repo, en `centro-mando-zas/.gitignore`, solo cubre `.DS_Store`) y la `api_key` de simonashop sigue expuesta en el historial de git (commit `a59c006`) sin rotar. Van 3 días desde que se reportó este hallazgo sin ninguna acción.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido, van al menos 12 ciclos sin avance en más de un mes y medio):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`) y agregar `cuentas.json` a `.gitignore`.
- **Notificación:** se envía push hoy — se cumplen 2 semanas corridas de rutina bloqueada sin ninguna acción sobre ninguno de los 3 pendientes (incluyendo la key expuesta, que ya lleva 3 días sin rotar desde que se reportó). Es un punto de escalamiento razonable aunque el estado técnico no cambió desde el 07-20.

## 2026-07-23 · Rutina automática Perfit · Ciclo BLOQUEADO — décimotercer+ día consecutivo, sin avance en ningún pendiente

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido explícito de Mica).
- **Bloqueo 1 — red:** verificado con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-23T12:05:06Z). Se corrió también `python3 analizar_performance_perfit.py` directamente — mismo error (`Tunnel connection failed: 403 Forbidden`) para simonashop, la única cuenta con key configurada. Idéntico a todos los ciclos desde 07-09 (15 días corridos, con huecos de registro en 07-12 y 07-17).
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09, más de un mes y medio sin resolverse pese al pedido explícito.
- **Seguridad:** se verificó de nuevo si `retroalimentacion-perfit/cuentas.json` quedó en `.gitignore` tras el hallazgo del 07-20 — sigue sin estarlo, y la `api_key` de simonashop (misma key, sin rotar — se confirmó que el sufijo no cambió) sigue expuesta en el historial de git (commit `a59c006`). Van 4 días desde que se reportó este hallazgo sin ninguna acción.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido, van al menos 13 ciclos sin avance en más de un mes y medio):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso).
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`) y agregar `cuentas.json` a `.gitignore`.
- **Notificación:** no se envía push hoy — el estado es idéntico al ya notificado el 07-22 (mismos 3 pendientes, sin novedad), y una alerta repetida sin información nueva no aporta valor. Se retoma la notificación si hay cambio de estado, o si pasa una semana más sin ninguna señal de avance sobre la rotación de la key expuesta.

## 2026-07-26 · Rutina automática Perfit · Ciclo BLOQUEADO — mismos 3 pendientes, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido explícito de Mica). Nota: no hay registro en esta memoria para 07-24 ni 07-25 — no se sabe si la rutina corrió esos días y no se registró, o no corrió; no se especula más al respecto.
- Se actualizó primero el checkout local a `origin/main` (estaba desactualizado por commits de la rutina de Vitalis del 07-24 y 07-25, sin relación con Perfit) antes de tocar nada.
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-26T12:06:03Z). Mismo bloqueo desde 07-09 (17 días corridos desde el primer bloqueo).
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09 (47 días, más de 6 semanas sin resolverse pese al pedido explícito).
- **Seguridad:** `retroalimentacion-perfit/cuentas.json` sigue sin estar en ningún `.gitignore` del repo (el único `.gitignore`, en `centro-mando-zas/.gitignore`, solo cubre `.DS_Store`), y la `api_key` de simonashop (mismo commit `a59c006`, mismo sufijo — no rotada) sigue expuesta en el historial de git. Van 6 días desde que se reportó este hallazgo (07-20) sin ninguna acción.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso) — 17 días bloqueado.
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel — 47 días pendiente.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`) y agregar `cuentas.json` a `.gitignore` — 6 días desde que se reportó.
- **Notificación:** no se envía push hoy — el estado es idéntico al ya notificado el 07-22 (mismos 3 pendientes, sin cambios), y todavía no se cumple el umbral que la propia rutina se fijó el 07-23 (una semana sin avance en la rotación de la key expuesta, que se cumple el 07-27). Se retoma la notificación mañana si sigue sin rotarse, o antes si cambia el estado de red/configuración.

## 2026-07-27 · Rutina automática Perfit · Ciclo BLOQUEADO — mismos 3 pendientes, se cumple el umbral de una semana sin rotar la key expuesta

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido explícito de Mica). Checkout local ya estaba sincronizado con `origin/main` (`faccefc`), sin commits pendientes de traer para esta carpeta.
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El proxy del entorno sigue rechazando el `CONNECT` a `pem-lb.myperfit.com:443` con 403 (policy denial). Mismo bloqueo desde 07-09 (18 días corridos desde el primer bloqueo).
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09 (48 días).
- **Seguridad:** `retroalimentacion-perfit/cuentas.json` sigue sin estar en ningún `.gitignore` del repo (el único `.gitignore`, en `centro-mando-zas/.gitignore`, solo cubre `.DS_Store`), y la `api_key` de simonashop (mismo commit `a59c006`, mismo sufijo — no rotada) sigue expuesta en el historial de git. Se cumplen hoy 7 días desde que se reportó este hallazgo (07-20) sin ninguna acción — el umbral que la propia rutina se fijó el 07-23 para volver a notificar.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso) — 18 días bloqueado.
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel — 48 días pendiente.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`) y agregar `cuentas.json` a `.gitignore` — 7 días desde que se reportó, umbral cumplido hoy.
- **Notificación:** se envía push hoy — se cumple el umbral de una semana sin rotar la key expuesta que la rutina se fijó el 07-23, sumado a que se cumplen 18 días corridos de bloqueo de red y casi 7 semanas sin completar las api_key faltantes.

## 2026-07-28 · Rutina automática Perfit · Ciclo BLOQUEADO — mismos 3 pendientes, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido explícito de Mica). Checkout local ya estaba sincronizado con `origin/main`, sin commits pendientes de traer para esta carpeta.
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-28T12:07:25Z). Mismo bloqueo desde 07-09 (19 días corridos).
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09 (49 días).
- **Seguridad:** `retroalimentacion-perfit/cuentas.json` sigue sin estar en ningún `.gitignore` del repo (el único `.gitignore`, en `centro-mando-zas/.gitignore`, solo cubre `.DS_Store`), y la `api_key` de simonashop (mismo commit `a59c006`, mismo sufijo — no rotada) sigue expuesta en el historial de git. Van 8 días desde que se reportó este hallazgo (07-20) sin ninguna acción.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso) — 19 días bloqueado.
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel — 49 días pendiente.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`) y agregar `cuentas.json` a `.gitignore` — 8 días desde que se reportó.
- **Notificación:** no se envía push hoy — el estado es idéntico al ya notificado el 07-27 (mismos 3 pendientes, sin cambios de fondo), y una alerta repetida sin información nueva no aporta valor. Se retoma la notificación si cambia el estado de red/configuración, o si pasa otra semana sin ninguna señal de avance.

## 2026-07-29 · Rutina automática Perfit · Ciclo BLOQUEADO — mismos 3 pendientes, sin avance

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido explícito de Mica). Checkout local estaba desactualizado (8 commits detrás de `origin/main`, rutina Vitalis ciclos 29-33 y rutina Perfit 07-28, sin relación con este ciclo) — se sincronizó con `git checkout main && git pull` antes de tocar nada.
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → `CONNECT tunnel failed, response 403`. El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-29T12:06:53Z). Mismo bloqueo desde 07-09 (20 días corridos).
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09 (50 días).
- **Seguridad:** `retroalimentacion-perfit/cuentas.json` sigue sin estar en ningún `.gitignore` del repo (el único `.gitignore`, en `centro-mando-zas/.gitignore`, solo cubre `.DS_Store`), y la `api_key` de simonashop (mismo commit `a59c006`, mismo sufijo — no rotada) sigue expuesta en el historial de git. Van 9 días desde que se reportó este hallazgo (07-20) sin ninguna acción.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key.
- **Pendiente para Mica / infraestructura (repetido):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso) — 20 días bloqueado.
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel — 50 días pendiente.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`) y agregar `cuentas.json` a `.gitignore` — 9 días desde que se reportó.
- **Notificación:** no se envía push hoy — el estado es idéntico al ya notificado el 07-27 (mismos 3 pendientes, sin cambios de fondo), y todavía no se cumple el umbral fijado el 07-28 (otra semana sin avance, se cumple el 08-03). Se retoma la notificación antes si cambia el estado de red/configuración.

## 2026-07-30 · Rutina automática Perfit · Ciclo BLOQUEADO — mismos 3 pendientes, un detalle nuevo (no cambia el bloqueo de fondo)

- Contexto: corrida automática diaria (24hs) de `analizar-performance-perfit.md` para simonashop, juanitas, magnolias, zoetienda y tessel (Living Tree y ERJ siguen excluidas a pedido explícito de Mica). Checkout local estaba desactualizado (10 commits detrás de `origin/main`, rutina Vitalis ciclos 29-34 y rutina Perfit 07-29, sin relación con este ciclo) — se sincronizó con `git checkout main && git pull` antes de tocar nada.
- **Bloqueo 1 — red:** verificado de nuevo con `curl` directo a `https://pem-lb.myperfit.com/v2/simonashop/campaigns` → sin respuesta HTTP (connect timeout). El status del proxy del entorno confirma `connect_rejected` / "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `pem-lb.myperfit.com:443`, timestamp de hoy (2026-07-30T12:06:09Z). Mismo bloqueo desde 07-09 (21 días corridos).
- **Bloqueo 2 — configuración:** `retroalimentacion-perfit/cuentas.json` sigue teniendo solo la `api_key` de `simonashop`. Siguen faltando las de juanitas, magnolias, zoetienda y tessel — pendiente desde 2026-06-09 (51 días).
- **Seguridad — detalle nuevo:** al revisar `skills/analizar-performance-perfit.md` (paso 1, ejemplo de `cuentas.json`) se confirmó que el "ejemplo" de api_key de simonashop ahí escrito **no es un placeholder — es la key real, carácter por carácter idéntica** a la que sigue activa hoy en `retroalimentacion-perfit/cuentas.json`. Mismo commit de origen (`a59c006`, "Add files via upload") que ya exponía la key vía `cuentas.json` — no es un hallazgo de una fuga nueva/separada, pero sí confirma que la key vive expuesta en **dos archivos** del historial de git, no uno, y que cualquiera que lea el skill como documentación puede asumir que ese valor es un ejemplo genérico y copiarlo/compartirlo sin saber que es una credencial viva. Esto refuerza (no reemplaza) la recomendación ya pendiente de rotar la key y agregar `cuentas.json` a `.gitignore` — al rotar, también conviene reemplazar el ejemplo del skill por un placeholder genérico (`"api_key": "xxx"`, como ya usa el segundo ejemplo del mismo bloque). `cuentas.json` sigue sin estar en ningún `.gitignore` del repo (el único `.gitignore`, en `centro-mando-zas/.gitignore`, solo cubre `.DS_Store`), y la key (mismo sufijo, no rotada) sigue expuesta. Van 10 días desde que se reportó el hallazgo original (07-20) sin ninguna acción.
- Resultado: **no se generó ningún archivo `-ciclo-N.md` nuevo hoy** para ninguna cuenta. No se inventaron datos de performance ni siquiera para simonashop (aunque tiene key, la red sigue bloqueada). No se generó ningún archivo "sin envíos" — eso implicaría afirmar que sabemos que no hubo campañas, cuando en realidad no pudimos ni consultar la API.
- No se tocó ningún archivo de ciclos anteriores. No se imprimió ni escribió ninguna api_key (ni siquiera al documentar este hallazgo — se describe la ubicación, no el valor).
- **Pendiente para Mica / infraestructura (repetido):**
  1. Habilitar `pem-lb.myperfit.com` en la política de red del entorno cloud usado por esta rutina (o mover la ejecución a un entorno con acceso) — 21 días bloqueado.
  2. Completar `retroalimentacion-perfit/cuentas.json` con las `api_key` de juanitas, magnolias, zoetienda y tessel — 51 días pendiente.
  3. Rotar la `api_key` de simonashop (expuesta en historial de git desde el commit `a59c006`, en dos archivos: `cuentas.json` y `skills/analizar-performance-perfit.md`) y agregar `cuentas.json` a `.gitignore` — 10 días desde que se reportó. Al rotar, reemplazar también el ejemplo hardcodeado en el skill por un placeholder genérico.
- **Notificación:** no se envía push hoy — los dos bloqueos de fondo (red y config) siguen exactamente iguales, el umbral fijado el 07-28 recién se cumple el 08-03, y el detalle nuevo de seguridad es la misma exposición ya reportada (mismo commit, misma key) apareciendo en un segundo archivo — no un vector de fuga distinto que amerite una alerta fuera de ciclo. Se retoma la notificación el 08-03 si sigue sin rotarse, o antes si cambia el estado de red/configuración.
