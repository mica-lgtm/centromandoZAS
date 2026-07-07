/* Email marketing kit — mobile-first blocks for Zoe Tienda. Real products + documented benefits. */

const ELogo = ({ variant = "color", h = 26 }) =>
  React.createElement("img", { src: `../../assets/zoe-logo-${variant}.png`, alt: "Zoe Tienda", style: { height: h, display: "block" } });

// Preheader + logo bar
function EmailHeader() {
  return React.createElement("div", { style: { padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--border)" } },
    React.createElement(ELogo, { h: 26 }),
    React.createElement("a", { href: "#", style: { fontSize: 13, fontWeight: 700, color: "var(--green-700)", textDecoration: "none", letterSpacing: ".02em" } }, "Ver tienda")
  );
}

// Hero banner — real lifestyle photo + protection gradient + commercial copy
function EmailHero() {
  return React.createElement("div", { style: { position: "relative", overflow: "hidden", color: "#fff" } },
    React.createElement("img", { src: "../../assets/products/lifestyle-bench.jpg", alt: "", style: { width: "100%", height: 280, objectFit: "cover", objectPosition: "center 30%", display: "block" } }),
    React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(34,34,34,.15) 0%, rgba(34,34,34,.72) 100%)" } }),
    React.createElement("div", { style: { position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 24px 26px" } },
      React.createElement("span", { className: "zoe-overline", style: { color: "var(--green-300)" } }, "Beneficios de la semana"),
      React.createElement("h1", { className: "zoe-h1", style: { color: "#fff", margin: "8px 0 0", fontSize: 34, lineHeight: 1.02 } }, "Hasta 30% OFF comprando en cantidad"),
      React.createElement("p", { className: "zoe-lead", style: { color: "rgba(255,255,255,.92)", margin: "10px 0 18px", fontSize: 16 } }, "Sumá títulos de tu autor favorito. Envío gratis a todo el país."),
      React.createElement("button", { className: "zoe-btn zoe-btn--primary", style: { fontSize: 15 } }, "Ver combos")
    )
  );
}

// Product row (2-up)
function EProduct({ src, pos, title, author, price, was }) {
  return React.createElement("div", { style: { flex: 1, minWidth: 0 } },
    React.createElement(window.ECover, { src, pos }),
    React.createElement("div", { style: { padding: "10px 2px 0" } },
      React.createElement("div", { style: { fontWeight: 700, fontSize: 16, color: "var(--fg)", lineHeight: 1.15 } }, title),
      React.createElement("div", { style: { fontSize: 13, color: "var(--fg-subtle)", fontWeight: 600 } }, author),
      React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 } },
        React.createElement("span", { style: { fontWeight: 800, fontSize: 18 } }, price),
        was && React.createElement("span", { style: { fontSize: 13, color: "var(--fg-muted)", textDecoration: "line-through", fontWeight: 600 } }, was)
      )
    )
  );
}
const ECover = ({ tone = "green", label = "PORTADA", src, pos = "center" }) => {
  if (src) {
    return React.createElement("img", { src, alt: "", style: { width: "100%", height: 170, objectFit: "cover", objectPosition: pos, borderRadius: 14, display: "block", boxShadow: "inset 0 0 0 1px rgba(34,34,34,.06)" } });
  }
  const tones = { green: "linear-gradient(135deg,#d6e7cc,#e7dcc8)", sand: "linear-gradient(135deg,#f4efe6,#e7dcc8)" };
  return React.createElement("div", { style: { height: 170, borderRadius: 14, background: tones[tone], display: "flex", alignItems: "center", justifyContent: "center", position: "relative" } },
    React.createElement("img", { src: "../../assets/zoe-leaf-color.png", alt: "", style: { height: 44, opacity: .85 } }),
    React.createElement("span", { style: { position: "absolute", bottom: 6, right: 8, fontSize: 9, fontWeight: 700, letterSpacing: ".1em", color: "rgba(34,34,34,.3)" } }, label)
  );
};
window.ECover = ECover;

function EmailProducts() {
  return React.createElement("div", { style: { padding: "32px 24px" } },
    React.createElement("h2", { className: "zoe-h3", style: { margin: "0 0 4px", fontSize: 24 } }, "Nuestros recomendados"),
    React.createElement("p", { className: "zoe-small", style: { margin: "0 0 18px" } }, "Elegidos para leer, formarte y regalar."),
    React.createElement("div", { style: { display: "flex", gap: 16 } },
      React.createElement(EProduct, { src: "../../assets/products/ttl-flatlay.jpg", pos: "center", title: "Toma Tu Lugar en el Plan de Dios", author: "Brunet · Paretti", price: "$19.800" }),
      React.createElement(EProduct, { src: "../../assets/products/toda-autoridad.jpg", pos: "center", title: "Toda Autoridad", author: "Asher Intrater", price: "$23.000" })
    )
  );
}

// Soft promo block — newsletter / club (documented benefit: 10% OFF transferencia)
function EmailPromo() {
  return React.createElement("div", { style: { margin: "0 24px 32px", background: "var(--green-100)", borderRadius: "var(--radius-lg)", padding: "26px 24px", textAlign: "center" } },
    React.createElement("img", { src: "../../assets/zoe-leaf-color.png", alt: "", style: { height: 30, margin: "0 auto 8px", display: "block" } }),
    React.createElement("h3", { className: "zoe-h4", style: { margin: "0 0 6px", color: "var(--green-900)" } }, "10% OFF pagando con transferencia"),
    React.createElement("p", { className: "zoe-small", style: { margin: "0 0 16px", color: "var(--green-700)" } }, "Más cómodo y con descuento. Válido en toda la tienda."),
    React.createElement("button", { className: "zoe-btn zoe-btn--primary", style: { fontSize: 14 } }, "Comprar ahora")
  );
}

// Footer
function EmailFooter() {
  return React.createElement("div", { style: { background: "var(--zoe-ink)", padding: "28px 24px", textAlign: "center", color: "rgba(255,255,255,.7)" } },
    React.createElement("img", { src: "../../assets/zoe-logo-white.png", alt: "Zoe Tienda", style: { height: 24, margin: "0 auto 14px", display: "block" } }),
    React.createElement("p", { style: { fontSize: 13, fontWeight: 500, margin: "0 0 12px", lineHeight: 1.5 } }, "Libros para leer, formarte, regalar y crecer en la fe."),
    React.createElement("div", { style: { display: "flex", gap: 18, justifyContent: "center", fontSize: 13, fontWeight: 700 } },
      React.createElement("a", { href: "#", style: { color: "var(--green-300)", textDecoration: "none" } }, "Tienda"),
      React.createElement("a", { href: "#", style: { color: "var(--green-300)", textDecoration: "none" } }, "WhatsApp"),
      React.createElement("a", { href: "#", style: { color: "var(--green-300)", textDecoration: "none" } }, "Instagram")
    ),
    React.createElement("p", { style: { fontSize: 11, color: "rgba(255,255,255,.4)", margin: "16px 0 0" } }, "Recibís este email porque sos parte de Zoe Tienda · Darse de baja")
  );
}

Object.assign(window, { EmailHeader, EmailHero, EmailProducts, EmailPromo, EmailFooter });
