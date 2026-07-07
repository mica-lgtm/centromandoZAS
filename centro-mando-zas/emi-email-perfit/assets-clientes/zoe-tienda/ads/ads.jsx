/* Zoe Tienda — Anuncio GRACIAS10 · Día del Padre · finde largo
   Dos versiones × 3 formatos.
   - Versión A: el "10% OFF" vive DENTRO del cupón (cupón protagonista).
   - Versión B: el "10% OFF" vive en el TEXTO; el cupón muestra solo el código.
   Real products + documented benefit. Sin códigos de barras. */

const ASSET = "../assets";

/* ---------- shared pieces ---------- */
const Logo = ({ variant = "color", h }) =>
  React.createElement("img", { src: `${ASSET}/zoe-logo-${variant}.png`, alt: "Zoe Tienda", style: { height: h, width: "auto", display: "block" } });

const Overline = ({ light, children }) =>
  React.createElement("span", { className: "zad-overline" + (light ? " zad-overline--light" : "") }, children);

// Orange bubble — the hook. "El regalo para papá".
const PapaPill = () =>
  React.createElement("span", { className: "zad-pill" }, "El regalo para papá");

// The big hero headline (version A): the urgency message, large.
const Hero = ({ cls }) =>
  React.createElement("h1", { className: "zad-hero " + cls }, "Solo por este fin de semana");

// Per-version overline copy.
const OVERLINE = { A: "Especial Día del Padre", B: "Solo por este fin de semana" };

const Cta = ({ full }) =>
  React.createElement("button", { className: "zad-cta", style: full ? { width: "100%" } : null }, "Comprar ahora");

// The coupon. mode 'full' = green stub "10% OFF" + code · 'code' = leaf stub + code only.
function Coupon({ mode = "full", fs }) {
  const stub = mode === "full"
    ? [React.createElement("span", { key: "p", className: "zad-ticket-pct" }, "10%"),
       React.createElement("span", { key: "o", className: "zad-ticket-off" }, "OFF")]
    : React.createElement("img", { src: `${ASSET}/zoe-leaf-white.png`, alt: "" });
  return React.createElement(
    "div",
    { className: "zad-ticket zad-ticket--" + mode, style: { fontSize: fs } },
    React.createElement("div", { className: "zad-ticket-stub" }, stub),
    React.createElement("div", { className: "zad-ticket-body" },
      React.createElement("span", { className: "zad-ticket-label" }, "Usá el código"),
      React.createElement("span", { className: "zad-ticket-code" }, "GRACIAS10"),
      React.createElement("span", { className: "zad-ticket-hint" }, "al finalizar tu compra")
    )
  );
}

// Big "10% OFF" headline (only used in version B)
const BigNum = ({ cls }) =>
  React.createElement("h1", { className: "zad-bignum " + cls },
    React.createElement("span", { className: "zad-bignum-pct" }, "10%"),
    React.createElement("span", { className: "zad-bignum-off" }, "OFF")
  );

/* ============================================================
   1 · CUADRADO 1080×1080 — Meta Ads (feed)
   ============================================================ */
function SquareAd({ version }) {
  const A = version === "A";
  return React.createElement(
    "div",
    { className: "zad zad-square" },
    React.createElement("div", { className: "zad-square-top" },
      React.createElement("div", { className: "zad-row-between" },
        React.createElement(Logo, { h: 46 }),
        React.createElement(PapaPill, null)
      ),
      React.createElement("div", { className: "zad-square-hero" },
        React.createElement(Overline, null, OVERLINE[version]),
        A
          ? React.createElement(Hero, { cls: "zad-hero--sq" })
          : React.createElement(React.Fragment, null,
              React.createElement(BigNum, { cls: "zad-bignum--sq" }),
              React.createElement("p", { className: "zad-subhead zad-subhead--sq" }, "en toda la tienda")
            )
      ),
      React.createElement(Coupon, { mode: A ? "full" : "code", fs: A ? 120 : 116 }),
      React.createElement("div", { className: "zad-row-between zad-square-foot" },
        React.createElement(Cta, null),
        React.createElement("span", { className: "zad-url" }, "zoetienda.com")
      )
    ),
    React.createElement("div", { className: "zad-square-photo" },
      React.createElement("img", { src: `${ASSET}/ads-photos/ttl-flatlay.jpg`, alt: "", style: { objectPosition: "center 62%" } })
    )
  );
}

/* ============================================================
   2 · VERTICAL 1080×1920 — Meta Ads (stories / reels)
   ============================================================ */
