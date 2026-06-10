# Brief para Rita — QA Supervisión Emails Vitalis Navitas

**De:** Emi, especialista en email marketing  
**Para:** Rita, QA supervisor  
**Fecha:** 9 de junio 2026  
**Campaña:** Vitalis Navitas — 6 Productos Bestsellers (Colágeno, Magnesio, Omega 3)

---

## Contexto Breve

Se crearon **6 emails de venta directa** para Vitalis Navitas, dirigidos a la base completa. Cada producto tiene **2 ángulos estratégicos diferentes**:

- **Colágeno Antiage:** Piel firme | Cabello y uñas
- **Magnesio + B6:** Energía real | Digestión y relajación
- **Omega 3 Plus:** Corazón fuerte | Memoria y cerebro

Todos incluyen **descuentos vigentes** y **copy educativo responsable**.

---

## Checklist de QA

### 1. **Compliance y Disclaimers**

- [ ] Cada email tiene disclaimer responsable sobre salud
- [ ] No hay claims médicos no validados (no promete "cura", "elimina", "garantiza resultados")
- [ ] Se menciona consultar con profesional en temas de salud
- [ ] No hay recomendación de suplementos ante condiciones médicas específicas
- [ ] Lenguaje evita miedo como disparador de venta

### 2. **Estructura y Contenido**

- [ ] Asunto claro (6-10 palabras, beneficio visible)
- [ ] Preheader complementa el asunto, diferente
- [ ] Apertura personal ("Hola,")
- [ ] Hero visual claro (título + subtítulo)
- [ ] Copy educativo + comercial bien equilibrado
- [ ] Beneficios enumerados en boxes visuales
- [ ] Ingredientes destacados con cantidades exactas
- [ ] Modo de uso preciso
- [ ] CTA claro y directo ("Comprá", "Empezá", "Probá")
- [ ] Promoción claramente identificada
- [ ] Precio en ARS, descuento visible
- [ ] Envío y beneficios secundarios mencionados

### 3. **Links y URLs**

- [ ] Link del producto correcto en CTA principal
- [ ] Link a web: https://www.vitalisnavitas.com válido
- [ ] Link de desuscripción: `${urls.unsubscribe}` presente
- [ ] No hay links rotos o incompletos
- [ ] URLs corresponden a productos 90 días (combos de 3 frascos)

### 4. **Datos Comerciales**

**Colágeno Antiage (Emails 1 y 2):**
- [ ] Precio combo 90 días: $108.900 ARS ✓
- [ ] Descuento: 15% OFF ✓
- [ ] Precio original: $128.700 ✓
- [ ] Con transferencia: $98.010 (10% adicional) ✓
- [ ] Ingredientes exactos en fórmula ✓

**Magnesio + B6 (Emails 3 y 4):**
- [ ] Precio combo 90 días: $57.900 ARS ✓
- [ ] Descuento: 16% OFF ✓
- [ ] Ingredientes por 2 cápsulas: 130mg Mg, 1,3mg B6 ✓
- [ ] Con transferencia: descuento adicional 10% ✓

**Omega 3 Plus (Emails 5 y 6):**
- [ ] Precio combo 90 días: $99.900 ARS ✓
- [ ] Descuento: 26% OFF ✓
- [ ] Precio original: $134.700 ✓
- [ ] Ingredientes exactos: EPA 500mg, DHA 200mg ✓
- [ ] Mención de Pronova Pure® (estándar oro) ✓
- [ ] Certificados FOS y GOED mencionados ✓

### 5. **Responsabilidad en Claims**

**No deben aparecer estas frases:**
- [ ] "Cura", "tratamiento", "elimina" (en contexto médico)
- [ ] "Garantizado", "asegurado", "100% resultados"
- [ ] "Soluciona definitivamente"
- [ ] Recomendación sin derivación a profesional
- [ ] Compatibilidad con medicación sin validación

**Deben aparecer:**
- [ ] "Ante dudas de salud, consulta con un profesional"
- [ ] "Los resultados pueden variar según consistencia y estilo de vida"
- [ ] Referencias a "información educativa"
- [ ] Derivación responsable en disclaimers

### 6. **Aspectos Técnicos y Diseño**

