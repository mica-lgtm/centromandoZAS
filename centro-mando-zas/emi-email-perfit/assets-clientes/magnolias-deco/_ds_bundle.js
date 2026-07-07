/* @ds-bundle: {"format":3,"namespace":"MagnoliasDecoDesignSystem_412315","components":[],"sourceHashes":{"ui_kits/social/Pieces.jsx":"0d158e465112","ui_kits/social/Primitives.jsx":"ae1d7129683e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MagnoliasDecoDesignSystem_412315 = window.MagnoliasDecoDesignSystem_412315 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/social/Pieces.jsx
try { (() => {
// Pieces.jsx — Magnolias Deco channel piece templates.
// Each piece renders at NATIVE canvas size (px). The showcase scales them.
// Relies on Primitives.jsx (window globals).

const A = "../../assets/"; // asset path from ui_kits/social/

// ============ FEED POST — product (1080×1350) ============
function FeedPost({
  img = A + "img-coffee-table.webp",
  cat = "Muebles",
  name = "Mesa ratona Nórdica",
  now = "$62.300",
  was = "$89.000",
  disc = "-30%"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(1080, 1350, "var(--offwhite)")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 56,
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 42
  }), /*#__PURE__*/React.createElement(Tag, {
    tone: "red",
    style: {
      fontSize: 18,
      padding: "9px 18px"
    }
  }, "Oferta")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 28,
      overflow: "hidden",
      margin: "40px 0 0",
      position: "relative",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 28,
      left: 28
    }
  }, /*#__PURE__*/React.createElement(Discount, {
    style: {
      fontSize: 40,
      padding: "16px 22px"
    }
  }, disc))), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 36,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 20
    }
  }, cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont,
      fontWeight: 800,
      fontSize: 52,
      letterSpacing: "-0.02em",
      color: "var(--black)",
      lineHeight: 1,
      marginTop: 8
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Price, {
    now: now,
    was: was,
    size: 56
  }))), /*#__PURE__*/React.createElement(Button, {
    style: {
      fontSize: 26,
      padding: "20px 38px",
      borderRadius: 14
    }
  }, "Compr\xE1 ahora"))));
}

// ============ STATEMENT POST — yellow plate (1080×1350) ============
function StatementPost({
  kicker = "Contenido de valor",
  line1 = "Tu casa no está fea.",
  line2 = "Está mal decorada.",
  bg = "var(--yellow)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(1080, 1350, bg)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 80,
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 44
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    color: "rgba(10,10,10,.55)",
    style: {
      fontSize: 20
    }
  }, kicker)), /*#__PURE__*/React.createElement(Statement, {
    size: 118,
    style: {
      lineHeight: 0.92
    }
  }, line1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, line2)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont,
      fontWeight: 600,
      fontSize: 28,
      color: "rgba(10,10,10,.6)"
    }
  }, "Desliz\xE1 para descubrir c\xF3mo \u2192")));
}

// ============ STORY — full-bleed photo + bottom plate (1080×1920) ============
function Story({
  img = A + "img-living-room.webp",
  kicker = "Nuevo ingreso",
  title = "Living que respira",
  cta = "Ver colección"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(1080, 1920, "var(--black)")
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(transparent 45%, rgba(0,0,0,.72))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 64,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "white",
    size: 44
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      right: 64,
      bottom: 110
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--yellow)",
    style: {
      fontSize: 24
    }
  }, kicker), /*#__PURE__*/React.createElement(Statement, {
    size: 104,
    color: "#fff",
    style: {
      marginTop: 18,
      lineHeight: 0.94
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      fontSize: 30,
      padding: "24px 46px",
      borderRadius: 16
    }
  }, cta, " \u2192"))));
}

