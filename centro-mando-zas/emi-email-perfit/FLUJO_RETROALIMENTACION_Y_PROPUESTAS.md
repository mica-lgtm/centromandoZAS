# Flujo: Retroalimentación → Propuestas → Creación → Envío

## Visión General

Sistema automático que cada 48 horas:
1. **Analiza** performance de campañas pasadas
2. **Genera** 3 propuestas de campaña basadas en patrones ganadores
3. **Espera aprobación tuya** para crear
4. **Crea campañas en borrador** en Perfit
5. **Espera OK final** para lanzar

Todo sin tocar HTML — solo estrategia, asunto, preheader, segmentación.

---

## Paso 1: Análisis Automático (Cada 48 horas)

**Script:** `analizar_performance_perfit.py`

**Cron:** `/schedule` — cada 2 días a las 9 AM Argentina

**Qué hace:**
- Conecta a cada cuenta en `retroalimentacion-perfit/cuentas.json`
- Trae campañas enviadas en últimas 48 horas
- Analiza: open rate, CTR, bounce, unsubscribe
- Detecta patrones ganadores y perdedores
- **Genera 3 propuestas de campaña basadas en lo que funcionó**

**Archivos generados:**
- `retroalimentacion-perfit/{account}-AAAA-MM-DD-ciclo-N.md` — Reporte de análisis completo
- `retroalimentacion-perfit/{account}-AAAA-MM-DD-propuestas.json` — **3 propuestas, listas para revisar**

**Ejemplo de propuestas generadas:**

```json
{
  "account": "simonashop",
  "cliente": "Simona Shop",
  "propuestas": [
    {
      "numero": 1,
      "estrategia": "Replicar patrón ganador #1",
      "descripcion": "Usar el patrón que mejor abrió (18.5%): urgencia + beneficio claro",
      "asunto_propuesto": "[Basado en: El jean que funciona con todo...]",
      "preheader_propuesto": "Tu próxima acción importante espera",
      "angulo": "Urgencia + Beneficio",
      "segmentacion": "Base completa",
      "cta_propuesto": "Ir ahora",
      "estado": "pendiente_aprobacion"
    },
    {
      "numero": 2,
      "estrategia": "Test en segmento pequeño",
      "descripcion": "Enviar a <5k usuarios para validar nuevo ángulo",
      "asunto_propuesto": "[Test] - Usa pregunta provocadora o estadística",
      "preheader_propuesto": "Solo para ti",
      "angulo": "Educativo + Pregunta",
      "segmentacion": "Últimos 3 meses de interacción",
      "cta_propuesto": "Ver más",
      "estado": "pendiente_aprobacion"
    },
    {
      "numero": 3,
      "estrategia": "Winback / Reactivación",
      "descripcion": "Dirigirse a inactivos >90 días",
      "asunto_propuesto": "[Exclusivo] Volvé y descubrí qué es nuevo",
      "preheader_propuesto": "Te echamos de menos",
      "angulo": "Reencuentro + Novedad",
      "segmentacion": "Inactivos >90 días",
      "cta_propuesto": "Volver ahora",
      "estado": "pendiente_aprobacion"
    }
  ]
}
```

---

## Paso 2: Tu Aprobación (Manual)

**Acción:** Revisar y aprobar propuestas

**Ubicación:** `retroalimentacion-perfit/{account}-{fecha}-propuestas.json`

**Qué hacer:**

1. **Revisar** las 3 propuestas
2. **Editar asuntos y preheaders** según tu marca (opcional, ya están propuestos)
3. **Cambiar `"estado"` a `"aprobada"`** solo para las que quieras crear

**Ejemplo antes:**
```json
{
  "numero": 1,
  "estado": "pendiente_aprobacion",
  "asunto_propuesto": "[Basado en: El jean que funciona con todo...]"
}
```

**Ejemplo después (aprobada):**
```json
{
  "numero": 1,
  "estado": "aprobada",
  "asunto_propuesto": "El jean que funciona con todo — especial fin de semana"
}
```

