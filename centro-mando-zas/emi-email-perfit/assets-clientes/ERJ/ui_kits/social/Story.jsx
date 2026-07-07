/* global React */
// Story.jsx — 1080x1920 vertical story templates for ERJ

function Story({ variant = "photo", photo = "../assets/fotos/erj-59.png" }) {
  const base = {
    width: 270, height: 480, borderRadius: 28, overflow: "hidden",
    position: "relative", fontFamily: "var(--font-sans)",
    boxShadow: "var(--shadow-lg)", flex: "none",
  };

  if (variant === "verse") {
    return (
      <div style={{ ...base, background: "var(--grad-bordo-violeta)" }}>
        <StoryChrome dark />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 30px" }}>
          <div style={{ width: 40, height: 4, borderRadius: 99, background: "var(--rosa-500)", marginBottom: 22 }} />
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 30, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
            “El Señor es mi pastor, nada me faltará.”
          </div>
          <div style={{ color: "var(--rosa-300)", fontWeight: 700, fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 22 }}>
            Salmos 23:1
          </div>
        </div>
        <StoryFooter dark label="Compartí esta palabra" />
      </div>
    );
  }

  if (variant === "event") {
    return (
      <div style={{ ...base, background: "var(--violeta-900)" }}>
        <StoryChrome dark />
        <div style={{ position: "absolute", top: 70, left: 30, right: 30, borderRadius: 20, overflow: "hidden", height: 230 }}>
          <img src={photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", top: 320, left: 30, right: 30 }}>
          <div style={{ color: "var(--rosa-500)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase" }}>Este viernes</div>
          <div style={{ color: "#fff", fontWeight: 900, fontSize: 32, lineHeight: 1.0, letterSpacing: "-0.02em", marginTop: 8 }}>
            Noche de Jóvenes
          </div>
          <div style={{ color: "var(--violeta-200)", fontSize: 14, marginTop: 10, fontWeight: 600 }}>20:00 h · Auditorio central</div>
        </div>
        <StoryFooter dark label="Deslizá para más info" />
      </div>
    );
  }

  // photo (full-bleed) — text auto-places on the air via the engine
  const c = window.ERJ_PHOTO.compose(photo);
  const isSide = c.air === "left" || c.air === "right";
  // On a tall story, side-air still reads best with text low; keep vertical anchor at bottom
  // but honor horizontal air for left/right.
  const place = isSide
    ? { justifyContent: "flex-end", alignItems: c.air === "right" ? "flex-end" : "flex-start", textAlign: c.air === "right" ? "right" : "left" }
    : { justifyContent: c.air === "top" ? "flex-start" : "flex-end", alignItems: "flex-start", textAlign: "left" };
  return (
    <div style={base}>
      <img src={photo} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: c.focal }} />
      <div style={{ position: "absolute", inset: 0, background: c.air === "top"
        ? "linear-gradient(180deg, rgba(33,1,77,.9) 0%, rgba(33,1,77,.4) 26%, rgba(33,1,77,0) 50%, rgba(33,1,77,.2) 100%)"
        : "linear-gradient(180deg, rgba(33,1,77,.3) 0%, rgba(33,1,77,0) 32%, rgba(33,1,77,.92) 100%)" }} />
      <StoryChrome dark />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", padding: "30px", paddingTop: c.air === "top" ? 64 : 30, paddingBottom: 78, ...place }}>
        <div style={{ maxWidth: isSide ? "80%" : "100%", display: "flex", flexDirection: "column", gap: 10, alignItems: c.air === "right" ? "flex-end" : "flex-start" }}>
          <div style={{ color: "var(--rosa-300)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase" }}>Vení como estás</div>
          <div style={{ color: "#fff", fontWeight: 900, fontSize: 34, lineHeight: 1.02, letterSpacing: "-0.02em" }}>
            Hay un lugar para vos
          </div>
          <div style={{ background: "var(--rosa-500)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "11px 22px", borderRadius: 999 }}>
            Domingo 10:30 h
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryChrome({ dark }) {
  return (
    <>
      <div style={{ position: "absolute", top: 14, left: 14, right: 14, height: 3, borderRadius: 99, background: dark ? "rgba(255,255,255,.35)" : "rgba(33,1,77,.2)", zIndex: 4 }}>
        <div style={{ width: "45%", height: "100%", borderRadius: 99, background: dark ? "#fff" : "var(--violeta-900)" }} />
      </div>
      <div style={{ position: "absolute", top: 26, left: 16, zIndex: 4, display: "flex", alignItems: "center", gap: 8 }}>
        <img src={dark ? "../../assets/erj-logo-white.png" : "../../assets/erj-logo-primary.png"} alt="ERJ" style={{ height: 30 }} />
      </div>
    </>
  );
}

function StoryFooter({ dark, label }) {
  return (
    <div style={{ position: "absolute", bottom: 22, left: 0, right: 0, textAlign: "center", color: dark ? "rgba(255,255,255,.85)" : "var(--gris-500)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
      ⌃ {label}
    </div>
  );
}

window.Story = Story;
