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
