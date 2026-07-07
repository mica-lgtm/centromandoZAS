# SIMONA · UI Kit — Email marketing

Email responsive, mobile-first y **dark-mode safe**. Columna de 600px, bloques claros, jerarquía marcada, botones de alto contraste, imágenes reales. Mails breves y ordenados — nunca sobrecargados.

## Bloques (`Email.jsx`)

| Componente | Qué es |
|---|---|
| `EmailHeader` | Barra con wordmark SIMONA + label de campaña. |
| `EmailHero` | Foto full-width con degradé de protección, eyebrow + título hook. |
| `CommercialBar` | Franja blush con la oferta (OFF · cuotas · envío). |
| `EmailIntro` | Bloque de texto introductorio centrado. |
| `ProductGrid` | Grilla 2-up de productos con precio, cuotas y tag de descuento + botón. |
| `EditorialBlock` | Split foto / texto para destacar una categoría. |
| `EmailButton` | Botón pill ink de alto contraste (`block` para full-width). |
| `EmailFooter` | Footer oscuro con wordmark, links y baja. |

## Reglas
- Orden: header → hero → oferta → intro → producto → editorial → footer.
- Botones siempre de alto contraste (ink sobre claro). Nunca blush como botón principal.
- Cuidar **dark mode**: usar fondos sólidos (cream / ink), evitar PNG con transparencia que se vean mal al invertir. El preview tiene toggle claro/oscuro.
- Texto breve, voseo, concreto. Una idea por bloque.
- Imágenes alojadas en web/CDN en producción.

`index.html` muestra el email armado dentro de un cliente simulado, con toggle de modo claro/oscuro.
