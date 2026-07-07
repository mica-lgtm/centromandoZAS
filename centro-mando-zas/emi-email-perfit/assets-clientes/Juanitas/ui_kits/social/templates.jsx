/* Juanitas — Plantillas comerciales (UI kit social)
   Recursos de marca reales: paleta multicolor, resaltador (marker),
   lettering manuscrito (Caveat), doodles, fotos REALES de catálogo.
   Datos reales de juanitas.ar. */

const LOGO = "../../assets/juanitas-logo.png";
const LOGO_CREAM = "../../assets/juanitas-logo-cream.png";
const PH = "../../assets/productos/"; // fotos reales

/* ---------- Bloques reutilizables ---------- */
function Logo({ variant = "color", h = 54, style = {} }) {
  return <img src={variant === "cream" ? LOGO_CREAM : LOGO} alt="juanitas"
    style={{ height: h, width: "auto", objectFit: "contain", display: "block", ...style }} />;
}

/* Resaltador / marker — bloque de color tras la palabra clave */
function Mark({ children, color = "fucsia", style = {} }) {
  const bg = {
    fucsia: "var(--fucsia)", coral: "var(--coral)", azul: "var(--azul)",
    naranja: "var(--naranja)", amarillo: "var(--amarillo)", rosa: "var(--rosa)", tinta: "var(--tinta)",
  }[color];
  const dark = color === "amarillo" || color === "rosa";
  return <span style={{ display: "inline-block", background: bg, color: dark ? "var(--tinta)" : "#fff",
    padding: "0.04em 0.28em", borderRadius: 8, lineHeight: 1.16, ...style }}>{children}</span>;
}

/* Lettering manuscrito de acento */
function Hand({ children, size = 48, color = "var(--fucsia)", style = {} }) {
  return <span style={{ fontFamily: "var(--font-hand)", fontWeight: 600, fontSize: size,
    lineHeight: 0.9, color, display: "inline-block", ...style }}>{children}</span>;
}

function Pill({ children, tone = "primary", size = "md", style = {} }) {
  const tones = {
    primary: { background: "var(--coral)", color: "#fff" },
    dark:    { background: "var(--tinta)", color: "#fff" },
    light:   { background: "#fff", color: "var(--tinta)", boxShadow: "var(--sh-sm)" },
    fucsia:  { background: "var(--fucsia)", color: "#fff" },
  };
  const sizes = { md: { fontSize: 26, padding: "18px 38px" }, lg: { fontSize: 34, padding: "24px 52px" } };
  return <span style={{ fontFamily: "var(--font)", fontWeight: 700, borderRadius: 999,
    display: "inline-flex", alignItems: "center", gap: 12, ...tones[tone], ...sizes[size], ...style }}>{children}</span>;
}

function Price({ now, was, scale = 1, color = "var(--coral)", wasColor = "var(--fg3)" }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 14 * scale }}>
      <span style={{ fontWeight: 900, fontSize: 52 * scale, color, letterSpacing: "-.02em" }}>{now}</span>
      {was && <span style={{ fontWeight: 600, fontSize: 28 * scale, color: wasColor, textDecoration: "line-through" }}>{was}</span>}
    </div>
  );
}

/* sparkles decorativos sutiles */
function Sparkle({ x, y, s = 28, c = "var(--rosa)", r = 0 }) {
  return <span style={{ position: "absolute", left: x, top: y, fontSize: s, color: c,
    lineHeight: 1, transform: `rotate(${r}deg)`, pointerEvents: "none" }}>✦</span>;
}

/* =====================================================================
   1) PROMO CUADRADA 1080×1080 — HOT DAYS, fondo coral, foto real cutout
   ===================================================================== */
