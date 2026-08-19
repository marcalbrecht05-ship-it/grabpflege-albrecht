const { Button, Card, SectionHeading, Icon, Rule, Tag, Badge } = window.GrabpflegeAlbrechtDesignSystem_a7ca22;

const SERVICES = [
  ["sprout", "Dauergrabpflege", "Ganzjährige Betreuung mit vier Bepflanzungen, wöchentlicher Kontrolle und Gießdienst im Sommer."],
  ["flower-2", "Saisonbepflanzung", "Frühling, Sommer, Herbst und Winterabdeckung — abgestimmt auf Lage und Lichtverhältnisse."],
  ["droplets", "Grabmalreinigung", "Schonende Reinigung von Stein und Schrift, Nachfärben der Inschrift auf Wunsch."],
];

function Hero({ go }) {
  return (
    <section style={{ position: "relative", minHeight: 560, display: "grid", alignItems: "center", background: "var(--bg-page)" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <image-slot id="home-hero" shape="rect" fit="cover" placeholder="Foto: gepflegte Grabstätte, weiches Morgenlicht"></image-slot>
      </div>
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-flat)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--space-24) var(--space-8)", width: "100%", pointerEvents: "none" }}>
        <div style={{ maxWidth: "22ch" }}>
          <div style={{ fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--moos-200)" }}>Seit 1978 im Landkreis Kulmbach</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-6xl)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-tight)", color: "var(--stein-0)", margin: "var(--space-5) 0 var(--space-6)" }}>Andenken mit Sorgfalt bewahren</h1>
          <p style={{ fontSize: "var(--fs-lg)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-relaxed)", color: "var(--stein-100)", maxWidth: "34ch" }}>Wir pflegen Grabstätten so, wie es Angehörige selbst tun würden — regelmäßig, sorgfältig und ohne Aufsehen.</p>
          <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-10)", pointerEvents: "auto" }}>
            <Button size="lg" onClick={() => go("kontakt")}>Pflege anfragen</Button>
            <Button size="lg" variant="inverse" onClick={() => go("leistungen")}>Leistungen ansehen</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ go }) {
  return (
    <>
      <Hero go={go} />
      <Section tone="surface">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "var(--space-24)", alignItems: "center" }}>
          <div style={{ position: "relative", height: 420, borderRadius: "var(--radius-arch)", overflow: "hidden" }}>
            <image-slot id="home-arch" shape="rect" fit="cover" placeholder="Foto: Bepflanzung im Frühling"></image-slot>
          </div>
          <div>
            <SectionHeading eyebrow="Über uns" title="Ein Familienbetrieb, zwei Generationen" intro="Martin Albrecht hat den Betrieb 1978 gegründet, heute führt ihn seine Tochter Katrin. Wir arbeiten mit vier festen Mitarbeitern — Sie haben immer denselben Ansprechpartner." />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "var(--space-10)", marginTop: "var(--space-10)", justifyContent: "start" }}>
              {[["14", "Friedhöfe"], ["480", "Grabstätten"], ["48", "Jahre"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-4xl)", color: "var(--text-accent)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-wider)", textTransform: "uppercase", color: "var(--text-subtle)", marginTop: "var(--space-2)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Leistungen" title="Pflege über das ganze Jahr" align="center" intro="Drei Bausteine, die sich frei kombinieren lassen. Auf Wunsch übernehmen wir eine Grabstätte auch nur für eine Saison." style={{ margin: "0 auto var(--space-16)", textAlign: "center", justifyItems: "center" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {SERVICES.map(([icon, title, text]) => (
            <Card key={title} interactive padding="var(--space-8)">
              <span style={{ color: "var(--text-accent)", display: "flex" }}><Icon name={icon} size={26} /></span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-xl)", color: "var(--text-heading)", margin: "var(--space-5) 0 var(--space-3)" }}>{title}</h3>
              <p style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)" }}>{text}</p>
              <div style={{ marginTop: "var(--space-6)" }}><Button variant="ghost" size="sm" icon={<Icon name="arrow-right" size={14} />} iconPosition="right" onClick={() => go("leistungen")}>Details</Button></div>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="accent" pad="var(--space-20)">
        <div style={{ textAlign: "center", maxWidth: "58ch", margin: "0 auto" }}>
          <span style={{ color: "var(--moos-500)", display: "inline-flex" }}><Icon name="leaf" size={22} /></span>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--fs-2xl)", lineHeight: "var(--lh-snug)", color: "var(--text-heading)", margin: "var(--space-5) 0 var(--space-6)" }}>„Wir wohnen 400 km entfernt — und das Grab meiner Mutter sieht aus, als wären wir jede Woche da.“</p>
          <Rule align="center" />
          <div style={{ fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-wider)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "var(--space-5)" }}>Familie Reinhardt · Hamburg</div>
        </div>
      </Section>
      <Section tone="inverse" pad="var(--space-20)">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-16)" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-3xl)", fontWeight: "var(--fw-light)", color: "var(--stein-0)", margin: 0 }}>Sollen wir uns die Grabstätte ansehen?</h2>
            <p style={{ fontSize: "var(--fs-md)", fontWeight: "var(--fw-light)", color: "var(--stein-300)", marginTop: "var(--space-4)", maxWidth: "48ch" }}>Die Besichtigung und der Pflegevorschlag sind kostenfrei. Wir melden uns innerhalb von zwei Werktagen.</p>
          </div>
          <Button size="lg" variant="inverse" onClick={() => go("kontakt")}>Termin anfragen</Button>
        </div>
      </Section>
    </>
  );
}
Object.assign(window, { HomeScreen });