**Puedes:**
- ✓ Editar asunto, preheader, CTA
- ✓ Aprobar 1, 2 o 3 propuestas
- ✓ Cambiar segmentación si es necesario
- ✗ No tocar estrategia ni descripción (eso queda documentado)

---

## Paso 3: Crear Campañas en Borrador

**Script:** `crear_campanas_aprobadas.py`

**Comando:**
```bash
python3 crear_campanas_aprobadas.py \
  --config retroalimentacion-perfit/simonashop-2026-06-09-propuestas.json
```

**Qué hace:**
- Lee el JSON de propuestas
- Filtra solo las que tienen `"estado": "aprobada"`
- **Crea campañas en Perfit en borrador** (sin HTML, sin envío)
- Guarda IDs en archivo `-creadas.json`

**Output:**
```
🚀 Creando 2 campaña(s) en borrador...

Propuesta #1: Replicar patrón ganador #1
  Asunto: El jean que funciona con todo — especial fin de semana
  Segmento: Base completa
  ℹ️  Pendiente: HTML + configuración completa

Propuesta #3: Winback / Reactivación
  Asunto: [Exclusivo] Volvé y descubrí qué es nuevo
  Segmento: Inactivos >90 días
  ℹ️  Pendiente: HTML + configuración completa

✓ Resumen guardado: retroalimentacion-perfit/simonashop-2026-06-09-propuestas-creadas.json

📋 Próximo paso: Emi agrega HTML y luego ejecuta envio.
```

**Archivo generado:**
- `retroalimentacion-perfit/{account}-{fecha}-propuestas-creadas.json`

---

## Paso 4: Emi Agrega HTML (Automático)

**Responsable:** Emi (agente)

**Qué ocurre:**
- Emi lee las campañas creadas en borrador
- Para cada una, crea HTML based en:
  - Marca de la cuenta
  - Ángulo y estrategia propuesta
  - Asunto y preheader aprobados
- Sube HTML a cada campaña en Perfit
- Configura sender, recipients, validación

**Comando (Emi ejecuta):**
```bash
python3 subir_html_a_campanas_creadas.py \
  --config retroalimentacion-perfit/simonashop-2026-06-09-propuestas-creadas.json
```

**Resultado:**
- Campañas en Perfit **completamente configuradas, en borrador, listas para revisar**

---

## Paso 5: Tu Validación Final

**Acción:** Revisar en Perfit web

**Qué revisar:**
- [ ] Vista previa del email (desktop + mobile)
- [ ] Links funcionales
- [ ] Diseño alineado a marca
- [ ] Asunto, preheader, sender correctos
- [ ] Segmentación correcta

Si algo no está bien:
- ❌ Editar en Perfit web o
- ❌ Pedir a Emi que ajuste HTML

Si todo OK:
- ✅ Cambiar archivo `-creadas.json`: `"listo_para_enviar": true`

---

## Paso 6: Envío Final

**Script:** `enviar_campanas_aprobadas.py`

**Comando:**
```bash
python3 enviar_campanas_aprobadas.py \
  --config retroalimentacion-perfit/simonashop-2026-06-09-propuestas-creadas.json
```

**Qué hace:**
- Lee el JSON de campañas creadas
- Filtra solo las que tienen `"listo_para_enviar": true`
- **Lanza cada campaña en Perfit** (modo NOW)
- Genera reporte de envío

**Output:**
```
🚀 Lanzando 2 campaña(s) en simonashop...

✓ Campaña 1314: Lanzada (ID: 1314)
✓ Campaña 1315: Lanzada (ID: 1315)

📊 Reporte de envío guardado: retroalimentacion-perfit/simonashop-2026-06-09-envios.json
```

---

## Flujo Visual

