/* global React */
// PostFeed.jsx — Instagram-style 1080x1080 feed post for ERJ
const { useState } = React;

function PostFeed({ variant = "photo", photo = "../assets/fotos/erj-19.png" }) {
  // variant: "photo" | "violeta" | "gradient"
  const base = {
    width: 460, height: 460, borderRadius: 28, overflow: "hidden",
    position: "relative", fontFamily: "var(--font-sans)",
    boxShadow: "var(--shadow-lg)", flex: "none",
  };

  if (variant === "violeta") {
    return (
      <div style={{ ...base, background: "var(--violeta-900)" }}>
        <BrandMark dark />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: 40 }}>
          <div style={erjPostStyles.eyebrowPink}>Palabra del domingo</div>
          <div style={{ color: "#fff", fontWeight: 900, fontSize: 46, lineHeight: 0.98, letterSpacing: "-0.02em", marginTop: 14 }}>
            La fe <span style={{ color: "var(--rosa-500)" }}>mueve</span> montañas
          </div>
          <div style={{ color: "var(--violeta-200)", fontSize: 17, lineHeight: 1.5, marginTop: 18, maxWidth: 320 }}>
            Todo lo que pidas en oración, creyendo, lo recibirás. Confiá hoy.
          </div>
          <div style={erjPostStyles.tagRow}>
            <span style={erjPostStyles.tag}>Mateo 21:22</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div style={{ ...base, background: "var(--grad-amanecer)" }}>
        <BrandMark dark />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 40 }}>
          <div style={{ ...erjPostStyles.eyebrowPink, color: "#fff" }}>Conferencia 2026</div>
          <div style={{ color: "#fff", fontWeight: 900, fontSize: 54, lineHeight: 0.95, letterSpacing: "-0.02em", marginTop: 12 }}>
            PROPÓSITO
          </div>
          <div style={{ color: "rgba(255,255,255,.9)", fontSize: 17, marginTop: 14, fontWeight: 600 }}>
            3 noches · 18–20 julio · Entrada libre
          </div>
        </div>
      </div>
    );
  }

  // photo — text auto-places on the air (top/left/right/bottom) via the engine
  const c = window.ERJ_PHOTO.compose(photo);
  const isSide = c.air === "left" || c.air === "right";
  return (
    <div style={base}>
      <img src={photo} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: c.focal }} />
      <div style={{ position: "absolute", inset: 0, background: c.gradient }} />
      <BrandMark dark air={c.air} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", padding: 40, paddingTop: c.air === "top" ? 92 : 40, ...c.place }}>
        <div style={{ maxWidth: isSide ? "74%" : "100%", display: "flex", flexDirection: "column", gap: 14, alignItems: c.air === "right" ? "flex-end" : "flex-start" }}>
          <div style={erjPostStyles.eyebrowPink}>Te esperamos</div>
          <div style={{ color: "#fff", fontWeight: 900, fontSize: 42, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
            Tu casa te está esperando
          </div>
          <span style={{ background: "var(--rosa-500)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "10px 20px", borderRadius: 999 }}>
            Domingo 10:30 h
          </span>
        </div>
      </div>
    </div>
  );
}

function BrandMark({ dark, air }) {
  return (
    <div style={{ position: "absolute", top: 28, left: 32, zIndex: 3 }}>
      <img
        src={dark ? "../../assets/erj-logo-white.png" : "../../assets/erj-logo-primary.png"}
        alt="ERJ"
        style={{ height: 48, objectFit: "contain" }}
      />
    </div>
  );
}

const erjPostStyles = {
  eyebrowPink: { color: "var(--rosa-500)", fontWeight: 700, fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase" },
  tagRow: { display: "flex", gap: 8, marginTop: 22 },
  tag: { background: "rgba(255,255,255,.12)", color: "#fff", fontWeight: 600, fontSize: 13, padding: "8px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,.18)" },
};

window.PostFeed = PostFeed;
window.BrandMark = BrandMark;