function PromoSquare() {
  return (
    <div style={{ width: 1080, height: 1080, background: "var(--coral)", position: "relative",
      overflow: "hidden", fontFamily: "var(--font)", color: "#fff", padding: 72, boxSizing: "border-box" }}>
      <Sparkle x={120} y={300} s={40} c="#fff" />
      <Sparkle x={620} y={140} s={26} c="var(--amarillo)" r={12} />
      <Logo variant="cream" h={64} />
      <div style={{ marginTop: 30, maxWidth: 600, position: "relative", zIndex: 2 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: 30, letterSpacing: ".2em", color: "var(--amarillo)" }}>🔥 HOT DAYS 🔥</p>
        <h1 style={{ margin: "14px 0 0", fontWeight: 800, fontSize: 112, lineHeight: .9, letterSpacing: "-.03em" }}>
          HASTA<br/><Mark color="tinta" style={{ fontSize: 168, padding: "0 18px" }}>50%</Mark> OFF
        </h1>
        <p style={{ margin: "26px 0 0", fontWeight: 500, fontSize: 34, color: "rgba(255,255,255,.92)", maxWidth: 460 }}>
          En tus packs favoritos de bombis ✨
        </p>
      </div>
      <img src={PH + "colaless-pack-hero.webp"} alt="Pack x3"
        style={{ position: "absolute", right: -40, bottom: -10, width: 470, height: 470,
          objectFit: "contain", filter: "drop-shadow(0 12px 30px rgba(40,40,47,.3))", zIndex: 1 }} />
      <div style={{ position: "absolute", left: 72, bottom: 80, display: "flex", gap: 18, alignItems: "center", zIndex: 2 }}>
        <Pill tone="light" size="lg">Aprovechá ahora →</Pill>
        <span style={{ fontFamily: "var(--font-hand)", fontWeight: 600, fontSize: 38, color: "var(--amarillo)" }}>¡solo por hoy!</span>
      </div>
    </div>
  );
}

/* =====================================================================
   2) PRODUCTO CUADRADO 1080×1080 — fondo crema, foto real, marker + script
   ===================================================================== */
function ProductSquare() {
  return (
    <div style={{ width: 1080, height: 1080, background: "var(--crema)", position: "relative",
      overflow: "hidden", fontFamily: "var(--font)", color: "var(--tinta)", padding: 72, boxSizing: "border-box" }}>
      <Sparkle x={60} y={420} s={30} c="var(--rosa)" />
      <Sparkle x={980} y={300} s={24} c="var(--amarillo)" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Logo h={58} />
        <span style={{ background: "var(--azul)", color: "#fff", fontWeight: 700, fontSize: 24,
          padding: "12px 24px", borderRadius: 999 }}>Envío gratis</span>
      </div>
      <div style={{ position: "absolute", left: 64, top: 200, width: 470, height: 600,
        borderRadius: 40, overflow: "hidden", boxShadow: "var(--sh-lg)" }}>
        <img src={PH + "colaless-grid-colores.webp"} alt="Colaless" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ position: "absolute", right: 72, top: 280, width: 400 }}>
        <Hand size={64}>colaless</Hand>
        <h1 style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 60, lineHeight: .95, letterSpacing: "-.02em" }}>
          <Mark color="rosa">TIRO ALTO</Mark>
        </h1>
        <ul style={{ margin: "26px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
          {["Estiliza tu figura", "No marca bajo la ropa", "Algodón suave, todo el día"].map((b, i) => (
            <li key={i} style={{ fontWeight: 500, fontSize: 28, color: "var(--fg1)", display: "flex", gap: 12 }}>
              <span style={{ color: "var(--fucsia)" }}>✿</span>{b}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 34 }}><Price now="$25.900" was="$33.000" scale={1.15} /></div>
        <div style={{ marginTop: 26 }}><Pill tone="primary" size="md">Lo quiero →</Pill></div>
      </div>
    </div>
  );
}

/* =====================================================================
   3) HISTORIA 1080×1920 — 3x2, fondo rosa wash, foto real, marker
   ===================================================================== */
function StoryPiece() {
  return (
    <div style={{ width: 1080, height: 1920, background: "var(--rosa-soft)", position: "relative",
      overflow: "hidden", fontFamily: "var(--font)", color: "var(--tinta)", padding: 80, boxSizing: "border-box" }}>
      <Sparkle x={120} y={520} s={44} c="var(--rosa)" />
      <Sparkle x={900} y={400} s={30} c="var(--amarillo)" />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Logo h={64} />
        <Hand size={70} style={{ marginTop: 40 }}>promo de la semana</Hand>
        <h1 style={{ margin: "8px 0 0", fontWeight: 800, fontSize: 150, lineHeight: .9, letterSpacing: "-.03em" }}>
          <Mark color="fucsia" style={{ padding: "0 16px" }}>3x2</Mark>
        </h1>
        <p style={{ margin: "22px 0 0", fontWeight: 700, fontSize: 52, color: "var(--coral)" }}>en bombis</p>
        <p style={{ margin: "14px 0 0", fontWeight: 500, fontSize: 38, color: "var(--fg2)" }}>Llevá 3, pagá 2 💕</p>
      </div>
      <div style={{ position: "absolute", left: 110, right: 110, top: 780, height: 760,
        borderRadius: 48, overflow: "hidden", boxShadow: "var(--sh-lg)" }}>
        <img src={PH + "colaless-grid-basicos.webp"} alt="Bombis" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 130, display: "flex",
        flexDirection: "column", alignItems: "center", gap: 22 }}>
        <Pill tone="primary" size="lg">Conseguilo ahora →</Pill>
        <span style={{ fontWeight: 600, fontSize: 30, color: "var(--coral)" }}>Deslizá hacia arriba ↑</span>
      </div>
    </div>
  );
}

