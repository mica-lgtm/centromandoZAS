/* @ds-bundle: {"format":3,"namespace":"SimonaDesignSystem_20eaa7","components":[],"sourceHashes":{"ads3/AdKit.jsx":"30448d01c22c","ads3/V1Editorial.jsx":"f8261a5c34dd","ads3/V2Bold.jsx":"d4b2e48fdc82","ads3/V3Typographic.jsx":"9962df9d5004","ui_kits/email/Email.jsx":"ab7bd26e10b5","ui_kits/social/Placas.jsx":"d05b69a87584"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SimonaDesignSystem_20eaa7 = window.SimonaDesignSystem_20eaa7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ads3/AdKit.jsx
try { (() => {
/* global React */
// SIMONA — Ad kit for "Hasta 40% OFF Sweaters" (finde largo)
// Real product photos hosted on the store CDN (brand rule: HTML/email imagery on web/CDN).

const A = {
  ink: '#2a2a2a',
  cream: '#f7f1ea',
  sand: '#efe6dc',
  clay: '#e4d6ca',
  taupe: '#70625f',
  blush: '#fbbfaf',
  blushSoft: '#fdded5',
  blushDeep: '#e9a392',
  mocha: '#9a877f',
  white: '#fff',
  disp: '"Red Hat Display", system-ui, sans-serif',
  txt: '"Red Hat Text","Red Hat Display",system-ui,sans-serif'
};
const CDN = 'https://acdn-us.mitiendanube.com/stores/601/496/products/';
// Sweater Jume Natural (cream + gold pearls) and Sweater Jume Negro (black + gold pearls)
const PHOTOS = {
  natural: CDN + 'dsc03815-3444e61ba18bfaec4b17804983274408-1024-1024.webp',
  naturalAlt: CDN + 'dsc03812-7656dc45b8df6025e317804983236175-1024-1024.webp',
  naturalB: CDN + 'dsc03808-65d2de6fdf8a77c69617804983295542-1024-1024.webp',
  negro: CDN + 'dsc03691-3b34b26742316514d517804986665582-1024-1024.webp',
  negroAlt: CDN + 'dsc03687-b62feb36ee496ad72b17804986666460-1024-1024.webp',
  negroB: CDN + 'dsc03699-e537011a731b613cc017804986664428-1024-1024.webp'
};

// Format native dimensions
const FORMATS = {
  sq: {
    w: 1080,
    h: 1080,
    label: 'Cuadrado',
    sub: '1080 × 1080 · Meta Ads'
  },
  vt: {
    w: 1080,
    h: 1920,
    label: 'Vertical',
    sub: '1080 × 1920 · Meta Ads'
  },
  hz: {
    w: 1200,
    h: 628,
    label: 'Horizontal',
    sub: '1200 × 628 · Google Ads'
  }
};

