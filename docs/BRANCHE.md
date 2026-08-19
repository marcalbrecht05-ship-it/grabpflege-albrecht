# 🔧 Branchen-Konfiguration

> Diese Datei dokumentiert die aktuelle Konfiguration von **Grabpflege Albrecht**.
> Die tatsächliche, vom Code gelesene Datenquelle liegt typisiert in `lib/config.ts`
> (Firma, Kontakt, Features, FAQ) und `lib/pricing.ts` (Größenklassen, Preise,
> Zusatzleistungen) sowie `lib/services-data.ts` (Leistungs-Unterseiten). Diese
> Datei spiegelt deren Inhalt lesbar, damit Änderungen nachvollziehbar bleiben.
> Abweichend vom generischen Handwerker-Schema hat Grabpflege Albrecht ein
> flächen- und intervallbasiertes Preismodell statt fester Leistungspreise –
> siehe Abschnitt „Preismodell" unten.

---

## Branche

**Typ:** Grabpflege (Friedhofsgärtnerei / Grabpflege-Dienstleistung, kein Meisterbetrieb)

---

## Firmendaten

```yaml
firmenname: "Grabpflege Albrecht"
inhaber: "Marc Albrecht"
rechtsform: "Einzelunternehmen"
claim: "Andenken mit Sorgfalt bewahren"
gruendungsjahr: 2026
meisterbetrieb: false
innungsmitglied: false
```

## Kontakt

> **PLATZHALTER** – Adresse, Telefon, E-Mail, Öffnungszeiten und Einzugsgebiet
> stehen noch nicht final fest. Zentral änderbar in `lib/config.ts` (`contact`,
> `serviceOrte`).

```yaml
telefon: "0371 000000"
email: "info@grabpflege-albrecht.de"
strasse: "Musterstraße 1"
plz: "09111"
stadt: "Chemnitz"
region: "Chemnitz und Umgebung"
service_radius: "20 km"
oeffnungszeiten:
  werktags: "Mo–Fr: 08:00–17:00 Uhr"
  wochenende: "Sa: nach Vereinbarung"
  hinweis: "Kein 24-Stunden-Notdienst."
service_orte_platzhalter:
  - "Zentralfriedhof Chemnitz"
  - "Nikolaifriedhof Chemnitz"
  - "Friedhof Chemnitz-Altendorf"
  - "Friedhof Chemnitz-Einsiedel"
  - "Friedhof Adelsberg"
  - "Friedhof Grüna"
```

## Preismodell

Der Preis richtet sich nach der **tatsächlich zu pflegenden Grabfläche**, nicht
nach der Bezeichnung der Grabart (Urnengrab/Einzelgrab/Doppelgrab dienen nur
zur Orientierung). Vollständige Logik: `lib/pricing.ts`.

### Größenklassen

```yaml
groessenklassen:
  - id: klein
    bereich: "bis 1 m²"
  - id: mittel
    bereich: "über 1 m² bis 2 m²"
  - id: gross
    bereich: "über 2 m² bis 4 m²"
  - id: sonder
    bereich: "über 4 m²"
    hinweis: "Individuelles Angebot nach Besichtigung"
```

### Regelmäßige Grabpflege (Hauptleistung)

Drei gleichwertige Pflegeintervalle (1×, 2×, 3× monatlich), identischer
Leistungsumfang je Besuch, Preis pro Monat in Euro:

```yaml
regelpflege_preise:
  klein:  { "1x": 15, "2x": 30, "3x": 45 }
  mittel: { "1x": 20, "2x": 40, "3x": 60 }
  gross:  { "1x": 30, "2x": 55, "3x": 80 }
  sonder: "individuelles Angebot"

regelpflege_leistungsumfang:
  - "Entfernen von Unkraut, Laub und ähnlichen Verschmutzungen"
  - "Entfernen verblühter und abgestorbener Pflanzenteile"
  - "Pflege und Rückschnitt vorhandener Pflanzen"
  - "Oberflächliche Pflege und Lockerung des Bodens"
  - "Säuberung der Grabkanten"
  - "Herrichten des vorhandenen Grabschmucks"
  - "Allgemeine Zustandskontrolle der Grabstätte"
  - "Fotodokumentation nach jedem Besuch"

regelpflege_nicht_enthalten:
  - "Neue Pflanzen und Materialien"
  - "Intensive Grabsteinreinigung"
  - "Zusätzliche bedarfsgerechte Bewässerung"
  - "(Verweis auf Zusatzleistungen)"
```

### Einzelpflege

Gleicher Leistungsumfang wie ein regulärer Pflegebesuch, einmalig gebucht,
kein laufender Vertrag:

```yaml
einzelpflege_preise:
  klein: 25
  mittel: 32
  gross: 42
  sonder: "individuelles Angebot"
```

### Zusatzleistungen

