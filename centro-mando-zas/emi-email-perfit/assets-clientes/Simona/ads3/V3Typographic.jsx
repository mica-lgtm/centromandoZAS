/* global React, SIMONA_A, PHOTOS, FORMATS, Pill, Eyebrow, Cond, Wordmark */
// VERSION 3 — TYPOGRAPHIC / MEGA NUMBER on cream. Big "40%" hero, coherent copy
// (Hasta 40% OFF en sweaters), generous product photo as a full-width band / side panel.
// Safe margins on every edge; no clipped glyphs, no dead empty space.
const A3 = SIMONA_A;

function V3Typographic({ fmt }) {
  const f = FORMATS[fmt];
  const photo = PHOTOS.naturalAlt; // V3 owns dsc03812 (cream Jume Natural, alt pose)

  // Zoomed/panned photo so the model fills the frame and the sweater reads big.
  function Photo({ size = '150%', pos = '50% 30%', radius = 0, style }) {
    return (
      <div style={{ width: '100%', height: '100%', backgroundImage: `url(${photo})`,
        backgroundSize: size, backgroundPosition: pos, backgroundRepeat: 'no-repeat',
        backgroundColor: A3.clay, borderRadius: radius, ...style }}></div>
    );
  }

  // Mega offer lockup. variant 'minus' → "−40%" + "en sweaters"; 'off' → "40%" + "OFF en sweaters".
  // Number stays one solid color (ink); the descriptor line carries the blush accent.
  function Offer({ s, align = 'left', variant = 'minus' }) {
    return (
      <div style={{ textAlign: align }}>
        <div style={{ fontFamily: A3.txt, fontWeight: 800, textTransform: 'uppercase',
          letterSpacing: '0.2em', color: A3.blushDeep, fontSize: 26 * s }}>Hasta</div>
        <div style={{ fontFamily: A3.disp, fontWeight: 900, color: A3.ink, lineHeight: .82,
          letterSpacing: '-0.04em', fontSize: 250 * s, whiteSpace: 'nowrap' }}>
          {variant === 'minus' ? '−40%' : '40%'}
        </div>
        <div style={{ fontFamily: A3.disp, fontWeight: 800, color: A3.blushDeep, letterSpacing: '-0.02em',
          fontSize: 70 * s, lineHeight: .98, marginTop: 6 * s }}>
          {variant === 'minus' ? 'en sweaters' : 'OFF en sweaters'}
        </div>
      </div>
    );
  }

  // ---------- HORIZONTAL 1200×628: text left, big photo panel right ----------
  if (fmt === 'hz') {
    return (
      <div style={{ width: f.w, height: f.h, display: 'flex', background: A3.cream }}>
        <div style={{ flex: 1, padding: '50px 0 50px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <Wordmark color={A3.ink} size={28} />
            <span style={{ fontFamily: A3.txt, fontWeight: 800, fontSize: 16, letterSpacing: '0.16em', textTransform: 'uppercase', color: A3.taupe }}>· Solo el finde largo</span>
          </div>
          <Offer s={0.74} />
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Cond color={A3.taupe} dot={A3.blushDeep} size={27}>12 cuotas sin interés</Cond>
            <Cond color={A3.taupe} dot={A3.blushDeep} size={27}>15% OFF en toda la categoría Invierno</Cond>
          </div>
          <div style={{ marginTop: 24 }}>
            <Pill bg={A3.ink} fg={A3.cream} style={{ fontSize: 21, padding: '17px 36px' }}>Quiero el mío</Pill>
          </div>
        </div>
        <div style={{ width: 480, flex: 'none' }}>
          <Photo size="150%" pos="50% 22%" />
        </div>
      </div>
    );
  }

  // ---------- SQUARE 1080×1080: text left, full-bleed photo panel right ----------
  if (fmt === 'sq') {
    return (
      <div style={{ width: f.w, height: f.h, position: 'relative', background: A3.cream }}>
        {/* photo pinned to the right edge, full height top-to-bottom.
            sized by HEIGHT (auto width) so a square photo fully covers this tall narrow panel */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 470 }}>
          <Photo size="auto 132%" pos="50% 12%" />
        </div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 470, padding: '64px 40px 64px 64px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Wordmark color={A3.ink} size={34} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Pill bg={A3.blushSoft} fg={A3.blushDeep} style={{ alignSelf: 'flex-start', fontSize: 19, padding: '10px 18px', letterSpacing: '0.12em', marginBottom: 18 }}>Finde largo</Pill>
            <Offer s={1.0} variant="off" />
            <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Cond color={A3.taupe} dot={A3.blushDeep} size={33}>12 cuotas sin interés</Cond>
              <Cond color={A3.taupe} dot={A3.blushDeep} size={33}>15% OFF en toda la categoría Invierno</Cond>
            </div>
            <div style={{ marginTop: 34 }}>
              <Pill bg={A3.ink} fg={A3.cream} style={{ fontSize: 27, padding: '22px 44px' }}>Quiero el mío</Pill>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- VERTICAL 1080×1920: mega number top, tall full-width photo bottom ----------
  const pad = 84;
  const bandH = 1180;
  return (
    <div style={{ width: f.w, height: f.h, background: A3.cream, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: `${pad}px ${pad}px 0`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Wordmark color={A3.ink} size={42} />
          <Pill bg={A3.blushSoft} fg={A3.blushDeep} style={{ fontSize: 24, padding: '13px 24px', letterSpacing: '0.12em' }}>Finde largo</Pill>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Offer s={1.24} />
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Cond color={A3.taupe} dot={A3.blushDeep} size={42}>12 cuotas sin interés</Cond>
            <Cond color={A3.taupe} dot={A3.blushDeep} size={42}>15% OFF en toda la categoría Invierno</Cond>
          </div>
        </div>
      </div>
      <div style={{ height: bandH, position: 'relative', flex: 'none' }}>
        <Photo size="118%" pos="50% 16%" />
        {/* CTA kept above the bottom IG/TikTok UI safe zone */}
        <div style={{ position: 'absolute', left: pad, bottom: 360 }}>
          <Pill bg={A3.ink} fg={A3.cream} style={{ fontSize: 34, padding: '28px 56px' }}>Quiero el mío</Pill>
        </div>
      </div>
    </div>
  );
}
window.V3Typographic = V3Typographic;