// ---------- atoms ----------
function Pill({
  children,
  bg = A.ink,
  fg = A.cream,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: bg,
      color: fg,
      fontFamily: A.txt,
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      borderRadius: 999,
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: A.txt,
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color,
      ...style
    }
  }, children);
}
function Cond({
  children,
  color,
  dot,
  size
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: size * 0.5,
      fontFamily: A.txt,
      fontWeight: 600,
      fontSize: size,
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: size * 0.34,
      height: size * 0.34,
      borderRadius: 999,
      background: dot
    }
  }), children);
}
function Wordmark({
  color,
  size,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: A.disp,
      fontWeight: 900,
      letterSpacing: '-0.01em',
      color,
      fontSize: size,
      ...style
    }
  }, "SIMONA");
}
Object.assign(window, {
  SIMONA_A: A,
  PHOTOS,
  FORMATS,
  Pill,
  Eyebrow,
  Cond,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ads3/AdKit.jsx", error: String((e && e.message) || e) }); }

// ads3/V1Editorial.jsx
try { (() => {
/* global React, SIMONA_A, PHOTOS, FORMATS, Pill, Eyebrow, Cond, Wordmark */
// VERSION 1 — EDITORIAL. Full-bleed cream sweater photo, protection gradient,
// message anchored for balance. Warm, soft, premium. Hook: "Hasta 40% OFF en sweaters".
// All reframing is zoom-IN only (backgroundSize >= cover) so the frame never has empty space.
const A1 = SIMONA_A;
function V1Editorial({
  fmt
}) {
  const f = FORMATS[fmt];
  const photo = PHOTOS.natural; // V1 owns dsc03815 (cream Jume Natural) across all formats

  // ---------- HORIZONTAL 1200×628 ----------
  // Right column shows the model head-to-hips (square photo fits a tall column exactly);
  // a blurred copy of the same photo extends the wall behind the text — no empty space.
  if (fmt === 'hz') {
    const colW = 520;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: f.w,
        height: f.h,
        position: 'relative',
        overflow: 'hidden',
        background: A1.ink
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 28%',
        filter: 'blur(26px) brightness(.5) saturate(.9)',
        transform: 'scale(1.18)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: colW,
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: colW - 1,
        width: 90,
        background: 'linear-gradient(90deg, rgba(20,16,15,0) 0%, rgba(20,16,15,.0) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(20,16,15,.92) 0%, rgba(20,16,15,.7) 36%, rgba(20,16,15,0) 62%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 56,
        top: 0,
        bottom: 0,
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      color: A1.cream,
      size: 26,
      style: {
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement(Eyebrow, {
      color: A1.blush,
      style: {
        fontSize: 18
      }
    }, "Solo el finde largo"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: A1.disp,
        fontWeight: 900,
        fontSize: 80,
        lineHeight: .88,
        letterSpacing: '-0.03em',
        color: A1.cream,
        margin: '12px 0 0'
      }
    }, "Hasta 40%", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: A1.blush
      }
    }, "OFF en sweaters")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Cond, {
      color: A1.cream,
      dot: A1.blush,
      size: 20
    }, "12 cuotas sin inter\xE9s \xB7 env\xEDo gratis")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      bg: A1.cream,
      fg: A1.ink,
      style: {
        fontSize: 21,
        padding: '17px 36px'
      }
    }, "Comprar ahora"))));
  }
  const vt = fmt === 'vt';

  // ---------- SQUARE: zoom in + pan so the model rises and sits right ----------
  // ---------- VERTICAL: photo kept as-is, eyebrow gets a chip for legibility ----------
  const photoLayer = vt ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "Sweater SIMONA",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 16%'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${photo})`,
      backgroundSize: '130%',
      backgroundPosition: '6% 33%',
      backgroundRepeat: 'no-repeat'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: f.w,
      height: f.h,
      position: 'relative',
      overflow: 'hidden',
      background: A1.ink
    }
  }, photoLayer, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: vt ? 'linear-gradient(180deg, rgba(20,16,15,.5) 0%, rgba(20,16,15,0) 24%, rgba(20,16,15,0) 50%, rgba(20,16,15,.9) 86%)' : 'linear-gradient(180deg, rgba(20,16,15,.32) 0%, rgba(20,16,15,0) 30%, rgba(20,16,15,0) 40%, rgba(20,16,15,.9) 82%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: vt ? 150 : 54,
      left: vt ? 0 : 60,
      right: vt ? 0 : 60,
      textAlign: vt ? 'center' : 'left'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: A1.cream,
    size: vt ? 34 : 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: vt ? 70 : 60,
      right: vt ? 70 : 60,
      bottom: vt ? 360 : 60
    }
  }, vt ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: A1.ink,
      color: A1.blush,
      fontFamily: A1.txt,
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      fontSize: 28,
      padding: '13px 24px',
      borderRadius: 999
    }
  }, "Solo el finde largo") : /*#__PURE__*/React.createElement(Eyebrow, {
    color: A1.blush,
    style: {
      fontSize: 26
    }
  }, "Solo el finde largo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: A1.disp,
      fontWeight: 900,
      fontSize: vt ? 150 : 122,
      lineHeight: .9,
      letterSpacing: '-0.03em',
      color: A1.cream,
      margin: '16px 0 0'
    }
  }, "Hasta 40%", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: A1.blush
    }
  }, "OFF en", /*#__PURE__*/React.createElement("br", null), "sweaters")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: vt ? 34 : 28
    }
  }, /*#__PURE__*/React.createElement(Cond, {
    color: A1.cream,
    dot: A1.blush,
    size: vt ? 32 : 27
  }, "12 cuotas sin inter\xE9s")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: vt ? 40 : 34
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    bg: A1.cream,
    fg: A1.ink,
    style: {
      fontSize: vt ? 33 : 28,
      padding: vt ? '28px 56px' : '24px 46px'
    }
  }, "Comprar ahora"))));
}
window.V1Editorial = V1Editorial;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ads3/V1Editorial.jsx", error: String((e && e.message) || e) }); }