```yaml
zusatzleistungen:
  - slug: grabsteinreinigung
    preismodell: gestaffelt
    preise: { klein: 35, mittel: 45, gross: 60 }
    hasDetailPage: true

  - slug: saisonale-bepflanzung
    preismodell: service-plus-material
    servicepreis: 30
    hinweis: "zzgl. Pflanzen- und Materialkosten, Budget vorab abgestimmt"
    hasDetailPage: true

  - slug: grabschmuck-anlassservice
    preismodell: service-plus-material
    servicepreis: 20
    hinweis: "zzgl. Material (Blumen, Kerzen, Grabschmuck)"
    hasDetailPage: false

  - slug: bewaesserung
    preismodell: individuell
    hasDetailPage: false
```

> Reduziert auf bewusst 4 Zusatzleistungen. „Individuelle Grabgestaltung" und
> „Intensiv-/Erstpflege" wurden entfernt.

### Umsatzsteuer

> **Noch nicht entschieden**, ob Regelbesteuerung (Preise inkl. MwSt.) oder
> Kleinunternehmerregelung (§ 19 UStG) gilt. Bis zur Klärung werden auf der
> Website keine USt-Hinweise zu den Preisen angezeigt. Sobald entschieden,
> in `app/impressum/page.tsx` (Abschnitt „Umsatzsteuer") sowie ggf. bei den
> Preisdarstellungen ergänzen.

## Leistungs-Unterseiten

Eigene SEO-Unterseite (`/leistungen/[slug]`) haben: `grabpflege`,
`einzelpflege`, `grabsteinreinigung`, `saisonale-bepflanzung` (siehe
`lib/services-data.ts`). Die übrigen Zusatzleistungen erscheinen auf der
Übersichtsseite `/leistungen`; die Datenstruktur (`hasDetailPage`) erlaubt es,
später ohne Umbau weitere Unterseiten zu ergänzen.

## Social Proof

> Grabpflege Albrecht wurde 2026 gegründet. Es liegen noch keine belastbaren
> Kennzahlen (Google-Bewertungen, Kundenzahl, Erfahrungsjahre) vor. Erfundene
> Zahlen werden bewusst **nicht** verwendet. Stattdessen zeigt die Startseite
> qualitative Vertrauenssignale (siehe `lib/config.ts` → `vertrauenssignale`):
> persönlicher Ansprechpartner, Fotodokumentation, transparente Preise, neu in
> Chemnitz. Sobald echte Bewertungen/Zahlen vorliegen, kann eine
> Bewertungs-Sektion ergänzt werden.

## Lead Magnet

Kein klassischer Checklisten-/Rechner-Lead-Magnet. Zentrales Angebot: die
**kostenlose Besichtigung mit Pflegevorschlag** (`hero.ctaPrimary`,
CTA-Band auf der Startseite, siehe `components/sections/CtaBand.tsx`).

## Features (ein/aus)

```yaml
features:
  notdienst_banner: false      # kein 24/7-Notdienst in dieser Branche
  whatsapp_button: false
  google_maps: false
  analytics: true               # vorbereitet, Opt-in-Consent-Gating, ID noch offen
  analytics_id: ""               # PLATZHALTER – gaId in lib/config.ts eintragen
  cookie_consent: true
  kontakt_backend: "frontend"   # später auf "email" oder "webhook" umstellen
  faq: true
  galerie: true                  # Platzhalter-Bildslots, noch keine echte Fotografie
  team_sektion: false
  floating_cta: true             # dezenter Floating-CTA, nur mobil
  barrierefreiheit_seite: false
```

## Hero-Texte

```yaml
hero:
  headline: "Die Grabstätte Ihrer Angehörigen in guten Händen"
  subline: "Wir übernehmen die Pflege und melden uns, wenn etwas zu entscheiden ist. Persönlich betreut, mit Fotodokumentation nach jeder Pflege."
  cta_primary: "Kostenlose Besichtigung anfragen"
  cta_secondary: "Leistungen & Preise ansehen"
```

## FAQ

Siehe `lib/config.ts` → `faqs` (allgemein) und je Leistung
`lib/services-data.ts` → `faqs`.

---

## Design-System-Override

Abweichend von `docs/DESIGNSYSTEM.md` (generisches Handwerker-Design) folgt
diese Seite vollständig dem mitgelieferten **„Grabpflege Albrecht Design
System"** (`Grabpflege Albrecht Design System/`): Farben (Schiefer/Moos/
Stein/Sand), Typografie (Cormorant Garamond + Montserrat, self-hosted über
`next/font`), Radii, Schatten, Motion-Timings und Copy-/Tonalitätsregeln sind
1:1 aus `app/globals.css` und den dortigen `guidelines/`- und `tokens/`-
Dateien übernommen. Technik, Struktur, Barrierefreiheit und DSGVO-Vorgaben aus
`CLAUDE.md` / `docs/ANFORDERUNGEN.md` / `docs/BARRIEREFREIHEIT.md` gelten
unverändert.

---

<sub>**Handwerker-Landingpage System v1.2.4** · Angepasst für Grabpflege Albrecht · Lizenz: kostenlos nutzbar · Hilfe, Community & DFY-Projekte: [aibymike.de](https://aibymike.de)</sub>
