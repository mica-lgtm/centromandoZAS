/* global React */
// Flyer.jsx — vertical event flyer (A4-ish ratio) for ERJ

function Flyer({ photo = "../assets/fotos/erj-65.png" }) {
  return (
    <div style={{
      width: 320, height: 452, borderRadius: 24, overflow: "hidden",
      position: "relative", fontFamily: "var(--font-sans)",
      background: "var(--violeta-900)", boxShadow: "var(--shadow-lg)", flex: "none",
    }}>
      {/* photo top */}
      <div style={{ height: 230, position: "relative" }}>
        <img src={photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(33,1,77,0) 55%, var(--violeta-900) 100%)" }} />
        <img src="../../assets/erj-logo-white.png" alt="ERJ" style={{ position: "absolute", top: 18, left: 20, height: 38 }} />
      </div>
      {/* content */}
      <div style={{ padding: "4px 26px 26px" }}>
        <div style={{ color: "var(--rosa-500)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Conferencia anual
        </div>
        <div style={{ color: "#fff", fontWeight: 900, fontSize: 40, lineHeight: 0.95, letterSpacing: "-0.02em", marginTop: 8 }}>
          VIDA CON<br />PROPÓSITO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 20 }}>
          <Row icon="📅" text="18, 19 y 20 de julio" />
          <Row icon="🕖" text="19:30 h · Apertura de puertas 18:30" />
          <Row icon="📍" text="Av. Siempre Viva 1234, CABA" />
        </div>
        <div style={{ marginTop: 22, display: "inline-flex", alignItems: "center", justifyContent: "center", width: "100%", background: "var(--rosa-500)", color: "#fff", fontWeight: 800, fontSize: 16, padding: "13px 0", borderRadius: 999, boxShadow: "var(--shadow-rosa)" }}>
          Reservá tu lugar gratis
        </div>
      </div>
    </div>
  );
}

function Row({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <span style={{ width: 30, height: 30, borderRadius: 9, background: "rgba(243,89,128,.16)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, flex: "none" }}>{icon}</span>
      <span style={{ color: "var(--violeta-100)", fontSize: 14, fontWeight: 500 }}>{text}</span>
    </div>
  );
}

window.Flyer = Flyer;
