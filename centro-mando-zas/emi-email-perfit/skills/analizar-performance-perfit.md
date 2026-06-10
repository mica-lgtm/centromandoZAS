# Skill · Analizar Performance Perfit y Guardar Aprendizajes

## Objetivo

Conectarse a Perfit API cada 48 horas, traer datos de performance de campañas enviadas recientemente en **todas las cuentas de clientes**, analizar qué funcionó y qué no, detectar patrones ganadores y perdedores por cuenta, y guardar aprendizajes estructurados en `retroalimentacion-perfit/`.

Este skill es ejecutado por el agente cloud programado en `/schedule` y debe correr sin intervención humana.

---

## Procedimiento

### 1. Configurar cuentas a monitorear

Leer desde archivo de configuración:
`retroalimentacion-perfit/cuentas.json`

```json
{
  "cuentas": [
    {
      "code": "simonashop",
      "api_key": "simonashop-r9NSUAgw3TxyimMTrEDFr5rNLh6ah0an",
      "nombre_cliente": "Simona Shop"
    },
    {
      "code": "cuenta2",
      "api_key": "xxx",
      "nombre_cliente": "Cliente 2"
    }
  ]
}
```

Si el archivo no existe, crear uno con template y detener (no continuar sin configuración).

---

### 2. Obtener campañas enviadas en las últimas 48hs (por cada cuenta)

Para cada cuenta en `cuentas.json`, hacer:

**GET** `https://pem-lb.myperfit.com/v2/{account}/campaigns`

Filtrar por:
- `status = "sent"` (solo enviadas)
- `updated_at > ahora - 48 horas`
- Ordenar por `updated_at` DESC

**Headers:**
```
Authorization: Bearer {api_key}
x-account: {account}
accept-language: es
content-type: application/json
```

**Resultado esperado:** Lista de IDs de campaña, nombres, asuntos, preheaders, fecha de envío.

Si no hay campañas nuevas para una cuenta, registrarlo pero continuar (no es error).

---

### 3. Traer reporte de performance de cada campaña

Para cada campaña encontrada:

**GET** `https://pem-lb.myperfit.com/v2/{account}/campaigns/{campaign_id}`

Extraer metrics:
- `recipients` — total enviados
- `delivered` — entregados (o 100% si no disponible)
- `opened` — aperturas únicas
- `open_rate` — tasa de apertura %
- `clicked` — clicks únicos
- `click_rate` — tasa de click %
- `bounced` — rebotes
- `bounce_rate` — tasa de rebote %
- `unsubscribed` — desuscripciones
- `unsubscribe_rate` — tasa de desuscripción %

Si los metrics no están en el response principal, buscar en:
- `data.statistics` (si existe)
- `data.metrics` (si existe)
- O fallback a `{}`

**Nota:** Perfit puede no exponer todas las métricas directamente. Si falta alguna, marcar como "no disponible" pero continuar.

---

### 4. Analizar y clasificar resultados (por cuenta)

Para cada cuenta, después de traer todas las campañas:

#### A. Patrones GANADORES

Buscar top 3:
1. **Asuntos con mejor open rate** — reportar el asunto exacto, % open rate, número de enviados
2. **Campañas con mejor CTR** — reportar nombre, CTR %, asunto
3. **Timing de envío** — si hay info, agrupar por hora de envío y ver cuál tuvo mejor apertura

#### B. Patrones PERDEDORES

Buscar problemas:
1. **Asuntos con bajo open rate** (< 5%) — reportar exactamente cuál
2. **Campañas con CTR muy bajo** (< 0.3%) — hipótesis: CTA débil, email sin foco claro
3. **Bounce rate anormal** (> 3%) — alerta: revisar lista o HTML
4. **Unsubscribe rate alto** (> 0.2%) — posible indicador de email no relevante

#### C. Detectar errores técnicos

- **Asuntos > 60 caracteres** → riesgo de corte
- **Preheader vacío** → oportunidad perdida
- **Bounce rate > 5%** → ERROR crítico
- **Delivery rate < 90%** → posible issue reputacional

#### D. Comparación cross-campaigns

- **Promedio de open rate por cuenta**
- **Promedio de CTR por cuenta**
- **Variabilidad:** Qué campañas se salen del promedio

---

### 5. Generar archivo de retroalimentación