/* =====================================================================
   4) ANUNCIO HORIZONTAL 1200×628 — fondo azul, foto real, marker
   ===================================================================== */
function HorizontalAd() {
  return (
    <div style={{ width: 1200, height: 628, display: "flex", fontFamily: "var(--font)",
      background: "var(--azul)", overflow: "hidden", position: "relative" }}>
      <div style={{ width: 480, flexShrink: 0, overflow: "hidden" }}>
        <img src={PH + "colaless-grid-colores.webp"} alt="Colaless" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ flex: 1, padding: 56, color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
        <Sparkle x={560} y={70} s={30} c="var(--amarillo)" />
        <Logo variant="cream" h={46} style={{ marginBottom: 26 }} />
        <Hand size={42} color="var(--amarillo)" style={{ marginBottom: 4 }}>solo por hoy</Hand>
        <h1 style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 60, lineHeight: .96, letterSpacing: "-.02em" }}>
          2da unidad<br/><Mark color="coral">70% OFF</Mark>
        </h1>
        <p style={{ margin: "14px 0 26px", fontWeight: 500, fontSize: 26, color: "rgba(255,255,255,.9)" }}>En toda la línea de algodón.</p>
        <div><Pill tone="light" size="md">Aprovechá ahora →</Pill></div>
      </div>
    </div>
  );
}

/* =====================================================================
   5) BANNER EMAIL ~600px — banner + beneficios color-coded + CTA
   ===================================================================== */
function EmailBanner() {
  const benefit = (color, t, s) => (
    <div style={{ flex: 1, textAlign: "center", padding: "0 8px" }}>
      <p style={{ margin: 0, fontWeight: 800, fontSize: 18, color }}>{t}</p>
      <p style={{ margin: "4px 0 0", fontWeight: 500, fontSize: 13, color: "var(--fg2)", lineHeight: 1.35 }}>{s}</p>
    </div>
  );
  return (
    <div style={{ width: 600, background: "#fff", fontFamily: "var(--font)", boxShadow: "var(--sh-md)", overflow: "hidden", borderRadius: 4 }}>
      <div style={{ background: "var(--coral)", padding: "20px 28px", display: "flex", justifyContent: "center" }}>
        <Logo variant="cream" h={38} />
      </div>
      <div style={{ position: "relative", height: 320, overflow: "hidden" }}>
        <img src={PH + "colaless-grid-basicos.webp"} alt="Campaña" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "70px 28px 22px",
          background: "linear-gradient(to top, rgba(40,40,47,.82), transparent)", color: "#fff" }}>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 14, letterSpacing: ".16em", textTransform: "uppercase" }}>Nueva temporada</p>
          <h1 style={{ margin: "6px 0 0", fontWeight: 800, fontSize: 38, lineHeight: 1, letterSpacing: "-.02em" }}>
            Renová tus <Mark color="fucsia">básicos</Mark>
          </h1>
        </div>
      </div>
      <div style={{ padding: "28px 28px", textAlign: "center" }}>
        <p style={{ margin: 0, fontWeight: 500, fontSize: 17, color: "var(--fg2)", lineHeight: 1.5 }}>
          Los packs que usás todos los días, ahora con envío gratis desde $50.000.
        </p>
        <a style={{ display: "inline-block", marginTop: 20, background: "var(--coral)", color: "#fff",
          fontWeight: 700, fontSize: 17, padding: "15px 38px", borderRadius: 999, textDecoration: "none" }}>Ver la colección →</a>
      </div>
      <div style={{ display: "flex", padding: "22px 16px", borderTop: "1px solid var(--linea)", background: "var(--crema)" }}>
        {benefit("var(--verde)", "Envío gratis", "Desde $50.000 a todo el país")}
        {benefit("var(--azul)", "3 y 6 cuotas", "Sin interés")}
        {benefit("var(--naranja)", "Cambios fáciles", "Hasta 72 hs")}
      </div>
    </div>
  );
}

Object.assign(window, { Logo, Mark, Hand, Pill, Price, Sparkle,
  PromoSquare, ProductSquare, StoryPiece, HorizontalAd, EmailBanner });
