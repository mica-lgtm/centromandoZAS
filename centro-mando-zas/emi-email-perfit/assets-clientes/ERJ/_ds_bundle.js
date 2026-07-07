/* @ds-bundle: {"format":3,"namespace":"ERJDesignSystem_0b38e3","components":[],"sourceHashes":{"assets/PhotoText.jsx":"1665f5f7fca2","assets/photo-engine.js":"40b80f56f9b1","slides/Slides.jsx":"c6833dc3b074","ui_kits/social/Flyer.jsx":"b91f4e5fe30e","ui_kits/social/PostFeed.jsx":"47b0c7e8817c","ui_kits/social/Story.jsx":"059259be8434","ui_kits/web/WebHero.jsx":"c35b88542620","ui_kits/web/WebNav.jsx":"2c5ae881e155","ui_kits/web/WebSections.jsx":"d1d2c80d2db3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ERJDesignSystem_0b38e3 = window.ERJDesignSystem_0b38e3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/PhotoText.jsx
try { (() => {
/* global React, ERJ_PHOTO */
// PhotoText.jsx — ERJ photo frame that auto-places text on the "air"
// Requires assets/photo-engine.js loaded first (window.ERJ_PHOTO).
//
// Usage:
//   <PhotoText photo="../../assets/fotos/erj-34.png" radius={24} pad={32}>
//     <Eyebrow>Domingo</Eyebrow>
//     <Title>Vení como estás</Title>
//   </PhotoText>
//
// The component reads the photo's air zone and positions the gradient + text
// block accordingly (top / bottom / left / right).

function PhotoText({
  photo,
  children,
  radius = 24,
  pad = 32,
  style = {},
  maxText = "72%"
}) {
  const c = window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : {
    air: "bottom",
    focal: "50% 50%",
    gradient: "linear-gradient(0deg, rgba(33,1,77,.85), rgba(33,1,77,0) 50%)",
    place: {
      justifyContent: "flex-end",
      alignItems: "stretch",
      textAlign: "left"
    }
  };
  const isSide = c.air === "left" || c.air === "right";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: radius,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: c.focal
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: c.gradient
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      padding: pad,
      ...c.place
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: isSide ? maxText : "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, children)));
}

// Text atoms tuned for photo overlays (white on violet gradient)
function Eyebrow({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--rosa-300)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      ...style
    }
  }, children);
}
function Title({
  children,
  size = 38,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: size,
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      ...style
    }
  }, children);
}
function Sub({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,.9)",
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 500,
      ...style
    }
  }, children);
}
function Pill({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-start",
      display: "inline-flex",
      background: "var(--rosa-500)",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      padding: "10px 20px",
      borderRadius: 999,
      marginTop: 4
    }
  }, children);
}
window.PhotoText = PhotoText;
window.PhotoEyebrow = Eyebrow;
window.PhotoTitle = Title;
window.PhotoSub = Sub;
window.PhotoPill = Pill;
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/PhotoText.jsx", error: String((e && e.message) || e) }); }

