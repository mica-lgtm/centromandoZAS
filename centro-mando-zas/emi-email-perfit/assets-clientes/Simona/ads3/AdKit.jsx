/* global React */
// SIMONA — Ad kit for "Hasta 40% OFF Sweaters" (finde largo)
// Real product photos hosted on the store CDN (brand rule: HTML/email imagery on web/CDN).

const A = {
  ink: '#2a2a2a', cream: '#f7f1ea', sand: '#efe6dc', clay: '#e4d6ca',
  taupe: '#70625f', blush: '#fbbfaf', blushSoft: '#fdded5', blushDeep: '#e9a392',
  mocha: '#9a877f', white: '#fff',
  disp: '"Red Hat Display", system-ui, sans-serif',
  txt: '"Red Hat Text","Red Hat Display",system-ui,sans-serif',
};

const CDN = 'https://acdn-us.mitiendanube.com/stores/601/496/products/';
// Sweater Jume Natural (cream + gold pearls) and Sweater Jume Negro (black + gold pearls)
const PHOTOS = {
  natural:    CDN + 'dsc03815-3444e61ba18bfaec4b17804983274408-1024-1024.webp',
  naturalAlt: CDN + 'dsc03812-7656dc45b8df6025e317804983236175-1024-1024.webp',
  naturalB:   CDN + 'dsc03808-65d2de6fdf8a77c69617804983295542-1024-1024.webp',
  negro:      CDN + 'dsc03691-3b34b26742316514d517804986665582-1024-1024.webp',
  negroAlt:   CDN + 'dsc03687-b62feb36ee496ad72b17804986666460-1024-1024.webp',
  negroB:     CDN + 'dsc03699-e537011a731b613cc017804986664428-1024-1024.webp',
};

// Format native dimensions
const FORMATS = {
  sq: { w: 1080, h: 1080, label: 'Cuadrado', sub: '1080 × 1080 · Meta Ads' },
  vt: { w: 1080, h: 1920, label: 'Vertical', sub: '1080 × 1920 · Meta Ads' },
  hz: { w: 1200, h: 628,  label: 'Horizontal', sub: '1200 × 628 · Google Ads' },
};

// ---------- atoms ----------
function Pill({ children, bg = A.ink, fg = A.cream, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', background: bg, color: fg,
      fontFamily: A.txt, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em',
      borderRadius: 999, ...style }}>{children}</span>
  );
}
function Eyebrow({ children, color, style }) {
  return (
    <div style={{ fontFamily: A.txt, fontWeight: 800, textTransform: 'uppercase',
      letterSpacing: '0.18em', color, ...style }}>{children}</div>
  );
}
function Cond({ children, color, dot, size }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.5,
      fontFamily: A.txt, fontWeight: 600, fontSize: size, color }}>
      <span style={{ flex: 'none', width: size * 0.34, height: size * 0.34, borderRadius: 999,
        background: dot }}></span>{children}
    </div>
  );
}
function Wordmark({ color, size, style }) {
  return <span style={{ fontFamily: A.disp, fontWeight: 900, letterSpacing: '-0.01em',
    color, fontSize: size, ...style }}>SIMONA</span>;
}

Object.assign(window, { SIMONA_A: A, PHOTOS, FORMATS, Pill, Eyebrow, Cond, Wordmark });
