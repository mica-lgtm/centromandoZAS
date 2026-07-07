/* global React */
// SIMONA — Placas para redes (social UI kit)
// Native-size commercial placards. Each renders at its real px dimensions;
// the gallery scales them down with CSS transform.

const S = {
  ink: '#2a2a2a', cream: '#f7f1ea', sand: '#efe6dc', clay: '#e4d6ca',
  taupe: '#70625f', blush: '#fbbfaf', blushSoft: '#fdded5', blushDeep: '#e9a392',
  white: '#fff', mocha: '#9a877f',
  display: '"Red Hat Display", system-ui, sans-serif',
  text: '"Red Hat Text", "Red Hat Display", system-ui, sans-serif',
};

const IMG = (n) => `../../assets/simona-look-0${n}.webp`;

// ---- shared atoms ----
function Eyebrow({ children, color = S.cream, style }) {
  return (
    <div style={{ fontFamily: S.text, fontWeight: 700, letterSpacing: '0.16em',
      textTransform: 'uppercase', color, ...style }}>{children}</div>
  );
}

function CTA({ children, bg = S.ink, fg = S.cream, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14,
      fontFamily: S.text, fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.05em', background: bg, color: fg, borderRadius: 999,
      ...style }}>
      {children}<span style={{ fontWeight: 400 }}>→</span>
    </span>
  );
}

// Text CTA for ORGANIC placas (feed/square/story): no button, just a label
// with an arrow/underline. Organic content has no action button.
function TextCTA({ children, color = S.cream, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: S.text, fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.06em', color, borderBottom: `3px solid ${color}`,
      paddingBottom: 8, ...style }}>
      {children}<span style={{ fontWeight: 400 }}>→</span>
    </span>
  );
}

// ---- 1. FEED · 1080×1350 ----
function FeedPlaca({ img = 5 }) {
  return (
    <div style={{ width: 1080, height: 1350, position: 'relative', overflow: 'hidden',
      background: S.ink, fontFamily: S.text }}>
      <img src={IMG(img)} alt="" style={{ position: 'absolute', inset: 0, width: '100%',
        height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(20,16,15,.78) 0%, rgba(20,16,15,.25) 38%, rgba(20,16,15,0) 62%)' }} />
      <div style={{ position: 'absolute', top: 56, left: 60 }}>
        <Eyebrow style={{ fontSize: 26 }}>Nueva temporada</Eyebrow>
      </div>
      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 64 }}>
        <h1 style={{ fontFamily: S.display, fontWeight: 900, fontSize: 116, lineHeight: .92,
          letterSpacing: '-0.03em', color: S.cream, margin: 0 }}>Abrigos que<br/>abrazan</h1>
        <p style={{ fontSize: 32, color: 'rgba(247,241,234,.85)', margin: '22px 0 38px',
          fontWeight: 500, maxWidth: 720 }}>Camperas, tapados y puffers para el frío de verdad.</p>
        <TextCTA style={{ fontSize: 28 }}>Mirá la colección</TextCTA>
      </div>
    </div>
  );
}

