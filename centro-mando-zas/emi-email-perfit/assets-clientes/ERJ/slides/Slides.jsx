/* global React */
// Slides.jsx — 1280x720 slide templates for ERJ presentations

function TitleSlide({ photo = "../assets/fotos/erj-19.png" }) {
  const c = window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : { air: "left", focal: "50% 35%" };
  const side = c.air === "right" ? "right" : "left";
  const grad = side === "right"
    ? "linear-gradient(265deg, rgba(33,1,77,.94) 0%, rgba(33,1,77,.72) 45%, rgba(33,1,77,.15) 100%)"
    : "linear-gradient(95deg, rgba(33,1,77,.94) 0%, rgba(33,1,77,.72) 45%, rgba(33,1,77,.15) 100%)";
  return (
    <div style={slideBase}>
      <img src={photo} alt="" style={{ ...imgCover, objectPosition: c.focal }} />
      <div style={{ position: "absolute", inset: 0, background: grad }} />
      <img src="../assets/erj-logo-white.png" alt="ERJ" style={{ position: "absolute", top: 48, [side]: 56, height: 56 }} />
      <div style={{ position: "absolute", [side]: 56, bottom: 90, maxWidth: 760, textAlign: side === "right" ? "right" : "left" }}>
        <div style={eyebrowPink}>Bienvenidos · Domingo</div>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: 78, lineHeight: 0.96, letterSpacing: "-0.025em", margin: "16px 0 0" }}>
          Tu casa te está<br /><span style={{ color: "var(--rosa-500)" }}>esperando</span>
        </h1>
      </div>
    </div>
  );
}

function VerseSlide() {
  return (
    <div style={{ ...slideBase, background: "var(--grad-bordo-violeta)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 110px" }}>
      <div style={{ width: 64, height: 6, borderRadius: 99, background: "var(--rosa-500)", marginBottom: 34 }} />
      <div style={{ color: "#fff", fontWeight: 800, fontSize: 52, lineHeight: 1.14, letterSpacing: "-0.01em", maxWidth: 940 }}>
        “Todo lo puedo en Cristo que me fortalece.”
      </div>
      <div style={{ color: "var(--rosa-300)", fontWeight: 700, fontSize: 20, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 32 }}>
        Filipenses 4:13
      </div>
      <img src="../assets/erj-logo-white.png" alt="ERJ" style={{ position: "absolute", bottom: 44, right: 56, height: 44, opacity: .85 }} />
    </div>
  );
}

function SectionSlide() {
  return (
    <div style={{ ...slideBase, background: "var(--violeta-900)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 110px" }}>
      <div style={eyebrowPink}>Parte 02</div>
      <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 70, lineHeight: 0.98, letterSpacing: "-0.025em", margin: "18px 0 0" }}>
        Una fe que se vive<br />en comunidad
      </h2>
      <div style={{ color: "var(--violeta-200)", fontSize: 22, lineHeight: 1.55, marginTop: 24, maxWidth: 640 }}>
        Nadie camina solo. Descubrí el valor de pertenecer.
      </div>
      <div style={{ position: "absolute", top: 0, right: 0, width: 280, height: "100%", background: "var(--grad-amanecer)", opacity: .9, clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }} />
    </div>
  );
}

function EventSlide({ photo = "../assets/fotos/erj-65.png" }) {
  const c = window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : { focal: "50% 30%" };
  return (
    <div style={{ ...slideBase, background: "var(--crema)", display: "flex" }}>
      <div style={{ flex: "1 1 0", padding: "72px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img src="../assets/erj-logo-primary.png" alt="ERJ" style={{ height: 50, alignSelf: "flex-start", marginBottom: 30 }} />
        <div style={eyebrowPink}>Conferencia anual</div>
        <h2 style={{ color: "var(--violeta-900)", fontWeight: 900, fontSize: 60, lineHeight: 0.95, letterSpacing: "-0.025em", margin: "12px 0 0" }}>
          Vida con<br />Propósito
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
          <Bullet text="18, 19 y 20 de julio · 19:30 h" />
          <Bullet text="Av. Siempre Viva 1234, CABA" />
          <Bullet text="Entrada libre · Reservá tu lugar" />
        </div>
      </div>
      <div style={{ flex: "0 0 460px", position: "relative" }}>
        <img src={photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: c.focal }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, var(--crema) 0%, rgba(251,248,252,0) 18%)" }} />
      </div>
    </div>
  );
}

function Bullet({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <span style={{ width: 12, height: 12, borderRadius: 99, background: "var(--rosa-500)", flex: "none" }} />
      <span style={{ fontSize: 20, fontWeight: 600, color: "var(--gris-600)" }}>{text}</span>
    </div>
  );
}

const slideBase = {
  width: 1280, height: 720, position: "relative", overflow: "hidden",
  fontFamily: "var(--font-sans)", flex: "none",
};
const imgCover = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" };
const eyebrowPink = { color: "var(--rosa-500)", fontWeight: 700, fontSize: 18, letterSpacing: "0.16em", textTransform: "uppercase" };

window.TitleSlide = TitleSlide;
window.VerseSlide = VerseSlide;
window.SectionSlide = SectionSlide;
window.EventSlide = EventSlide;