Crear UN ARCHIVO POR CUENTA en `retroalimentacion-perfit/` con nombre:

`{account}-AAAA-MM-DD-ciclo-N.md`

Ej: `simonashop-2026-06-09-ciclo-01.md`

Formato:

```md
# simonashop · 2026-06-09 — Análisis Performance 48hs — Ciclo N

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

---

## ❌ Qué no funcionó

### Asuntos con bajo open rate
- "[Asunto]" — X.X% (Enviados: XXX)
- **Hipótesis:** [genérico / muy largo / sin beneficio]

### Problemas técnicos detectados
- [Campaña]: Bounce X% — Posible causa: [hipótesis]

---

## 🧠 Reglas aprendidas este ciclo

- **Regla 1:** [Patrón concreto con métrica]
- **Regla 2:** [Patrón concreto con métrica]

---

## 📋 Aplicar en próxima campaña

- **Asunto:** Usar patrón [ganador]
- **CTA:** [Tipo que mejor performance]
- **Segmento:** [Si aplica]

---

## ⚠️ Alertas & Revisar

- [Campañas con métricas fuera de rango]
- [Problemas técnicos detectados]

---

## 📝 Notas operativas

- Último ciclo: [fecha del ciclo anterior]
- Próximo ciclo: [fecha + 48hs]
- Generado por: Emi (agente automático)
```

---

### 6. Actualizar `retroalimentacion-perfit/cuentas.json` con último ciclo

```json
{
  "cuentas": [
    {
      "code": "simonashop",
      "api_key": "...",
      "nombre_cliente": "Simona Shop",
      "ultimo_ciclo": "2026-06-09",
      "proximo_ciclo": "2026-06-11"
    }
  ]
}
```

---

### 7. Reportar a Mica (resumen)

Si hay hallazgos en **cualquier cuenta**, enviar resumen:

> **[Fecha] · Perfit — Análisis Performance Automático**
>
> **Cuentas procesadas:** 3
>
> ✅ **Simona Shop — Hallazgo:** [Insight]
>
> ❌ **Cuenta X — Alerta:** [Problema detectado]
>
> 📁 **Reportes completos:**
> - `retroalimentacion-perfit/simonashop-2026-06-09-ciclo-01.md`
> - `retroalimentacion-perfit/cuenta2-2026-06-09-ciclo-01.md`
>
> **Próximo ciclo:** 2026-06-11 a las 9:00 AM

---

## Manejo de errores

- **Cuenta sin API key:** Saltar y registrar warning
- **API retorna 401 Unauthorized:** La key está vencida/inválida — registrar en log
- **0 campañas en 48hs:** No es error, registrar en archivo ciclo como "sin movimiento"
- **Métricas incompletas:** Mostrar "N/A" pero continuar análisis
- **Fallo en una cuenta:** No abortear — continuar con próximas cuentas

---

## Seguridad

- API keys en `retroalimentacion-perfit/cuentas.json` NO commitear a git
- El archivo `cuentas.json` debe estar en `.gitignore`
- Usar env vars si es posible para las keys
- Logs no deben mostrar API keys completas (redactar últimos 10 chars)

---

## Checklist antes de ejecutar (configuración inicial)

- [ ] Crear directorio `retroalimentacion-perfit/` si no existe
- [ ] Crear archivo `retroalimentacion-perfit/cuentas.json` con todas las cuentas
- [ ] Verificar que cada API key sea válida (test request)
- [ ] Asegurarse que `.gitignore` incluya `retroalimentacion-perfit/cuentas.json`
- [ ] Programar rutina con `/schedule` para cada 48 horas a las 9 AM Argentina (12:00 UTC)

---

## Notas importantes

- Este skill se ejecuta **sin intervención**. Debe manejar:
  - 0 campañas nuevas en una o múltiples cuentas
  - Múltiples cuentas en paralelo
  - Datos incompletos/inconsistentes de Perfit API
  
- **No editar archivos anteriores de ciclos** (son histórico)

- Si es el primer ciclo de una cuenta, crear archivo aunque sea "sin movimiento"

- Los aprendizajes se guardan **por account**, no se centralizan — cada cliente ve solo sus datos

---

## Referencia Perfit API

- Docs: https://developers.myperfit.com/
- Host: `https://pem-lb.myperfit.com/v2/{account}`
- Headers requeridos: `Authorization`, `x-account`, `accept-language`
