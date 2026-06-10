# Checklist de Lanzamiento — Vitalis Navitas 6 Emails

**Campaña:** Vitalis Navitas — 6 Productos Bestsellers  
**Fecha de creación:** 9 de junio 2026  
**Responsable de lanzamiento:** Mica  

---

## Fase 1: Pre-Lanzamiento (Antes de Subir a Perfit)

### Validación de Datos Comerciales

- [ ] **Colágeno Antiage:**
  - [ ] Precio combo 90 días vigente: $108.900 ARS
  - [ ] Descuento vigente: 15% OFF (original $128.700)
  - [ ] Transferencia adicional: 10% OFF confirmado
  - [ ] URL correcta: https://www.vitalisnavitas.com/productos/colageno-hidrolizado-bebible-antiage-x-3-potes/
  - [ ] Stock disponible en combo 90 días

- [ ] **Magnesio + B6:**
  - [ ] Precio combo 90 días vigente: $57.900 ARS
  - [ ] Descuento vigente: 16% OFF
  - [ ] Transferencia adicional: 10% OFF confirmado
  - [ ] URL correcta: https://www.vitalisnavitas.com/productos/citrato-de-magnesio-vitamina-b6-x-3-frascos/
  - [ ] Stock disponible

- [ ] **Omega 3 Plus:**
  - [ ] Precio combo 90 días vigente: $99.900 ARS
  - [ ] Descuento vigente: 26% OFF (original $134.700)
  - [ ] Transferencia adicional: 10% OFF confirmado
  - [ ] URL correcta: https://www.vitalisnavitas.com/productos/omega-3-1000-epa-450-dha-180-alta-pureza-uardv/
  - [ ] Stock disponible

### QA Completada

- [ ] Rita revisó todos los 6 emails
- [ ] No hay issues de compliance o copy
- [ ] No hay links rotos
- [ ] HTMLs pasan validación de Perfit

### Preparación de Perfit

- [ ] Cuenta Vitalis activa en Perfit
- [ ] Acceso a crear campañas
- [ ] Segmentos/listas disponibles para envío (base completa)
- [ ] Descuentos/cuotas configurados en tienda si aplica

---

## Fase 2: Subida a Perfit

### Opción A: Subida Manual (Si API Falla)

Para cada email (1 a 6):

1. **Crear campaña en Perfit:**
   - [ ] Ir a "Crear Campaña" o "Nueva Campaña"
   - [ ] Nombre: "Vitalis — [Nombre Email]" (ej: "Vitalis — Email 1 Colágeno Piel")
   - [ ] Tipo: Email Marketing
   - [ ] Plantilla: Blanco o HTML personalizado

2. **Ingresar metadata:**
   - [ ] **Asunto:** Copiar exacto del RESUMEN-CAMPANIA.md
   - [ ] **Preheader:** Copiar exacto
   - [ ] **De:** Vitalis Navitas (o como está configurado)
   - [ ] **Reply-To:** support@vitalisnavitas.com (o configurado)

3. **Ingresar contenido HTML:**
   - [ ] Abrir archivo HTML correspondiente
   - [ ] Copiar TODO el código HTML (desde `<!DOCTYPE>` hasta `</html>`)
   - [ ] Pegarlo en editor HTML de Perfit
   - [ ] Vista previa en desktop y móvil
   - [ ] Verificar que se vea correcto

4. **Guardar:**
   - [ ] Guardar como borrador
   - [ ] No enviar aún (esperar a confirmar todos los 6)

### Opción B: Subida por API (Si Script Funciona)

- [ ] Script `subir-campanas-perfit.py` disponible y actualizado
- [ ] Credenciales Perfit en variables de entorno
- [ ] Ejecutar script con lista de 6 emails
- [ ] Verificar que se crearon todos sin errores

---

## Fase 3: Verificación Post-Subida

**Para cada email subido:**

- [ ] [ ] Email 1 - Colágeno Piel Firme:
  - [ ] Visible en Perfit
  - [ ] Asunto correcto
  - [ ] Preheader visible
  - [ ] HTML renderiza bien
  - [ ] Links funcionales (especialmente CTA principal)
  - [ ] Desuscripción presente y válida

- [ ] [ ] Email 2 - Colágeno Cabello & Uñas:
  - [ ] Ídem anterior
  - [ ] Diferente del Email 1 (visualmente)

- [ ] [ ] Email 3 - Magnesio Energía:
  - [ ] Ídem verificaciones

- [ ] [ ] Email 4 - Magnesio Digestión:
  - [ ] Ídem verificaciones
  - [ ] Color púrpura (diferente de Email 3)

- [ ] [ ] Email 5 - Omega 3 Corazón:
  - [ ] Ídem verificaciones
  - [ ] Color azul (diferente de anteriores)

- [ ] [ ] Email 6 - Omega 3 Memoria:
  - [ ] Ídem verificaciones
  - [ ] Misma paleta azul que Email 5

---

## Fase 4: Testing Antes de Enviar

### Test de Desktop

- [ ] Abrir cada email en cliente web (Gmail, Outlook, etc.)
- [ ] Verificar:
  - [ ] Layout se ve completo
  - [ ] Colores se renderizan correctamente
  - [ ] Botones CTA son clickeables
  - [ ] Links abren en nueva pestaña
  - [ ] Fuentes se ven bien (sans-serif limpio)
  - [ ] Imágenes/gradientes muestran OK
  - [ ] Footer visible y completo

