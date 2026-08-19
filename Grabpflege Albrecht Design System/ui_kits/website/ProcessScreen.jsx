const { Card, SectionHeading, Icon, Rule, Button, Tooltip, IconButton } = window.GrabpflegeAlbrechtDesignSystem_a7ca22;

const STEPS = [
  ["phone", "Sie melden sich", "Ein Anruf oder das Formular genügt. Wir brauchen den Friedhof, das Grabfeld und einen Namen."],
  ["map-pin", "Wir sehen nach", "Innerhalb von zwei Werktagen fahren wir zur Grabstätte und machen Fotos vom Ist-Zustand."],
  ["file-text", "Vorschlag und Preis", "Sie erhalten einen schriftlichen Pflegevorschlag mit Bepflanzungsplan — kostenfrei und ohne Bindung."],
  ["sprout", "Wir pflegen", "Nach jeder Pflege bekommen Sie ein Foto. Die Abrechnung erfolgt vierteljährlich."],
];

function ProcessScreen({ go }) {
  return (
    <>
      <Section tone="surface" pad="var(--space-20)">
        <SectionHeading eyebrow="Ablauf" title="Von der Anfrage bis zur ersten Pflege" intro="Vier Schritte, in der Regel abgeschlossen innerhalb von zwei Wochen." />
      </Section>
      <Section>
        <div style={{ display: "grid", gap: "var(--space-px)" }}>
          {STEPS.map(([icon, title, text], i) => (
            <div key={title} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: "var(--space-8)", padding: "var(--space-8) 0", borderTop: i === 0 ? "1px solid var(--border-hairline)" : "none", borderBottom: "1px solid var(--border-hairline)", alignItems: "start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-3xl)", color: "var(--stein-400)", lineHeight: 1 }}>{"0" + (i + 1)}</span>
                <span style={{ color: "var(--text-accent)", display: "flex" }}><Icon name={icon} size={22} /></span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-xl)", color: "var(--text-heading)", margin: "0 0 var(--space-2)" }}>{title}</h3>
                <p style={{ fontSize: "var(--fs-md)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", maxWidth: "var(--measure-prose)" }}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="surface" pad="var(--space-16)">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-16)", alignItems: "center" }}>
          <div>
            <SectionHeading eyebrow="Fotobericht" title="Sie sehen, was wir sehen" intro="Nach jeder Pflege erhalten Sie ein Foto der Grabstätte per E-Mail — auf Wunsch auch per Post als Ausdruck." />
            <div style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
              <Button variant="secondary" onClick={() => go("kontakt")}>Beispielbericht anfordern</Button>
              <Tooltip label="Letzter Bericht: 12. Juni 2026"><IconButton name="info" label="Information" /></Tooltip>
            </div>
          </div>
          <Card padding="var(--space-5)">
            <div style={{ position: "relative", height: 220, borderRadius: "var(--radius-sm)", overflow: "hidden" }}>
              <image-slot id="proc-report" shape="rect" fit="cover" placeholder="Foto: Grabstätte nach der Pflege"></image-slot>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "var(--space-4)", fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-wide)", color: "var(--text-subtle)", textTransform: "uppercase" }}>
              <span>Feld B / Grab 14 · Waldfriedhof</span><span>12. Juni 2026</span>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
Object.assign(window, { ProcessScreen });
