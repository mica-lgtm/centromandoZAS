/* global React, ERJ_PHOTO */
// PhotoText.jsx — ERJ photo frame that auto-places text on the "air"
// Requires assets/photo-engine.js loaded first (window.ERJ_PHOTO).
//
// Usage:
//   <PhotoText photo="../../assets/fotos/erj-34.png" radius={24} pad={32}>
//     <Eyebrow>Domingo</Eyebrow>
//     <Title>Vení como estás</Title>
//   </PhotoText>
//
// The component reads the photo's air zone and positions the gradient + text
// block accordingly (top / bottom / left / right).

function PhotoText({ photo, children, radius = 24, pad = 32, style = {}, maxText = "72%" }) {
  const c = (window.ERJ_PHOTO ? window.ERJ_PHOTO.compose(photo) : { air: "bottom", focal: "50% 50%", gradient: "linear-gradient(0deg, rgba(33,1,77,.85), rgba(33,1,77,0) 50%)", place: { justifyContent: "flex-end", alignItems: "stretch", textAlign: "left" } });
  const isSide = c.air === "left" || c.air === "right";
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: radius, fontFamily: "var(--font-sans)", ...style }}>
      <img src={photo} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: c.focal }} />
      <div style={{ position: "absolute", inset: 0, background: c.gradient }} />
      <div style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        padding: pad, ...c.place,
      }}>
        <div style={{ maxWidth: isSide ? maxText : "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Text atoms tuned for photo overlays (white on violet gradient)
function Eyebrow({ children, style = {} }) {
  return <div style={{ color: "var(--rosa-300)", fontWeight: 700, fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase", ...style }}>{children}</div>;
}
function Title({ children, size = 38, style = {} }) {
  return <div style={{ color: "#fff", fontWeight: 900, fontSize: size, lineHeight: 1.0, letterSpacing: "-0.02em", ...style }}>{children}</div>;
}
function Sub({ children, style = {} }) {
  return <div style={{ color: "rgba(255,255,255,.9)", fontSize: 16, lineHeight: 1.5, fontWeight: 500, ...style }}>{children}</div>;
}
function Pill({ children }) {
  return <div style={{ alignSelf: "flex-start", display: "inline-flex", background: "var(--rosa-500)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px 20px", borderRadius: 999, marginTop: 4 }}>{children}</div>;
}

window.PhotoText = PhotoText;
window.PhotoEyebrow = Eyebrow;
window.PhotoTitle = Title;
window.PhotoSub = Sub;
window.PhotoPill = Pill;