### Test de Móvil

- [ ] Abrir cada email en iPhone, Android o emulador
- [ ] Verificar:
  - [ ] Layout responde bien (mobile-first)
  - [ ] Texto legible sin zoom
  - [ ] Botones CTA grandes y clickeables
  - [ ] No hay overflow de contenido
  - [ ] Imágenes/gradientes se ven
  - [ ] Footer completo

### Test de Links

- [ ] Clicar en cada CTA principal
- [ ] Verificar que lleva a URL correcta (combo 90 días)
- [ ] Clicar en desuscripción
- [ ] Verificar que funciona (llegaste a unsubscribe)
- [ ] Clicar en links de footer (si hay)

---

## Fase 5: Configuración de Envío

### Segmentación

- [ ] Segmento: Base completa Vitalis (o como esté configurado)
- [ ] Validar cantidad de contactos
- [ ] Excluir bounces, inactivos o como política de Vitalis

### Calendario

- [ ] **Opción 1:** Enviar todos los 6 en paralelo (mismo día/hora)
  - [ ] Día: TBD
  - [ ] Hora: TBD
  - [ ] Timezone: Argentina (ART)

- [ ] **Opción 2:** Enviar secuencialmente (1 cada día o cada 2 días)
  - [ ] Email 1 (Colágeno Piel): Día X, Hora Y
  - [ ] Email 2 (Colágeno Cabello): Día X+1, Hora Y
  - [ ] Email 3 (Magnesio Energía): Día X+2, Hora Y
  - [ ] Email 4 (Magnesio Digestión): Día X+3, Hora Y
  - [ ] Email 5 (Omega 3 Corazón): Día X+4, Hora Y
  - [ ] Email 6 (Omega 3 Memoria): Día X+5, Hora Y

**Recomendación Emi:** Envío secuencial (1 por día) da mejor engagement y permite monitorear performance de cada email antes del siguiente.

### Configuración de Envío

- [ ] Permisos de envío confirmados
- [ ] Sender verificado
- [ ] Reply-To correcto
- [ ] Unsubscribe link válido
- [ ] Compliance list (no enviar a bounces, etc.)

---

## Fase 6: Monitoreo Post-Envío

### Métricas a Rastrear (Por Email)

| Métrica | Email 1 | Email 2 | Email 3 | Email 4 | Email 5 | Email 6 |
|---------|---------|---------|---------|---------|---------|---------|
| Enviados | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Abiertos (%) | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Clicks (%) | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| CTR (Click-through rate) | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Conversiones (compras) | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Bounces | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Unsubscribes | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

### Alertas a Monitorear

- [ ] **Bounce rate alto** (>2%): Revisar lista de contactos
- [ ] **CTR muy bajo** (<1%): Posible issue con links
- [ ] **Unsubscribes altos** (>0.5%): Posible fatiga o mensajería no relevante
- [ ] **Conversión baja**: Revisar copy, oferta, landing page
- [ ] **Links rotos**: Verificar URLs antes de siguiente envío

### Comparación Entre Emails

- [ ] Email 1 vs Email 2 (mismo producto, ángulos distintos): ¿Cuál performó mejor?
- [ ] Email 3 vs Email 4 (mismo producto, beneficios distintos)
- [ ] Email 5 vs Email 6 (mismo producto, públicos distintos)
- [ ] **Learning:** Guardar insights para próximas campañas Vitalis

---

## Fase 7: Post-Lanzamiento

### Documentación

- [ ] Guardar IDs de campaña de Perfit (para referencia futura)
- [ ] Registrar fecha/hora de envío exacta
- [ ] Anotar any issues encontrados
- [ ] Documentar learnings de performance

### Reporte Final

- [ ] Crear resumen de performance general
- [ ] Analizar qué ángulo funcionó mejor (piel vs cabello, energía vs digestión, etc.)
- [ ] Recomendaciones para próximas campañas
- [ ] Actualizar `memory.md` de Emi con aprendizajes

### Seguimiento

- [ ] ¿Hubo consultas sobre descuentos o productos?
- [ ] ¿Algún feedback de clientes?
- [ ] ¿Necesario ajustar messaging para próxima campaña?

---

## Red Flags — Si Esto Pasa, Pausar y Revisar

🚩 **Links no funcionan en testing** → No enviar hasta revisar URLs  
🚩 **HTML no renderiza bien en móvil** → Revisar responsive en Perfit  
🚩 **Descuentos no coinciden con tienda** → Pausar, confirmar con Mica  
🚩 **Alta cantidad de bounces pre-envío** → Revisar calidad de lista  
🚩 **Legal/Compliance issue detectado** → Escalar a Mica antes de enviar  

---

## Contactos de Emergencia

- **Mica (ZAS):** Para validaciones finales, datos comerciales, decisiones
- **Rita (QA):** Para issues de compliance o calidad de email
- **Soporte Perfit:** Si hay problemas técnicos con API o interfaz
- **Vitalis (Cliente):** Si hay cambios en promos o stock durante campaña

---

## Sign-Off

**Creado por:** Emi  
**Fecha:** 9 de junio 2026  
**Estado:** Listo para lanzamiento  

**Mica:** Por favor, completa este checklist mientras avanzas con subida y envío.  
**Rita:** Gracias por la supervisión. Avísame si necesitas ajustes en la estrategia.

¿Dudas o aclaraciones antes de lanzar?