# Skill · Crear Campaña en Perfit por API

## Objetivo

Crear una campaña completa en Perfit usando API (sin interfaz web), con HTML, sender, recipients y validación. Lanzarla inmediatamente, programarla para una fecha específica, o dejarla en borrador.

Útil para:
- Automatizar subida de campañas de múltiples clientes
- Integrar con workflows de Emi
- Escalar el proceso a todas las cuentas Perfit de ZAS

## Requisitos previos

- **API Key** de Perfit para la cuenta (formato: `xxxx-r9NSUAgw3TxyimMTrEDFr5rNLh6ah0an`)
- **Account code** (ej: `simonashop`, `testrelly`)
- **Sender ID** (formato: `sen_...`) — obtener vía `/senders` API
- **List ID(s)** (números, ej: `1`, `2`, `3`)
- **HTML file** — archivo `.html` responsive, listo para Perfit
- **Subject** — asunto del email
- **Preheader** (opcional) — texto vista previa
- **Fecha de envío** (opcional) — ISO-8601 con offset (ej: `2026-06-13T13:55:00-03:00`)

## Flujo de creación

El script ejecuta 10 pasos en orden:

1. **Crear campaña** → POST `/campaigns` (retorna `campaign_id`)
2. **Crear template** → POST `/templates` con relación a campaña (retorna `template_id`)
3. **Adjuntar template** → PUT `/campaigns/{campaign_id}` con `UNLAYER_TPL_ID`
4. **Setear recipients** → PUT `/campaigns/{campaign_id}` con lista(s)
5. **Subir HTML** → PUT `/templates/{template_id}` con contenido HTML, subject, preheader
6. **Sincronizar HTML** → PUT `/campaigns/{campaign_id}/contents/{content_id}/body`
7. **Obtener sender info** → GET `/senders/{sender_id}` (email, name, reply-to)
8. **Setear "from"** → PUT `/campaigns/{campaign_id}/contents/{content_id}` con from/reply-to
9. **Asignar sender** → PUT `/campaigns/{campaign_id}` con `SENDER_ID` y `UNLAYER_TPL_VALID`
10. **Validar** → GET `/campaigns/{campaign_id}/validate` (aborta si hay errores)

**Paso opcional 11 (Launch):**
- Si `--draft`: detiene aquí, campaña lista en borrador
- Si `--schedule-date {fecha}`: lanza en modo SCHEDULED
- Si nada: lanza en modo NOW (inmediato)

## Script: `create_campaign_perfit.py`

Ubicación: `/Users/mica/Desktop/centro-mando-zas/emi-email-perfit/create_campaign_script/create_campaign.py`

(Versión draft con `--draft` flag también disponible)

### Uso básico

```bash
python3 create_campaign.py \
  --account simonashop \
  --api-key "simonashop-r9NSUAgw3TxyimMTrEDFr5rNLh6ah0an" \
  --name "Mi Campaña" \
  --subject "Asunto del email" \
  --preheader "Vista previa" \
  --sender-id "sen_cktp44qao048i07748n87slt2" \
  --html-file "/ruta/a/email.html" \
  --list-ids 1 2 3 \
  --draft
```

### Variantes de lanzamiento

**Crear en DRAFT (sin lanzar):**
```bash
python3 create_campaign.py ... --draft
```

**Lanzar inmediatamente (NOW):**
```bash
python3 create_campaign.py ... # (omitir --draft y --schedule-date)
```

**Programar para fecha/hora específica:**
```bash
python3 create_campaign.py ... --schedule-date "2026-06-13T13:55:00-03:00"
```

### Argumentos completos

| Argumento | Requerido | Descripción |
|-----------|-----------|-------------|
| `--account` | ✓ | Código de cuenta (ej: `simonashop`) |
| `--api-key` | ✓ | API key. O usar env var `PERFIT_API_KEY` |
| `--name` | ✓ | Nombre de la campaña |
| `--subject` | ✓ | Asunto del email |
| `--sender-id` | ✓ | ID del remitente (sen_...) |
| `--html-file` | ✓ | Ruta al archivo HTML |
| `--list-ids` | ✓ | IDs de listas (1 o más, space separated) |
| `--preheader` | — | Texto de vista previa (max 50 chars) |
| `--description` | — | Descripción/comentarios de campaña |
| `--tags` | — | Tags de campaña (space separated) |
| `--schedule-date` | — | ISO-8601 con offset (ej: `2026-06-13T13:55:00-03:00`) |
| `--ignore-last-mailed-days` | — | Ignorar contatos maileados hace N días (default: 0) |
| `--exclude-inactive` | — | Excluir contactos inactivos (default: ON) |
| `--include-inactive` | — | NO excluir inactivos |
| `--reply-to` | — | Override reply-to (default: derivado del sender) |
| `--draft` | — | Crear en DRAFT sin lanzar |
| `--dry-run` | — | Solo mostrar requests sin ejecutar |
| `--verbose` | — | Log detallado de requests/responses |