// ============ CAROUSEL COVER (1080×1350) ============
function CarouselCover({
  img = A + "img-nightstand.webp",
  kicker = "Guía rápida",
  title = "5 detalles que cambian un ambiente"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(1080, 1350, "var(--black)")
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(105deg, rgba(10,10,10,.78) 40%, transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: 72,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "white",
    size: 42
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--yellow)",
    style: {
      fontSize: 24
    }
  }, kicker), /*#__PURE__*/React.createElement(Statement, {
    size: 92,
    color: "#fff",
    style: {
      marginTop: 20,
      maxWidth: 760
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mFont,
      fontWeight: 700,
      fontSize: 26,
      color: "#fff",
      opacity: 0.7
    }
  }, "Desliz\xE1 \u2192")));
}

// ============ CAROUSEL CONTENT PLATE (1080×1350) ============
function CarouselPlate({
  n = "01",
  title = "Sumá textiles",
  img = A + "img-detail-3.webp",
  body = "Una manta de lino o un almohadón con textura cambian la temperatura visual de cualquier sofá."
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(1080, 1350, "var(--offwhite)")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 660,
      position: "relative",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 40,
      left: 48,
      fontFamily: mFont,
      fontWeight: 900,
      fontSize: 130,
      color: "#fff",
      lineHeight: 0.8,
      letterSpacing: "-0.04em",
      textShadow: "0 4px 24px rgba(0,0,0,.35)"
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "60px 72px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    size: 70,
    style: {
      marginBottom: 22
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont,
      fontSize: 34,
      lineHeight: 1.45,
      color: "var(--fg2)",
      margin: 0,
      fontWeight: 400
    }
  }, body))));
}

// ============ AD PLATE — conversion (1080×1080) ============
function AdPlate({
  img = A + "img-detail-1.webp",
  hook = "Renová el baño sin obra",
  benefit = "Muebles, espejos y textiles que transforman el ambiente",
  cta = "Comprá hoy",
  disc = "Hasta -40%"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(1080, 1080, "var(--offwhite)")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 36,
      left: 36
    }
  }, /*#__PURE__*/React.createElement(Discount, {
    style: {
      fontSize: 38,
      padding: "16px 22px"
    }
  }, disc)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 40,
      right: 44
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "white",
    size: 38
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--black)",
      padding: "48px 64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Statement, {
    size: 62,
    color: "#fff"
  }, hook), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont,
      fontSize: 26,
      color: "var(--warm-gray)",
      margin: "14px 0 0",
      fontWeight: 500
    }
  }, benefit)), /*#__PURE__*/React.createElement(Button, {
    style: {
      fontSize: 28,
      padding: "22px 40px",
      borderRadius: 14,
      flexShrink: 0
    }
  }, cta))));
}

// ============ EMAIL BANNER (1200×520) ============
function EmailBanner({
  img = A + "img-table-setting.webp",
  kicker = "Mesa & cocina",
  title = "La mesa también decora",
  cta = "Ver novedades"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(1200, 520, "var(--offwhite)")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 540,
      padding: 64,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 18
    }
  }, kicker), /*#__PURE__*/React.createElement(Statement, {
    size: 58,
    style: {
      marginTop: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      fontSize: 22,
      padding: "16px 32px"
    }
  }, cta, " \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))));
}

// ============ WHATSAPP CARD (800×800) ============
function WhatsAppCard({
  img = A + "img-detail-2.webp",
  title = "Llegaron las cortinas de lino",
  benefit = "Livianas, cálidas y con caída perfecta",
  cta = "Pedí la tuya"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: canvas(800, 800, "var(--white)")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 28,
      left: 28
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "white",
    size: 34
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 48px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    size: 48,
    align: "center"
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: mFont,
      fontSize: 24,
      color: "var(--fg2)",
      margin: "14px 0 26px",
      fontWeight: 400
    }
  }, benefit), /*#__PURE__*/React.createElement(Button, {
    style: {
      fontSize: 26,
      padding: "20px 44px"
    }
  }, cta))));
}

