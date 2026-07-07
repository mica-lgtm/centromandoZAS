# Tessel Home · Contexto inicial · 2026-06-18

Datos extraídos de Perfit vía API.

---

## Sender

| ID | Nombre | Email | Auth |
|----|--------|-------|------|
| sen_cm47n3b2f07wx0778qx9ystd3 | Tessel | info@tessel.com.ar | OK |

---

## Listas disponibles

| ID | Nombre | Activos |
|----|--------|---------|
| 13 | Base IMA | 3.001 |
| 4 | Pop-up Web | 794 |
| 1 | Contactos de Tienda Nube | 689 |
| 2 | Compradores de Tienda Nube | 452 |
| 7 | Compradores - 3. Recientes | 80 |
| 9 | Compradores - 5. Necesitan incentivo | 16 |
| 6 | Compradores - 2. Leales | 2 |

**Nota:** la lista más grande es "Base IMA" (3.001 activos) — confirmar con Mica qué es IMA antes de usarla en campañas masivas.

---

## Últimas campañas enviadas

| Fecha | ID | Nombre | Enviados | Open% | CTR% | Conv |
|-------|----|--------|----------|-------|------|------|
| 2026-05-08 | 10 | HOT SALE - Viernes 8 de Mayo | 4.464 | 10% | 0.39% | 1 |
| 2026-05-09 | 11 | Hot Sale - Sábado - Envío 01 | 4.458 | 10% | 0.39% | 1 |
| 2026-05-10 | 12 | Hot Sale - Domingo - Envío 03 | 4.448 | 11% | 0.43% | 1 |
| 2026-05-11 | 13 | Hot Sale - Lunes - Envío 04 | 4.454 | 9.8% | 0.43% | 0 |
| 2026-05-12 | 14 | Hot Sale - Martes - Envío 05 | 4.442 | 10% | 0.23% | 0 |
| 2026-05-13 | 15 | Hot Sale - Miércoles - Envío 06 | 4.431 | 11% | 0.32% | 0 |
| 2026-05-14 | 18 | Hot Sale - Extendimos - Envío 07 | 4.427 | 10% | 0.23% | 0 |
| 2026-05-15 | 19 | HOT SALE - Viernes | 4.426 | 11% | 0.27% | 0 |
| 2026-05-16 | 20 | HOT SALE - SÁBADO 16 | 4.419 | 10% | 0.23% | 0 |
| 2026-05-17 | 21 | DOMINGO 17 | 4.416 | 10% | 0.29% | 0 |

---

## Patrones detectados

### Escala

~4.400 enviados por campaña. La base IMA (3.001) parece ser la lista principal usada en campañas — mayor que los contactos de Tienda Nube (689).

### Open rate

9.8–11% — estable y realista. Sin inflación de Apple Mail Privacy.

### CTR

- Rango: 0.23–0.43% — consistentemente bajo
- Solo 3 conversiones en 10 campañas de Hot Sale (10 días consecutivos)
- CTR más alto: primeros días (0.39–0.43%), cae con la secuencia diaria

### Alertas

- **CTR muy bajo en general** — la cuenta necesita trabajo en asuntos, contenido y segmentación antes de escalar envíos
- **Lista "Base IMA":** 3.001 activos, mayor que la base TN — confirmar origen y calidad antes de usar
- **Historial muy limitado:** solo campañas de Hot Sale mayo 2026. Sin baseline de campañas regulares
- **0 conversiones** en la mayoría de días del Hot Sale — posible problema de tracking o de oferta

---

## Benchmarks internos Tessel (Perfit)

Insuficiente data para benchmarks confiables. Referencia orientativa:

| Métrica | Actual | Objetivo |
|---------|--------|---------|
| Open rate | 10% | 12%+ |
| CTR | 0.23–0.43% | 0.60%+ |
| Conversiones | 0–1 | 3+ |
