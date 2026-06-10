# Checklist de Lanzamiento · Secuencia Vitalis 4 Bestsellers

**Creado por:** Emi  
**Fecha:** 2026-06-10  
**Estado:** 📋 Checklist para pre-lanzamiento  
**Responsable de lanzamiento:** Mica

---

## 🟢 FASE 1: APROBACIÓN ESTRATÉGICA (Mica)

- [ ] **Tonalidad y copy:** ¿Los 4 emails tienen tono adecuado para Vitalis?
- [ ] **Ángulos:** ¿Son claros? Recompra → Cross-sell progresivo
- [ ] **Segmentación:** ¿El segmento "Compradores Colágeno 90 días" tiene sentido?
- [ ] **Timing:** ¿Aprueban timing propuesto? (día 0, 3, 5, 7)
- [ ] **Cambios solicitados:** ¿Hay cambios que hacer antes de continuar?

**Si TODO está aprobado:** ➡️ FASE 2

**Si hay cambios:** ↩️ Emi ajusta y vuelve a FASE 1

---

## 🟡 FASE 2: VALIDACIÓN DE DATOS CRÍTICOS (Mica)

**Datos que Mica debe confirmar antes de cargar a Perfit:**

### Descuentos
- [ ] 10% OFF con transferencia — vigente y confirmado
- [ ] Hasta 3 cuotas sin interés — vigente y confirmado
- [ ] Envío gratis desde $60k — vigente y confirmado

### Productos y URLs
- [ ] Colágeno Antiage — URL correcta, imagen disponible, stock ✅
- [ ] Colágeno FLEX — **CRÍTICO:** Confirmar que existe, URL exacta, imagen
- [ ] Magnesio + B6 — URL correcta, imagen disponible, stock ✅
- [ ] Omega 3 Plus — URL correcta, imagen disponible, stock ✅

### Segmentación
- [ ] Segmento "Compradores Colágeno 90 días" existe en Perfit
- [ ] O alternativa: lista de contactos disponible para upload manual

### Email y Enlaces
- [ ] Email remitente: agus@vitalisnavitas.com — confirmado en Perfit
- [ ] Desuscripción ${urls.unsubscribe} disponible en Perfit
- [ ] Todos los links testean correcto (sin errores 404)

**Estado de validación:**
- [ ] ✅ Todas las validaciones completadas
- [ ] ⏳ Pendiente información (especificar cuál)
- [ ] ❌ Hay bloqueadores (especificar)

**Si hay bloqueadores:** ↩️ Resolver con equipo Vitalis / Mica y volver aquí

**Si todo está OK:** ➡️ FASE 3

---

## 🔵 FASE 3: CARGA A PERFIT (Emi, bajo supervisión de Mica)

### 3.1 Crear 4 Campañas en Perfit

**Opción A — Interfaz web (manual):**
```
1. Ir a Perfit → Crear nueva campaña
2. Nombre: "Vitalis Bestsellers 01 - Colágeno Antiage"
3. Segmento: "Compradores Colágeno 90 días"
4. Template: HTML
5. Copiar contenido de email-1-colageno-antiage.html
6. Asunto: "Piel firme desde adentro: ya pasaron 90 días"
7. Preheader: "Continuá tu rutina con beneficios vigentes + 10% OFF"
8. Sender: agus@vitalisnavitas.com
9. Guardar como DRAFT
10. Repetir para emails 2, 3, 4
```

**Opción B — API (script Python):**
```bash
python3 batch_create_campaigns.py --config vitalis-config.json
```
(Si usamos esta opción, validar que los 4 campaigns se crearon correctamente)

### 3.2 IDs de Campañas Creadas (completar después de cargar)

| Email | Nombre | ID Perfit | Estado |
|---|---|---|---|
| 1 | Colágeno Antiage | [ ] | DRAFT |
| 2 | Colágeno FLEX | [ ] | DRAFT |
| 3 | Magnesio + B6 | [ ] | DRAFT |
| 4 | Omega 3 | [ ] | DRAFT |

---

## 🟣 FASE 4: QA TÉCNICA (Rita)

**Rita verifica en clientes reales:**

- [ ] **Email 1 (Colágeno Antiage):**
  - [ ] Abre correctamente en Gmail (web)
  - [ ] Abre correctamente en Outlook (web)
  - [ ] Abre correctamente en mobile (iPhone)
  - [ ] Abre correctamente en mobile (Android)
  - [ ] Colores y gradientes visibles
  - [ ] Imágenes cargan sin error
  - [ ] Links funcionan (no 404)
  - [ ] Botones son clickeables
  - [ ] Footer con desuscripción visible

- [ ] **Email 2 (Colágeno FLEX):**
  - [ ] Mismas verificaciones que Email 1

- [ ] **Email 3 (Magnesio + B6):**
  - [ ] Mismas verificaciones que Email 1

- [ ] **Email 4 (Omega 3):**
  - [ ] Mismas verificaciones que Email 1

**Observaciones de Rita:**
```
[Espacio para notas técnicas / bugs / ajustes]




```

**Resultado Rita:**
- [ ] ✅ Aprobado para lanzamiento
- [ ] 🔧 Cambios menores (especificar)
- [ ] ❌ Bloqueadores (especificar)

---

## 🟠 FASE 5: VALIDACIÓN DE COPY (Rita o Mica)

**Antes de enviar, revisar:**