- [ ] HTML responsive (mobile-first)
- [ ] Estilos inline (sin etiquetas <style> que Perfit no lea)
- [ ] Sin scripts, sin formularios embebidos
- [ ] Sin imágenes locales (todas referenciadas por URL)
- [ ] Footer con contact info y links correctos
- [ ] Colores de marca aplicados (naranja, púrpura, azul según producto)
- [ ] Tipografía limpia y legible
- [ ] Contraste adecuado texto/fondo
- [ ] CTA buttons visibles y clickeables
- [ ] Dividers visuales funcionan

### 7. **Tono y Voz**

- [ ] Voseo argentino consistente ("comprá", "elegí", "probá")
- [ ] Cercano pero profesional (no informal ni invasivo)
- [ ] Educativo (explica beneficios, no solo vende)
- [ ] Claro y directo (sin jerga confusa)
- [ ] Sin exceso de emojis
- [ ] Presión comercial moderada (urgencia sin agresión)

### 8. **Diferenciación Entre Pares**

**Colágeno (1 vs 2):**
- [ ] Email 1 enfocado en piel | Email 2 enfocado en cabello/uñas
- [ ] Mismo producto, diferente ángulo de beneficio
- [ ] Copy diferente pero complementario

**Magnesio (3 vs 4):**
- [ ] Email 3 enfocado en energía | Email 4 enfocado en digestión
- [ ] Mismo producto, beneficios diferentes
- [ ] Objeciones distintas resueltas en cada email

**Omega 3 (5 vs 6):**
- [ ] Email 5 enfocado en corazón | Email 6 enfocado en memoria
- [ ] Mismo producto, públicos distintos (salud vs cognitivo)
- [ ] Copy educativo diferente pero coherente

---

## Validaciones Especiales para Vitalis

**Importante: Vitalis es suplementos/bienestar. Requiere cuidado extremo:**

- [ ] No confundir "beneficio" con "promesa médica"
- [ ] No sobreprometer resultados
- [ ] Disclaimers claros en todos los casos
- [ ] Referencias a "información educativa" presentes
- [ ] Derivación a profesionales cuando aplique
- [ ] Lenguaje científico pero accesible (no técnico innecesario)

---

## Puntos Fuertes para Validar que Están OK

✅ **Cada email tiene:**
- Beneficio claro identificable
- Copy educativo con mecanismo explicado
- Ingredientes exactos listados
- Modo de uso preciso
- Promo vigente con precio y descuento
- Disclaimer responsable
- Link a profesional en footer (desuscripción y consulta)

✅ **Diferenciación conseguida:**
- 2 ángulos distintos por producto = 6 mensajes diferentes
- Cada uno resuelve objeción diferente
- Copys no repiten, complementan

✅ **Compliance:**
- Sin claims no validados
- Sin exageración de beneficios
- Lenguaje responsable
- Derivación profesional presente

---

## Puntos de Riesgo a Revisar

**Potenciales issues:**

1. **Precios/Descuentos:** ¿Están vigentes hoy? Mica debe confirmar.
2. **URLs:** ¿Llevan exactamente al combo 90 días correcto?
3. **Imágenes:** Estos HTMLs usan gradientes y colores, no imágenes. Si Perfit requiere imágenes de producto, agregarlás después.
4. **Formatos:** ¿Perfit acepta HTML con estilos inline? Verificar compatibility.

---

## Observaciones de Emi

- Los emails están listos para subida manual a Perfit si API falla de nuevo (como en Simona)
- Cada HTML es independiente, puede editarse en Perfit sin afectar otros
- Copy es extenso pero estructurado — no se ve abrumador en móvil
- Colores y diseño respetan brand guidelines de Vitalis (naranja, púrpura, azul)
- Todos los descuentos están respaldados por URLs de tienda actual

---

## Próximos Pasos Después de QA

1. Rita aprueba o solicita cambios
2. Mica confirma datos comerciales (precios, URLs, promos)
3. Subida a Perfit (API o interfaz)
4. Testing de opens, clicks, conversión
5. Monitoreo de performance

---

**¿Dudas o cambios solicitados?**

Escribí acá y ajusto. Quiero asegurar que pase QA sin problemas.

Saludos,  
Emi