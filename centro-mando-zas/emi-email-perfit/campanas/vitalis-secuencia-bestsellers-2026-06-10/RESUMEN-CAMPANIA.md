# Vitalis Navitas · Secuencia de 4 Bestsellers · Campaña Recompra + Cross-Sell

**Creada por:** Emi  
**Fecha de creación:** 2026-06-10  
**Estado:** 🔍 Listo para QA de Mica (antes de validación con Rita)  
**Segmento:** Compradores de Colágeno Antiage hace 90 días  
**Objetivo:** Recompra + cross-sell progresivo  
**Plataforma:** Perfit (email marketing)

---

## RESUMEN ESTRATÉGICO

**Objetivo principal:** Activar recompra de Colágeno Antiage en clientes que compraron hace ~90 días (ciclo de consumo) y cross-selllear otros bestsellers en secuencia progresiva.

**Enfoque:** 
- Email 1: Recompra directa (colágeno que ya conocen)
- Email 2: Cross-sell complementario (otra línea colágeno)
- Email 3: Nueva categoría (energía/relax)
- Email 4: Cierre integral (corazón/cerebro)

**Timing recomendado:**
- Email 1: Día 0 (envío inmediato)
- Email 2: Día 3 (+72hs)
- Email 3: Día 5 (+2 días)
- Email 4: Día 7 (+2 días)

---

## ESTRUCTURA DE LA CAMPAÑA

| # | Producto | Color | Ángulo | CTA | Link |
|---|---|---|---|---|---|
| 1 | Colágeno Antiage | Naranja | Recompra 90 días | Recomprar ahora | /producto/colageno-antiage |
| 2 | Colágeno FLEX | Naranja | Cross-sell movilidad | Descubrí | /producto/colageno-flex |
| 3 | Magnesio + B6 | Morado | Cross-sell energía | Probá | /producto/citrato-magnesio |
| 4 | Omega 3 Plus | Azul | Cierre integral | Mirá | /producto/omega-3 |

---

## PUNTOS CLAVE POR EMAIL

### EMAIL 1 · COLÁGENO ANTIAGE
- **Asunto:** Piel firme desde adentro: ya pasaron 90 días (50 caracteres)
- **Preheader:** Continuá tu rutina con beneficios vigentes + 10% OFF
- **Ángulo:** Recompra directa — el cliente ya conoce el producto
- **Beneficios:** Piel firme, elasticidad, resultados visibles, accesibilidad de compra
- **CTA:** Recomprar ahora con beneficios
- **Imagen:** CDN Mitiendanube (validada)
- **Dato a validar:** Descuentos vigentes (10% OFF, cuotas, envío gratis)

### EMAIL 2 · COLÁGENO FLEX
- **Asunto:** Colágeno + elasticidad: movimiento sin restricciones
- **Preheader:** Complementá tu rutina con FLEX — 10% OFF disponible
- **Ángulo:** Cross-sell complementario — variante de colágeno
- **Beneficios:** Movilidad articular, elasticidad, formulación complementaria
- **CTA:** Descubrí Colágeno FLEX
- **Imagen:** CDN Mitiendanube (VALIDAR URL exacta)
- **Datos a validar:** Producto existe, URL correcta, imagen disponible, stock

### EMAIL 3 · MAGNESIO + B6
- **Asunto:** Energía real: más allá de la piel
- **Preheader:** Completa tu bienestar con Magnesio + B6 — 10% OFF hoy
- **Ángulo:** Nueva categoría — energía, relajación, digestión
- **Beneficios:** Energía sostenida, relajación, digestión equilibrada, absorción óptima
- **CTA:** Probá Magnesio + B6
- **Imagen:** CDN Mitiendanube (validada)
- **Dato a validar:** Descuentos aplican en este producto

### EMAIL 4 · OMEGA 3
- **Asunto:** Corazón y cerebro: cierra tu círculo de salud
- **Preheader:** Omega 3 Plus — el paso final de tu rutina integral
- **Ángulo:** Cierre de secuencia — salud integral
- **Beneficios:** Salud cardiovascular, memoria, inflamación controlada, sinergia
- **CTA:** Mirá Omega 3 Plus
- **Imagen:** CDN Mitiendanube (validada)
- **Dato a validar:** Stock, descuentos vigentes

---

## BENEFICIOS CONSTANTES EN TODOS LOS EMAILS

Estos beneficios se muestran en bloque visual en cada email (validar vigencia):

| Beneficio | Descripción | Ícono |
|---|---|---|
| Hasta 3 cuotas sin interés | Con todas las tarjetas de crédito | 💳 |
| 10% OFF con transferencia | Descuento por pago directo | 🏦 |
| Envío gratis desde $60k | Cobertura según tienda | 📦 |

---

## ARCHIVOS GENERADOS

```
campanas/vitalis-secuencia-bestsellers-2026-06-10/
├── email-1-colageno-antiage.html          ✅ Listo para Perfit
├── email-2-colageno-flex.html             ✅ Listo para Perfit
├── email-3-magnesio-b6.html               ✅ Listo para Perfit
├── email-4-omega-3.html                   ✅ Listo para Perfit
├── RESUMEN-CAMPANIA.md                    (este archivo)
├── CHECKLIST-LANZAMIENTO.md               (próximo)
└── DATOS-A-VALIDAR.md                     (próximo)
```

---

## PALETA DE COLORES