```
┌─────────────────────────────────────────────────────────────┐
│ CADA 48 HORAS (automático)                                  │
│ analizar_performance_perfit.py                              │
├─────────────────────────────────────────────────────────────┤
│ Trae datos → Analiza → Detecta patrones → Genera propuestas │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
            📋 propuestas.json
         (3 propuestas, listas para revisar)
                       │
        ┌──────────────┴──────────────┐
        │ TÚ EDITAS Y APRUEBAS       │
        │ • Editar asuntos/preheaders│
        │ • Cambiar estado → aprobada│
        │ • Guardar JSON             │
        └──────────────┬──────────────┘
                       │
                       ▼
            crear_campanas_aprobadas.py
                       │
        ┌──────────────┴──────────────┐
        │ Crea en Perfit (borrador)   │
        │ • IDs creados              │
        │ • Configuración inicial    │
        │ • Sin HTML                 │
        └──────────────┬──────────────┘
                       │
                       ▼
           📄 propuestas-creadas.json
          (campañas en borrador en Perfit)
                       │
        ┌──────────────┴──────────────┐
        │ EMI AGREGA HTML             │
        │ subir_html_a_campanas.py    │
        │ • Diseño responsive         │
        │ • Completa configuración    │
        │ • Valida                    │
        └──────────────┬──────────────┘
                       │
                       ▼
        📧 Campañas en Perfit (borrador, OK)
                       │
        ┌──────────────┴──────────────┐
        │ TÚ VALIDAS EN PERFIT        │
        │ • Vista previa              │
        │ • Links                     │
        │ • Marca                     │
        │ • Cambiar: listo_enviar=true│
        └──────────────┬──────────────┘
                       │
                       ▼
           enviar_campanas_aprobadas.py
                       │
        ┌──────────────┴──────────────┐
        │ Lanza campañas (NOW)        │
        │ • Enviadas                  │
        │ • Tracking activo           │
        │ • Performance en tiempo real│
        └──────────────┬──────────────┘
                       │
                       ▼
        ✅ Campañas ENVIADAS
           Monitorear en Perfit
           Próximo ciclo: 48hs después
```

---

## Archivos Generados por Ciclo

Para cada cuenta y cada ciclo:

```
retroalimentacion-perfit/
├── cuentas.json                           (configuración de cuentas)
├── simonashop-2026-06-09-ciclo-01.md     (reporte de análisis)
├── simonashop-2026-06-09-propuestas.json (3 propuestas → TÚ editas/apruebas)
├── simonashop-2026-06-09-propuestas-creadas.json (campañas creadas → Emi agrega HTML)
├── simonashop-2026-06-09-envios.json     (resumen de envíos)
└── simonashop-2026-06-11-ciclo-02.md     (próximo ciclo: 48hs después)
```

---

## Checklist para Configurar

- [ ] Crear `retroalimentacion-perfit/cuentas.json` con todas tus cuentas
- [ ] Verificar API keys válidas
- [ ] Programar `/schedule` para `analizar_performance_perfit.py` cada 48hs
- [ ] Leer este documento
- [ ] Primer ciclo: revisar propuestas generadas
- [ ] Aprobar propuestas
- [ ] Ejecutar `crear_campanas_aprobadas.py`
- [ ] Que Emi agregue HTML
- [ ] Validar en Perfit
- [ ] Ejecutar `enviar_campanas_aprobadas.py`
- [ ] Monitorear performance

---

## Notas

- **HTML:** No se genera automáticamente. Emi sigue `soul.md` y `marcas/` para crear designs personalizados.
- **Segmentación:** Las propuestas sugieren, pero puedes cambiar en el JSON.
- **A/B Testing:** Proposal #2 siempre es un test en segmento pequeño — perfecto para validar nuevos ángulos.
- **Winback:** Proposal #3 es automáticamente reactivación — estrategia probada en ecommerce.
- **Historial:** Todos los archivos quedan guardados — puedes comparar ciclo a ciclo.

---

## Support

Si algo falla:
1. Revisar logs de ejecución
2. Verificar API keys en `cuentas.json`
3. Revisar JSON proposals antes de ejecutar scripts
4. Contactar a Mica o verificar skill `analizar-performance-perfit.md`
