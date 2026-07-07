/* global React, SIMONA_A, PHOTOS, FORMATS, Pill, Eyebrow, Cond, Wordmark */
// VERSION 2 — BOLD COLOR-BLOCK SPLIT. Solid ink panel with oversized offer typography
// next to a black-sweater photo panel. High-contrast, scroll-stopping.
// Copy lockup reads coherently: FINDE LARGO · HASTA / −40% / en todos los sweaters.
const A2 = SIMONA_A;

function V2Bold({ fmt }) {
  const f = FORMATS[fmt];
  const photo = PHOTOS.negro; // V2 owns dsc03691 (black Jume Negro) across all formats

  // Zoomed-in photo panel (background-image lets us zoom into the model, less wall)
  function Photo({ size, pos }) {
    return (
      <div style={{ width: '100%', height: '100%', backgroundImage: `url(${photo})`,
        backgroundSize: size, backgroundPosition: pos, backgroundRepeat: 'no-repeat',
        backgroundColor: A2.ink }}></div>
    );
  }

  // s = scale factor; num = big-number font size; oneLine keeps the sub on one row (wide layouts)
  function Panel({ s, num, align = 'left', oneLine = false }) {
    const aiCenter = align === 'center';
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%',
        padding: `${56 * s}px ${56 * s}px`, textAlign: align,
        alignItems: aiCenter ? 'center' : 'flex-start' }}>
        <Wordmark color={A2.cream} size={32 * s} style={{ marginBottom: 14 * s }} />
        <Eyebrow color={A2.blush} style={{ fontSize: 26 * s }}>Finde largo · Hasta</Eyebrow>
        <div style={{ fontFamily: A2.disp, fontWeight: 900, color: A2.blush, letterSpacing: '-0.04em',
          lineHeight: .82, fontSize: num, marginTop: 6 * s }}>−40%</div>
        <div style={{ fontFamily: A2.disp, fontWeight: 800, color: A2.cream, letterSpacing: '-0.02em',
          fontSize: 58 * s, lineHeight: .98, marginTop: 10 * s }}>
          {oneLine ? 'en todos los sweaters' : <React.Fragment>en todos<br />los sweaters</React.Fragment>}
        </div>
        <div style={{ marginTop: 30 * s, display: 'flex', flexDirection: 'column', gap: 14 * s,
          alignItems: aiCenter ? 'center' : 'flex-start' }}>
          <Cond color={A2.cream} dot={A2.blush} size={30 * s}>12 cuotas sin interés</Cond>
          <Cond color={A2.cream} dot={A2.blush} size={30 * s}>15% OFF en toda la categoría Invierno</Cond>
        </div>
        <div style={{ marginTop: 38 * s }}>
          <Pill bg={A2.blush} fg={A2.ink} style={{ fontSize: 34 * s, padding: `${26 * s}px ${52 * s}px` }}>Aprovechá ahora</Pill>
        </div>
      </div>
    );
  }

  // ---------- HORIZONTAL 1200×628 ----------
  if (fmt === 'hz') {
    return (
      <div style={{ width: f.w, height: f.h, display: 'flex', background: A2.ink }}>
        <div style={{ flex: 1 }}><Panel s={0.82} num={208} oneLine /></div>
        <div style={{ width: 510, flex: 'none' }}>
          <Photo size="178%" pos="33% 30%" />
        </div>
      </div>
    );
  }
  // ---------- VERTICAL 1080×1920 ----------
  if (fmt === 'vt') {
    return (
      <div style={{ width: f.w, height: f.h, display: 'flex', flexDirection: 'column', background: A2.ink }}>
        <div style={{ height: 1010 }}><Panel s={1.18} num={340} align="center" /></div>
        <div style={{ flex: 1 }}>
          <Photo size="106%" pos="50% 30%" />
        </div>
      </div>
    );
  }
  // ---------- SQUARE 1080×1080: left ink panel, right photo ----------
  return (
    <div style={{ width: f.w, height: f.h, display: 'flex', background: A2.ink }}>
      <div style={{ width: 600, flex: 'none' }}><Panel s={0.96} num={188} /></div>
      <div style={{ flex: 1 }}>
        <Photo size="150%" pos="50% 14%" />
      </div>
    </div>
  );
}
window.V2Bold = V2Bold;