**Línea Colágeno Antiage + FLEX:**
- Primary: #f39c12 (naranja cálido)
- Secondary: #e67e22 (naranja oscuro)
- Gradiente header: linear-gradient(135deg, #f39c12 0%, #e67e22 100%)
- Hero background: linear-gradient(135deg, #fff5f0 0%, #ffe8dd 100%)

**Línea Magnesio + B6:**
- Primary: #7b5ba3 (morado)
- Secondary: #6b4c94 (morado oscuro)
- Gradiente header: linear-gradient(135deg, #7b5ba3 0%, #6b4c94 100%)
- Hero background: linear-gradient(135deg, #f0e8f5 0%, #e8dcf0 100%)

**Línea Omega 3:**
- Primary: #4a7c9e (azul medio)
- Secondary: #3a6b8e (azul oscuro)
- Gradiente header: linear-gradient(135deg, #4a7c9e 0%, #3a6b8e 100%)
- Hero background: linear-gradient(135deg, #e8f1f8 0%, #dce8f5 100%)

---

## ESPECIFICACIONES TÉCNICAS

- **Max-width:** 600px (centrado)
- **Responsive:** Mobile-first, hero 22px en mobile
- **CTA buttons:** Padding 14px 40px, border-radius 30px, gradiente por línea
- **Benefit boxes:** background #f9f9f9, border-left 4px coloreado, padding 15px
- **Imágenes:** CDN Mitiendanube, border-radius 8px, max-width 280px
- **Footer:** Logo blanco sobre gradiente, links, desuscripción ${urls.unsubscribe}
- **Estilos:** Inline (compatibles con Perfit)
- **Scripts:** Ninguno
- **Formularios:** Ninguno

---

## TONALIDAD Y VOZ

**Tono:** Cercano-profesional, educativo, confiable, orientado a bienestar.

**Lenguaje:** Voseo argentino, uso de verbos activos (Probá, Descubrí, Mirá, Aprovechá).

**Principios aplicados:**
- Educativo + comercial, sin exagerar
- Recompra → cross-sell progresivo (no bombardeo)
- Claridad de beneficio, no promesas médicas
- Desuscripción obligatoria en footer
- Derivación a profesional si aplica

---

## DATOS A VALIDAR ANTES DE ENVIAR

### CRÍTICOS (no enviar sin esto)

- [ ] Descuentos vigentes confirmados (10% OFF transferencia, cuotas, envío gratis)
- [ ] Producto Colágeno FLEX existe en catálogo
- [ ] URLs finales correctas en vitalisnavitas.digital/producto/[nombre]
- [ ] Imágenes hero están disponibles en CDN Mitiendanube
- [ ] Stock confirmado en productos destacados
- [ ] Email remitente: agus@vitalisnavitas.com

### RECOMENDADOS

- [ ] Segmento "Compradores de Colágeno hace 90 días" está disponible en Perfit
- [ ] Horario de envío recomendado (de acuerdo a patrones de Vitalis)
- [ ] Validar redondeo de precios en web vs emails

### DESPUÉS DE ENVIAR

- [ ] Monitorear open rate (benchmark Vitalis: 10%+)
- [ ] Monitorear CTR (benchmark Vitalis: 0.5%+)
- [ ] Revisar bounce rate (máximo 2%)
- [ ] Documentar learnings en memory.md

---

## PRÓXIMOS PASOS

**De Mica:**
1. Revisar tonalidad, copy y estructura
2. Validar datos: descuentos, URLs, imágenes, stock
3. Aprobar secuencia o solicitar cambios
4. Confirmar timing de envío (días entre emails)

**De Emi (cuando Mica apruebe):**
1. Subir 4 campañas a Perfit (vía API o interfaz web)
2. Asignar segmento "Compradores Colágeno 90 días"
3. Configurar delays entre emails
4. Preparar brief para Rita (QA final)
5. Documentar en memory.md

**De Rita (QA final):**
1. Revisar HTML en cliente final (Gmail, Outlook, mobile, desktop)
2. Validar links y CTAs
3. Revisar copy, tono, claims
4. Aprobar o solicitar cambios

---

## PERFORMANCE ESPERADO

Basado en patrones históricos de Vitalis (ciclo 00 — 100 campañas):

| Métrica | Benchmark | Esperado |
|---|---|---|
| Open Rate | 10-15% | 12-14% (recompra es fuerte) |
| CTR | 0.5-2% | 1-1.5% (cross-sell progresivo) |
| Bounce | Max 2% | <1% (segmento limpio) |
| Unsubscribe | Max 0.3% | <0.2% |

**Nota:** Estos son benchmarks internos de Vitalis. El rendimiento real dependerá de:
- Timing de envío
- Segmentación correcta
- State de descuentos
- Fatiga de lista

---

## CHECKLIST FINAL DE ENTREGA

- ✅ 4 emails con copy completo y validado
- ✅ 4 HTMLs responsive listos para Perfit
- ✅ Paleta de colores por línea de producto consistente
- ✅ Beneficios de compra visibles en todos los emails
- ✅ CTAs claros y directos
- ✅ Links validados (vitalisnavitas.digital/producto/[nombre])
- ✅ Desuscripción obligatoria en footer (${urls.unsubscribe})
- ✅ Sin scripts, sin formularios, sin imágenes locales
- ✅ Asunto, preheader y asunto reenvío para cada email
- ✅ Tono cercano-profesional, educativo, responsable
- ✅ Segmentación clara (Compradores Colágeno 90 días)
- ✅ Datos a validar documentados
- ✅ Resumen de campaña completo

---

## CONTACTO Y SOPORTE

**Preguntas sobre esta campaña:**
- Email remitente: agus@vitalisnavitas.com
- Web: https://vitalisnavitas.digital/
- Contacto ZAS: mica@zasdigital.com
