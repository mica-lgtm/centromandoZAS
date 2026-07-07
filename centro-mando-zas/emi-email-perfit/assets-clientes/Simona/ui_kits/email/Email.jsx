/* global React */
// SIMONA — Email marketing UI kit
// Modular blocks for a responsive, dark-mode-safe HTML email.
// Rendered at a 600px content column (standard email width).

const E = {
  ink: '#2a2a2a', cream: '#f7f1ea', sand: '#efe6dc', clay: '#e4d6ca',
  taupe: '#70625f', blush: '#fbbfaf', blushSoft: '#fdded5', blushDeep: '#e9a392',
  white: '#fff', mocha: '#9a877f', line: '#e2d7cd',
  display: '"Red Hat Display", system-ui, sans-serif',
  text: '"Red Hat Text", "Red Hat Display", system-ui, sans-serif',
};
const EIMG = (n) => `../../assets/simona-look-0${n}.webp`;

// ---- Header / wordmark bar ----
function EmailHeader() {
  return (
    <div style={{ background: E.cream, padding: '22px 32px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${E.line}` }}>
      <span style={{ fontFamily: E.display, fontWeight: 900, fontSize: 24, letterSpacing: '-0.01em',
        color: E.ink }}>SIMONA</span>
      <span style={{ fontFamily: E.text, fontWeight: 600, fontSize: 12, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: E.taupe }}>Nueva temporada</span>
    </div>
  );
}

// ---- Hero block ----
function EmailHero({ img = 5 }) {
  return (
    <div style={{ position: 'relative', background: E.ink }}>
      <img src={EIMG(img)} alt="" style={{ width: '100%', height: 420, objectFit: 'cover',
        objectPosition: 'center top', display: 'block' }} />
      <div style={{ position: 'absolute', inset: 0, background:
        'linear-gradient(to top, rgba(20,16,15,.72) 0%, rgba(20,16,15,0) 55%)' }} />
      <div style={{ position: 'absolute', left: 32, right: 32, bottom: 30 }}>
        <div style={{ fontFamily: E.text, fontWeight: 700, fontSize: 12, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: E.cream, marginBottom: 10 }}>Llegó el frío</div>
        <h1 style={{ fontFamily: E.display, fontWeight: 900, fontSize: 46, lineHeight: .95,
          letterSpacing: '-0.02em', color: E.cream, margin: 0 }}>Abrigos que<br/>abrazan</h1>
      </div>
    </div>
  );
}

// ---- Intro text block ----
function EmailIntro() {
  return (
    <div style={{ background: E.white, padding: '34px 32px 8px', textAlign: 'center' }}>
      <p style={{ fontFamily: E.text, fontWeight: 400, fontSize: 16, lineHeight: 1.6,
        color: E.taupe, margin: 0 }}>
        Camperas, tapados y puffers pensados para el día a día. Cómodos, cancheros y listos
        para el frío de verdad.
      </p>
    </div>
  );
}

// ---- Commercial bar ----
function CommercialBar() {
  return (
    <div style={{ background: E.blushSoft, padding: '18px 32px', textAlign: 'center' }}>
      <span style={{ fontFamily: E.text, fontWeight: 700, fontSize: 15, color: E.ink }}>
        Hasta 30% OFF <span style={{ color: E.blushDeep }}>·</span> 3 cuotas sin interés
        <span style={{ color: E.blushDeep }}>·</span> envío gratis
      </span>
    </div>
  );
}

// ---- Button ----
function EmailButton({ children, block }) {
  return (
    <a href="#" style={{ display: block ? 'block' : 'inline-block', textDecoration: 'none',
      fontFamily: E.text, fontWeight: 700, fontSize: 14, letterSpacing: '0.05em',
      textTransform: 'uppercase', background: E.ink, color: E.cream, borderRadius: 999,
      padding: '16px 34px', textAlign: 'center' }}>{children}</a>
  );
}

// ---- Product grid (2-up) ----
function ProductGrid() {
  const items = [
    { img: 1, name: 'Campera shearling', price: '$89.900', note: '3 cuotas de $29.966' },
    { img: 3, name: 'Tapado de cuero', price: '$72.000', note: 'Talles del 1 al 4', off: true },
  ];
  return (
    <div style={{ background: E.white, padding: '30px 32px 12px' }}>
      <h2 style={{ fontFamily: E.display, fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em',
        color: E.ink, margin: '0 0 20px', textAlign: 'center' }}>Lo nuevo de la semana</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {items.map((p, i) => (
          <div key={i} style={{ background: E.white, borderRadius: 16, overflow: 'hidden',
            border: `1px solid ${E.line}` }}>
            <div style={{ position: 'relative' }}>
              <img src={EIMG(p.img)} alt="" style={{ width: '100%', height: 220, objectFit: 'cover',
                objectPosition: 'center top', display: 'block' }} />
              {p.off && <span style={{ position: 'absolute', top: 12, left: 12, background: E.ink,
                color: E.cream, fontFamily: E.text, fontWeight: 700, fontSize: 10,
                letterSpacing: '0.1em', padding: '5px 10px', borderRadius: 6 }}>−30%</span>}
            </div>
            <div style={{ padding: '14px 16px 18px' }}>
              <div style={{ fontFamily: E.display, fontWeight: 700, fontSize: 16, color: E.ink,
                letterSpacing: '-0.01em' }}>{p.name}</div>
              <div style={{ fontFamily: E.text, fontWeight: 700, fontSize: 15, color: E.ink,
                marginTop: 6 }}>{p.price}</div>
              <div style={{ fontFamily: E.text, fontSize: 12.5, color: E.mocha, marginTop: 3 }}>{p.note}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 26 }}>
        <EmailButton>Ver colección</EmailButton>
      </div>
    </div>
  );
}

// ---- Editorial split block ----
function EditorialBlock({ img = 6 }) {
  return (
    <div style={{ background: E.sand, display: 'flex', alignItems: 'stretch', marginTop: 24 }}>
      <div style={{ width: '46%' }}>
        <img src={EIMG(img)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: 'center 20%', display: 'block' }} />
      </div>
      <div style={{ flex: 1, padding: '34px 28px', display: 'flex', flexDirection: 'column',
        justifyContent: 'center' }}>
        <div style={{ fontFamily: E.text, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: E.taupe, marginBottom: 10 }}>Básicos</div>
        <h3 style={{ fontFamily: E.display, fontWeight: 800, fontSize: 28, lineHeight: .98,
          letterSpacing: '-0.02em', color: E.ink, margin: '0 0 14px' }}>Para usar<br/>todos los días</h3>
        <p style={{ fontFamily: E.text, fontSize: 14, lineHeight: 1.55, color: E.taupe, margin: '0 0 18px' }}>
          Sweaters, remeras y pantalones que combinan con todo.</p>
        <a href="#" style={{ fontFamily: E.text, fontWeight: 700, fontSize: 13, color: E.ink,
          textDecoration: 'none' }}>Ver básicos →</a>
      </div>
    </div>
  );
}

// ---- Footer ----
function EmailFooter() {
  return (
    <div style={{ background: E.ink, padding: '34px 32px', textAlign: 'center' }}>
      <div style={{ fontFamily: E.display, fontWeight: 900, fontSize: 22, letterSpacing: '-0.01em',
        color: E.cream }}>SIMONA</div>
      <div style={{ display: 'flex', gap: 22, justifyContent: 'center', margin: '18px 0',
        fontFamily: E.text, fontWeight: 600, fontSize: 12, letterSpacing: '0.08em',
        textTransform: 'uppercase' }}>
        <a href="#" style={{ color: '#b9ada6', textDecoration: 'none' }}>Instagram</a>
        <a href="#" style={{ color: '#b9ada6', textDecoration: 'none' }}>Tienda</a>
        <a href="#" style={{ color: '#b9ada6', textDecoration: 'none' }}>Ayuda</a>
      </div>
      <p style={{ fontFamily: E.text, fontSize: 11, lineHeight: 1.6, color: '#8a7d76', margin: 0 }}>
        Recibís este mail porque te suscribiste a SIMONA.<br/>
        <a href="#" style={{ color: '#8a7d76' }}>Darme de baja</a> · Buenos Aires, Argentina
      </p>
    </div>
  );
}

Object.assign(window, { EmailHeader, EmailHero, EmailIntro, CommercialBar, EmailButton,
  ProductGrid, EditorialBlock, EmailFooter, SIMONA_E: E });
