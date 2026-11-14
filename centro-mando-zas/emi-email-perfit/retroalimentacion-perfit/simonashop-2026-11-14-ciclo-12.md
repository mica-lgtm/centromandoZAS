# simonashop · 2026-11-14 — Análisis Performance 24hs — Ciclo 12

## Resumen

**Cliente:** Simona Shop
**Período objetivo:** 2026-11-13 12:00 a 2026-11-14 12:00 (UTC)
**Estado:** ⚠️ **Análisis NO ejecutado — bloqueo técnico de red (persiste desde Ciclo 01)**
**Campañas analizadas:** 0 (no se pudo consultar la API)

---

## ⚠️ Qué pasó

El mismo bloqueo de red reportado en el Ciclo 01 (2026-11-01) y en cada ciclo siguiente hasta el Ciclo 11 (2026-11-13) sigue activo hoy. El entorno cloud donde corre esta rutina tiene bloqueado por política de red el host de la API de Perfit:

```
pem-lb.myperfit.com:443 → 403 Forbidden (CONNECT rechazado por el gateway de red del entorno)
```

No es un problema de la API key de esta cuenta (está configurada en `cuentas.json`) ni de la cuenta: es la política de red del entorno (`Default`, acceso "limited", sin hosts permitidos) la que rechaza la conexión antes de llegar a Perfit. Se confirmó hoy de tres formas: (1) ejecutando `analizar_performance_perfit.py` directamente, que falló con `<urlopen error Tunnel connection failed: 403 Forbidden>` para simonashop y lo reportó —incorrectamente— como "Sin campañas enviadas en las últimas 48hs" (mismo bug ya documentado en ciclos anteriores: el script confunde un fallo de red con ausencia de campañas, y además sigue filtrando por una ventana de 48hs en vez de las 24hs de esta rutina diaria); (2) con una request directa al host (`curl` → `CONNECT tunnel failed, response 403`); (3) verificando la configuración del entorno (`Default`, `network.type: "limited"`, `allowed_hosts: []`) — `pem-lb.myperfit.com` no está en la lista. No se pudo traer el listado de campañas ni sus métricas, por lo tanto **no hay datos reales para este ciclo**.

Este bloqueo de red lleva **128 días corridos** desde el primer registro (2026-07-09). No es un hito redondo (el próximo es a los 130 días, el 2026-11-16).

No se volvió a proponer el desbloqueo del entorno hoy: ya se propuso en el Ciclo 08 (2026-11-09) y requiere aprobación humana que no se dio porque esta rutina corre sin nadie presente. Repetir el intento todos los días sin que nadie lo apruebe solo generaría prompts de aprobación redundantes.

---

## 📋 Qué falta para desbloquear

- En el menú del entorno cloud (título de la sesión → Editar → Acceso de red): subir el nivel de acceso de red, o agregar `pem-lb.myperfit.com` a los dominios permitidos.
- Alternativa ya propuesta en el Ciclo 08 (pendiente de aprobación humana): un entorno personal dedicado a `emi-email-perfit` con `pem-lb.myperfit.com` habilitado.
- Una vez resuelto, re-ejecutar `analizar_performance_perfit.py` para este ciclo (y corregir su ventana a 24hs).

---

## 📝 Notas operativas

- Generado: 2026-11-14 12:00 UTC
- Próximo ciclo: 2026-11-15 (diario)
- Generado por: Emi (agente automático)
- Este archivo documenta el intento de Ciclo 12; no reemplaza un análisis real. Van doce ciclos (01 a 12) bloqueados por el mismo motivo — requiere acción humana para desbloquearse.
