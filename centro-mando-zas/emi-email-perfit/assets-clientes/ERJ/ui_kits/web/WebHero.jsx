/* global React */
// WebHero.jsx — full-bleed hero with protection gradient for ERJ

function WebHero({ photo = "../../assets/fotos/erj-19.png" }) {
  const c = window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : { air: "left", focal: "50% 50%" };
  // Landscape hero: place text on the air side (right-air → right; else left).
  const side = c.air === "right" ? "right" : "left";
  const grad = side === "right"
    ? "linear-gradient(260deg, rgba(33,1,77,.92) 0%, rgba(33,1,77,.74) 42%, rgba(33,1,77,.15) 100%)"
    : "linear-gradient(100deg, rgba(33,1,77,.92) 0%, rgba(33,1,77,.74) 42%, rgba(33,1,77,.15) 100%)";
  return (
    <section style={{ position: "relative", height: 540, fontFamily: "var(--font-sans)", overflow: "hidden" }}>
      <img src={photo} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: c.focal }} />
      <div style={{ position: "absolute", inset: 0, background: grad }} />
      <div style={{ position: "relative", maxWidth: 620, padding: "0 40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: side === "right" ? "auto" : 0, alignItems: side === "right" ? "flex-end" : "flex-start", textAlign: side === "right" ? "right" : "left" }}>
        <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 8, background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 999, padding: "8px 16px", color: "#fff", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 22, whiteSpace: "nowrap" }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--rosa-500)" }} />
          Reuniones todos los domingos 10:30 h
        </div>
        <h1 style={{ margin: 0, color: "#fff", fontWeight: 900, fontSize: 60, lineHeight: 0.98, letterSpacing: "-0.025em" }}>
          Tu casa te está <span style={{ color: "var(--rosa-500)" }}>esperando</span>
        </h1>
        <p style={{ color: "var(--violeta-200)", fontSize: 19, lineHeight: 1.55, marginTop: 20, maxWidth: 480 }}>
          Una comunidad donde la fe se vive en familia. Vení como estás y encontrá tu lugar.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, justifyContent: side === "right" ? "flex-end" : "flex-start" }}>
          <button className="erj-btn erj-btn--primary">Planificá tu visita</button>
          <button className="erj-btn erj-btn--on-dark">Ver prédicas</button>
        </div>
      </div>
    </section>
  );
}

window.WebHero = WebHero;
