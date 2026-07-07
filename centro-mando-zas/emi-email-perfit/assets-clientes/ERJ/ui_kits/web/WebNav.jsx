/* global React */
// WebNav.jsx — sticky top navigation for ERJ site

function WebNav() {
  const links = ["Inicio", "Nosotros", "Ministerios", "Eventos", "Prédicas"];
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px 40px", fontFamily: "var(--font-sans)",
      position: "sticky", top: 0, zIndex: 20,
      background: "rgba(251,248,252,.82)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-soft)",
    }}>
      <img src="../../assets/erj-logo-primary.png" alt="El Rey Jesús" style={{ height: 42 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {links.map((l, i) => (
          <a key={l} href="#" style={{
            textDecoration: "none", fontSize: 15, fontWeight: 600,
            color: i === 0 ? "var(--violeta-900)" : "var(--gris-500)",
          }}>{l}</a>
        ))}
      </div>
      <button className="erj-btn erj-btn--primary" style={{ padding: "11px 22px", fontSize: 15 }}>
        Visitá la iglesia
      </button>
    </nav>
  );
}

window.WebNav = WebNav;