## Cómo obtener Sender ID

Si no tenés el sender ID:

```bash
python3 << 'EOF'
import urllib.request
import json

API_KEY = "tu-api-key"
ACCOUNT = "tu-account"

url = f"https://apiv3.myperfit.com/senders"
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "x-account": ACCOUNT,
    "accept-language": "es"
}

req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode('utf-8'))
    for sender in data.get("data", []):
        print(f"ID: {sender['id']} | Nombre: {sender.get('name')} | Email: {sender.get('email')}")
EOF
```

## Caso de uso: Simona Shop (ejemplo)

**Contexto:**
- 6 campañas de email marketing para fin de semana
- Cada una con producto protagonista diferente
- Todas para la misma cuenta, lista y sender

**Ejecución:**

```bash
# Campaña 1: Jean
python3 create_campaign.py \
  --account simonashop \
  --api-key "$PERFIT_API_KEY" \
  --name "Simona - Viernes Mañana - Jean Nascar" \
  --subject "El jean que funciona con todo" \
  --preheader "Fit perfecto, precio accesible. 12 cuotas sin interés." \
  --sender-id "sen_cktp44qao048i07748n87slt2" \
  --html-file "campanas/simona-fin-de-semana-2026-06-03/email-1-viernes-manana-jean-nascar.html" \
  --list-ids 1 \
  --draft

# Campaña 2: Blazer (igual, cambiar name/subject/html-file)
# ... y así para las 6
```

**Resultado:**
- ✓ 6 campañas creadas
- ✓ Validadas
- ✓ Con HTML sincronizado
- ✓ Con sender configurado
- ✓ En estado DRAFT (listas para revisar en Perfit)

## Validación antes de lanzar

Después de crear en DRAFT, validar en Perfit:

1. Abrir cada campaña en Perfit web
2. Revisar vista previa del email
3. Validar links, imágenes, responsividad (mobile)
4. Revisar asunto, preheader, sender
5. Si todo OK → lanzar manualmente en Perfit o programar fecha

## Manejo de errores

Si algo falla, el script aborta inmediatamente y muestra el error HTTP.

Errores comunes:

| Error | Causa | Solución |
|-------|-------|----------|
| `RESOURCE_EXISTS` | Campaña con ese nombre ya existe | Cambiar nombre o borrar campaña anterior |
| `401 Unauthorized` | API key incorrecta/expirada | Validar API key |
| `404 Not Found` | Account, sender o template no existe | Verificar IDs |
| `validation failed` | HTML inválido o campos faltantes | Revisar HTML, subject, preheader |

## Seguridad

- Preferir `PERFIT_API_KEY` env var sobre `--api-key` en terminal (no queda en history)
- El script redacta el token en logs (muestra `Bearer ***`)
- No commitear API keys en repositorio

## Checklist antes de ejecutar

- [ ] HTML listo y responsive (validado con `crear-html-perfit.md`)
- [ ] Account code confirmado (ej: `simonashop`)
- [ ] API key obtenida y segura (env var o archivo no tracked)
- [ ] Sender ID obtenido (ej: `sen_...`)
- [ ] List IDs confirmados (ej: `1`, `2`, `3`)
- [ ] Subject y preheader finales
- [ ] Decidir: DRAFT, NOW, o SCHEDULED
- [ ] Si SCHEDULED: fecha en ISO-8601 con offset (ej: `2026-06-13T13:55:00-03:00`)

## Próximos pasos

Después de crear campaña(s):

1. **Si DRAFT:**
   - Revisar en Perfit
   - Pasar a Rita para QA si corresponde
   - Lanzar manualmente cuando esté validado

2. **Si NOW o SCHEDULED:**
   - Validación automática ya pasó
   - Campaña lanzada o programada
   - Monitorear performance

## Tips y trucos

- **Batch de campañas:** Usar un script bash/Python para iterar sobre múltiples HTMLs
- **Dry run:** Usar `--dry-run --verbose` para inspeccionar requests sin ejecutar
- **Template reutilizable:** El template creado se puede compartir entre campañas (ver `UNLAYER_TPL_ID`)
- **Reintento:** Si falla un paso, corregir y reintentar — el script es idempotente en creación pero requerirá cambiar nombre si la campaña ya existe

## Referencia API Perfit

- Docs: https://developers.myperfit.com/
- Hosts: 
  - PEM (campaign engine): `https://pem-lb.myperfit.com/v2/{account}`
  - APIV3 (templates/senders): `https://apiv3.myperfit.com`