- [ ] **Tono:** ¿Es educativo, cercano, responsable?
- [ ] **Claims:** ¿No hay promesas médicas no validadas?
- [ ] **Descuentos:** ¿Se comunican correctamente? ¿Sin exagerar?
- [ ] **CTAs:** ¿Son claros? ¿Invitan a acción?
- [ ] **Links:** ¿Están actualizados y correctos?
- [ ] **Typos:** ¿Sin errores de ortografía?
- [ ] **Accesibilidad:** ¿Es fácil de leer? ¿Jerarquía visual clara?

**Resultado validación de copy:**
- [ ] ✅ Aprobado
- [ ] 🔧 Cambios menores
- [ ] ❌ Cambios críticos (especificar)

---

## 🟡 FASE 6: CONFIGURACIÓN DE ENVÍOS (Mica)

**Asignar timing a cada email en Perfit:**

| Email | Delay | Fecha envío estimada | Confirmado |
|---|---|---|---|
| 1 - Colágeno Antiage | 0 (envío inmediato) | 2026-06-12 | [ ] |
| 2 - Colágeno FLEX | +72 horas (día 3) | 2026-06-15 | [ ] |
| 3 - Magnesio + B6 | +48 horas (día 5) | 2026-06-17 | [ ] |
| 4 - Omega 3 | +48 horas (día 7) | 2026-06-19 | [ ] |

**Configuración en Perfit:**
- [ ] Email 1: Cambiar estado de DRAFT → SCHEDULED
- [ ] Email 2: Cambiar estado de DRAFT → SCHEDULED
- [ ] Email 3: Cambiar estado de DRAFT → SCHEDULED
- [ ] Email 4: Cambiar estado de DRAFT → SCHEDULED

**Validar antes de confirmar envío:**
- [ ] Fechas y horarios son correctos
- [ ] Segmento está asignado a todos los emails
- [ ] No hay conflicto con otras campañas Vitalis
- [ ] Email remitente es agus@vitalisnavitas.com

---

## 🟢 FASE 7: LANZAMIENTO (Mica)

**Cuando todos los checks anteriores estén ✅:**

- [ ] Dar luz verde a lanzamiento
- [ ] Enviar Email 1
- [ ] Confirmar que fue enviado (revisar en Perfit → Campaigns → Sent)
- [ ] Documentar en Mica: fecha/hora de envío
- [ ] Notificar a equipo que secuencia está en marcha

**URLs para monitorear después del lanzamiento:**
- Perfit Dashboard: https://vitalisnavitas.digital/ (o panel de control)
- Métricas: Open rate, CTR, bounce, unsubscribe
- Performance vs benchmarks: Vitalis target 10-15% open rate

---

## 📊 FASE 8: MONITOREO (Mica + Emi)

**Después de lanzar, monitorear:**

### Email 1 (Recompra)
- [ ] Open rate objetivo: 12-15% (es recompra, debe ser fuerte)
- [ ] CTR objetivo: 1-1.5% (cross-sell es menos clicky que recompra)
- [ ] Bounce < 1%
- [ ] Unsubscribe < 0.2%

### Email 2 (Cross-sell)
- [ ] Open rate objetivo: 10-12%
- [ ] CTR objetivo: 0.5-1%
- [ ] Bounce < 1%

### Email 3 (Nueva categoría)
- [ ] Open rate objetivo: 8-10%
- [ ] CTR objetivo: 0.5-0.8%
- [ ] Bounce < 1%

### Email 4 (Cierre)
- [ ] Open rate objetivo: 7-9% (fatiga esperada)
- [ ] CTR objetivo: 0.3-0.5%
- [ ] Bounce < 1%

**Documentación de resultados:**
```
Email 1 - Colágeno Antiage
- Open rate: _____ %
- CTR: _____ %
- Bounce: _____ %
- Unsubscribe: _____ %
- Observaciones:

Email 2 - Colágeno FLEX
- Open rate: _____ %
- CTR: _____ %
- Observaciones:

Email 3 - Magnesio + B6
- Open rate: _____ %
- CTR: _____ %
- Observaciones:

Email 4 - Omega 3
- Open rate: _____ %
- CTR: _____ %
- Observaciones:
```

---

## 📋 DOCUMENTACIÓN FINAL

**Después de que la campaña cierre (7 días post-lanzamiento):**

- [ ] Documentar performance en `memory.md`
- [ ] Registrar aprendizajes en `memory.md`
- [ ] Actualizar `vitalis-navitas.md` con learnings
- [ ] Agregar datos de esta campaña a histórico

---

## ✅ SIGN-OFF (Aprobaciones finales)

**Responsables de validar cada fase:**

| Fase | Responsable | Aprobado | Fecha | Notas |
|---|---|---|---|---|
| 1 - Estrategia | Mica | [ ] | [ ] | |
| 2 - Datos críticos | Mica | [ ] | [ ] | |
| 3 - Carga Perfit | Emi | [ ] | [ ] | |
| 4 - QA técnica | Rita | [ ] | [ ] | |
| 5 - Copy/claims | Rita/Mica | [ ] | [ ] | |
| 6 - Configuración | Mica | [ ] | [ ] | |
| 7 - Lanzamiento | Mica | [ ] | [ ] | |
| 8 - Monitoreo | Mica/Emi | [ ] | [ ] | |

---

**Cuando todos los checks estén ✅ → CAMPAÑA LISTA PARA ENVÍO**

Preguntas: mica@zasdigital.com