// ---- 2. SQUARE · 1080×1080 (split block) ----
function SquarePlaca({ img = 1 }) {
  return (
    <div style={{ width: 1080, height: 1080, display: 'flex', background: S.cream,
      fontFamily: S.text, overflow: 'hidden' }}>
      <div style={{ width: 540, position: 'relative' }}>
        <img src={IMG(img)} alt="" style={{ width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top' }} />
        <span style={{ position: 'absolute', top: 36, left: 36, background: S.ink, color: S.cream,
          fontWeight: 700, fontSize: 22, letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '12px 22px', borderRadius: 10 }}>−30%</span>
      </div>
      <div style={{ flex: 1, padding: '72px 64px', display: 'flex', flexDirection: 'column',
        justifyContent: 'center' }}>
        <Eyebrow color={S.taupe} style={{ fontSize: 24 }}>Solo por hoy</Eyebrow>
        <h2 style={{ fontFamily: S.display, fontWeight: 900, fontSize: 82, lineHeight: .95,
          letterSpacing: '-0.03em', color: S.ink, margin: '20px 0 0' }}>Cuero<br/>que dura</h2>
        <p style={{ fontSize: 28, color: S.taupe, fontWeight: 500, margin: '26px 0 0', lineHeight: 1.4 }}>
          Tapados y camperas con hasta 30% off. Talles del 1 al 4.</p>
        <div style={{ marginTop: 40 }}>
          <TextCTA color={S.ink} style={{ fontSize: 25 }}>Mirá los talles</TextCTA>
        </div>
      </div>
    </div>
  );
}

// ---- 3. STORY · 1080×1920 (safe-zone aware) ----
function StoryPlaca({ img = 3 }) {
  return (
    <div style={{ width: 1080, height: 1920, position: 'relative', overflow: 'hidden',
      background: S.ink, fontFamily: S.text }}>
      <img src={IMG(img)} alt="" style={{ position: 'absolute', inset: 0, width: '100%',
        height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      <div style={{ position: 'absolute', inset: 0, background:
        'linear-gradient(to bottom, rgba(20,16,15,.55) 0%, rgba(20,16,15,0) 26%), linear-gradient(to top, rgba(20,16,15,.6) 0%, rgba(20,16,15,0) 30%)' }} />
      {/* safe zone: content kept in mid-upper band */}
      <div style={{ position: 'absolute', top: 300, left: 80, right: 80, textAlign: 'center' }}>
        <Eyebrow style={{ fontSize: 28 }}>Drop de invierno</Eyebrow>
        <h1 style={{ fontFamily: S.display, fontWeight: 900, fontSize: 132, lineHeight: .9,
          letterSpacing: '-0.03em', color: S.cream, margin: '26px 0 0' }}>Total<br/>black</h1>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 380, textAlign: 'center' }}>
        <TextCTA style={{ fontSize: 30 }}>Deslizá para ver</TextCTA>
      </div>
      {/* safe-zone guide */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 250,
        borderTop: '2px dashed rgba(251,191,175,.5)', display: 'flex', alignItems: 'center',
        justifyContent: 'center' }}>
        <span style={{ fontSize: 20, color: 'rgba(251,191,175,.85)', letterSpacing: '.1em',
          textTransform: 'uppercase', fontWeight: 700 }}>Zona UI · sin texto clave</span>
      </div>
    </div>
  );
}

// ---- 4. AD HORIZONTAL · 1200×628 ----
function AdPlaca({ img = 6 }) {
  return (
    <div style={{ width: 1200, height: 628, display: 'flex', background: S.sand,
      fontFamily: S.text, overflow: 'hidden' }}>
      <div style={{ flex: 1, padding: '64px 60px', display: 'flex', flexDirection: 'column',
        justifyContent: 'center' }}>
        <Eyebrow color={S.taupe} style={{ fontSize: 19 }}>Envío gratis a todo el país</Eyebrow>
        <h2 style={{ fontFamily: S.display, fontWeight: 900, fontSize: 76, lineHeight: .92,
          letterSpacing: '-0.03em', color: S.ink, margin: '16px 0 0' }}>El frío<br/>te queda<br/>bien</h2>
        <p style={{ fontSize: 23, color: S.taupe, fontWeight: 600, margin: '22px 0 0' }}>
          3 cuotas sin interés <span style={{ color: S.mocha, fontWeight: 500 }}>· nueva colección</span></p>
        <div style={{ marginTop: 32 }}>
          <CTA style={{ fontSize: 21, padding: '18px 34px' }}>Ver colección</CTA>
        </div>
      </div>
      <div style={{ width: 470, position: 'relative' }}>
        <img src={IMG(img)} alt="" style={{ width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 20%' }} />
      </div>
    </div>
  );
}

Object.assign(window, { FeedPlaca, SquarePlaca, StoryPlaca, AdPlaca, SIMONA_S: S });
