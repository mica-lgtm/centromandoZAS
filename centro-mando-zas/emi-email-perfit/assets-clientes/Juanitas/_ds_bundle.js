/* @ds-bundle: {"format":3,"namespace":"JuanitasDesignSystem_618829","components":[],"sourceHashes":{"ui_kits/social/templates.jsx":"2f6fc0883d0f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JuanitasDesignSystem_618829 = window.JuanitasDesignSystem_618829 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/social/templates.jsx
try { (() => {
/* Juanitas — Plantillas comerciales (UI kit social)
   Recursos de marca reales: paleta multicolor, resaltador (marker),
   lettering manuscrito (Caveat), doodles, fotos REALES de catálogo.
   Datos reales de juanitas.ar. */

const LOGO = "../../assets/juanitas-logo.png";
const LOGO_CREAM = "../../assets/juanitas-logo-cream.png";
const PH = "../../assets/productos/"; // fotos reales

/* ---------- Bloques reutilizables ---------- */
function Logo({
  variant = "color",
  h = 54,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: variant === "cream" ? LOGO_CREAM : LOGO,
    alt: "juanitas",
    style: {
      height: h,
      width: "auto",
      objectFit: "contain",
      display: "block",
      ...style
    }
  });
}

/* Resaltador / marker — bloque de color tras la palabra clave */
function Mark({
  children,
  color = "fucsia",
  style = {}
}) {
  const bg = {
    fucsia: "var(--fucsia)",
    coral: "var(--coral)",
    azul: "var(--azul)",
    naranja: "var(--naranja)",
    amarillo: "var(--amarillo)",
    rosa: "var(--rosa)",
    tinta: "var(--tinta)"
  }[color];
  const dark = color === "amarillo" || color === "rosa";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      background: bg,
      color: dark ? "var(--tinta)" : "#fff",
      padding: "0.04em 0.28em",
      borderRadius: 8,
      lineHeight: 1.16,
      ...style
    }
  }, children);
}

/* Lettering manuscrito de acento */
function Hand({
  children,
  size = 48,
  color = "var(--fucsia)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-hand)",
      fontWeight: 600,
      fontSize: size,
      lineHeight: 0.9,
      color,
      display: "inline-block",
      ...style
    }
  }, children);
}
function Pill({
  children,
  tone = "primary",
  size = "md",
  style = {}
}) {
  const tones = {
    primary: {
      background: "var(--coral)",
      color: "#fff"
    },
    dark: {
      background: "var(--tinta)",
      color: "#fff"
    },
    light: {
      background: "#fff",
      color: "var(--tinta)",
      boxShadow: "var(--sh-sm)"
    },
    fucsia: {
      background: "var(--fucsia)",
      color: "#fff"
    }
  };
  const sizes = {
    md: {
      fontSize: 26,
      padding: "18px 38px"
    },
    lg: {
      fontSize: 34,
      padding: "24px 52px"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font)",
      fontWeight: 700,
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      ...tones[tone],
      ...sizes[size],
      ...style
    }
  }, children);
}
function Price({
  now,
  was,
  scale = 1,
  color = "var(--coral)",
  wasColor = "var(--fg3)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14 * scale
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 52 * scale,
      color,
      letterSpacing: "-.02em"
    }
  }, now), was && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 28 * scale,
      color: wasColor,
      textDecoration: "line-through"
    }
  }, was));
}

/* sparkles decorativos sutiles */
function Sparkle({
  x,
  y,
  s = 28,
  c = "var(--rosa)",
  r = 0
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      fontSize: s,
      color: c,
      lineHeight: 1,
      transform: `rotate(${r}deg)`,
      pointerEvents: "none"
    }
  }, "\u2726");
}

/* =====================================================================
   1) PROMO CUADRADA 1080×1080 — HOT DAYS, fondo coral, foto real cutout
   ===================================================================== */
