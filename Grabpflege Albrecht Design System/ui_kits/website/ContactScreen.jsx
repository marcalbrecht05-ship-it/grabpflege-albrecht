const { Card, SectionHeading, Input, Textarea, Select, Checkbox, Radio, Button, Icon, Rule, Dialog, Toast } = window.GrabpflegeAlbrechtDesignSystem_a7ca22;

function ContactScreen() {
  const [paket, setPaket] = React.useState("Jahrespflege");
  const [confirm, setConfirm] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [foto, setFoto] = React.useState(true);
  return (
    <>
      <Section tone="surface" pad="var(--space-20)">
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "var(--space-16)", alignItems: "start" }}>
          <div>
            <SectionHeading eyebrow="Kontakt" title="Pflege anfragen" intro="Die Besichtigung und der Pflegevorschlag sind kostenfrei. Pflichtfelder sind mit einem Stern markiert." />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)", marginTop: "var(--space-10)" }}>
              <Input label="Name" required placeholder="Vor- und Nachname" />
              <Input label="Telefon" placeholder="Für Rückfragen" icon={<Icon name="phone" size={15} />} />
              <Input label="E-Mail" required placeholder="name@beispiel.de" wrapperStyle={{ gridColumn: "span 2" }} />
              <Select label="Friedhof" required placeholder="Bitte wählen" options={["Waldfriedhof Kulmbach", "Hauptfriedhof Kulmbach", "St. Marien Burgkunstadt", "Anderer Friedhof"]} />
              <Input label="Grabstelle" hint="Feld und Nummer genügen" placeholder="z. B. Feld B / 14" />
              <Textarea label="Ihre Nachricht" rows={4} placeholder="Was sollen wir übernehmen?" wrapperStyle={{ gridColumn: "span 2" }} />
            </div>
            <div style={{ marginTop: "var(--space-8)", display: "grid", gap: "var(--space-4)" }}>
              <span style={{ fontSize: "var(--fs-xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-wide)", color: "var(--text-heading)" }}>Gewünschtes Paket</span>
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                {[["Saisonpflege", "Eine Bepflanzung pro Saison"], ["Jahrespflege", "Vier Bepflanzungen, wöchentliche Kontrolle"], ["Dauergrabpflege", "Laufzeit 5 bis 25 Jahre"], ["Noch unklar", "Wir beraten Sie vor Ort"]].map(([l, d]) => (
                  <Radio key={l} name="paket" label={l} description={d} checked={paket === l} onChange={() => setPaket(l)} />
                ))}
              </div>
              <Checkbox label="Fotobericht per E-Mail" description="Nach jeder Pflege ein Bild der Grabstätte" checked={foto} onChange={() => setFoto(!foto)} />
            </div>
            <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", marginTop: "var(--space-8)" }}>
              <Button size="lg" onClick={() => setConfirm(true)}>Anfrage senden</Button>
              <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-subtle)" }}>Antwort innerhalb von zwei Werktagen</span>
            </div>
          </div>
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <Card padding="var(--space-7)" style={{ padding: "var(--space-8)" }}>
              <div style={{ fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--text-accent)" }}>Direkt erreichbar</div>
              <div style={{ display: "grid", gap: "var(--space-4)", marginTop: "var(--space-5)" }}>
                {[["phone", "0 92 71 / 44 08"], ["mail", "post@grabpflege-albrecht.de"], ["map-pin", "Kirchweg 12, 95326 Kulmbach"], ["clock", "Mo–Fr 8–16 Uhr"]].map(([i, t]) => (
                  <div key={t} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", fontSize: "var(--fs-sm)", color: "var(--text-body)" }}>
                    <span style={{ color: "var(--text-accent)", display: "flex" }}><Icon name={i} size={16} /></span>{t}
                  </div>
                ))}
              </div>
            </Card>
            <div style={{ position: "relative", height: 260, borderRadius: "var(--radius-md)", overflow: "hidden" }}>
              <image-slot id="contact-map" shape="rect" fit="cover" placeholder="Karte oder Foto: Betriebsgelände"></image-slot>
            </div>
            <Card variant="inset" padding="var(--space-6)">
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--fs-lg)", lineHeight: "var(--lh-snug)", color: "var(--text-heading)" }}>„Wenn etwas zu entscheiden ist, rufen wir an — sonst hören Sie von uns nur die Fotos.“</p>
              <div style={{ fontSize: "var(--fs-2xs)", letterSpacing: "var(--ls-wider)", textTransform: "uppercase", color: "var(--text-subtle)", marginTop: "var(--space-4)" }}>Katrin Albrecht, Inhaberin</div>
            </Card>
          </div>
        </div>
      </Section>
      <Dialog open={confirm} eyebrow="Bestätigung" title="Anfrage senden?" onClose={() => setConfirm(false)}
        footer={<><Button variant="secondary" onClick={() => setConfirm(false)}>Abbrechen</Button><Button onClick={() => { setConfirm(false); setSent(true); }}>Senden</Button></>}>
        Wir sehen uns die Grabstätte innerhalb von zwei Werktagen an und melden uns anschließend mit einem Pflegevorschlag.
      </Dialog>
      {sent ? <div style={{ position: "fixed", right: "var(--space-8)", bottom: "var(--space-8)", zIndex: 70 }}>
        <Toast tone="success" title="Anfrage gesendet" description="Wir melden uns innerhalb von zwei Werktagen." onClose={() => setSent(false)} />
      </div> : null}
    </>
  );
}
Object.assign(window, { ContactScreen });
