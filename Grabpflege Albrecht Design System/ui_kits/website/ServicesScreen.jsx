const { Card, SectionHeading, Tabs, Tag, Badge, Button, Icon, Rule, Checkbox } = window.GrabpflegeAlbrechtDesignSystem_a7ca22;

const SEASONS = {
  "Frühling": ["Stiefmütterchen, Vergissmeinnicht, Primeln", "Grabfläche lockern und nachfüllen", "Erste Düngung"],
  "Sommer": ["Begonien, Fuchsien, Eisbegonien", "Gießdienst zweimal wöchentlich", "Verblühtes entfernen"],
  "Herbst": ["Erika, Chrysanthemen, Alpenveilchen", "Laub entfernen", "Grabmal auf Frostschäden prüfen"],
  "Winter": ["Abdeckung mit Tannenreisig", "Adventsschmuck auf Wunsch", "Kontrolle nach Sturm und Schnee"],
};

const PACKAGES = [
  ["Saisonpflege", "ab 24 € / Monat", ["Eine Bepflanzung pro Saison", "Gießen und Unkraut entfernen", "Abrechnung je Saison"], false],
  ["Jahrespflege", "ab 39 € / Monat", ["Vier Bepflanzungen im Jahr", "Wöchentliche Kontrolle", "Fotobericht nach jeder Pflege", "Winterabdeckung inklusive"], true],
  ["Dauergrabpflege", "auf Anfrage", ["Laufzeit 5 bis 25 Jahre", "Treuhänderisch über die Genossenschaft gesichert", "Preisgarantie über die Laufzeit"], false],
];

function ServicesScreen({ go }) {
  const [season, setSeason] = React.useState("Sommer");
  return (
    <>
      <Section tone="surface" pad="var(--space-20)">
        <SectionHeading eyebrow="Leistungen" title="Was wir für eine Grabstätte tun" intro="Jede Grabstelle ist anders — Lage, Licht, Größe, Bepflanzungswünsche der Familie. Wir stellen die Pflege danach zusammen und nicht nach Pauschale." />
      </Section>
      <Section pad="var(--space-16)">
        <Tabs items={Object.keys(SEASONS)} value={season} onChange={setSeason} style={{ marginBottom: "var(--space-10)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-2xl)", color: "var(--text-heading)", margin: "0 0 var(--space-6)" }}>{season}</h3>
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              {SEASONS[season].map((line) => (
                <div key={line} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", fontSize: "var(--fs-md)", fontWeight: "var(--fw-light)", color: "var(--text-body)" }}>
                  <span style={{ color: "var(--text-accent)", display: "flex", marginTop: 4 }}><Icon name="check" size={16} /></span>{line}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-8)", flexWrap: "wrap" }}>
              {["Sonnig", "Halbschatten", "Urnengrab", "Doppelgrab"].map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>
          <div style={{ position: "relative", height: 360, borderRadius: "var(--radius-md)", overflow: "hidden" }}>
            <image-slot id={"svc-" + season} shape="rect" fit="cover" placeholder={"Foto: Bepflanzung " + season}></image-slot>
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading eyebrow="Pakete" title="Drei Wege, eine Grabstätte zu betreuen" align="center" style={{ margin: "0 auto var(--space-16)", textAlign: "center", justifyItems: "center" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)", alignItems: "start" }}>
          {PACKAGES.map(([name, price, items, featured]) => (
            <Card key={name} variant={featured ? "accent" : "surface"} padding="var(--space-8)">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--text-accent)" }}>{name}</span>
                {featured ? <Badge tone="accent">Häufig gewählt</Badge> : null}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-2xl)", color: "var(--text-heading)", margin: "var(--space-4) 0 var(--space-5)" }}>{price}</div>
              <Rule />
              <div style={{ display: "grid", gap: "var(--space-3)", margin: "var(--space-5) 0 var(--space-8)" }}>
                {items.map((i) => <div key={i} style={{ display: "flex", gap: "var(--space-3)", fontSize: "var(--fs-sm)", fontWeight: "var(--fw-light)", color: "var(--text-body)" }}><span style={{ color: "var(--moos-500)", display: "flex", marginTop: 3 }}><Icon name="leaf" size={14} /></span>{i}</div>)}
              </div>
              <Button variant={featured ? "primary" : "secondary"} fullWidth onClick={() => go("kontakt")}>Anfragen</Button>
            </Card>
          ))}
        </div>
        <p style={{ fontSize: "var(--fs-xs)", color: "var(--text-subtle)", textAlign: "center", marginTop: "var(--space-8)" }}>Alle Preise verstehen sich inkl. Pflanzen, Material und Anfahrt. Friedhofsgebühren rechnet die Gemeinde direkt mit Ihnen ab.</p>
      </Section>
    </>
  );
}
Object.assign(window, { ServicesScreen });