// helper: native canvas frame
function canvas(w, h, bg) {
  return {
    width: w,
    height: h,
    background: bg,
    position: "relative",
    overflow: "hidden",
    fontFamily: mFont
  };
}
Object.assign(window, {
  FeedPost,
  StatementPost,
  Story,
  CarouselCover,
  CarouselPlate,
  AdPlate,
  EmailBanner,
  WhatsAppCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Pieces.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Primitives.jsx
try { (() => {
// Primitives.jsx — Magnolias Deco reusable building blocks
// Exposed on window for cross-file use.

const mFont = "'Elms Sans', sans-serif";

// ---- Eyebrow / kicker ----
function Eyebrow({
  children,
  color = "var(--red)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont,
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, children);
}

// ---- Statement title ----
function Statement({
  children,
  size = 56,
  color = "var(--black)",
  align = "left",
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: mFont,
      fontSize: size,
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: "-0.03em",
      color,
      margin: 0,
      textAlign: align,
      textWrap: "balance",
      ...style
    }
  }, children);
}

// ---- Highlight (yellow marker behind text) ----
function Mark({
  children,
  bg = "var(--yellow)",
  color = "inherit"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: `linear-gradient(transparent 58%, ${bg} 58%)`,
      padding: "0 2px",
      color,
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone"
    }
  }, children);
}

// ---- Button ----
function Button({
  children,
  variant = "primary",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    fontFamily: mFont,
    fontWeight: 700,
    fontSize: 16,
    border: "none",
    borderRadius: 8,
    padding: "14px 28px",
    cursor: "pointer",
    letterSpacing: "-0.01em",
    transition: "all .18s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: 8
  };
  const variants = {
    primary: {
      background: hover ? "var(--red-dark)" : "var(--red)",
      color: "#fff",
      transform: hover ? "translateY(-1px)" : "none"
    },
    dark: {
      background: hover ? "#000" : "var(--black)",
      color: "#fff"
    },
    outline: {
      background: hover ? "var(--black)" : "transparent",
      color: hover ? "#fff" : "var(--black)",
      border: "1.5px solid var(--black)"
    },
    ghost: {
      background: "transparent",
      color: "var(--red)",
      padding: "8px 4px"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, children);
}

// ---- Commercial tag / pill ----
function Tag({
  children,
  tone = "red",
  style
}) {
  const tones = {
    red: {
      background: "var(--red)",
      color: "#fff"
    },
    yellow: {
      background: "var(--yellow)",
      color: "var(--black)"
    },
    dark: {
      background: "var(--black)",
      color: "#fff"
    },
    outline: {
      background: "#fff",
      color: "var(--black)",
      border: "1.5px solid var(--black)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "6px 13px",
      borderRadius: 999,
      display: "inline-block",
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, children);
}

// ---- Price ----
function Price({
  now,
  was,
  size = 30,
  color = "var(--red)"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 9,
      fontFamily: mFont
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: size,
      color,
      letterSpacing: "-0.03em",
      lineHeight: 1
    }
  }, now), was && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.5,
      color: "var(--fg3)",
      textDecoration: "line-through",
      fontWeight: 500
    }
  }, was));
}

// ---- Discount badge ----
function Discount({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mFont,
      fontWeight: 900,
      fontSize: 26,
      color: "#fff",
      background: "var(--red)",
      padding: "10px 14px",
      borderRadius: 8,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      display: "inline-block",
      ...style
    }
  }, children);
}

// ---- Brand wordmark (official logo) ----
// variant: "black" (dark logo for light bgs) | "white" (light logo for dark/photo bgs)
function Wordmark({
  variant = "black",
  size = 22,
  style
}) {
  const src = variant === "white" ? "../../assets/logo-magnolias-white.png" : "../../assets/logo-magnolias-black.png";
  // logo aspect ratio is ~6.05:1 (3907×646). `size` controls glyph height in px.
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Magnolias",
    style: {
      height: size,
      width: "auto",
      display: "block",
      ...style
    }
  });
}
Object.assign(window, {
  Eyebrow,
  Statement,
  Mark,
  Button,
  Tag,
  Price,
  Discount,
  Wordmark,
  mFont
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Primitives.jsx", error: String((e && e.message) || e) }); }

})();
