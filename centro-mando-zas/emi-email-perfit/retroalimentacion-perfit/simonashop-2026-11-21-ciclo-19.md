# simonashop · 2026-11-21 — Análisis Performance 24hs — Ciclo 19

## Resumen

**Cliente:** Simona Shop
**Período objetivo:** 2026-11-20 12:00 a 2026-11-21 12:00 (UTC)
**Estado:** ⚠️ **Análisis NO ejecutado — bloqueo técnico de red (persiste desde Ciclo 01)**
**Campañas analizadas:** 0 (no se pudo consultar la API)

---

## ⚠️ Qué pasó

El mismo bloqueo de red reportado desde el Ciclo 01 (2026-11-01) sigue activo hoy. El entorno cloud donde corre esta rutina tiene bloqueado por política de red el host de la API de Perfit:

```
pem-lb.myperfit.com:443 → 403 Forbidden (CONNECT rechazado por el agent proxy del entorno: "no rule or network setting allows this host")
```

No es un problema de la API key de esta cuenta (está configurada en `cuentas.json`) ni de la cuenta: es la política de red del entorno la que rechaza la conexión antes de llegar a Perfit. Se confirmó hoy con una request directa al host (`curl` → `CONNECT tunnel failed, response 403`) y corriendo `analizar_performance_perfit.py` directamente, que falló con `urlopen error Tunnel connection failed: 403 Forbidden` y lo reportó —incorrectamente— como "Sin campañas enviadas en las últimas 24hs" (bug ya documentado: confunde fallo de red con ausencia de campañas). No se pudo traer el listado de campañas ni sus métricas, por lo tanto **no hay datos reales para este ciclo**.

Este bloqueo lleva **135 días corridos** desde el primer registro (2026-07-09).

No se repite el intento de proponer un entorno separado con `pem-lb.myperfit.com` habilitado: ya se propuso en el Ciclo 08 (2026-11-09) y requiere aprobación humana que no se da porque esta rutina corre sin nadie presente.

**Ajuste aplicado hoy:** se corrigió `analizar_performance_perfit.py` para que la ventana de análisis por defecto sea de 24hs (antes decía 48hs en el código, aunque la rutina ya corre a diario). Esto no cambia el resultado de hoy porque el bloqueo es de red, previo a cualquier filtro de fecha.

---

## 📋 Qué falta para desbloquear

- En el menú del entorno cloud (título de la sesión → Editar → Acceso de red): subir el nivel de acceso de red, o agregar `pem-lb.myperfit.com` a los dominios permitidos.
- Alternativa ya propuesta en el Ciclo 08 (pendiente de aprobación humana): un entorno personal dedicado a `emi-email-perfit` con `pem-lb.myperfit.com` habilitado.
- Una vez resuelto, re-ejecutar `analizar_performance_perfit.py` para este ciclo.

---

## 📝 Notas operativas

- Generado: 2026-11-21 (automático, 24hs)
- Próximo ciclo: 2026-11-22 (diario)
- Generado por: Emi (agente automático)
- Este archivo documenta el intento de Ciclo 19; no reemplaza un análisis real. Van diecinueve ciclos (01 a 19) bloqueados por el mismo motivo — requiere acción humana para desbloquearse.
