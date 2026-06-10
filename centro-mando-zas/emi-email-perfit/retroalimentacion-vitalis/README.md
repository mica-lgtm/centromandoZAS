# Retroalimentación Automática — Vitalis Navitas

Sistema de análisis de performance que se ejecuta cada 48 horas, automáticamente.

## ¿Qué es?

Cada 48 horas, un agente cloud conectado a Klaviyo trae datos de performance de campañas Vitalis Navitas enviadas recientemente, analiza qué funcionó y qué no, detecta patrones ganadores y perdedores, y guarda un reporte estructurado en esta carpeta.

El objetivo es que Emi aprenda automáticamente qué asuntos, CTAs, ángulos y tácticas funcionan mejor para Vitalis, y los aplique en las próximas campañas.

## Archivos en esta carpeta

- `README.md` → este archivo (descripción del sistema)
- `AAAA-MM-DD-ciclo-00-historico.md` → análisis base de las 100 campañas históricas
- `AAAA-MM-DD-ciclo-01.md` → ciclo 1 de 48hs
- `AAAA-MM-DD-ciclo-02.md` → ciclo 2 de 48hs
- (y así, uno por ciclo)

## Cómo se genera

1. **Trigger:** Cada 48 horas a las 9am Argentina (12:00 UTC)
2. **Agente:** Emi (agente de email marketing de ZAS Digital)
3. **Skill:** `skills/analizar-performance-klaviyo.md`
4. **Proceso:**
   - Conectarse a Klaviyo via MCP
   - Traer campañas Vitalis enviadas en las últimas 48hs
   - Traer reporte de performance de cada una
   - Analizar patrones (asuntos, CTAs, ángulos)
   - Generar archivo nuevo de ciclo
   - Reportar a Mica con hallazgos principales

## Qué contiene cada reporte

Cada archivo de ciclo incluye:

- **📊 Datos:** Tabla de campañas, open rate, CTR, bounce, unsubscribe
- **✅ Qué funcionó:** Top asuntos, ángulos ganadores, CTAs que más se clickearon
- **❌ Qué no funcionó:** Asuntos débiles, problemas técnicos, patrones a evitar
- **🧠 Reglas aprendidas:** Insights concretos del ciclo
- **📋 Aplicar en próxima:** Recomendaciones accionables
- **⚠️ Alertas:** Métricas fuera de rango, advertencias

## Cómo usarlo

1. **Después de cada ciclo,** Mica lee el archivo nuevo
2. **Aplica las reglas aprendidas** en la próxima campaña de Vitalis
3. **Ejemplo:**
   - Ciclo 1 dice: "Asuntos con números tuvieron 20% better open rate"
   - Ciclo 2 campañas: Emi usa números en todos los asuntos de Vitalis
   - Ciclo 2 reporte: Valida si realmente mejoró o no

## Benchmarks internos de Vitalis

Sistema de referencia (solo comparación contra datos propios, ciclo a ciclo):

- **Open Rate mínimo aceptable:** 10%
- **Open Rate bueno:** 15%+
- **CTR mínimo:** 0.5%
- **CTR bueno:** 2%+
- **Bounce Rate máximo:** 2% (si > 5% es error crítico)
- **Unsubscribe máximo:** 0.3%

## Configuración técnica

- **Frecuencia:** Cada 48 horas
- **Horario:** 9am Argentina (12:00 UTC)
- **Cron:** `0 12 */2 * *`
- **Herramienta:** `/schedule` skill (agente cloud)
- **Validación:** Ver con `schedule list` en Claude Code

## Notas

- Archivos anteriores de ciclos **nunca se editan** (son histórico inmutable)
- Si hay 0 campañas nuevas en un ciclo, se genera reporte vacío
- Los aprendizajes se guardan **solo en archivos de ciclo**, no en memory.md automáticamente (Mica los mueve si quiere hacerlos permanentes)
- Mica siempre tiene aprobación final de reglas nuevas

## Histórico

- **2026-06-09:** Sistema activado
- **2026-06-09:** Ciclo 00 — Análisis histórico de 100 campañas

---

Para más detalles del procedimiento, ver `skills/analizar-performance-klaviyo.md`.