function PromoSquare() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: "var(--coral)",
      position: "relative",
      overflow: "hidden",
      fontFamily: "var(--font)",
      color: "#fff",
      padding: 72,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 120,
    y: 300,
    s: 40,
    c: "#fff"
  }), /*#__PURE__*/React.createElement(Sparkle, {
    x: 620,
    y: 140,
    s: 26,
    c: "var(--amarillo)",
    r: 12
  }), /*#__PURE__*/React.createElement(Logo, {
    variant: "cream",
    h: 64
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      maxWidth: 600,
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: ".2em",
      color: "var(--amarillo)"
    }
  }, "\uD83D\uDD25 HOT DAYS \uD83D\uDD25"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "14px 0 0",
      fontWeight: 800,
      fontSize: 112,
      lineHeight: .9,
      letterSpacing: "-.03em"
    }
  }, "HASTA", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Mark, {
    color: "tinta",
    style: {
      fontSize: 168,
      padding: "0 18px"
    }
  }, "50%"), " OFF"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontWeight: 500,
      fontSize: 34,
      color: "rgba(255,255,255,.92)",
      maxWidth: 460
    }
  }, "En tus packs favoritos de bombis \u2728")), /*#__PURE__*/React.createElement("img", {
    src: PH + "colaless-pack-hero.webp",
    alt: "Pack x3",
    style: {
      position: "absolute",
      right: -40,
      bottom: -10,
      width: 470,
      height: 470,
      objectFit: "contain",
      filter: "drop-shadow(0 12px 30px rgba(40,40,47,.3))",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      bottom: 80,
      display: "flex",
      gap: 18,
      alignItems: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "light",
    size: "lg"
  }, "Aprovech\xE1 ahora \u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-hand)",
      fontWeight: 600,
      fontSize: 38,
      color: "var(--amarillo)"
    }
  }, "\xA1solo por hoy!")));
}

/* =====================================================================
   2) PRODUCTO CUADRADO 1080×1080 — fondo crema, foto real, marker + script
   ===================================================================== */
function ProductSquare() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: "var(--crema)",
      position: "relative",
      overflow: "hidden",
      fontFamily: "var(--font)",
      color: "var(--tinta)",
      padding: 72,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 60,
    y: 420,
    s: 30,
    c: "var(--rosa)"
  }), /*#__PURE__*/React.createElement(Sparkle, {
    x: 980,
    y: 300,
    s: 24,
    c: "var(--amarillo)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 58
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--azul)",
      color: "#fff",
      fontWeight: 700,
      fontSize: 24,
      padding: "12px 24px",
      borderRadius: 999
    }
  }, "Env\xEDo gratis")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 200,
      width: 470,
      height: 600,
      borderRadius: 40,
      overflow: "hidden",
      boxShadow: "var(--sh-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PH + "colaless-grid-colores.webp",
    alt: "Colaless",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 72,
      top: 280,
      width: 400
    }
  }, /*#__PURE__*/React.createElement(Hand, {
    size: 64
  }, "colaless"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 4px",
      fontWeight: 800,
      fontSize: 60,
      lineHeight: .95,
      letterSpacing: "-.02em"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    color: "rosa"
  }, "TIRO ALTO")), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "26px 0 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, ["Estiliza tu figura", "No marca bajo la ropa", "Algodón suave, todo el día"].map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontWeight: 500,
      fontSize: 28,
      color: "var(--fg1)",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fucsia)"
    }
  }, "\u273F"), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Price, {
    now: "$25.900",
    was: "$33.000",
    scale: 1.15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "primary",
    size: "md"
  }, "Lo quiero \u2192"))));
}

/* =====================================================================
   3) HISTORIA 1080×1920 — 3x2, fondo rosa wash, foto real, marker
   ===================================================================== */
function StoryPiece() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1920,
      background: "var(--rosa-soft)",
      position: "relative",
      overflow: "hidden",
      fontFamily: "var(--font)",
      color: "var(--tinta)",
      padding: 80,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 120,
    y: 520,
    s: 44,
    c: "var(--rosa)"
  }), /*#__PURE__*/React.createElement(Sparkle, {
    x: 900,
    y: 400,
    s: 30,
    c: "var(--amarillo)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    h: 64
  }), /*#__PURE__*/React.createElement(Hand, {
    size: 70,
    style: {
      marginTop: 40
    }
  }, "promo de la semana"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "8px 0 0",
      fontWeight: 800,
      fontSize: 150,
      lineHeight: .9,
      letterSpacing: "-.03em"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    color: "fucsia",
    style: {
      padding: "0 16px"
    }
  }, "3x2")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px 0 0",
      fontWeight: 700,
      fontSize: 52,
      color: "var(--coral)"
    }
  }, "en bombis"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontWeight: 500,
      fontSize: 38,
      color: "var(--fg2)"
    }
  }, "Llev\xE1 3, pag\xE1 2 \uD83D\uDC95")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 110,
      right: 110,
      top: 780,
      height: 760,
      borderRadius: 48,
      overflow: "hidden",
      boxShadow: "var(--sh-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PH + "colaless-grid-basicos.webp",
    alt: "Bombis",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 130,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "primary",
    size: "lg"
  }, "Conseguilo ahora \u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 30,
      color: "var(--coral)"
    }
  }, "Desliz\xE1 hacia arriba \u2191")));
}

