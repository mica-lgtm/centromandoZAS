# Skill · Analizar Performance Klaviyo y Guardar Aprendizajes

## Objetivo

Conectarse a Klaviyo via MCP cada 48 horas, traer datos de performance de campañas Vitalis Navitas enviadas recientemente, analizar qué funcionó y qué no, detectar patrones ganadores y perdedores, y guardar aprendizajes estructurados en `retroalimentacion-vitalis/`.

Este skill es ejecutado por el agente cloud programado en `/schedule` y debe correr sin intervención humana.

---

## Procedimiento

### 1. Obtener campañas enviadas en las últimas 48hs

Llamar a `klaviyo_get_campaigns` con filtros:
- `channel`: email
- `filters`: 
  - nombre contiene "vitalis" O "navitas"
  - status = "Sent"
  - created_at > ahora - 48 horas

**Resultado esperado:** Lista de IDs de campaña, nombres, asuntos, preheaders, from email.

Si no hay campañas nuevas, generar un reporte vacío y salir.

---

### 2. Traer reporte de performance de cada campaña

Para cada campaña encontrada, llamar a `klaviyo_get_campaign_report` con:

**Statistics:** 
- `recipients` — total enviados
- `delivered` — entregados
- `delivery_rate` — tasa de entrega %
- `opens` — aperturas totales
- `opens_unique` — aperturas únicas
- `open_rate` — tasa de apertura %
- `clicks` — clicks totales
- `clicks_unique` — clicks únicos
- `click_rate` — tasa de click %
- `click_to_open_rate` — CTR (click-to-open) %
- `bounced` — rebotes
- `bounce_rate` — tasa de rebote %
- `unsubscribes` — desuscripciones
- `unsubscribe_rate` — tasa de desuscripción %

**Timeframe:** último año (para capturar contexto histórico)

**Resultado esperado:** Una tabla con todas las métricas por campaña.

---

### 3. Analizar y clasificar resultados

#### A. Patrones GANADORES

Buscar top 3:
1. **Asuntos con mejor open rate** — reportar el asunto exacto, % open rate, número de enviados
2. **Campañas con mejor CTR** — reportar nombre, CTR %, asunto
3. **Ángulos o temas con mejor performance** — si hay múltiples productos/categorías, agrupar por categoría y ver cuál convirtió mejor

**Preheaders:** Si hay preheaders, buscar los que mejor complementaron el asunto (abrir/click más alto)

#### B. Patrones PERDEDORES

Buscar problemas:
1. **Asuntos con bajo open rate** (< 8%) — reportar exactamente cuál y por qué (genérico, sin urgencia, sin beneficio claro, muy largo?)
2. **Campañas con CTR muy bajo** (< 0.5%) — hipótesis: CTA débil, email sin foco claro, diseño confuso
3. **Bounce rate anormal** (> 2%) — alerta de posible problema de reputación, lista sucia o HTML roto
4. **Unsubscribe rate alto** (> 0.3%) — posible indicador de email no relevante o messaging off

#### C. Detectar errores técnicos

- **Asuntos > 55 caracteres** → riesgo de corte en mobile/Outlook
- **Preheader vacío** → oportunidad perdida
- **Bounce rate > 5%** → ERROR crítico, revisar lista y HTML
- **Muy poca entrega** (delivery_rate < 95%) → posible issue reputacional

---

### 4. Generar archivo de retroalimentación

Crear archivo en `retroalimentacion-vitalis/` con nombre: `AAAA-MM-DD-ciclo-N.md`

Formato (sigue el patrón de `memory.md`):

```md
# AAAA-MM-DD · Vitalis Navitas · Análisis Performance 48hs — Ciclo N

## Resumen

**Período:** AAAA-MM-DD a AAAA-MM-DD  
**Campañas analizadas:** N total  
**Enviados totales:** XXXX  
**Promedio open rate:** X.X%  
**Promedio CTR:** X.X%  

---

## 📊 Campañas analizadas

| # | Nombre | Asunto | Enviados | Open % | CTR % | Bounce % | Unsub % |
|---|--------|--------|----------|--------|-------|----------|---------|
| 1 | ... | ... | ... | ... | ... | ... | ... |

---

## ✅ Qué funcionó

### Top 3 asuntos por open rate
1. "[Asunto exacto]" — X.X% (Enviados: XXX)
2. "[Asunto exacto]" — X.X% (Enviados: XXX)
3. "[Asunto exacto]" — X.X% (Enviados: XXX)

**Patrón común:** [urgencia / beneficio / pregunta / ángulo emocional]

### Ángulos que mejor convirtieron
- **Ángulo:** [descripción] — Productos: [lista]
- **Hipótesis de por qué funcionó:** [análisis]

### CTAs que más se clickearon
- "[Texto CTA exacto]" — CTR X.X%
- Contexto: [cuerpo/tone que acompañó]

---

## ❌ Qué no funcionó

### Asuntos con bajo open rate
- "[Asunto]" — X.X% (Enviados: XXX)
- **Hipótesis:** [genérico sin urgencia / muy largo / sin beneficio / sin ángulo claro]

### Problemas técnicos detectados
- [Campaña]: Bounce X% — Posible causa: [hipótesis]
- [Campaña]: Preheader vacío — Oportunidad perdida para complementar asunto

### Patrones a evitar
- [Patrón 1 a evitar]
- [Patrón 2 a evitar]

---

## 🧠 Reglas aprendidas este ciclo

- **Regla 1:** [Patrón concreto con métrica]
- **Regla 2:** [Patrón concreto con métrica]
- **Regla 3:** [Patrón concreto con métrica]

---

## 📋 Aplicar en próxima campaña

- **Asunto:** Usar patrón [ganador] en lugar de [perdedor]
  - Ejemplo a probar: "[Asunto tipo X que funcionó]"
- **Preheader:** NO dejar vacío — siempre complementar asunto
- **Ángulo:** Si es [categoría], probar [ángulo ganador]
- **CTA:** [Tipo CTA que mejor performance tuvo]
- **Segmento:** Si probamos segmento chico, mejor open rate observado

---

## ⚠️ Alertas & Revisar

- [Lista de campañas con métricas fuera de rango]
- [Preheaders vacíos encontrados]
- [Bounce rates anómalos]

---

## 📝 Notas operativas

- Último ciclo: [fecha del ciclo anterior]
- Próximo ciclo programado: [fecha + 48hs]
- Generado por: Emi (agente automático)
```