function VerticalAd({ version }) {
  const A = version === "A";
  return React.createElement(
    "div",
    { className: "zad zad-vertical" },
    React.createElement("div", { className: "zad-vert-photo" },
      React.createElement("img", { src: `${ASSET}/ads-photos/lifestyle-couch-ttl.jpg`, alt: "", style: { objectPosition: "center 24%" } }),
      React.createElement("div", { className: "zad-vert-grad" }),
      React.createElement("div", { className: "zad-vert-head" },
        React.createElement(Logo, { variant: "white", h: 50 }),
        React.createElement(Overline, { light: true }, OVERLINE[version])
      )
    ),
    React.createElement("div", { className: "zad-vert-body" },
      React.createElement(PapaPill, null),
      A
        ? React.createElement(Hero, { cls: "zad-hero--vert" })
        : React.createElement(React.Fragment, null,
            React.createElement(BigNum, { cls: "zad-bignum--vert" }),
            React.createElement("p", { className: "zad-subhead zad-subhead--vert" }, "en toda la tienda")
          ),
      React.createElement(Coupon, { mode: A ? "full" : "code", fs: A ? 122 : 108 }),
      React.createElement(Cta, { full: true }),
      React.createElement("span", { className: "zad-url zad-url--center" }, "zoetienda.com")
    )
  );
}

/* ============================================================
   3 · HORIZONTAL 1200×628 — Google Ads
   ============================================================ */
function HorizontalAd({ version }) {
  const A = version === "A";
  return React.createElement(
    "div",
    { className: "zad zad-horizontal" },
    React.createElement("div", { className: "zad-horiz-photo" },
      React.createElement("img", { src: `${ASSET}/ads-photos/lifestyle-couch-ttl.jpg`, alt: "", style: { objectPosition: "center 22%" } })
    ),
    React.createElement("div", { className: "zad-horiz-body" },
      React.createElement("div", { className: "zad-row-between" },
        React.createElement(Logo, { h: 38 }),
        React.createElement(PapaPill, null)
      ),
      React.createElement(Overline, null, OVERLINE[version]),
      A
        ? React.createElement(Hero, { cls: "zad-hero--horiz" })
        : React.createElement("div", null,
            React.createElement(BigNum, { cls: "zad-bignum--horiz" }),
            React.createElement("p", { className: "zad-subhead zad-subhead--horiz" }, "en toda la tienda")
          ),
      React.createElement(Coupon, { mode: A ? "full" : "code", fs: A ? 82 : 74 }),
      React.createElement("div", { className: "zad-row-between zad-horiz-foot" },
        React.createElement(Cta, null),
        React.createElement("span", { className: "zad-url" }, "zoetienda.com")
      )
    )
  );
}

/* ---------- mount ---------- */
function AdsApp() {
  const { DesignCanvas, DCSection, DCArtboard } = window;
  return React.createElement(
    DesignCanvas,
    null,
    React.createElement(DCSection,
      { id: "ver-a", title: "Versión A · El 10% va en el cupón", subtitle: "El cupón es protagonista · Día del Padre · finde largo" },
      React.createElement(DCArtboard, { id: "sq-a", label: "Cuadrado · 1080×1080 · Meta Ads", width: 1080, height: 1080 },
        React.createElement(SquareAd, { version: "A" })),
      React.createElement(DCArtboard, { id: "vt-a", label: "Vertical · 1080×1920 · Stories", width: 1080, height: 1920 },
        React.createElement(VerticalAd, { version: "A" })),
      React.createElement(DCArtboard, { id: "hz-a", label: "Horizontal · 1200×628 · Google Ads", width: 1200, height: 628 },
        React.createElement(HorizontalAd, { version: "A" }))
    ),
    React.createElement(DCSection,
      { id: "ver-b", title: "Versión B · El 10% va en el texto", subtitle: "Titular grande + cupón solo con el código" },
      React.createElement(DCArtboard, { id: "sq-b", label: "Cuadrado · 1080×1080 · Meta Ads", width: 1080, height: 1080 },
        React.createElement(SquareAd, { version: "B" })),
      React.createElement(DCArtboard, { id: "vt-b", label: "Vertical · 1080×1920 · Stories", width: 1080, height: 1920 },
        React.createElement(VerticalAd, { version: "B" })),
      React.createElement(DCArtboard, { id: "hz-b", label: "Horizontal · 1200×628 · Google Ads", width: 1200, height: 628 },
        React.createElement(HorizontalAd, { version: "B" }))
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(AdsApp));
