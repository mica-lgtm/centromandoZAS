# Brief para Rita · QA Campaña Simona Shop Fin de Semana

**De:** Emi, especialista email marketing ZAS  
**Para:** Rita, supervisión QA  
**Fecha:** 2026-06-03  
**Marca:** Simona Shop  
**Período:** Viernes 6 a domingo 8 de junio 2026

---

## Resumen Ejecutivo

Campaña de 6 emails de fin de semana para Simona Shop. Cada email destaca un producto diferente con estilo "captura/producto protagonista" (validado por Mica). Objetivo: reforzar promos de fin de semana con estructura editorial-comercial.

---

## Puntos Clave a Validar

### Diseño
- [ ] HTMLs responsive en mobile (iOS, Android) y desktop
- [ ] Imágenes placeholders están reemplazadas por URLs públicas (o confirmamos alternativa sin imagen)
- [ ] Colores de Simona se adaptan correctamente (negros, marrones, azules suave)
- [ ] Botones CTAs tienen suficiente contraste y son clickeables
- [ ] Footer con desuscripción `${urls.unsubscribe}` está presente en todos
- [ ] Logos y redes (Instagram) están actualizados

### Copy
- [ ] Voseo argentino consistente (comprá, elegí, aprovechá, mirá)
- [ ] No hay typos ni errores ortográficos
- [ ] Tonalidad cercana pero profesional (sin exceso de familiaridad)
- [ ] CTAs son claros y urgentes donde corresponde (especialmente Email 6)
- [ ] Las preguntas retóricas suenan naturales ("¿Listo para sumar tu Nascar?")

### Funcionalidad
- [ ] Links a productos funcionan y apuntan a URLs correctas
- [ ] Preheader y asunto aparecen correctamente en preview
- [ ] HTML no tiene scripts, formularios embebidos ni imágenes locales
- [ ] Estilos inline funcionan en clientes email (Outlook, Gmail, Apple Mail)
- [ ] No hay caracteres raros o encoding roto

### Datos
- [ ] Precios son correctos: originales y con descuentos aplicados
- [ ] Talles disponibles son reales (36-44 en jeans, S-XL en abrigos)
- [ ] Promociones (12 cuotas, 15% OFF, 20% con transferencia) son confirmadas
- [ ] Nombre de productos coincide exactamente con tienda (ej: "Jean Nascar" no "Jean Nascar Flare")

### Estrategia
- [ ] Email 1 (Jean Nascar): apertura fuerte, producto bestseller ✓
- [ ] Email 2 (Blazer): complemento abrigo ✓
- [ ] Email 3 (Sweater): básico accesible, nuevo segmento ✓
- [ ] Email 4 (Camisa): versatilidad de capas ✓
- [ ] Email 5 (Combo): incentivo compra múltiple ✓
- [ ] Email 6 (Remate): urgencia máxima, último push ✓
- [ ] Cada email tiene propósito claro y no se repiten productos

---

## Detalles Específicos por Email

### Email 1: Jean Nascar
- Producto estrella, bestseller
- Hero grande con titulo "NASCAR" superpuesto
- 3 beneficios numerados (fit, tela, versatilidad)
- CTA: "COMPRAR JEAN NASCAR"

### Email 2: Blazer Mendoza Chocolate
- Abrigo complementario
- Color chocolate como protagonista visual
- 3 beneficios (color versátil, estructura, tela)
- CTA: "COMPRAR BLAZER MENDOZA"

### Email 3: Sweater Nievre Crudo
- Básico accesible
- Color crudo (arena/beige) central
- 3 beneficios (color neutro, tela suave, peso justo)
- CTA: "COMPRAR SWEATER NIEVRE"

### Email 4: Camisa Brisa
- Versatilidad de capas
- Tono moderno, azul-gris
- 3 beneficios (corte, versatilidad, caída)
- CTA: "COMPRAR CAMISA BRISA"

### Email 5: Combo 3 Piezas
- Grid visual de 3 productos
- Tabla de preços (original / con transferencia)
- Bloque de ahorro destacado ($64.928)
- CTA: "COMPRAR COMBO"

### Email 6: Remate Urgencia
- Banner oscuro con "⏰ ÚLTIMAS HORAS"
- 4 productos en tabla rápida (Jean, Sweater, Camisa, Remera)
- Múltiples CTAs (directo a cada producto + ver todo)
- Énfasis: "Hoy termina a las 23:59"

---

## Checklist de QA

### Obligatorio
- [ ] Todos los HTMLs pasan validación W3C (no errors)
- [ ] Responsive test en 3 breakpoints mínimo (320px, 768px, 1200px)
- [ ] Links URLs son reales y funcionan (no rompen luego)
- [ ] Sin scripts ni código malicioso
- [ ] Preheader visible en preview

### Recomendado
- [ ] Test de rendering en Litmus o similar (Gmail, Outlook, Apple Mail)
- [ ] Test de click en botones CTA
- [ ] Verificar que imagen placeholders se reemplacen cuando haya URLs públicas
- [ ] Revisar legibilidad en modo oscuro si el cliente lo soporta

### Post-Aprobación
- [ ] Mica valida precios, stock y timing antes de envío real
- [ ] Confirmar horarios de cada envío (2 por día)
- [ ] Perfit está configurado para envíos correctos

---

## Notas Especiales para Rita

- **Estilo validado:** Mica pidió "captura/producto protagonista", no "promo-grilla" ni "cierre de promo agresivo". Verificá que no haya alertas amarillas ni grillas de muchos productos.
- **Sin invenciones:** Todos los datos (precios, promociones, talles) están confirmados. Si Rita encuentra algo dudoso, avisar a Emi/Mica.
- **Copy cercano:** Tono es más editorial que comercial agresivo. Verificá que suene natural y no forzado.
- **Responsive es crítico:** Simona tiene muchas mobile users. Los emails deben verse bien en celular.

---

## Contacto

**Si hay dudas sobre copy, diseño o datos:**  
Contactar a Emi (especialista email) o Mica (aprobación final)

**Si hay bloques técnicos:**  
Revisar RESUMEN-CAMPANIA.md para detalles de cada email

---

**Estado:** Listo para QA  
**Prioridad:** Alta (campaña fin de semana, tiempo corto)  
**ETA de retroalimentación:** Hoy si es posible