---

### 5. Actualizar `memory.md`

Si es el primer ciclo, agregar esta sección al final de `memory.md`:

```md
## 2026-06-09 · Sistema Automático · Retroalimentación Vitalis cada 48hs

- Activación: Sistema de análisis automático de performance cada 48 horas
- Skill: `skills/analizar-performance-klaviyo.md`
- Herramienta: Agente cloud vía `/schedule`, cron cada 2 días a las 9am Argentina (12:00 UTC)
- Almacenamiento: `retroalimentacion-vitalis/AAAA-MM-DD-ciclo-N.md`
- Benchmarks internos Vitalis:
  - Open Rate mínimo aceptable: 10%
  - Open Rate bueno: 15%+
  - CTR mínimo: 0.5%
  - CTR bueno: 2%+
  - Bounce Rate máximo: 2%
  - Unsubscribe máximo: 0.3%
- Comparación: Solo contra datos propios de Vitalis — ciclo a ciclo
- Próximo paso: Leer nuevo archivo de ciclo y aplicar reglas en próxima campaña
```

---

### 6. Actualizar `marcas/vitalis-navitas.md`

Agregar al final del archivo (antes del cierre):

```md
---

## Patrones de Performance Detectados (Histórico 100 campañas)

**Última actualización:** 2026-06-09

### Asuntos ganadores
- Incluyen **urgencia real** (horas, días contados, "mañana", "última chance")
- Incluyen **beneficio concreto** (piel firme, energía, cerebro, articulaciones)
- Incluyen **números** (52% de campañas los usan → correlación con engagement)
- Largo óptimo: 50-55 caracteres (más cortos mejor en mobile)
- Emojis: Solo 15% las campañas los usaban → **oportunidad de test**

### Segmentación y performance
- **Base Completa:** Open Rate 9-14%, CTR 0.2-0.4%
- **Segmentos chicos** (< 5000): Open Rate hasta 26%, CTR hasta 8.7% ✅
- **Implicación:** Segmentos específicos por objetivo/producto tienen mejor performance

### Ángulos que funcionan
- **Educativo + Beneficio:** "Tu piel se renueva cada 28 días. ¿Le estás dando lo que necesita?"
- **Objeción resuelta:** "¿En cuánto tiempo se notan los cambios?"
- **Urgencia natural:** "Si mañana querés rendir, esta noche es clave"
- **FOMO ligero:** "4 personas compraron ayer lo que vos solo miraste"
- **Pregunta provocadora:** "¿Te cuesta bajar un cambio a la noche?"

### Patrones a evitar
- Bounce rate > 2% → Revisar lista y HTML (un envío llegó a 66%, crítico)
- Preheader vacío → 15+ campañas tenían preheader vacío (oportunidad perdida)
- Asunto genérico sin beneficio → Open rate < 5%
- CTR muy bajo (< 0.5%) → CTA poco clara o email sin foco

### Top asuntos por open rate (histórico)
1. (Segmento chico) → 26.09%
2. "Piel firme desde adentro en 90 días" → 14.26%
3. "Intestino sano: guía simple" → ~12%

### Siguiente paso
Ver reporte en `retroalimentacion-vitalis/` después de cada ciclo para aplicar reglas nuevas.
```

---

### 7. Reportar a Mica

Al terminar, enviar resumen con estructura:

> **[Fecha] · Vitalis Navitas — Análisis Performance Automático**
>
> ✅ **Hallazgo positivo 1:** [Métrica + insight]
>
> ❌ **Problema detectado:** [Alerta si hay]
>
> 🎯 **Aplicar en próxima:** [Regla concreta]
>
> 📁 Reporte completo: `retroalimentacion-vitalis/[nombre archivo]`

---

## Notas importantes

- Este skill se ejecuta **sin intervención**. Debe ser capaz de manejar:
  - 0 campañas nuevas (salir sin error)
  - Múltiples campañas (hasta 10+)
  - Datos incompletos (preheader vacío, bounce_rate = null, etc.)
  
- Los datos de Klaviyo vienen de API real → pueden tener inconsistencias, manejar gracefully

- Nunca editar archivos anteriores de ciclos (son histórico)

- Guardar todos los aprendizajes en el archivo nuevo, no actualizar memory.md durante ejecución a menos que sea crítico

