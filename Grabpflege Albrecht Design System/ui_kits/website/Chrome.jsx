const { Logo, NavLink, Button, Icon, Rule } = window.GrabpflegeAlbrechtDesignSystem_a7ca22;
const NAV = [["home","Start"],["leistungen","Leistungen"],["ablauf","Ablauf"],["kontakt","Kontakt"]];

function Header({ route, go }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgb(250 248 244 / .92)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", height: "var(--header-h)", padding: "0 var(--space-8)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ border: 0, display: "flex" }}><Logo variant="wordmark" height={44} assetBase="../../assets" /></a>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
          {NAV.map(([id, label]) => <NavLink key={id} href={"#" + id} active={route === id} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</NavLink>)}
          <Button size="sm" icon={<Icon name="phone" size={14} />} onClick={() => go("kontakt")}>0 92 71 / 44 08</Button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ background: "var(--bg-inverse)", color: "var(--stein-300)", padding: "var(--space-20) var(--space-8) var(--space-10)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "var(--space-16)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontVariant: "small-caps", letterSpacing: ".08em", fontSize: "var(--fs-2xl)", color: "var(--stein-0)" }}>Grabpflege Albrecht</div>
          <div style={{ fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--moos-300)", marginTop: "var(--space-3)" }}>Andenken mit Sorgfalt bewahren</div>
          <p style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-relaxed)", marginTop: "var(--space-6)", maxWidth: "38ch" }}>Familienbetrieb in zweiter Generation. Wir betreuen Grabstätten auf 14 Friedhöfen im Landkreis.</p>
        </div>
        {[["Bereiche", ["Dauergrabpflege", "Saisonbepflanzung", "Grabmalreinigung", "Neuanlage"]], ["Kontakt", ["Kirchweg 12, 95326 Kulmbach", "0 92 71 / 44 08", "post@grabpflege-albrecht.de", "Mo–Fr 8–16 Uhr"]]].map(([title, items]) => (
          <div key={title}>
            <div style={{ fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--stein-0)", marginBottom: "var(--space-4)" }}>{title}</div>
            <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--fs-sm)", fontWeight: "var(--fw-light)" }}>
              {items.map((i) => <span key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "var(--container-lg)", margin: "var(--space-16) auto 0", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-inverse)", display: "flex", justifyContent: "space-between", fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-wide)", color: "var(--schiefer-400)" }}>
        <span>© 2026 Grabpflege Albrecht</span>
        <span style={{ display: "flex", gap: "var(--space-6)" }}><a href="#" style={{ color: "inherit", border: 0 }}>Impressum</a><a href="#" style={{ color: "inherit", border: 0 }}>Datenschutz</a></span>
      </div>
    </footer>
  );
}

function Section({ children, tone = "page", pad = "var(--gap-section)" }) {
  const bg = { page: "var(--bg-page)", surface: "var(--bg-surface)", accent: "var(--bg-accent-soft)", inverse: "var(--bg-inverse)" }[tone];
  return (
    <section style={{ background: bg, padding: `${pad} var(--space-8)`, color: tone === "inverse" ? "var(--text-inverse)" : undefined }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto" }}>{children}</div>
    </section>
  );
}
Object.assign(window, { Header, Footer, Section, NAV });
