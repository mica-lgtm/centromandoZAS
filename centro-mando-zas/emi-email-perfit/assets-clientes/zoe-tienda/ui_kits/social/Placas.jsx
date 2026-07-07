/* Social placas — the actual piece designs. Real Zoe Tienda products + documented benefits. */

// ---- 1:1 FEED — product / promo ----
function FeedPlaca() {
  return React.createElement(
    "div",
    { style: { width: "100%", height: "100%", background: "var(--paper)", padding: 44, boxSizing: "border-box", display: "flex", flexDirection: "column" } },
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      React.createElement(window.Logo, { h: 34 }),
      React.createElement(window.Badge, { kind: "zoe-badge--offer" }, "-30% OFF")
    ),
    React.createElement("div", { style: { display: "flex", gap: 28, alignItems: "center", flex: 1, marginTop: 18 } },
      React.createElement(window.Cover, { src: "../../assets/products/ttl-flatlay.jpg", w: 240, h: 320, radius: 18, pos: "center" }),
      React.createElement("div", null,
        React.createElement("span", { className: "zoe-overline" }, "Lo más vendido"),
        React.createElement("h1", { className: "zoe-h1", style: { margin: "8px 0 0", fontSize: 48 } }, "Toma Tu Lugar en el Plan de Dios"),
        React.createElement("p", { className: "zoe-lead", style: { margin: "14px 0 0" } }, "Brunet · Paretti. Hasta 30% OFF comprando en cantidad.")
      )
    ),
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      React.createElement(window.Btn, { style: { fontSize: 18, padding: "16px 34px" } }, "Comprar ahora"),
      React.createElement("span", { className: "zoe-small", style: { fontWeight: 700 } }, "zoetienda.com")
    )
  );
}

// ---- 9:16 STORY — full-bleed lifestyle photo + protection gradient ----
function StoryPlaca({ safe }) {
  return React.createElement(
    "div",
    { style: { width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", boxSizing: "border-box", overflow: "hidden", background: "var(--zoe-ink)" } },
    React.createElement("img", { src: "../../assets/products/lifestyle-couch-ttl.jpg", alt: "", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" } }),
    // protection gradients top + bottom for legibility
    React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(34,34,34,.55) 0%, rgba(34,34,34,0) 32%, rgba(34,34,34,0) 50%, rgba(34,34,34,.78) 100%)" } }),
    safe && React.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 } },
      React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 250, borderBottom: "1.5px dashed rgba(255,255,255,.4)" } }),
      React.createElement("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 250, borderTop: "1.5px dashed rgba(255,255,255,.4)" } }),
      React.createElement("span", { style: { position: "absolute", top: 16, left: 20, fontSize: 12, fontWeight: 800, letterSpacing: ".1em", color: "rgba(255,255,255,.7)" } }, "ZONA NO SEGURA"),
      React.createElement("span", { style: { position: "absolute", bottom: 16, left: 20, fontSize: 12, fontWeight: 800, letterSpacing: ".1em", color: "rgba(255,255,255,.7)" } }, "ZONA NO SEGURA")
    ),
    React.createElement("div", { style: { position: "relative", zIndex: 2, padding: "120px 56px 0" } },
      React.createElement(window.Logo, { h: 32, variant: "white" })
    ),
    React.createElement("div", { style: { position: "relative", zIndex: 2, flex: 1 } }),
    React.createElement("div", { style: { position: "relative", zIndex: 2, padding: "0 56px 140px" } },
      React.createElement("span", { className: "zoe-overline", style: { color: "var(--green-300)" } }, "Novedad"),
      React.createElement("h1", { className: "zoe-h1", style: { color: "#fff", fontSize: 60, margin: "12px 0 0", lineHeight: 1 } }, "Ya llegó Toma Tu Lugar"),
      React.createElement("p", { className: "zoe-lead", style: { color: "rgba(255,255,255,.92)", fontSize: 24, margin: "18px 0 26px" } }, "Brunet · Paretti. Envío gratis a todo el país."),
      React.createElement(window.Btn, { kind: "zoe-btn--primary", style: { width: "100%", fontSize: 19, padding: "18px" } }, "Deslizá para comprar")
    )
  );
}

// ---- CAROUSEL — editorial hook slide (slide 1 of a saved carousel) ----
function CarouselHook() {
  return React.createElement(
    "div",
    { style: { width: "100%", height: "100%", background: "var(--paper)", padding: 52, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" } },
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      React.createElement(window.Leaf, { h: 40 }),
      React.createElement("span", { className: "zoe-caption", style: { fontWeight: 700 } }, "1 / 5")
    ),
    React.createElement("div", null,
      React.createElement("span", { className: "zoe-overline" }, "Guardalo para después"),
      React.createElement("h1", { className: "zoe-display", style: { fontSize: 74, margin: "12px 0 0", lineHeight: 0.98 } }, "3 libros para profundizar tu vida de oración")
    ),
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } },
      React.createElement("span", { className: "zoe-small", style: { fontWeight: 700, color: "var(--green-700)" } }, "Deslizá"),
      React.createElement("span", { style: { fontSize: 26, color: "var(--zoe-green)" } }, "→")
    )
  );
}

// ---- AD — high impact, performance, real combo ----
function AdPlaca() {
  return React.createElement(
    "div",
    { style: { width: "100%", height: "100%", background: "var(--zoe-ink)", padding: 44, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "#fff" } },
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      React.createElement(window.Logo, { h: 30, variant: "white" }),
      React.createElement(window.Badge, { kind: "zoe-badge--solid" }, "Envío gratis")
    ),
    React.createElement("div", { style: { display: "flex", gap: 26, alignItems: "center" } },
      React.createElement(window.Cover, { src: "../../assets/products/pack-242box-fan.jpg", w: 210, h: 250, radius: 16, pos: "center" }),
      React.createElement("div", null,
        React.createElement("h1", { className: "zoe-h1", style: { color: "#fff", margin: 0, fontSize: 44 } }, "242 BOX: cuatro manuales en uno"),
        React.createElement("p", { className: "zoe-lead", style: { color: "var(--green-300)", margin: "12px 0 0", fontWeight: 700 } }, "Hasta 30% OFF comprando en cantidad")
      )
    ),
    React.createElement(window.Btn, { style: { fontSize: 19, padding: "18px", width: "100%" } }, "Comprar ahora")
  );
}

Object.assign(window, { FeedPlaca, StoryPlaca, CarouselHook, AdPlaca });
