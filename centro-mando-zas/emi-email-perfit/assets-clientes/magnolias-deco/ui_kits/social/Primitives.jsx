// Primitives.jsx — Magnolias Deco reusable building blocks
// Exposed on window for cross-file use.

const mFont = "'Elms Sans', sans-serif";

// ---- Eyebrow / kicker ----
function Eyebrow({ children, color = "var(--red)", style }) {
  return (
    <span style={{
      fontFamily: mFont, fontSize: 13, fontWeight: 600, letterSpacing: "0.16em",
      textTransform: "uppercase", color, ...style,
    }}>{children}</span>
  );
}

// ---- Statement title ----
function Statement({ children, size = 56, color = "var(--black)", align = "left", style }) {
  return (
    <h2 style={{
      fontFamily: mFont, fontSize: size, fontWeight: 900, lineHeight: 0.95,
      letterSpacing: "-0.03em", color, margin: 0, textAlign: align,
      textWrap: "balance", ...style,
    }}>{children}</h2>
  );
}

// ---- Highlight (yellow marker behind text) ----
function Mark({ children, bg = "var(--yellow)", color = "inherit" }) {
  return (
    <span style={{
      background: `linear-gradient(transparent 58%, ${bg} 58%)`,
      padding: "0 2px", color, boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone",
    }}>{children}</span>
  );
}

// ---- Button ----
function Button({ children, variant = "primary", onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    fontFamily: mFont, fontWeight: 700, fontSize: 16, border: "none",
    borderRadius: 8, padding: "14px 28px", cursor: "pointer",
    letterSpacing: "-0.01em", transition: "all .18s ease", display: "inline-flex",
    alignItems: "center", gap: 8,
  };
  const variants = {
    primary: { background: hover ? "var(--red-dark)" : "var(--red)", color: "#fff", transform: hover ? "translateY(-1px)" : "none" },
    dark: { background: hover ? "#000" : "var(--black)", color: "#fff" },
    outline: { background: hover ? "var(--black)" : "transparent", color: hover ? "#fff" : "var(--black)", border: "1.5px solid var(--black)" },
    ghost: { background: "transparent", color: "var(--red)", padding: "8px 4px" },
  };
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...style }}>{children}</button>
  );
}

// ---- Commercial tag / pill ----
function Tag({ children, tone = "red", style }) {
  const tones = {
    red: { background: "var(--red)", color: "#fff" },
    yellow: { background: "var(--yellow)", color: "var(--black)" },
    dark: { background: "var(--black)", color: "#fff" },
    outline: { background: "#fff", color: "var(--black)", border: "1.5px solid var(--black)" },
  };
  return (
    <span style={{
      fontFamily: mFont, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
      textTransform: "uppercase", padding: "6px 13px", borderRadius: 999,
      display: "inline-block", lineHeight: 1, ...tones[tone], ...style,
    }}>{children}</span>
  );
}

// ---- Price ----
function Price({ now, was, size = 30, color = "var(--red)" }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: 9, fontFamily: mFont }}>
      <span style={{ fontWeight: 900, fontSize: size, color, letterSpacing: "-0.03em", lineHeight: 1 }}>{now}</span>
      {was && <span style={{ fontSize: size * 0.5, color: "var(--fg3)", textDecoration: "line-through", fontWeight: 500 }}>{was}</span>}
    </span>
  );
}

// ---- Discount badge ----
function Discount({ children, style }) {
  return (
    <span style={{
      fontFamily: mFont, fontWeight: 900, fontSize: 26, color: "#fff",
      background: "var(--red)", padding: "10px 14px", borderRadius: 8,
      letterSpacing: "-0.02em", lineHeight: 1, display: "inline-block", ...style,
    }}>{children}</span>
  );
}

// ---- Brand wordmark (official logo) ----
// variant: "black" (dark logo for light bgs) | "white" (light logo for dark/photo bgs)
function Wordmark({ variant = "black", size = 22, style }) {
  const src = variant === "white"
    ? "../../assets/logo-magnolias-white.png"
    : "../../assets/logo-magnolias-black.png";
  // logo aspect ratio is ~6.05:1 (3907×646). `size` controls glyph height in px.
  return (
    <img src={src} alt="Magnolias" style={{ height: size, width: "auto", display: "block", ...style }} />
  );
}

Object.assign(window, { Eyebrow, Statement, Mark, Button, Tag, Price, Discount, Wordmark, mFont });
