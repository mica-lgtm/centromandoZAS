/* global React */
// WebSections.jsx — value props, events grid, footer for ERJ site

function WebValues() {
  const items = [
    { t: "Comunidad", d: "Grupos pequeños donde nadie camina solo. Conectá durante la semana." },
    { t: "Familia", d: "Espacios para cada edad: niños, jóvenes, matrimonios y adultos." },
    { t: "Propósito", d: "Descubrí tus dones y serví. Tu vida tiene un llamado." },
  ];
  return (
    <section style={{ padding: "72px 40px", fontFamily: "var(--font-sans)", background: "var(--crema)" }}>
      <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
        <div className="erj-eyebrow">Por qué ERJ</div>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: "var(--violeta-900)", letterSpacing: "-0.02em", margin: "10px 0 0" }}>
          Una fe que se vive en comunidad
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
        {items.map((it, i) => (
          <div key={it.t} className="erj-card" style={{ textAlign: "left" }}>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: "var(--rosa-100)", color: "var(--bordo-700)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, marginBottom: 16 }}>
              {i + 1}
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--violeta-900)", margin: "0 0 8px" }}>{it.t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--gris-500)", margin: 0 }}>{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WebEvents({ photos = [] }) {
  const evs = [
    { tag: "Jóvenes", title: "Noche de Adoración", meta: "Viernes 20 · 20:00 h", img: photos[0] },
    { tag: "Conferencia", title: "Vida con Propósito", meta: "18–20 julio · 19:30 h", img: photos[1] },
    { tag: "Familias", title: "Almuerzo comunitario", meta: "Domingo 22 · 13:00 h", img: photos[2] },
  ];
  return (
    <section style={{ padding: "72px 40px", fontFamily: "var(--font-sans)", background: "var(--violeta-900)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", maxWidth: 1000, margin: "0 auto 36px" }}>
        <div>
          <div className="erj-eyebrow">Agenda</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: "10px 0 0" }}>Próximos encuentros</h2>
        </div>
        <a href="#" style={{ color: "var(--rosa-300)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>Ver todos →</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
        {evs.map(e => (
          <div key={e.title} style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <div style={{ height: 150, backgroundImage: `url(${e.img})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
            <div style={{ padding: "16px 20px 20px" }}>
              <div className="erj-eyebrow" style={{ fontSize: 12 }}>{e.tag}</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--violeta-900)", margin: "6px 0 4px" }}>{e.title}</h3>
              <div style={{ fontSize: 14, color: "var(--gris-500)", marginBottom: 12 }}>{e.meta}</div>
              <a href="#" style={{ color: "var(--bordo-700)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Reservá tu lugar →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WebFooter() {
  return (
    <footer style={{ background: "var(--violeta-950)", color: "var(--violeta-200)", fontFamily: "var(--font-sans)", padding: "48px 40px 36px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
        <div style={{ maxWidth: 300 }}>
          <img src="../../assets/erj-logo-white.png" alt="ERJ" style={{ height: 44, marginBottom: 14 }} />
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>Una iglesia que transforma vidas y acompaña a cada familia.</p>
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          <FootCol title="Visitanos" items={["Horarios", "Cómo llegar", "Primera vez"]} />
          <FootCol title="Conectá" items={["Grupos", "Voluntariado", "Bautismos"]} />
        </div>
      </div>
      <div style={{ maxWidth: 1000, margin: "32px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.1)", fontSize: 13, opacity: .7 }}>
        © 2026 El Rey Jesús · Iglesia Cristiana
      </div>
    </footer>
  );
}

function FootCol({ title, items }) {
  return (
    <div>
      <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {items.map(i => <a key={i} href="#" style={{ color: "var(--violeta-200)", fontSize: 14, textDecoration: "none" }}>{i}</a>)}
      </div>
    </div>
  );
}

window.WebValues = WebValues;
window.WebEvents = WebEvents;
window.WebFooter = WebFooter;