// ads3/V2Bold.jsx
try { (() => {
/* global React, SIMONA_A, PHOTOS, FORMATS, Pill, Eyebrow, Cond, Wordmark */
// VERSION 2 — BOLD COLOR-BLOCK SPLIT. Solid ink panel with oversized offer typography
// next to a black-sweater photo panel. High-contrast, scroll-stopping.
// Copy lockup reads coherently: FINDE LARGO · HASTA / −40% / en todos los sweaters.
const A2 = SIMONA_A;
function V2Bold({
  fmt
}) {
  const f = FORMATS[fmt];
  const photo = PHOTOS.negro; // V2 owns dsc03691 (black Jume Negro) across all formats

  // Zoomed-in photo panel (background-image lets us zoom into the model, less wall)
  function Photo({
    size,
    pos
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${photo})`,
        backgroundSize: size,
        backgroundPosition: pos,
        backgroundRepeat: 'no-repeat',
        backgroundColor: A2.ink
      }
    });
  }

  // s = scale factor; num = big-number font size; oneLine keeps the sub on one row (wide layouts)
  function Panel({
    s,
    num,
    align = 'left',
    oneLine = false
  }) {
    const aiCenter = align === 'center';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: `${56 * s}px ${56 * s}px`,
        textAlign: align,
        alignItems: aiCenter ? 'center' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      color: A2.cream,
      size: 32 * s,
      style: {
        marginBottom: 14 * s
      }
    }), /*#__PURE__*/React.createElement(Eyebrow, {
      color: A2.blush,
      style: {
        fontSize: 26 * s
      }
    }, "Finde largo \xB7 Hasta"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: A2.disp,
        fontWeight: 900,
        color: A2.blush,
        letterSpacing: '-0.04em',
        lineHeight: .82,
        fontSize: num,
        marginTop: 6 * s
      }
    }, "\u221240%"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: A2.disp,
        fontWeight: 800,
        color: A2.cream,
        letterSpacing: '-0.02em',
        fontSize: 58 * s,
        lineHeight: .98,
        marginTop: 10 * s
      }
    }, oneLine ? 'en todos los sweaters' : /*#__PURE__*/React.createElement(React.Fragment, null, "en todos", /*#__PURE__*/React.createElement("br", null), "los sweaters")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30 * s,
        display: 'flex',
        flexDirection: 'column',
        gap: 14 * s,
        alignItems: aiCenter ? 'center' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Cond, {
      color: A2.cream,
      dot: A2.blush,
      size: 30 * s
    }, "12 cuotas sin inter\xE9s"), /*#__PURE__*/React.createElement(Cond, {
      color: A2.cream,
      dot: A2.blush,
      size: 30 * s
    }, "15% OFF en toda la categor\xEDa Invierno")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 38 * s
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      bg: A2.blush,
      fg: A2.ink,
      style: {
        fontSize: 34 * s,
        padding: `${26 * s}px ${52 * s}px`
      }
    }, "Aprovech\xE1 ahora")));
  }

  // ---------- HORIZONTAL 1200×628 ----------
  if (fmt === 'hz') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: f.w,
        height: f.h,
        display: 'flex',
        background: A2.ink
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      s: 0.82,
      num: 208,
      oneLine: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 510,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      size: "178%",
      pos: "33% 30%"
    })));
  }
  // ---------- VERTICAL 1080×1920 ----------
  if (fmt === 'vt') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: f.w,
        height: f.h,
        display: 'flex',
        flexDirection: 'column',
        background: A2.ink
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1010
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      s: 1.18,
      num: 340,
      align: "center"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      size: "106%",
      pos: "50% 30%"
    })));
  }
  // ---------- SQUARE 1080×1080: left ink panel, right photo ----------
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: f.w,
      height: f.h,
      display: 'flex',
      background: A2.ink
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    s: 0.96,
    num: 188
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    size: "150%",
    pos: "50% 14%"
  })));
}
window.V2Bold = V2Bold;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ads3/V2Bold.jsx", error: String((e && e.message) || e) }); }

// ads3/V3Typographic.jsx
try { (() => {
/* global React, SIMONA_A, PHOTOS, FORMATS, Pill, Eyebrow, Cond, Wordmark */
// VERSION 3 — TYPOGRAPHIC / MEGA NUMBER on cream. Big "40%" hero, coherent copy
// (Hasta 40% OFF en sweaters), generous product photo as a full-width band / side panel.
// Safe margins on every edge; no clipped glyphs, no dead empty space.
const A3 = SIMONA_A;
function V3Typographic({
  fmt
}) {
  const f = FORMATS[fmt];
  const photo = PHOTOS.naturalAlt; // V3 owns dsc03812 (cream Jume Natural, alt pose)

  // Zoomed/panned photo so the model fills the frame and the sweater reads big.
  function Photo({
    size = '150%',
    pos = '50% 30%',
    radius = 0,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${photo})`,
        backgroundSize: size,
        backgroundPosition: pos,
        backgroundRepeat: 'no-repeat',
        backgroundColor: A3.clay,
        borderRadius: radius,
        ...style
      }
    });
  }

  // Mega offer lockup. variant 'minus' → "−40%" + "en sweaters"; 'off' → "40%" + "OFF en sweaters".
  // Number stays one solid color (ink); the descriptor line carries the blush accent.
  function Offer({
    s,
    align = 'left',
    variant = 'minus'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: align
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: A3.txt,
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: A3.blushDeep,
        fontSize: 26 * s
      }
    }, "Hasta"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: A3.disp,
        fontWeight: 900,
        color: A3.ink,
        lineHeight: .82,
        letterSpacing: '-0.04em',
        fontSize: 250 * s,
        whiteSpace: 'nowrap'
      }
    }, variant === 'minus' ? '−40%' : '40%'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: A3.disp,
        fontWeight: 800,
        color: A3.blushDeep,
        letterSpacing: '-0.02em',
        fontSize: 70 * s,
        lineHeight: .98,
        marginTop: 6 * s
      }
    }, variant === 'minus' ? 'en sweaters' : 'OFF en sweaters'));
  }

  // ---------- HORIZONTAL 1200×628: text left, big photo panel right ----------
  if (fmt === 'hz') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: f.w,
        height: f.h,
        display: 'flex',
        background: A3.cream
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '50px 0 50px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      color: A3.ink,
      size: 28
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: A3.txt,
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: A3.taupe
      }
    }, "\xB7 Solo el finde largo")), /*#__PURE__*/React.createElement(Offer, {
      s: 0.74
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Cond, {
      color: A3.taupe,
      dot: A3.blushDeep,
      size: 27
    }, "12 cuotas sin inter\xE9s"), /*#__PURE__*/React.createElement(Cond, {
      color: A3.taupe,
      dot: A3.blushDeep,
      size: 27
    }, "15% OFF en toda la categor\xEDa Invierno")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      bg: A3.ink,
      fg: A3.cream,
      style: {
        fontSize: 21,
        padding: '17px 36px'
      }
    }, "Quiero el m\xEDo"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 480,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      size: "150%",
      pos: "50% 22%"
    })));
  }

  // ---------- SQUARE 1080×1080: text left, full-bleed photo panel right ----------
  if (fmt === 'sq') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: f.w,
        height: f.h,
        position: 'relative',
        background: A3.cream
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: 470
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      size: "auto 132%",
      pos: "50% 12%"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 470,
        padding: '64px 40px 64px 64px',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      color: A3.ink,
      size: 34
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      bg: A3.blushSoft,
      fg: A3.blushDeep,
      style: {
        alignSelf: 'flex-start',
        fontSize: 19,
        padding: '10px 18px',
        letterSpacing: '0.12em',
        marginBottom: 18
      }
    }, "Finde largo"), /*#__PURE__*/React.createElement(Offer, {
      s: 1.0,
      variant: "off"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Cond, {
      color: A3.taupe,
      dot: A3.blushDeep,
      size: 33
    }, "12 cuotas sin inter\xE9s"), /*#__PURE__*/React.createElement(Cond, {
      color: A3.taupe,
      dot: A3.blushDeep,
      size: 33
    }, "15% OFF en toda la categor\xEDa Invierno")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      bg: A3.ink,
      fg: A3.cream,
      style: {
        fontSize: 27,
        padding: '22px 44px'
      }
    }, "Quiero el m\xEDo")))));
  }

  // ---------- VERTICAL 1080×1920: mega number top, tall full-width photo bottom ----------
  const pad = 84;
  const bandH = 1180;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: f.w,
      height: f.h,
      background: A3.cream,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: `${pad}px ${pad}px 0`,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: A3.ink,
    size: 42
  }), /*#__PURE__*/React.createElement(Pill, {
    bg: A3.blushSoft,
    fg: A3.blushDeep,
    style: {
      fontSize: 24,
      padding: '13px 24px',
      letterSpacing: '0.12em'
    }
  }, "Finde largo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Offer, {
    s: 1.24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Cond, {
    color: A3.taupe,
    dot: A3.blushDeep,
    size: 42
  }, "12 cuotas sin inter\xE9s"), /*#__PURE__*/React.createElement(Cond, {
    color: A3.taupe,
    dot: A3.blushDeep,
    size: 42
  }, "15% OFF en toda la categor\xEDa Invierno")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: bandH,
      position: 'relative',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    size: "118%",
    pos: "50% 16%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: pad,
      bottom: 360
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    bg: A3.ink,
    fg: A3.cream,
    style: {
      fontSize: 34,
      padding: '28px 56px'
    }
  }, "Quiero el m\xEDo"))));
}
window.V3Typographic = V3Typographic;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ads3/V3Typographic.jsx", error: String((e && e.message) || e) }); }

