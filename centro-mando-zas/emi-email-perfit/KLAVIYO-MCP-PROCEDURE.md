# Klaviyo MCP Procedure · Global

> **REGLA OBLIGATORIA:** Todas las campañas en Klaviyo se crean SOLO con MCP, nunca con API requests directos.

Documento válido para: Vitalis Navitas y todos los clientes Klaviyo.  
Última actualización: 2026-06-10  
Responsable: Emi (agente de email marketing)

---

## Por qué MCP (no API requests)

- ✅ MCP maneja autenticación automáticamente
- ✅ MCP conoce el formato de payload correcto
- ✅ MCP gestiona versionado de API
- ❌ API requests: error 400, estructura incorrecta, mantenimiento manual

**Decisión:** Después de intentos con requests y tokens directos, quedó claro que MCP es la forma obligatoria.

---

## Flujo correcto: 3 pasos

### 1️⃣ Crear Email Template

Usa: `mcp__claude_ai_Klaviyo__klaviyo_create_email_template`

```
mcp__claude_ai_Klaviyo__klaviyo_create_email_template
  name: "Vitalis 01 - Colágeno Antiage"
  html: <HTML completo con {% unsubscribe 'Desuscribirse' %}>
  model: "other"
```

Respuesta: Template ID (ej: `WcgHsp`)

---

### 2️⃣ Crear Campaign + Campaign Message

Usa: `mcp__claude_ai_Klaviyo__klaviyo_create_campaign`

```
mcp__claude_ai_Klaviyo__klaviyo_create_campaign
  input: {
    "data": {
      "type": "campaign",
      "attributes": {
        "name": "Vitalis Bestsellers 01 - Colágeno Antiage",
        "audiences": {"included": ["TnRf72"]},  // Segmento ID
        "campaignMessages": {
          "data": [{
            "type": "campaign-message",
            "attributes": {
              "definition": {
                "channel": "email",
                "content": {
                  "subject": "Piel firme desde adentro: ya pasaron 90 días",
                  "previewText": "Continuá tu rutina..."
                }
              }
            }
          }]
        }
      }
    }
  }
  model: "other"
```

Respuesta:
- Campaign ID (ej: `01KTS94NCZB21EHMKMH0Z00MFF`)
- Campaign Message ID (ej: `01KTS94ND7HQR1MRAKWR2Z7SAX`)

---

### 3️⃣ Asignar Template a Campaign Message

Usa: `mcp__claude_ai_Klaviyo__klaviyo_assign_template_to_campaign_message`

```
mcp__claude_ai_Klaviyo__klaviyo_assign_template_to_campaign_message
  campaignMessageId: "01KTS94ND7HQR1MRAKWR2Z7SAX"
  emailTemplateId: "WcgHsp"
  model: "other"
```

✅ Done. Campaign está completa en Klaviyo, lista para validar.

---

## Segmentos Vitalis (referencia)

| Producto | Nombre | ID |
|---|---|---|
| Probióticos | Vieron pero no compraron últimos 30d | VuEpqE |
| Colágeno Antiage | Compradores de Colágeno hace 90d | **TnRf72** |
| Melena de León | Compradores recientes | TZqYjG |
| Colágeno FLEX | Compradores recientes | VGBnUr |
| Omega 3 | Compradores recientes | XWMNkK |
| NeuroCalm | Compradores recientes | Y3r4G9 |

---

## Checklist antes de crear

- [ ] HTML listo con `{% unsubscribe 'Desuscribirse' %}` (no `${urls.unsubscribe}`)
- [ ] Asunto (50-55 caracteres)
- [ ] Preheader (35-50 caracteres)
- [ ] Segmento ID confirmado
- [ ] From email: agus@vitalisnavitas.com
- [ ] From name: Vitalis Navitas

---

## Errores comunes

| Error | Causa | Solución |
|---|---|---|
| `'html' is not a valid field` | Intentando pasar HTML directo en campaign create | Crear template primero, luego asignar |
| `'campaignMessages' is required` | No incluir campaignMessages en payload | Ver paso 2️⃣ |
| `'from' is not valid` | Pasar from en campaign-message attributes | From va en template, no en campaignMessages |
| Status 400 con requests | Usando API directa en lugar de MCP | SOLO MCP. Nunca API requests. |

---

## Documentación referencia

- **MCP herramientas disponibles:**
  - `mcp__claude_ai_Klaviyo__klaviyo_create_email_template`
  - `mcp__claude_ai_Klaviyo__klaviyo_create_campaign`
  - `mcp__claude_ai_Klaviyo__klaviyo_assign_template_to_campaign_message`
  - (Más en Klaviyo MCP docs)

- **Configuración:** No requiere API keys manuales, MCP maneja todo.

---

## Próxima campaña

Cuando crees la próxima campaña Klaviyo, sigue este documento paso a paso. No intentes variaciones — MCP es el único camino válido.

