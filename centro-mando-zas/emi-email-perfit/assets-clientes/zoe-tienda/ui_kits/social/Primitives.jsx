/* Social UI kit — shared building blocks for Zoe Tienda placas.
   Components write to window for cross-file sharing. */

const Leaf = ({ h = 22, variant = "color", style }) =>
  React.createElement("img", {
    src: `../../assets/zoe-leaf-${variant}.png`,
    alt: "",
    style: { height: h, display: "block", ...style },
  });

const Logo = ({ h = 30, variant = "color", style }) =>
  React.createElement("img", {
    src: `../../assets/zoe-logo-${variant}.png`,
    alt: "Zoe Tienda",
    style: { height: h, display: "block", ...style },
  });

// Product image holder. Pass `src` for a real photo (object-fit cover);
// falls back to a soft tonal placeholder + leaf when no src is given.
const Cover = ({ w = "100%", h = 200, tone = "green", radius = 14, label = "PORTADA", src, pos = "center" }) => {
  const tones = {
    green: "linear-gradient(135deg,#d6e7cc,#e7dcc8)",
    sand: "linear-gradient(135deg,#f4efe6,#e7dcc8)",
    ink: "linear-gradient(135deg,#4a4843,#222)",
  };
  if (src) {
    return React.createElement("img", {
      src,
      alt: "",
      style: {
        width: w, height: h, borderRadius: radius, objectFit: "cover",
        objectPosition: pos, display: "block", flex: "none",
        boxShadow: "inset 0 0 0 1px rgba(34,34,34,.06)",
      },
    });
  }
  return React.createElement(
    "div",
    {
      style: {
        width: w, height: h, borderRadius: radius, background: tones[tone],
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", flex: "none",
        boxShadow: "inset 0 0 0 1px rgba(34,34,34,.05)",
      },
    },
    React.createElement("img", {
      src: "../../assets/zoe-leaf-" + (tone === "ink" ? "white" : "color") + ".png",
      alt: "", style: { height: Math.min(h * 0.32, 90), opacity: 0.85 },
    }),
    React.createElement("span", {
      style: {
        position: "absolute", bottom: 8, right: 10, fontSize: 10, fontWeight: 700,
        letterSpacing: ".12em", color: tone === "ink" ? "rgba(255,255,255,.5)" : "rgba(34,34,34,.32)",
      },
    }, label)
  );
};

const Badge = ({ children, kind = "" }) =>
  React.createElement("span", { className: "zoe-badge " + kind }, children);

const Btn = ({ children, kind = "zoe-btn--primary", style }) =>
  React.createElement("button", { className: "zoe-btn " + kind, style }, children);

Object.assign(window, { Leaf, Logo, Cover, Badge, Btn });