// ui_kits/email/Email.jsx
try { (() => {
/* global React */
// SIMONA — Email marketing UI kit
// Modular blocks for a responsive, dark-mode-safe HTML email.
// Rendered at a 600px content column (standard email width).

const E = {
  ink: '#2a2a2a',
  cream: '#f7f1ea',
  sand: '#efe6dc',
  clay: '#e4d6ca',
  taupe: '#70625f',
  blush: '#fbbfaf',
  blushSoft: '#fdded5',
  blushDeep: '#e9a392',
  white: '#fff',
  mocha: '#9a877f',
  line: '#e2d7cd',
  display: '"Red Hat Display", system-ui, sans-serif',
  text: '"Red Hat Text", "Red Hat Display", system-ui, sans-serif'
};
const EIMG = n => `../../assets/simona-look-0${n}.webp`;

// ---- Header / wordmark bar ----
function EmailHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: E.cream,
      padding: '22px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${E.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: E.display,
      fontWeight: 900,
      fontSize: 24,
      letterSpacing: '-0.01em',
      color: E.ink
    }
  }, "SIMONA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: E.text,
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: E.taupe
    }
  }, "Nueva temporada"));
}

// ---- Hero block ----
function EmailHero({
  img = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: E.ink
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: EIMG(img),
    alt: "",
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,16,15,.72) 0%, rgba(20,16,15,0) 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 32,
      right: 32,
      bottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: E.text,
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: E.cream,
      marginBottom: 10
    }
  }, "Lleg\xF3 el fr\xEDo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: E.display,
      fontWeight: 900,
      fontSize: 46,
      lineHeight: .95,
      letterSpacing: '-0.02em',
      color: E.cream,
      margin: 0
    }
  }, "Abrigos que", /*#__PURE__*/React.createElement("br", null), "abrazan")));
}

