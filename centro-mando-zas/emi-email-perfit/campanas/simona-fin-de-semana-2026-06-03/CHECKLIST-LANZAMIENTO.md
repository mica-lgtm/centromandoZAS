# Checklist Lanzamiento · Campaña Simona Fin de Semana

**Marca:** Simona Shop  
**Período:** Viernes 6 a domingo 8 de junio 2026  
**Estado:** Listo para validación Mica

---

## ✅ COMPLETADO POR EMI

- [x] 6 emails HTML responsive creados
- [x] Estilo captura/producto protagonista aplicado en todos
- [x] Copy en voseo argentino completado
- [x] Precios y promociones confirmadas (datos reales)
- [x] URLs de productos validadas y funcionando
- [x] Footer con `${urls.unsubscribe}` en todos los emails
- [x] Resumen de campaña creado (RESUMEN-CAMPANIA.md)
- [x] Brief para Rita preparado (BRIEF-RITA-QA.md)
- [x] Estructura de carpeta organizada

---

## ⚠️ PENDIENTE · VALIDACIÓN MICA

### Datos Críticos
- [ ] **Precios:** Confirmar que $77.500, $89.900, $60.500, $64.900 son exactos (originales)
- [ ] **Stock:** Jean Nascar 36-44, Blazer S-XL, Sweater todos talles, Camisa S-XL, Remera Arcilla 3 colores
- [ ] **Promociones:** 12 cuotas sin interés aplica a todos? 20% con transferencia en compra múltiple?
- [ ] **Envío gratis:** Aplica a todo el país sin mínimo?

### Imágenes
- [ ] Imágenes públicas para cada producto (hero)
- [ ] Si no hay imágenes, confirmar para usar alternativa visual
- [ ] URLs de imágenes válidas y permanentes

### Timing de Envíos
- [ ] Email 1 viernes: ¿hora? (ej: 08:00)
- [ ] Email 2 viernes: ¿hora? (ej: 14:00)
- [ ] Email 3 sábado: ¿hora?
- [ ] Email 4 sábado: ¿hora?
- [ ] Email 5 domingo: ¿hora?
- [ ] Email 6 domingo: ¿hora? (debe ser tarde, máximo impacto)

### Legal/Admin
- [ ] ¿Hora exacta cierre promo? (actualmente dice 23:59 domingo)
- [ ] ¿Links redes Simona correctos? (@simonashop confirmado)
- [ ] ¿URL política devoluciones correcta?
- [ ] ¿Contacto/email de soporte si es necesario?

---

## 🔄 ANTES DE ENVIAR A RITA

- [ ] Mica validó todos los datos críticos arriba
- [ ] Imágenes están insertadas en HTMLs (reemplazan placeholders)
- [ ] Se preparó lista de segmentos para cada email (en Perfit)
- [ ] Se configuraron horarios de envío en Perfit
- [ ] Se confirmó que Simona y Mica tienen acceso a Perfit

---

## 📤 ANTES DE LANZAMIENTO FINAL

- [ ] Rita hizo QA completa (BRIEF-RITA-QA.md)
- [ ] Todos los emails pasaron Litmus o test similar
- [ ] Mica revisó y aprobó versión final con imágenes
- [ ] Se hizo test de envío a cuenta interna de Simona
- [ ] Perfit está pronto para schedular (no accidental early send)
- [ ] Se tiene backup de campaign data por si hay rollback

---

## 📋 ARCHIVOS LISTOS PARA ENTREGAR

```
campanas/simona-fin-de-semana-2026-06-03/
├── email-1-viernes-manana-jean-nascar.html
├── email-2-viernes-tarde-blazer-mendoza.html
├── email-3-sabado-manana-sweater-nievre.html
├── email-4-sabado-tarde-camisa-brisa.html
├── email-5-domingo-manana-combo.html
├── email-6-domingo-tarde-remate.html
├── RESUMEN-CAMPANIA.md
├── BRIEF-RITA-QA.md
└── CHECKLIST-LANZAMIENTO.md (este archivo)
```

---

## 🚀 PRÓXIMO FLUJO (Después de Validación Mica)

1. Mica revisa checklist de validación arriba
2. Mica proporciona:
   - Confirmación de precios, stock, timing
   - URLs de imágenes o confirmación de alternativa visual
   - Horas exactas de envío
3. Emi (o quien lance) reemplaza placeholders con imágenes
4. Enviar campaña a Rita para QA final
5. Rita da OK o propone ajustes
6. Mica aprueba version final
7. Importar HTMLs a Perfit
8. Schedular envíos según timing validado
9. Lanzar campaña

---

## 📞 CONTACTOS

**Emi** (especialista email): Preguntas de copy, diseño, campaña  
**Rita** (QA): Preguntas de validación técnica, rendering  
**Mica** (aprobación): Decisiones finales, validación datos, timing

---

**Creado por:** Emi  
**Fecha creación:** 2026-06-03  
**Status:** Pendiente validación Mica  
**Urgencia:** Alta (campaña es fin de semana próximo)