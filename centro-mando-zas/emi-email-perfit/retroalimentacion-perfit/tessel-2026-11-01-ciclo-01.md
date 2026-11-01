# tessel · 2026-11-01 — Análisis Performance 24hs — Ciclo 01

## Resumen

**Cliente:** Tessel Home
**Período objetivo:** 2026-10-31 12:00 a 2026-11-01 12:00 (UTC)
**Estado:** ⚠️ **Análisis NO ejecutado — bloqueo técnico + cuenta no configurada**
**Campañas analizadas:** 0 (no se pudo consultar la API)

---

## ⚠️ Qué pasó

Dos problemas, independientes entre sí:

1. **Bloqueo de red del entorno:** el host de la API de Perfit está rechazado por la política de red del contenedor cloud donde corre esta rutina (`pem-lb.myperfit.com:443 → 403 Forbidden` en el gateway de salida).
2. **Cuenta sin API key configurada:** `retroalimentacion-perfit/cuentas.json` hoy solo tiene configurada la cuenta `simonashop`. `tessel` no tiene una entrada con su `api_key`, así que aunque se resuelva el bloqueo de red, esta cuenta tampoco se podría consultar hasta agregarla.

No se generaron métricas, tablas ni patrones porque no hay información real para analizar — no se fabricaron datos.

---

## 📋 Qué falta para desbloquear

- Agregar la entrada de `tessel` (code, api_key, nombre_cliente) a `retroalimentacion-perfit/cuentas.json`.
- Habilitar en la configuración del entorno (menú del entorno cloud → Editar → Acceso de red) el dominio `pem-lb.myperfit.com`, o subir el nivel de acceso de red del entorno.
- Una vez resueltos ambos puntos, re-ejecutar `analizar_performance_perfit.py` para este ciclo.

---

## 📝 Notas operativas

- Generado: 2026-11-01 12:05 UTC
- Próximo ciclo: 2026-11-02 (diario)
- Generado por: Emi (agente automático)
- Este archivo documenta el intento de Ciclo 01; no reemplaza un análisis real. Cuando se resuelvan ambos bloqueos, el próximo ciclo con datos reales será el Ciclo 02.