// ---- Intro text block ----
function EmailIntro() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: E.white,
      padding: '34px 32px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: E.text,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.6,
      color: E.taupe,
      margin: 0
    }
  }, "Camperas, tapados y puffers pensados para el d\xEDa a d\xEDa. C\xF3modos, cancheros y listos para el fr\xEDo de verdad."));
}

// ---- Commercial bar ----
function CommercialBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: E.blushSoft,
      padding: '18px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: E.text,
      fontWeight: 700,
      fontSize: 15,
      color: E.ink
    }
  }, "Hasta 30% OFF ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: E.blushDeep
    }
  }, "\xB7"), " 3 cuotas sin inter\xE9s", /*#__PURE__*/React.createElement("span", {
    style: {
      color: E.blushDeep
    }
  }, "\xB7"), " env\xEDo gratis"));
}

// ---- Button ----
function EmailButton({
  children,
  block
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: block ? 'block' : 'inline-block',
      textDecoration: 'none',
      fontFamily: E.text,
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      background: E.ink,
      color: E.cream,
      borderRadius: 999,
      padding: '16px 34px',
      textAlign: 'center'
    }
  }, children);
}

// ---- Product grid (2-up) ----
function ProductGrid() {
  const items = [{
    img: 1,
    name: 'Campera shearling',
    price: '$89.900',
    note: '3 cuotas de $29.966'
  }, {
    img: 3,
    name: 'Tapado de cuero',
    price: '$72.000',
    note: 'Talles del 1 al 4',
    off: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: E.white,
      padding: '30px 32px 12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: E.display,
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: E.ink,
      margin: '0 0 20px',
      textAlign: 'center'
    }
  }, "Lo nuevo de la semana"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, items.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: E.white,
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px solid ${E.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: EIMG(p.img),
    alt: "",
    style: {
      width: '100%',
      height: 220,
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block'
    }
  }), p.off && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      background: E.ink,
      color: E.cream,
      fontFamily: E.text,
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.1em',
      padding: '5px 10px',
      borderRadius: 6
    }
  }, "\u221230%")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: E.display,
      fontWeight: 700,
      fontSize: 16,
      color: E.ink,
      letterSpacing: '-0.01em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: E.text,
      fontWeight: 700,
      fontSize: 15,
      color: E.ink,
      marginTop: 6
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: E.text,
      fontSize: 12.5,
      color: E.mocha,
      marginTop: 3
    }
  }, p.note))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(EmailButton, null, "Ver colecci\xF3n")));
}

