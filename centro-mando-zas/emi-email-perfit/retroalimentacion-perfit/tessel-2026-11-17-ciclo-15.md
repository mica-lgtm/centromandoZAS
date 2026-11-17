# tessel · 2026-11-17 — Análisis Performance 24hs — Ciclo 15

## Resumen

**Cliente:** Tessel Home
**Período objetivo:** 2026-11-16 12:00 a 2026-11-17 12:00 (UTC)
**Estado:** ⚠️ **Análisis NO ejecutado — bloqueo técnico + cuenta no configurada (persiste desde Ciclo 01)**
**Campañas analizadas:** 0 (no se pudo consultar la API)

---

## ⚠️ Qué pasó

Los mismos dos problemas reportados desde el Ciclo 01 (2026-11-01) siguen activos hoy, independientes entre sí:

1. **Bloqueo de red del entorno:** el host de la API de Perfit sigue rechazado por la política de red del contenedor cloud donde corre esta rutina (`pem-lb.myperfit.com:443 → 403 Forbidden`), confirmado hoy vía request directa (`curl` → `CONNECT tunnel failed, response 403`) y vía configuración del entorno (`Default`, acceso "limited", `allowed_hosts` vacío). **131 días corridos** desde el primer registro (2026-07-09).
2. **Cuenta sin API key configurada:** `retroalimentacion-perfit/cuentas.json` sigue teniendo configurada únicamente la cuenta `simonashop`. `tessel` no tiene una entrada con su `api_key`, así que aunque se resuelva el bloqueo de red, esta cuenta tampoco se podría consultar hasta agregarla. **161 días** pendiente desde el primer registro (2026-06-09).

No se generaron métricas, tablas ni patrones porque no hay información real para analizar — no se fabricaron datos.

---

## 📋 Qué falta para desbloquear

- Agregar la entrada de `tessel` (code, api_key, nombre_cliente) a `retroalimentacion-perfit/cuentas.json`.
- En el menú del entorno cloud (título de la sesión → Editar → Acceso de red): subir el nivel de acceso de red, o agregar `pem-lb.myperfit.com` a los dominios permitidos.
- Una vez resueltos ambos puntos, re-ejecutar `analizar_performance_perfit.py` para este ciclo (y corregir su ventana a 24hs).

---

## 📝 Notas operativas

- Generado: 2026-11-17 12:05 UTC
- Próximo ciclo: 2026-11-18 (diario)
- Generado por: Emi (agente automático)
- Este archivo documenta el intento de Ciclo 15; no reemplaza un análisis real. Van quince ciclos (01 a 15) bloqueados por los mismos dos motivos — requiere acción humana para desbloquearse.
