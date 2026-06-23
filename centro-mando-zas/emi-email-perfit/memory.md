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
- Marcas iniciales prioritarias: Vitalis Navitas, Mini Ánima, Simona Shop, Magnolias Deco, Juanitas, Tessel, Living Tree y Zoe Tienda.
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
- **Cuentas iniciales:**
  - simonashop (Simona Shop)
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