// assets/photo-engine.js
try { (() => {
/* ===========================================================================
   ERJ · Motor de composición foto + texto
   ---------------------------------------------------------------------------
   Cada foto tiene un "aire" (espacio sin figuras principales) clasificado a
   mano mirando las 70 imágenes. El texto y el gradiente de protección se
   ubican SOBRE ese aire, nunca sobre las figuras.

   air:   dónde está el aire → dónde va el texto
          "top" | "bottom" | "left" | "right"
   focal: object-position para recortar manteniendo la figura visible
   =========================================================================== */
(function () {
  const A = {
    "erj-01.png": {
      air: "top",
      focal: "50% 72%"
    },
    "erj-02.png": {
      air: "top",
      focal: "50% 60%"
    },
    "erj-03.png": {
      air: "top",
      focal: "50% 68%"
    },
    "erj-04.png": {
      air: "top",
      focal: "50% 62%"
    },
    "erj-05.png": {
      air: "top",
      focal: "50% 62%"
    },
    "erj-06.png": {
      air: "top",
      focal: "50% 60%"
    },
    "erj-07.png": {
      air: "top",
      focal: "50% 65%"
    },
    "erj-08.png": {
      air: "top",
      focal: "50% 70%"
    },
    "erj-09.png": {
      air: "top",
      focal: "50% 70%"
    },
    "erj-10.png": {
      air: "top",
      focal: "50% 72%"
    },
    "erj-11.png": {
      air: "top",
      focal: "50% 60%"
    },
    "erj-12.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-13.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-14.png": {
      air: "top",
      focal: "50% 64%"
    },
    "erj-15.png": {
      air: "top",
      focal: "50% 64%"
    },
    "erj-16.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-17.png": {
      air: "top",
      focal: "50% 72%"
    },
    "erj-18.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-19.png": {
      air: "top",
      focal: "50% 64%"
    },
    "erj-20.png": {
      air: "top",
      focal: "50% 70%"
    },
    "erj-21.png": {
      air: "top",
      focal: "55% 66%"
    },
    "erj-22.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-23.png": {
      air: "top",
      focal: "50% 72%"
    },
    "erj-24.png": {
      air: "top",
      focal: "50% 70%"
    },
    "erj-25.png": {
      air: "top",
      focal: "50% 64%"
    },
    "erj-26.png": {
      air: "right",
      focal: "35% 60%"
    },
    "erj-27.png": {
      air: "top",
      focal: "50% 60%"
    },
    "erj-28.png": {
      air: "left",
      focal: "75% 50%"
    },
    "erj-29.png": {
      air: "right",
      focal: "32% 55%"
    },
    "erj-30.png": {
      air: "top",
      focal: "55% 66%"
    },
    "erj-31.png": {
      air: "top",
      focal: "55% 60%"
    },
    "erj-32.png": {
      air: "top",
      focal: "50% 62%"
    },
    "erj-33.png": {
      air: "top",
      focal: "55% 58%"
    },
    "erj-34.png": {
      air: "left",
      focal: "72% 50%"
    },
    "erj-35.png": {
      air: "left",
      focal: "72% 55%"
    },
    "erj-36.png": {
      air: "left",
      focal: "65% 55%"
    },
    "erj-37.png": {
      air: "top",
      focal: "50% 64%"
    },
    "erj-38.png": {
      air: "left",
      focal: "72% 55%"
    },
    "erj-39.png": {
      air: "top",
      focal: "55% 70%"
    },
    "erj-40.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-41.png": {
      air: "top",
      focal: "50% 72%"
    },
    "erj-42.png": {
      air: "top",
      focal: "60% 60%"
    },
    "erj-43.png": {
      air: "right",
      focal: "30% 55%"
    },
    "erj-44.png": {
      air: "top",
      focal: "55% 64%"
    },
    "erj-45.png": {
      air: "left",
      focal: "72% 55%"
    },
    "erj-46.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-47.png": {
      air: "top",
      focal: "50% 64%"
    },
    "erj-48.png": {
      air: "top",
      focal: "50% 68%"
    },
    "erj-49.png": {
      air: "top",
      focal: "55% 66%"
    },
    "erj-50.png": {
      air: "top",
      focal: "50% 55%"
    },
    "erj-51.png": {
      air: "top",
      focal: "50% 70%"
    },
    "erj-52.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-53.png": {
      air: "top",
      focal: "50% 66%"
    },
    "erj-54.png": {
      air: "left",
      focal: "70% 55%"
    },
    "erj-55.png": {
      air: "left",
      focal: "72% 50%"
    },
    "erj-56.png": {
      air: "top",
      focal: "50% 70%"
    },
    "erj-57.png": {
      air: "top",
      focal: "45% 68%"
    },
    "erj-58.png": {
      air: "top",
      focal: "50% 70%"
    },
    "erj-59.png": {
      air: "top",
      focal: "50% 60%"
    },
    "erj-60.png": {
      air: "left",
      focal: "68% 55%"
    },
    "erj-61.png": {
      air: "top",
      focal: "50% 60%"
    },
    "erj-62.png": {
      air: "top",
      focal: "50% 60%"
    },
    "erj-63.png": {
      air: "left",
      focal: "72% 55%"
    },
    "erj-64.png": {
      air: "top",
      focal: "45% 58%"
    },
    "erj-65.png": {
      air: "right",
      focal: "38% 55%"
    },
    "erj-66.png": {
      air: "left",
      focal: "70% 50%"
    },
    "erj-67.png": {
      air: "right",
      focal: "32% 55%"
    },
    "erj-68.png": {
      air: "left",
      focal: "72% 50%"
    },
    "erj-69.png": {
      air: "top",
      focal: "50% 58%"
    },
    "erj-70.png": {
      air: "left",
      focal: "70% 50%"
    }
  };

  // Default if unknown
  function meta(file) {
    const key = String(file).split("/").pop();
    return A[key] || {
      air: "bottom",
      focal: "50% 50%"
    };
  }

  // Protection gradient (violeta) coming FROM the air side, so text on the air
  // gets contrast while the figures stay clear.
  const VIO = "33,1,77";
  function gradient(air) {
    switch (air) {
      case "top":
        return `linear-gradient(180deg, rgba(${VIO},.92) 0%, rgba(${VIO},.55) 22%, rgba(${VIO},0) 48%)`;
      case "bottom":
        return `linear-gradient(0deg, rgba(${VIO},.92) 0%, rgba(${VIO},.55) 22%, rgba(${VIO},0) 48%)`;
      case "left":
        return `linear-gradient(90deg, rgba(${VIO},.92) 0%, rgba(${VIO},.6) 30%, rgba(${VIO},0) 62%)`;
      case "right":
        return `linear-gradient(270deg, rgba(${VIO},.92) 0%, rgba(${VIO},.6) 30%, rgba(${VIO},0) 62%)`;
      default:
        return `linear-gradient(0deg, rgba(${VIO},.85), rgba(${VIO},0) 50%)`;
    }
  }

  // Flex positioning for the text block so it sits ON the air.
  function place(air) {
    switch (air) {
      case "top":
        return {
          justifyContent: "flex-start",
          alignItems: "stretch",
          textAlign: "left"
        };
      case "bottom":
        return {
          justifyContent: "flex-end",
          alignItems: "stretch",
          textAlign: "left"
        };
      case "left":
        return {
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "left"
        };
      case "right":
        return {
          justifyContent: "center",
          alignItems: "flex-end",
          textAlign: "right"
        };
      default:
        return {
          justifyContent: "flex-end",
          alignItems: "stretch",
          textAlign: "left"
        };
    }
  }

  // Convenience: everything a template needs for one photo.
  function compose(file) {
    const m = meta(file);
    return {
      air: m.air,
      focal: m.focal,
      gradient: gradient(m.air),
      place: place(m.air)
    };
  }
  window.ERJ_PHOTO = {
    meta,
    gradient,
    place,
    compose,
    map: A
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/photo-engine.js", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
/* global React */
// Slides.jsx — 1280x720 slide templates for ERJ presentations

function TitleSlide({
  photo = "../assets/fotos/erj-19.png"
}) {
  const c = window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : {
    air: "left",
    focal: "50% 35%"
  };
  const side = c.air === "right" ? "right" : "left";
  const grad = side === "right" ? "linear-gradient(265deg, rgba(33,1,77,.94) 0%, rgba(33,1,77,.72) 45%, rgba(33,1,77,.15) 100%)" : "linear-gradient(95deg, rgba(33,1,77,.94) 0%, rgba(33,1,77,.72) 45%, rgba(33,1,77,.15) 100%)";
  return /*#__PURE__*/React.createElement("div", {
    style: slideBase
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      ...imgCover,
      objectPosition: c.focal
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: grad
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/erj-logo-white.png",
    alt: "ERJ",
    style: {
      position: "absolute",
      top: 48,
      [side]: 56,
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      [side]: 56,
      bottom: 90,
      maxWidth: 760,
      textAlign: side === "right" ? "right" : "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrowPink
  }, "Bienvenidos \xB7 Domingo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 78,
      lineHeight: 0.96,
      letterSpacing: "-0.025em",
      margin: "16px 0 0"
    }
  }, "Tu casa te est\xE1", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rosa-500)"
    }
  }, "esperando"))));
}
function VerseSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...slideBase,
      background: "var(--grad-bordo-violeta)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 110px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 6,
      borderRadius: 99,
      background: "var(--rosa-500)",
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.14,
      letterSpacing: "-0.01em",
      maxWidth: 940
    }
  }, "\u201CTodo lo puedo en Cristo que me fortalece.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--rosa-300)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginTop: 32
    }
  }, "Filipenses 4:13"), /*#__PURE__*/React.createElement("img", {
    src: "../assets/erj-logo-white.png",
    alt: "ERJ",
    style: {
      position: "absolute",
      bottom: 44,
      right: 56,
      height: 44,
      opacity: .85
    }
  }));
}
function SectionSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...slideBase,
      background: "var(--violeta-900)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 110px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrowPink
  }, "Parte 02"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 70,
      lineHeight: 0.98,
      letterSpacing: "-0.025em",
      margin: "18px 0 0"
    }
  }, "Una fe que se vive", /*#__PURE__*/React.createElement("br", null), "en comunidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--violeta-200)",
      fontSize: 22,
      lineHeight: 1.55,
      marginTop: 24,
      maxWidth: 640
    }
  }, "Nadie camina solo. Descubr\xED el valor de pertenecer."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 280,
      height: "100%",
      background: "var(--grad-amanecer)",
      opacity: .9,
      clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)"
    }
  }));
}
function EventSlide({
  photo = "../assets/fotos/erj-65.png"
}) {
  const c = window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : {
    focal: "50% 30%"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...slideBase,
      background: "var(--crema)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 0",
      padding: "72px 64px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/erj-logo-primary.png",
    alt: "ERJ",
    style: {
      height: 50,
      alignSelf: "flex-start",
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: eyebrowPink
  }, "Conferencia anual"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--violeta-900)",
      fontWeight: 900,
      fontSize: 60,
      lineHeight: 0.95,
      letterSpacing: "-0.025em",
      margin: "12px 0 0"
    }
  }, "Vida con", /*#__PURE__*/React.createElement("br", null), "Prop\xF3sito"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Bullet, {
    text: "18, 19 y 20 de julio \xB7 19:30 h"
  }), /*#__PURE__*/React.createElement(Bullet, {
    text: "Av. Siempre Viva 1234, CABA"
  }), /*#__PURE__*/React.createElement(Bullet, {
    text: "Entrada libre \xB7 Reserv\xE1 tu lugar"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 460px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: c.focal
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, var(--crema) 0%, rgba(251,248,252,0) 18%)"
    }
  })));
}
function Bullet({
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 99,
      background: "var(--rosa-500)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: "var(--gris-600)"
    }
  }, text));
}
const slideBase = {
  width: 1280,
  height: 720,
  position: "relative",
  overflow: "hidden",
  fontFamily: "var(--font-sans)",
  flex: "none"
};
const imgCover = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 35%"
};
const eyebrowPink = {
  color: "var(--rosa-500)",
  fontWeight: 700,
  fontSize: 18,
  letterSpacing: "0.16em",
  textTransform: "uppercase"
};
window.TitleSlide = TitleSlide;
window.VerseSlide = VerseSlide;
window.SectionSlide = SectionSlide;
window.EventSlide = EventSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Flyer.jsx
try { (() => {
/* global React */
// Flyer.jsx — vertical event flyer (A4-ish ratio) for ERJ

function Flyer({
  photo = "../assets/fotos/erj-65.png"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      height: 452,
      borderRadius: 24,
      overflow: "hidden",
      position: "relative",
      fontFamily: "var(--font-sans)",
      background: "var(--violeta-900)",
      boxShadow: "var(--shadow-lg)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 230,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 25%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(33,1,77,0) 55%, var(--violeta-900) 100%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/erj-logo-white.png",
    alt: "ERJ",
    style: {
      position: "absolute",
      top: 18,
      left: 20,
      height: 38
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 26px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--rosa-500)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "Conferencia anual"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 40,
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
      marginTop: 8
    }
  }, "VIDA CON", /*#__PURE__*/React.createElement("br", null), "PROP\xD3SITO"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "\uD83D\uDCC5",
    text: "18, 19 y 20 de julio"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "\uD83D\uDD56",
    text: "19:30 h \xB7 Apertura de puertas 18:30"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "\uD83D\uDCCD",
    text: "Av. Siempre Viva 1234, CABA"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      background: "var(--rosa-500)",
      color: "#fff",
      fontWeight: 800,
      fontSize: 16,
      padding: "13px 0",
      borderRadius: 999,
      boxShadow: "var(--shadow-rosa)"
    }
  }, "Reserv\xE1 tu lugar gratis")));
}
function Row({
  icon,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      background: "rgba(243,89,128,.16)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--violeta-100)",
      fontSize: 14,
      fontWeight: 500
    }
  }, text));
}
window.Flyer = Flyer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Flyer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PostFeed.jsx
try { (() => {
/* global React */
// PostFeed.jsx — Instagram-style 1080x1080 feed post for ERJ
const {
  useState
} = React;
function PostFeed({
  variant = "photo",
  photo = "../assets/fotos/erj-19.png"
}) {
  // variant: "photo" | "violeta" | "gradient"
  const base = {
    width: 460,
    height: 460,
    borderRadius: 28,
    overflow: "hidden",
    position: "relative",
    fontFamily: "var(--font-sans)",
    boxShadow: "var(--shadow-lg)",
    flex: "none"
  };
  if (variant === "violeta") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        background: "var(--violeta-900)"
      }
    }, /*#__PURE__*/React.createElement(BrandMark, {
      dark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: erjPostStyles.eyebrowPink
    }, "Palabra del domingo"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#fff",
        fontWeight: 900,
        fontSize: 46,
        lineHeight: 0.98,
        letterSpacing: "-0.02em",
        marginTop: 14
      }
    }, "La fe ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--rosa-500)"
      }
    }, "mueve"), " monta\xF1as"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--violeta-200)",
        fontSize: 17,
        lineHeight: 1.5,
        marginTop: 18,
        maxWidth: 320
      }
    }, "Todo lo que pidas en oraci\xF3n, creyendo, lo recibir\xE1s. Confi\xE1 hoy."), /*#__PURE__*/React.createElement("div", {
      style: erjPostStyles.tagRow
    }, /*#__PURE__*/React.createElement("span", {
      style: erjPostStyles.tag
    }, "Mateo 21:22"))));
  }
  if (variant === "gradient") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        background: "var(--grad-amanecer)"
      }
    }, /*#__PURE__*/React.createElement(BrandMark, {
      dark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...erjPostStyles.eyebrowPink,
        color: "#fff"
      }
    }, "Conferencia 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#fff",
        fontWeight: 900,
        fontSize: 54,
        lineHeight: 0.95,
        letterSpacing: "-0.02em",
        marginTop: 12
      }
    }, "PROP\xD3SITO"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "rgba(255,255,255,.9)",
        fontSize: 17,
        marginTop: 14,
        fontWeight: 600
      }
    }, "3 noches \xB7 18\u201320 julio \xB7 Entrada libre")));
  }

  // photo — text auto-places on the air (top/left/right/bottom) via the engine
  const c = window.ERJ_PHOTO.compose(photo);
  const isSide = c.air === "left" || c.air === "right";
  return /*#__PURE__*/React.createElement("div", {
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: c.focal
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: c.gradient
    }
  }), /*#__PURE__*/React.createElement(BrandMark, {
    dark: true,
    air: c.air
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      padding: 40,
      paddingTop: c.air === "top" ? 92 : 40,
      ...c.place
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: isSide ? "74%" : "100%",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: c.air === "right" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: erjPostStyles.eyebrowPink
  }, "Te esperamos"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 42,
      lineHeight: 1.0,
      letterSpacing: "-0.02em"
    }
  }, "Tu casa te est\xE1 esperando"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--rosa-500)",
      color: "#fff",
      fontWeight: 700,
      fontSize: 15,
      padding: "10px 20px",
      borderRadius: 999
    }
  }, "Domingo 10:30 h"))));
}
function BrandMark({
  dark,
  air
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 28,
      left: 32,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/erj-logo-white.png" : "../../assets/erj-logo-primary.png",
    alt: "ERJ",
    style: {
      height: 48,
      objectFit: "contain"
    }
  }));
}
const erjPostStyles = {
  eyebrowPink: {
    color: "var(--rosa-500)",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.16em",
    textTransform: "uppercase"
  },
  tagRow: {
    display: "flex",
    gap: 8,
    marginTop: 22
  },
  tag: {
    background: "rgba(255,255,255,.12)",
    color: "#fff",
    fontWeight: 600,
    fontSize: 13,
    padding: "8px 16px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.18)"
  }
};
window.PostFeed = PostFeed;
window.BrandMark = BrandMark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PostFeed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Story.jsx
try { (() => {
/* global React */
// Story.jsx — 1080x1920 vertical story templates for ERJ

function Story({
  variant = "photo",
  photo = "../assets/fotos/erj-59.png"
}) {
  const base = {
    width: 270,
    height: 480,
    borderRadius: 28,
    overflow: "hidden",
    position: "relative",
    fontFamily: "var(--font-sans)",
    boxShadow: "var(--shadow-lg)",
    flex: "none"
  };
  if (variant === "verse") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        background: "var(--grad-bordo-violeta)"
      }
    }, /*#__PURE__*/React.createElement(StoryChrome, {
      dark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 30px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 99,
        background: "var(--rosa-500)",
        marginBottom: 22
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#fff",
        fontWeight: 800,
        fontSize: 30,
        lineHeight: 1.12,
        letterSpacing: "-0.01em"
      }
    }, "\u201CEl Se\xF1or es mi pastor, nada me faltar\xE1.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--rosa-300)",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginTop: 22
      }
    }, "Salmos 23:1")), /*#__PURE__*/React.createElement(StoryFooter, {
      dark: true,
      label: "Compart\xED esta palabra"
    }));
  }
  if (variant === "event") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...base,
        background: "var(--violeta-900)"
      }
    }, /*#__PURE__*/React.createElement(StoryChrome, {
      dark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 70,
        left: 30,
        right: 30,
        borderRadius: 20,
        overflow: "hidden",
        height: 230
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: photo,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 320,
        left: 30,
        right: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--rosa-500)",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "0.16em",
        textTransform: "uppercase"
      }
    }, "Este viernes"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#fff",
        fontWeight: 900,
        fontSize: 32,
        lineHeight: 1.0,
        letterSpacing: "-0.02em",
        marginTop: 8
      }
    }, "Noche de J\xF3venes"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--violeta-200)",
        fontSize: 14,
        marginTop: 10,
        fontWeight: 600
      }
    }, "20:00 h \xB7 Auditorio central")), /*#__PURE__*/React.createElement(StoryFooter, {
      dark: true,
      label: "Desliz\xE1 para m\xE1s info"
    }));
  }

  // photo (full-bleed) — text auto-places on the air via the engine
  const c = window.ERJ_PHOTO.compose(photo);
  const isSide = c.air === "left" || c.air === "right";
  // On a tall story, side-air still reads best with text low; keep vertical anchor at bottom
  // but honor horizontal air for left/right.
  const place = isSide ? {
    justifyContent: "flex-end",
    alignItems: c.air === "right" ? "flex-end" : "flex-start",
    textAlign: c.air === "right" ? "right" : "left"
  } : {
    justifyContent: c.air === "top" ? "flex-start" : "flex-end",
    alignItems: "flex-start",
    textAlign: "left"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: c.focal
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: c.air === "top" ? "linear-gradient(180deg, rgba(33,1,77,.9) 0%, rgba(33,1,77,.4) 26%, rgba(33,1,77,0) 50%, rgba(33,1,77,.2) 100%)" : "linear-gradient(180deg, rgba(33,1,77,.3) 0%, rgba(33,1,77,0) 32%, rgba(33,1,77,.92) 100%)"
    }
  }), /*#__PURE__*/React.createElement(StoryChrome, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      padding: "30px",
      paddingTop: c.air === "top" ? 64 : 30,
      paddingBottom: 78,
      ...place
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: isSide ? "80%" : "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: c.air === "right" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--rosa-300)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "Ven\xED como est\xE1s"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 34,
      lineHeight: 1.02,
      letterSpacing: "-0.02em"
    }
  }, "Hay un lugar para vos"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rosa-500)",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      padding: "11px 22px",
      borderRadius: 999
    }
  }, "Domingo 10:30 h"))));
}
function StoryChrome({
  dark
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      right: 14,
      height: 3,
      borderRadius: 99,
      background: dark ? "rgba(255,255,255,.35)" : "rgba(33,1,77,.2)",
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "45%",
      height: "100%",
      borderRadius: 99,
      background: dark ? "#fff" : "var(--violeta-900)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 26,
      left: 16,
      zIndex: 4,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/erj-logo-white.png" : "../../assets/erj-logo-primary.png",
    alt: "ERJ",
    style: {
      height: 30
    }
  })));
}
function StoryFooter({
  dark,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 22,
      left: 0,
      right: 0,
      textAlign: "center",
      color: dark ? "rgba(255,255,255,.85)" : "var(--gris-500)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em"
    }
  }, "\u2303 ", label);
}
window.Story = Story;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Story.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebHero.jsx
try { (() => {
/* global React */
// WebHero.jsx — full-bleed hero with protection gradient for ERJ

function WebHero({
  photo = "../../assets/fotos/erj-19.png"
}) {
  const c = window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : {
    air: "left",
    focal: "50% 50%"
  };
  // Landscape hero: place text on the air side (right-air → right; else left).
  const side = c.air === "right" ? "right" : "left";
  const grad = side === "right" ? "linear-gradient(260deg, rgba(33,1,77,.92) 0%, rgba(33,1,77,.74) 42%, rgba(33,1,77,.15) 100%)" : "linear-gradient(100deg, rgba(33,1,77,.92) 0%, rgba(33,1,77,.74) 42%, rgba(33,1,77,.15) 100%)";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 540,
      fontFamily: "var(--font-sans)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: c.focal
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: grad
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 620,
      padding: "0 40px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: side === "right" ? "auto" : 0,
      alignItems: side === "right" ? "flex-end" : "flex-start",
      textAlign: side === "right" ? "right" : "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      alignItems: "center",
      gap: 8,
      background: "rgba(255,255,255,.12)",
      border: "1px solid rgba(255,255,255,.2)",
      borderRadius: 999,
      padding: "8px 16px",
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "0.04em",
      marginBottom: 22,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: "var(--rosa-500)"
    }
  }), "Reuniones todos los domingos 10:30 h"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: "#fff",
      fontWeight: 900,
      fontSize: 60,
      lineHeight: 0.98,
      letterSpacing: "-0.025em"
    }
  }, "Tu casa te est\xE1 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rosa-500)"
    }
  }, "esperando")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--violeta-200)",
      fontSize: 19,
      lineHeight: 1.55,
      marginTop: 20,
      maxWidth: 480
    }
  }, "Una comunidad donde la fe se vive en familia. Ven\xED como est\xE1s y encontr\xE1 tu lugar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      justifyContent: side === "right" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "erj-btn erj-btn--primary"
  }, "Planific\xE1 tu visita"), /*#__PURE__*/React.createElement("button", {
    className: "erj-btn erj-btn--on-dark"
  }, "Ver pr\xE9dicas"))));
}
window.WebHero = WebHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebNav.jsx
try { (() => {
/* global React */
// WebNav.jsx — sticky top navigation for ERJ site

function WebNav() {
  const links = ["Inicio", "Nosotros", "Ministerios", "Eventos", "Prédicas"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 40px",
      fontFamily: "var(--font-sans)",
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(251,248,252,.82)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/erj-logo-primary.png",
    alt: "El Rey Jes\xFAs",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      textDecoration: "none",
      fontSize: 15,
      fontWeight: 600,
      color: i === 0 ? "var(--violeta-900)" : "var(--gris-500)"
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    className: "erj-btn erj-btn--primary",
    style: {
      padding: "11px 22px",
      fontSize: 15
    }
  }, "Visit\xE1 la iglesia"));
}
window.WebNav = WebNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebSections.jsx
try { (() => {
/* global React */
// WebSections.jsx — value props, events grid, footer for ERJ site

function WebValues() {
  const items = [{
    t: "Comunidad",
    d: "Grupos pequeños donde nadie camina solo. Conectá durante la semana."
  }, {
    t: "Familia",
    d: "Espacios para cada edad: niños, jóvenes, matrimonios y adultos."
  }, {
    t: "Propósito",
    d: "Descubrí tus dones y serví. Tu vida tiene un llamado."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 40px",
      fontFamily: "var(--font-sans)",
      background: "var(--crema)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 560,
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "erj-eyebrow"
  }, "Por qu\xE9 ERJ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: "var(--violeta-900)",
      letterSpacing: "-0.02em",
      margin: "10px 0 0"
    }
  }, "Una fe que se vive en comunidad")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    className: "erj-card",
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      background: "var(--rosa-100)",
      color: "var(--bordo-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 900,
      fontSize: 20,
      marginBottom: 16
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--violeta-900)",
      margin: "0 0 8px"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--gris-500)",
      margin: 0
    }
  }, it.d)))));
}
function WebEvents({
  photos = []
}) {
  const evs = [{
    tag: "Jóvenes",
    title: "Noche de Adoración",
    meta: "Viernes 20 · 20:00 h",
    img: photos[0]
  }, {
    tag: "Conferencia",
    title: "Vida con Propósito",
    meta: "18–20 julio · 19:30 h",
    img: photos[1]
  }, {
    tag: "Familias",
    title: "Almuerzo comunitario",
    meta: "Domingo 22 · 13:00 h",
    img: photos[2]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 40px",
      fontFamily: "var(--font-sans)",
      background: "var(--violeta-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      maxWidth: 1000,
      margin: "0 auto 36px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "erj-eyebrow"
  }, "Agenda"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.02em",
      margin: "10px 0 0"
    }
  }, "Pr\xF3ximos encuentros")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--rosa-300)",
      fontWeight: 700,
      fontSize: 15,
      textDecoration: "none"
    }
  }, "Ver todos \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, evs.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.title,
    style: {
      background: "#fff",
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      backgroundImage: `url(${e.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "erj-eyebrow",
    style: {
      fontSize: 12
    }
  }, e.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: "var(--violeta-900)",
      margin: "6px 0 4px"
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--gris-500)",
      marginBottom: 12
    }
  }, e.meta), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--bordo-700)",
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none"
    }
  }, "Reserv\xE1 tu lugar \u2192"))))));
}
function WebFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--violeta-950)",
      color: "var(--violeta-200)",
      fontFamily: "var(--font-sans)",
      padding: "48px 40px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/erj-logo-white.png",
    alt: "ERJ",
    style: {
      height: 44,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Una iglesia que transforma vidas y acompa\xF1a a cada familia.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(FootCol, {
    title: "Visitanos",
    items: ["Horarios", "Cómo llegar", "Primera vez"]
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "Conect\xE1",
    items: ["Grupos", "Voluntariado", "Bautismos"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "32px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,.1)",
      fontSize: 13,
      opacity: .7
    }
  }, "\xA9 2026 El Rey Jes\xFAs \xB7 Iglesia Cristiana"));
}
function FootCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      marginBottom: 12
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: "var(--violeta-200)",
      fontSize: 14,
      textDecoration: "none"
    }
  }, i))));
}
window.WebValues = WebValues;
window.WebEvents = WebEvents;
window.WebFooter = WebFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebSections.jsx", error: String((e && e.message) || e) }); }

})();