// ---- Editorial split block ----
function EditorialBlock({
  img = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: E.sand,
      display: 'flex',
      alignItems: 'stretch',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: EIMG(img),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 20%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '34px 28px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: E.text,
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: E.taupe,
      marginBottom: 10
    }
  }, "B\xE1sicos"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: E.display,
      fontWeight: 800,
      fontSize: 28,
      lineHeight: .98,
      letterSpacing: '-0.02em',
      color: E.ink,
      margin: '0 0 14px'
    }
  }, "Para usar", /*#__PURE__*/React.createElement("br", null), "todos los d\xEDas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: E.text,
      fontSize: 14,
      lineHeight: 1.55,
      color: E.taupe,
      margin: '0 0 18px'
    }
  }, "Sweaters, remeras y pantalones que combinan con todo."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: E.text,
      fontWeight: 700,
      fontSize: 13,
      color: E.ink,
      textDecoration: 'none'
    }
  }, "Ver b\xE1sicos \u2192")));
}

// ---- Footer ----
function EmailFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: E.ink,
      padding: '34px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: E.display,
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: '-0.01em',
      color: E.cream
    }
  }, "SIMONA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      justifyContent: 'center',
      margin: '18px 0',
      fontFamily: E.text,
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#b9ada6',
      textDecoration: 'none'
    }
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#b9ada6',
      textDecoration: 'none'
    }
  }, "Tienda"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#b9ada6',
      textDecoration: 'none'
    }
  }, "Ayuda")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: E.text,
      fontSize: 11,
      lineHeight: 1.6,
      color: '#8a7d76',
      margin: 0
    }
  }, "Recib\xEDs este mail porque te suscribiste a SIMONA.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#8a7d76'
    }
  }, "Darme de baja"), " \xB7 Buenos Aires, Argentina"));
}
Object.assign(window, {
  EmailHeader,
  EmailHero,
  EmailIntro,
  CommercialBar,
  EmailButton,
  ProductGrid,
  EditorialBlock,
  EmailFooter,
  SIMONA_E: E
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/email/Email.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Placas.jsx
try { (() => {
/* global React */
// SIMONA — Placas para redes (social UI kit)
// Native-size commercial placards. Each renders at its real px dimensions;
// the gallery scales them down with CSS transform.

const S = {
  ink: '#2a2a2a',
  cream: '#f7f1ea',
  sand: '#efe6dc',
  clay: '#e4d6ca',
  taupe: '#70625f',
  blush: '#fbbfaf',
  blushSoft: '#fdded5',
  blushDeep: '#e9a392',
  white: '#fff',
  mocha: '#9a877f',
  display: '"Red Hat Display", system-ui, sans-serif',
  text: '"Red Hat Text", "Red Hat Display", system-ui, sans-serif'
};
const IMG = n => `../../assets/simona-look-0${n}.webp`;

// ---- shared atoms ----
function Eyebrow({
  children,
  color = S.cream,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: S.text,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}
function CTA({
  children,
  bg = S.ink,
  fg = S.cream,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: S.text,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      background: bg,
      color: fg,
      borderRadius: 999,
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "\u2192"));
}

// Text CTA for ORGANIC placas (feed/square/story): no button, just a label
// with an arrow/underline. Organic content has no action button.
function TextCTA({
  children,
  color = S.cream,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: S.text,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color,
      borderBottom: `3px solid ${color}`,
      paddingBottom: 8,
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "\u2192"));
}

// ---- 1. FEED · 1080×1350 ----
function FeedPlaca({
  img = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1350,
      position: 'relative',
      overflow: 'hidden',
      background: S.ink,
      fontFamily: S.text
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG(img),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,16,15,.78) 0%, rgba(20,16,15,.25) 38%, rgba(20,16,15,0) 62%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 60
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 26
    }
  }, "Nueva temporada")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      bottom: 64
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: S.display,
      fontWeight: 900,
      fontSize: 116,
      lineHeight: .92,
      letterSpacing: '-0.03em',
      color: S.cream,
      margin: 0
    }
  }, "Abrigos que", /*#__PURE__*/React.createElement("br", null), "abrazan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 32,
      color: 'rgba(247,241,234,.85)',
      margin: '22px 0 38px',
      fontWeight: 500,
      maxWidth: 720
    }
  }, "Camperas, tapados y puffers para el fr\xEDo de verdad."), /*#__PURE__*/React.createElement(TextCTA, {
    style: {
      fontSize: 28
    }
  }, "Mir\xE1 la colecci\xF3n")));
}