/* =====================================================================
   4) ANUNCIO HORIZONTAL 1200×628 — fondo azul, foto real, marker
   ===================================================================== */
function HorizontalAd() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1200,
      height: 628,
      display: "flex",
      fontFamily: "var(--font)",
      background: "var(--azul)",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 480,
      flexShrink: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PH + "colaless-grid-colores.webp",
    alt: "Colaless",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 56,
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    x: 560,
    y: 70,
    s: 30,
    c: "var(--amarillo)"
  }), /*#__PURE__*/React.createElement(Logo, {
    variant: "cream",
    h: 46,
    style: {
      marginBottom: 26
    }
  }), /*#__PURE__*/React.createElement(Hand, {
    size: 42,
    color: "var(--amarillo)",
    style: {
      marginBottom: 4
    }
  }, "solo por hoy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontWeight: 800,
      fontSize: 60,
      lineHeight: .96,
      letterSpacing: "-.02em"
    }
  }, "2da unidad", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Mark, {
    color: "coral"
  }, "70% OFF")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 26px",
      fontWeight: 500,
      fontSize: 26,
      color: "rgba(255,255,255,.9)"
    }
  }, "En toda la l\xEDnea de algod\xF3n."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pill, {
    tone: "light",
    size: "md"
  }, "Aprovech\xE1 ahora \u2192"))));
}

/* =====================================================================
   5) BANNER EMAIL ~600px — banner + beneficios color-coded + CTA
   ===================================================================== */
function EmailBanner() {
  const benefit = (color, t, s) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: 18,
      color
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontWeight: 500,
      fontSize: 13,
      color: "var(--fg2)",
      lineHeight: 1.35
    }
  }, s));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      background: "#fff",
      fontFamily: "var(--font)",
      boxShadow: "var(--sh-md)",
      overflow: "hidden",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--coral)",
      padding: "20px 28px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "cream",
    h: 38
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 320,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PH + "colaless-grid-basicos.webp",
    alt: "Campa\xF1a",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "70px 28px 22px",
      background: "linear-gradient(to top, rgba(40,40,47,.82), transparent)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: ".16em",
      textTransform: "uppercase"
    }
  }, "Nueva temporada"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "6px 0 0",
      fontWeight: 800,
      fontSize: 38,
      lineHeight: 1,
      letterSpacing: "-.02em"
    }
  }, "Renov\xE1 tus ", /*#__PURE__*/React.createElement(Mark, {
    color: "fucsia"
  }, "b\xE1sicos")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 28px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 17,
      color: "var(--fg2)",
      lineHeight: 1.5
    }
  }, "Los packs que us\xE1s todos los d\xEDas, ahora con env\xEDo gratis desde $50.000."), /*#__PURE__*/React.createElement("a", {
    style: {
      display: "inline-block",
      marginTop: 20,
      background: "var(--coral)",
      color: "#fff",
      fontWeight: 700,
      fontSize: 17,
      padding: "15px 38px",
      borderRadius: 999,
      textDecoration: "none"
    }
  }, "Ver la colecci\xF3n \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: "22px 16px",
      borderTop: "1px solid var(--linea)",
      background: "var(--crema)"
    }
  }, benefit("var(--verde)", "Envío gratis", "Desde $50.000 a todo el país"), benefit("var(--azul)", "3 y 6 cuotas", "Sin interés"), benefit("var(--naranja)", "Cambios fáciles", "Hasta 72 hs")));
}
Object.assign(window, {
  Logo,
  Mark,
  Hand,
  Pill,
  Price,
  Sparkle,
  PromoSquare,
  ProductSquare,
  StoryPiece,
  HorizontalAd,
  EmailBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/templates.jsx", error: String((e && e.message) || e) }); }

})();
