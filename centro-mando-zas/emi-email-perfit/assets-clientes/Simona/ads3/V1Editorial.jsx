/* global React, SIMONA_A, PHOTOS, FORMATS, Pill, Eyebrow, Cond, Wordmark */
// VERSION 1 — EDITORIAL. Full-bleed cream sweater photo, protection gradient,
// message anchored for balance. Warm, soft, premium. Hook: "Hasta 40% OFF en sweaters".
// All reframing is zoom-IN only (backgroundSize >= cover) so the frame never has empty space.
const A1 = SIMONA_A;

function V1Editorial({ fmt }) {
  const f = FORMATS[fmt];
  const photo = PHOTOS.natural; // V1 owns dsc03815 (cream Jume Natural) across all formats

  // ---------- HORIZONTAL 1200×628 ----------
  // Right column shows the model head-to-hips (square photo fits a tall column exactly);
  // a blurred copy of the same photo extends the wall behind the text — no empty space.
  if (fmt === 'hz') {
    const colW = 520;
    return (
      <div style={{ width: f.w, height: f.h, position: 'relative', overflow: 'hidden', background: A1.ink }}>
        {/* blurred ambient backdrop (same photo) */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${photo})`,
          backgroundSize: 'cover', backgroundPosition: 'center 28%',
          filter: 'blur(26px) brightness(.5) saturate(.9)', transform: 'scale(1.18)' }}></div>
        {/* sharp model column on the right */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: colW,
          backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
        {/* feather the column's left edge into the backdrop */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: colW - 1, width: 90,
          background: 'linear-gradient(90deg, rgba(20,16,15,0) 0%, rgba(20,16,15,.0) 100%)' }}></div>
        {/* text legibility gradient on the left */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(20,16,15,.92) 0%, rgba(20,16,15,.7) 36%, rgba(20,16,15,0) 62%)' }}></div>
        <div style={{ position: 'absolute', left: 56, top: 0, bottom: 0, width: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Wordmark color={A1.cream} size={26} style={{ marginBottom: 14 }} />
          <Eyebrow color={A1.blush} style={{ fontSize: 18 }}>Solo el finde largo</Eyebrow>
          <div style={{ fontFamily: A1.disp, fontWeight: 900, fontSize: 80, lineHeight: .88, letterSpacing: '-0.03em', color: A1.cream, margin: '12px 0 0' }}>
            Hasta 40%<br /><span style={{ color: A1.blush }}>OFF en sweaters</span>
          </div>
          <div style={{ marginTop: 22 }}>
            <Cond color={A1.cream} dot={A1.blush} size={20}>12 cuotas sin interés · envío gratis</Cond>
          </div>
          <div style={{ marginTop: 26 }}>
            <Pill bg={A1.cream} fg={A1.ink} style={{ fontSize: 21, padding: '17px 36px' }}>Comprar ahora</Pill>
          </div>
        </div>
      </div>
    );
  }

  const vt = fmt === 'vt';

  // ---------- SQUARE: zoom in + pan so the model rises and sits right ----------
  // ---------- VERTICAL: photo kept as-is, eyebrow gets a chip for legibility ----------
  const photoLayer = vt
    ? <img src={photo} alt="Sweater SIMONA" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 16%' }} />
    : <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${photo})`, backgroundSize: '130%', backgroundPosition: '6% 33%', backgroundRepeat: 'no-repeat' }}></div>;

  return (
    <div style={{ width: f.w, height: f.h, position: 'relative', overflow: 'hidden', background: A1.ink }}>
      {photoLayer}
      <div style={{ position: 'absolute', inset: 0, background: vt
        ? 'linear-gradient(180deg, rgba(20,16,15,.5) 0%, rgba(20,16,15,0) 24%, rgba(20,16,15,0) 50%, rgba(20,16,15,.9) 86%)'
        : 'linear-gradient(180deg, rgba(20,16,15,.32) 0%, rgba(20,16,15,0) 30%, rgba(20,16,15,0) 40%, rgba(20,16,15,.9) 82%)' }}></div>
      <div style={{ position: 'absolute', top: vt ? 150 : 54, left: vt ? 0 : 60, right: vt ? 0 : 60, textAlign: vt ? 'center' : 'left' }}>
        <Wordmark color={A1.cream} size={vt ? 34 : 30} />
      </div>
      <div style={{ position: 'absolute', left: vt ? 70 : 60, right: vt ? 70 : 60, bottom: vt ? 360 : 60 }}>
        {vt
          ? <span style={{ display: 'inline-block', background: A1.ink, color: A1.blush, fontFamily: A1.txt, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 28, padding: '13px 24px', borderRadius: 999 }}>Solo el finde largo</span>
          : <Eyebrow color={A1.blush} style={{ fontSize: 26 }}>Solo el finde largo</Eyebrow>}
        <div style={{ fontFamily: A1.disp, fontWeight: 900, fontSize: vt ? 150 : 122, lineHeight: .9, letterSpacing: '-0.03em', color: A1.cream, margin: '16px 0 0' }}>
          Hasta 40%<br /><span style={{ color: A1.blush }}>OFF en<br />sweaters</span>
        </div>
        <div style={{ marginTop: vt ? 34 : 28 }}>
          <Cond color={A1.cream} dot={A1.blush} size={vt ? 32 : 27}>12 cuotas sin interés</Cond>
        </div>
        <div style={{ marginTop: vt ? 40 : 34 }}>
          <Pill bg={A1.cream} fg={A1.ink} style={{ fontSize: vt ? 33 : 28, padding: vt ? '28px 56px' : '24px 46px' }}>Comprar ahora</Pill>
        </div>
      </div>
    </div>
  );
}
window.V1Editorial = V1Editorial;