// ---- 2. SQUARE · 1080×1080 (split block) ----
function SquarePlaca({
  img = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      display: 'flex',
      background: S.cream,
      fontFamily: S.text,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 540,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG(img),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 36,
      left: 36,
      background: S.ink,
      color: S.cream,
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '12px 22px',
      borderRadius: 10
    }
  }, "\u221230%")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '72px 64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: S.taupe,
    style: {
      fontSize: 24
    }
  }, "Solo por hoy"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: S.display,
      fontWeight: 900,
      fontSize: 82,
      lineHeight: .95,
      letterSpacing: '-0.03em',
      color: S.ink,
      margin: '20px 0 0'
    }
  }, "Cuero", /*#__PURE__*/React.createElement("br", null), "que dura"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 28,
      color: S.taupe,
      fontWeight: 500,
      margin: '26px 0 0',
      lineHeight: 1.4
    }
  }, "Tapados y camperas con hasta 30% off. Talles del 1 al 4."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(TextCTA, {
    color: S.ink,
    style: {
      fontSize: 25
    }
  }, "Mir\xE1 los talles"))));
}

// ---- 3. STORY · 1080×1920 (safe-zone aware) ----
function StoryPlaca({
  img = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1920,
      position: 'relative',
      overflow: 'hidden',
      background: S.ink,
      fontFamily: S.text
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG(img),
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(20,16,15,.55) 0%, rgba(20,16,15,0) 26%), linear-gradient(to top, rgba(20,16,15,.6) 0%, rgba(20,16,15,0) 30%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 300,
      left: 80,
      right: 80,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 28
    }
  }, "Drop de invierno"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: S.display,
      fontWeight: 900,
      fontSize: 132,
      lineHeight: .9,
      letterSpacing: '-0.03em',
      color: S.cream,
      margin: '26px 0 0'
    }
  }, "Total", /*#__PURE__*/React.createElement("br", null), "black")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 380,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(TextCTA, {
    style: {
      fontSize: 30
    }
  }, "Desliz\xE1 para ver")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 250,
      borderTop: '2px dashed rgba(251,191,175,.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: 'rgba(251,191,175,.85)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 700
    }
  }, "Zona UI \xB7 sin texto clave")));
}

