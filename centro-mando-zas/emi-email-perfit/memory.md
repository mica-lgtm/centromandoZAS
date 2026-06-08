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
