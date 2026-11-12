# 2026-11-12 · Retroalimentación Perfit (todas las cuentas) · Ciclo bloqueado

## Pedido original

Rutina diaria automática: generar reporte de retroalimentación de performance Perfit (últimas 24hs) para simonashop, juanitas, magnolias, zoetienda y tessel.

## Contexto leído

- `skills/analizar-performance-perfit.md`
- `FLUJO_RETROALIMENTACION_Y_PROPUESTAS.md`
- `retroalimentacion-perfit/cuentas.json`
- `analizar_performance_perfit.py`

## Decisiones tomadas

No se generaron archivos `-ciclo-11.md` para ninguna cuenta hoy. No hay acceso real a la API de Perfit, así que escribir "sin envíos" sería falso (no sabemos si hubo envíos o no) y los archivos de ciclo son histórico inmutable: mejor no crear un ciclo-11 incorrecto que después no se puede corregir.

## Supuestos usados

Ninguno — se decidió no inventar métricas ni asumir "sin movimiento".

## Datos pendientes de validar

Dos bloqueos encontrados, ambos requieren acción de Mica:

1. **Red bloqueada:** el host `pem-lb.myperfit.com` está denegado por la política de red del entorno (CONNECT rechazado con 403). Ninguna cuenta puede conectarse hoy, ni siquiera simonashop que sí tiene api_key configurada. Se intentó pedir el host vía `update_environment` pero requiere aprobación humana, que no está disponible en una corrida automática sin nadie presente. Mica puede habilitarlo corriendo esta rutina con "Run now" y aprobando el pedido ahí, o agregando `pem-lb.myperfit.com` en Allowed domains desde la configuración del entorno (menú del entorno cloud → Edit → Network access).
2. **`retroalimentacion-perfit/cuentas.json` solo tiene configurada la cuenta `simonashop`** (con su `api_key`). Juanitas, Magnolias Deco, Tienda ZOE y Tessel Home no tienen entrada ni `api_key` en ese archivo, pese a tener ciclos históricos hasta el 2026-11-11 (ciclo-10). Sin esas keys, el script no puede traer campañas de esas 4 cuentas. Mica necesita agregar las 4 cuentas faltantes (code, api_key, nombre_cliente) a `cuentas.json`.
3. Nota de seguridad aparte: `cuentas.json` está trackeado en git (no está en `.gitignore`), contrario a lo que indica `skills/analizar-performance-perfit.md`. La api_key de simonashop ya quedó expuesta en el historial del repo desde el commit `9199e79`.

## Links usados

Ninguno.

## Estado actual

Ciclo de hoy (2026-11-12) sin ejecutar para las 5 cuentas. Ningún archivo de reporte nuevo en `retroalimentacion-perfit/`. No se tocó ningún ciclo anterior.

## Próximo paso

1. Mica resuelve el acceso de red (host `pem-lb.myperfit.com`) y completa `cuentas.json` con las 4 cuentas faltantes.
2. Mica decide si sacar `cuentas.json` del tracking de git y rotar la api_key de simonashop ya expuesta.
3. Próxima corrida de la rutina reintenta el ciclo-11 para las 5 cuentas.