// ---- 4. AD HORIZONTAL · 1200×628 ----
function AdPlaca({
  img = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1200,
      height: 628,
      display: 'flex',
      background: S.sand,
      fontFamily: S.text,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '64px 60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: S.taupe,
    style: {
      fontSize: 19
    }
  }, "Env\xEDo gratis a todo el pa\xEDs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: S.display,
      fontWeight: 900,
      fontSize: 76,
      lineHeight: .92,
      letterSpacing: '-0.03em',
      color: S.ink,
      margin: '16px 0 0'
    }
  }, "El fr\xEDo", /*#__PURE__*/React.createElement("br", null), "te queda", /*#__PURE__*/React.createElement("br", null), "bien"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 23,
      color: S.taupe,
      fontWeight: 600,
      margin: '22px 0 0'
    }
  }, "3 cuotas sin inter\xE9s ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.mocha,
      fontWeight: 500
    }
  }, "\xB7 nueva colecci\xF3n")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(CTA, {
    style: {
      fontSize: 21,
      padding: '18px 34px'
    }
  }, "Ver colecci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 470,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG(img),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 20%'
    }
  })));
}
Object.assign(window, {
  FeedPlaca,
  SquarePlaca,
  StoryPlaca,
  AdPlaca,
  SIMONA_S: S
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Placas.jsx", error: String((e && e.message) || e) }); }

})();
