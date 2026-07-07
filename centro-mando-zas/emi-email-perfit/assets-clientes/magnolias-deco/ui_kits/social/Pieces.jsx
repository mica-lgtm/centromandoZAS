// Pieces.jsx — Magnolias Deco channel piece templates.
// Each piece renders at NATIVE canvas size (px). The showcase scales them.
// Relies on Primitives.jsx (window globals).

const A = "../../assets/"; // asset path from ui_kits/social/

// ============ FEED POST — product (1080×1350) ============
function FeedPost({ img = A + "img-coffee-table.webp", cat = "Muebles", name = "Mesa ratona Nórdica",
  now = "$62.300", was = "$89.000", disc = "-30%" }) {
  return (
    <div style={canvas(1080, 1350, "var(--offwhite)")}>
      <div style={{ padding: 56, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Wordmark size={42} />
          <Tag tone="red" style={{ fontSize: 18, padding: "9px 18px" }}>Oferta</Tag>
        </header>
        <div style={{ flex: 1, borderRadius: 28, overflow: "hidden", margin: "40px 0 0", position: "relative", boxShadow: "var(--shadow-md)" }}>
          <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", top: 28, left: 28 }}><Discount style={{ fontSize: 40, padding: "16px 22px" }}>{disc}</Discount></div>
        </div>
        <footer style={{ marginTop: 36, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <Eyebrow style={{ fontSize: 20 }}>{cat}</Eyebrow>
            <div style={{ fontFamily: mFont, fontWeight: 800, fontSize: 52, letterSpacing: "-0.02em", color: "var(--black)", lineHeight: 1, marginTop: 8 }}>{name}</div>
            <div style={{ marginTop: 18 }}><Price now={now} was={was} size={56} /></div>
          </div>
          <Button style={{ fontSize: 26, padding: "20px 38px", borderRadius: 14 }}>Comprá ahora</Button>
        </footer>
      </div>
    </div>
  );
}

// ============ STATEMENT POST — yellow plate (1080×1350) ============
function StatementPost({ kicker = "Contenido de valor", line1 = "Tu casa no está fea.",
  line2 = "Está mal decorada.", bg = "var(--yellow)" }) {
  return (
    <div style={canvas(1080, 1350, bg)}>
      <div style={{ padding: 80, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Wordmark size={44} />
          <Eyebrow color="rgba(10,10,10,.55)" style={{ fontSize: 20 }}>{kicker}</Eyebrow>
        </header>
        <Statement size={118} style={{ lineHeight: 0.92 }}>
          {line1}<br /><span style={{ color: "#fff" }}>{line2}</span>
        </Statement>
        <div style={{ fontFamily: mFont, fontWeight: 600, fontSize: 28, color: "rgba(10,10,10,.6)" }}>Deslizá para descubrir cómo →</div>
      </div>
    </div>
  );
}

// ============ STORY — full-bleed photo + bottom plate (1080×1920) ============
function Story({ img = A + "img-living-room.webp", kicker = "Nuevo ingreso",
  title = "Living que respira", cta = "Ver colección" }) {
  return (
    <div style={canvas(1080, 1920, "var(--black)")}>
      <img src={img} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 45%, rgba(0,0,0,.72))" }} />
      <div style={{ position: "absolute", top: 64, left: 64 }}><Wordmark variant="white" size={44} /></div>
      <div style={{ position: "absolute", left: 64, right: 64, bottom: 110 }}>
        <Eyebrow color="var(--yellow)" style={{ fontSize: 24 }}>{kicker}</Eyebrow>
        <Statement size={104} color="#fff" style={{ marginTop: 18, lineHeight: 0.94 }}>{title}</Statement>
        <div style={{ marginTop: 40 }}><Button style={{ fontSize: 30, padding: "24px 46px", borderRadius: 16 }}>{cta} →</Button></div>
      </div>
    </div>
  );
}

// ============ CAROUSEL COVER (1080×1350) ============
function CarouselCover({ img = A + "img-nightstand.webp", kicker = "Guía rápida",
  title = "5 detalles que cambian un ambiente" }) {
  return (
    <div style={canvas(1080, 1350, "var(--black)")}>
      <img src={img} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(10,10,10,.78) 40%, transparent)" }} />
      <div style={{ position: "absolute", inset: 0, padding: 72, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Wordmark variant="white" size={42} />
        <div>
          <Eyebrow color="var(--yellow)" style={{ fontSize: 24 }}>{kicker}</Eyebrow>
          <Statement size={92} color="#fff" style={{ marginTop: 20, maxWidth: 760 }}>{title}</Statement>
        </div>
        <div style={{ fontFamily: mFont, fontWeight: 700, fontSize: 26, color: "#fff", opacity: 0.7 }}>Deslizá →</div>
      </div>
    </div>
  );
}

// ============ CAROUSEL CONTENT PLATE (1080×1350) ============
function CarouselPlate({ n = "01", title = "Sumá textiles", img = A + "img-detail-3.webp",
  body = "Una manta de lino o un almohadón con textura cambian la temperatura visual de cualquier sofá." }) {
  return (
    <div style={canvas(1080, 1350, "var(--offwhite)")}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ height: 660, position: "relative", flexShrink: 0 }}>
          <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 40, left: 48, fontFamily: mFont, fontWeight: 900, fontSize: 130, color: "#fff", lineHeight: 0.8, letterSpacing: "-0.04em", textShadow: "0 4px 24px rgba(0,0,0,.35)" }}>{n}</div>
        </div>
        <div style={{ flex: 1, padding: "60px 72px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <Statement size={70} style={{ marginBottom: 22 }}>{title}</Statement>
          <p style={{ fontFamily: mFont, fontSize: 34, lineHeight: 1.45, color: "var(--fg2)", margin: 0, fontWeight: 400 }}>{body}</p>
        </div>
      </div>
    </div>
  );
}

// ============ AD PLATE — conversion (1080×1080) ============
function AdPlate({ img = A + "img-detail-1.webp", hook = "Renová el baño sin obra",
  benefit = "Muebles, espejos y textiles que transforman el ambiente", cta = "Comprá hoy", disc = "Hasta -40%" }) {
  return (
    <div style={canvas(1080, 1080, "var(--offwhite)")}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 36, left: 36 }}><Discount style={{ fontSize: 38, padding: "16px 22px" }}>{disc}</Discount></div>
          <div style={{ position: "absolute", top: 40, right: 44 }}><Wordmark variant="white" size={38} /></div>
        </div>
        <div style={{ background: "var(--black)", padding: "48px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <Statement size={62} color="#fff">{hook}</Statement>
            <p style={{ fontFamily: mFont, fontSize: 26, color: "var(--warm-gray)", margin: "14px 0 0", fontWeight: 500 }}>{benefit}</p>
          </div>
          <Button style={{ fontSize: 28, padding: "22px 40px", borderRadius: 14, flexShrink: 0 }}>{cta}</Button>
        </div>
      </div>
    </div>
  );
}

// ============ EMAIL BANNER (1200×520) ============
function EmailBanner({ img = A + "img-table-setting.webp", kicker = "Mesa & cocina",
  title = "La mesa también decora", cta = "Ver novedades" }) {
  return (
    <div style={canvas(1200, 520, "var(--offwhite)")}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ width: 540, padding: 64, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow style={{ fontSize: 18 }}>{kicker}</Eyebrow>
          <Statement size={58} style={{ marginTop: 16 }}>{title}</Statement>
          <div style={{ marginTop: 32 }}><Button style={{ fontSize: 22, padding: "16px 32px" }}>{cta} →</Button></div>
        </div>
        <div style={{ flex: 1 }}><img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
      </div>
    </div>
  );
}

// ============ WHATSAPP CARD (800×800) ============
function WhatsAppCard({ img = A + "img-detail-2.webp", title = "Llegaron las cortinas de lino",
  benefit = "Livianas, cálidas y con caída perfecta", cta = "Pedí la tuya" }) {
  return (
    <div style={canvas(800, 800, "var(--white)")}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 28, left: 28 }}><Wordmark variant="white" size={34} /></div>
        </div>
        <div style={{ padding: "40px 48px", textAlign: "center" }}>
          <Statement size={48} align="center">{title}</Statement>
          <p style={{ fontFamily: mFont, fontSize: 24, color: "var(--fg2)", margin: "14px 0 26px", fontWeight: 400 }}>{benefit}</p>
          <Button style={{ fontSize: 26, padding: "20px 44px" }}>{cta}</Button>
        </div>
      </div>
    </div>
  );
}

// helper: native canvas frame
function canvas(w, h, bg) {
  return { width: w, height: h, background: bg, position: "relative", overflow: "hidden", fontFamily: mFont };
}

Object.assign(window, { FeedPost, StatementPost, Story, CarouselCover, CarouselPlate, AdPlate, EmailBanner, WhatsAppCard });
