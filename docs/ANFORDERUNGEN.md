# Vollständige Anforderungen: Handwerker-Landingpage

> Diese Datei beschreibt die komplette Seitenstruktur, alle Sektionen, SEO-Anforderungen,
> Lead-Generierung und technische Details. Referenziert aus `CLAUDE.md`.

---

## Interaktiver Setup-Prozess

**Beim ersten Start: Stelle dem Nutzer die folgenden Fragen nacheinander.**
Warte jeweils die Antwort ab, bevor du zur nächsten Frage übergehst.
Die Antworten werden in `lib/config.ts` und `docs/BRANCHE.md` eingetragen.

### Frage 1: Branche & Firmendaten
```
Für welchen Betrieb erstellen wir die Website?
- Firmenname
- Inhaber / Geschäftsführer
- Branche (z.B. SHK, Dachdecker, Elektriker, Maler)
- Stadt / Region
- Telefonnummer
- E-Mail-Adresse
```

### Frage 2: Leistungsspektrum
```
Welche Leistungen bietet der Betrieb an? (4–6 Kernleistungen)
→ Ich schlage branchenspezifische Leistungen vor, du bestätigst oder änderst.
```

### Frage 3: Analytics
```
Web-Analytics integrieren?
→ JA → Google Analytics Measurement-ID eingeben (G-XXXXXXXXXX)
       WICHTIG: Wird NUR nach aktiver Einwilligung im Cookie-Banner geladen
       (Opt-in). Ohne Zustimmung lädt KEIN GA-Script, KEIN Pixel, KEIN Cookie.
       → Wenn Analytics = JA, ist der Cookie-Banner (Frage 4) verpflichtend.
→ NEIN → Weiter (dann werden gar keine Tracking-Skripte eingebunden)
```

### Frage 4: Cookie-Consent
```
DSGVO/TTDSG Cookie-Banner integrieren?
→ JA → Clientseitiger Consent-Banner (kein externer Dienst)
→ NEIN → Weiter (nur zulässig, wenn KEINE einwilligungspflichtigen Dienste
         genutzt werden – also kein Analytics, kein Pixel, keine externen Maps)
```

> **Consent-Gating ist Pflicht, kein Deko-Banner.** Der Banner muss einwilligungspflichtige Dienste tatsächlich blockieren, bis der Nutzer aktiv zustimmt. Details: Abschnitt „Cookie-Consent & Tracking" weiter unten.

### Frage 5: Kontaktformular-Backend
```
Wie sollen Anfragen ankommen?
→ A) E-Mail (Resend API-Key benötigt)
→ B) Webhook (Make.com / n8n URL benötigt)
→ C) Nur Frontend (später anbinden)
```

### Frage 6: Farbschema
```
Farbschema?
→ A) Branchenempfehlung (ich schlage basierend auf der Branche vor)
→ B) Eigene Farben (Primary + Accent als Hex)
```

### Frage 7: Lead Magnet
```
Lead Magnet integrieren?
→ A) Checkliste (PDF-Download gegen E-Mail)
→ B) Kostenrechner (interaktives Tool)
→ C) Wartungsplaner (interaktives Tool)
→ D) Förder-Check (Kurzabfrage)
→ E) Keinen
```

### Frage 8: Zusatzfeatures
```
Zusatzfeatures? (Mehrfachauswahl)
□ WhatsApp-Button
□ Notdienst-Banner (24/7)
□ Google Maps Einbettung
□ Bildergalerie / Referenzen
□ Team-Sektion
□ FAQ-Akkordeon
```

### Frage 9: Barrierefreiheit
```
Barrierefreiheit (WCAG 2.2 AA) ist Standard und immer aktiv.
→ Hinweis an den Kunden: Seit dem Barrierefreiheitsstärkungsgesetz (BFSG, gilt
  ab 28.06.2025) sind viele gewerbliche Websites in DE betroffen. Reine
  Firmen-Visitenkarten oft nicht, aber sobald Online-Buchung/Shop/Vertragsabschluss
  dazukommt, schon. Wir bauen grundsätzlich konform – das ist kein Aufpreis-Feature.
→ Optional abfragen: Soll eine separate „Erklärung zur Barrierefreiheit"-Seite
  generiert werden? (JA → app/barrierefreiheit/page.tsx wird angelegt)
```
Details und verbindliche Regeln: `docs/BARRIEREFREIHEIT.md`.

---

## Zentrale Konfiguration (`lib/config.ts`)

Alle Daten aus `docs/BRANCHE.md` werden in eine typisierte Konfiguration überführt.
Der Nutzer muss **nur `docs/BRANCHE.md` ändern** – `config.ts` liest daraus.

```typescript
// Type-Definition
export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    claim: string;
    foundedYear: number;
    phone: string;
    phoneEmergency: string;
    email: string;
    address: { street: string; zip: string; city: string };
    region: string;
    serviceRadius: string;
    openingHours: { weekdays: string; saturday: string; emergency: string };
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    accentLight: string;
  };
  seo: { title: string; description: string; keywords: string[]; siteUrl: string };
  features: Record<string, boolean | string>;  // inkl. barrierefreiheit_seite?: boolean
  socialProof: {
    googleRating: number;
    googleReviewCount: number;
    yearsExperience: number;
    completedProjects: number;
    emergencyResponseMinutes: number;
  };
  navigation: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>;
}
```

---

## Seitenstruktur

### Globaler Header

- **Sticky** mit `bg-white/90 backdrop-blur-sm` beim Scrollen
- Logo links (Text-Logo mit Firmenname, kein Bild nötig)
- Navigation mittig (Desktop) / Hamburger (Mobile, shadcn `Sheet`)
- Rechts: Telefonnummer (Desktop) + CTA-Button "Anfrage" in Akzentfarbe
- Framer Motion: sanftes `y: -10 → 0` beim initialen Laden
- **Notdienst-Banner** (optional): Schmaler roter Streifen ÜBER dem Header
  - Roter pulsierender Punkt + "24h Notdienst: {telefon}" + schließbar

### Globaler Footer

- `bg-slate-900 text-white`
- 4-Spalten Layout → 1 Spalte mobil
  - Spalte 1: Firmenname, Kurztext, (Social-Icons Platzhalter)
  - Spalte 2: Leistungen (Links)
  - Spalte 3: Kontaktdaten, Öffnungszeiten
  - Spalte 4: Rechtliches (Impressum, Datenschutz, AGB)
- Untere Zeile: `© {Jahr} {Firmenname}. Alle Rechte vorbehalten.`

### Rechtliche Seiten

> ⚠️ **AUSDRÜCKLICHER HINWEIS – keine Gewähr, keine Rechtsberatung.**
> Alle rechtlichen Seiten (Impressum, Datenschutzerklärung, AGB, ggf. Erklärung zur Barrierefreiheit) sowie der Cookie-/Consent-Text sind **unverbindliche Platzhalter-Vorlagen**. Sie stellen **keine Rechtsberatung** dar und es wird **keinerlei Gewähr** für Richtigkeit, Vollständigkeit oder Aktualität übernommen. Sie **müssen vor Veröffentlichung von einer fachkundigen Person (Rechtsanwalt/Datenschutzbeauftragter) geprüft und angepasst werden.** Die Verantwortung für die rechtskonforme Veröffentlichung trägt allein der Seitenbetreiber.
>
> Dieser Hinweis ist zusätzlich **sichtbar als Kommentar im generierten Code** jeder Rechtsseite zu platzieren (z.B. `{/* Platzhalter – keine Rechtsberatung, keine Gewähr. Vor Live-Gang anwaltlich prüfen lassen. */}`) und gehört in keinem Fall in den für Besucher sichtbaren Seitentext.

**Impressum** – Pflichtangaben nach § 5 TMG:
- Firmendaten, Kontakt, USt-ID (Platzhalter), HWK-Zugehörigkeit
- Berufsbezeichnung, Aufsichtsbehörde
- Streitschlichtung (EU OS-Plattform Link)
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

**Datenschutz** – DSGVO-konforme Vorlage:
- Verantwortlicher, Datenerfassung, Hosting, Kontaktformular, Cookies
- Analytics-Absatz nur wenn `features.analytics === true`
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

**AGB** – Allgemeine Geschäftsbedingungen:
- Handwerks-spezifische Klauseln (Auftragserteilung, Gewährleistung, Abnahme)
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

---

## Landingpage-Sektionen (Hauptseite)

### 1. HERO

- Vollbreiter Hintergrund (Platzhalter-Bild, dunkles Overlay `bg-black/50`)
- Headline: Benefit-driven aus `BRANCHE.md` → `hero.headline`
- Subheadline aus `BRANCHE.md` → `hero.subline`
- Primary CTA: `hero.cta_primary` → scrollt zum Kontaktformular
- Secondary CTA: `hero.cta_secondary` → `tel:` Link
- Trust-Leiste (4 Badges): Sterne, Meisterbetrieb, Notdienst, Region

### 2. TRUST BAR

- Schmaler Streifen direkt unter Hero, `bg-primary`
- 4 Kennzahlen mit `font-mono` für die Zahlen
- AnimatedCounter (zählt hoch wenn sichtbar)
- Werte aus `socialProof` in der Config

### 3. LEISTUNGSÜBERSICHT

- `bg-white`, Headline "Unsere Leistungen"
- Grid: 3 Spalten (lg), 2 (md), 1 (sm)
- Cards: Border, kein Shadow, Icon + Titel + Kurztext + Link
- Daten aus `services-data.ts` (generiert aus `BRANCHE.md`)

### 4. ÜBER UNS TEASER

- `bg-slate-50`, Split-Layout
- Text links: Kurzvorstellung, Badges (Innungsfachbetrieb, Meisterbetrieb, Seit X)
- Bild rechts: Platzhalter (Teamfoto)
- CTA: "Lernen Sie uns kennen →"

### 5. LEAD MAGNET

- Nur wenn `features.leadMagnet !== "none"`
- `bg-primary`, weiße Schrift, zentriert
- Headline + Subline aus `BRANCHE.md` → `lead_magnet`
- Formular: Name + E-Mail + Submit
- Varianten je nach `lead_magnet.typ`:
  - **checklist**: PDF-Download nach Submit
  - **calculator**: Multi-Step Formular mit Ergebnis
  - **planner**: Datumseingabe mit Ergebnis
  - **funding**: Quiz mit Ergebnis

### 6. KUNDENBEWERTUNGEN

- `bg-white`
- Slider oder 3er-Grid
- Google-Logo + Gesamtbewertung oben
- Karten: Sterne, Text, Name+Ort, Datum
- Daten aus `BRANCHE.md` → `bewertungen`

### 7. EINZUGSGEBIET

- `bg-slate-50`
- Headline: "Wir sind für Sie da – in {region}"
- Orte als Badge-Chips (`rounded-full bg-white border`)
- Optional: Google Maps Embed

### 8. FAQ

- `bg-white`, linksbündig, `max-w-3xl mx-auto`
- shadcn `Accordion`
- Daten aus `BRANCHE.md` → `faqs`

### 9. CTA BANNER

- `bg-primary`, zentriert
- Headline: "Bereit für Ihr Projekt?"
- 2 Buttons: Primary CTA + Telefon-CTA

---

## Leistungs-Unterseiten (`app/leistungen/[slug]/page.tsx`)

Dynamisch generiert aus `services-data.ts`. Jede Seite enthält:

1. **Mini-Hero**: Leistungstitel + Kurzbeschreibung
2. **Problemstellung**: "Kennen Sie das?" → `kundenprobleme` aus BRANCHE.md
3. **Lösung**: Ausführliche Beschreibung
4. **Vorteile**: 3 Icon-Cards
5. **Prozess-Timeline**: 4 Schritte (Beratung → Angebot → Umsetzung → Abnahme)
6. **CTA**: Kontaktformular oder Button
7. **FAQ**: Leistungsspezifische Fragen

### SEO pro Unterseite:
- Dynamische Metadata aus `seo_title`, `seo_description`, `seo_keywords`
- `{stadt}` und `{region}` werden automatisch ersetzt
- JSON-LD `Service` Schema

### Technik (Next.js 16 – `params` ist async!):
```tsx
// app/leistungen/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";

// SSG: alle Slugs zur Build-Zeit vorrendern
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// params ist ein Promise → await nötig (Next 16 Breaking Change)
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.seoTitle} | ${config.company.name}`,
    description: service.seoDescription,
    alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/leistungen/${slug}` },
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  // ... Sektionen rendern
}
```

---

## Kontaktformular

**Felder:**
- Anrede (Select: Herr/Frau/Divers)
- Name (Text, Pflicht)
- Telefon (Tel, Pflicht)
- E-Mail (Email, Pflicht)
- Betreff (Select, dynamisch aus Leistungen)
- Nachricht (Textarea)
- Datenschutz-Checkbox (Pflicht)

**Technik:**
- React Hook Form + Zod Validation (Client UND Server – nie nur Client validieren)
- API Route `app/api/contact/route.ts` (nur POST)
- Backend je nach Config: E-Mail / Webhook / nur Frontend
- Erfolgsmeldung: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden."
- Loading State auf Button, Erfolg/Fehler via shadcn `sonner` (Toast)

**Spam-Schutz (Pflicht):**
- **Honeypot-Feld** (`<input>` visuell versteckt via `sr-only` + `tabindex="-1"` + `autocomplete="off"`) – ausgefüllt = Bot, Anfrage still verwerfen
- **Zeit-Token** (Formular-Render-Zeitstempel; Absenden < 2s = verdächtig)
- **Rate-Limiting** in der Route (z.B. max. 5 Anfragen / IP / 10 Min – in-memory oder Upstash)
- **Kein** Captcha als Default (Barriere + DSGVO-Themen); nur auf ausdrücklichen Kundenwunsch

**Barrierefreiheit des Formulars:** siehe `docs/BARRIEREFREIHEIT.md` → Abschnitt „Formulare" (Labels, `aria-describedby` für Fehler, `aria-invalid`, Fokus auf erstes Fehlerfeld, Fehlermeldungen in Text + nicht nur Farbe).

---

## Cookie-Consent & Tracking (DSGVO / TTDSG)

> **Grundregel: Opt-in, nicht Opt-out.** Einwilligungspflichtige Dienste (Google Analytics, jegliche Pixel, Google Maps via Google-Server, eingebettete YouTube-Videos, externe Fonts) dürfen **erst nach aktiver Zustimmung** geladen werden. Vor der Einwilligung: kein Script, kein Cookie, kein Netzwerk-Request an den Drittanbieter. Ein Banner, der nur informiert, während das Tracking schon läuft, ist **nicht** rechtskonform.

### Verhalten des Consent-Banners
- **Standardzustand = abgelehnt.** Beim ersten Seitenaufruf werden keine Tracking-/Marketing-Dienste geladen.
- **Gleichwertige Buttons:** „Akzeptieren" und „Ablehnen" sind gleich prominent (kein dunkles Pattern, kein vorausgewähltes „Alle akzeptieren" in Großschrift gegen ein verstecktes „Ablehnen").
- **Granular (mind. 2 Kategorien):** „Notwendig" (immer an, nicht abwählbar) und „Statistik/Marketing" (Opt-in). Maps/YouTube ggf. als eigene Kategorie „Externe Medien".
- **Widerruf jederzeit:** dezenter, dauerhaft erreichbarer Link/Button (z.B. im Footer „Cookie-Einstellungen"), der den Banner erneut öffnet. Widerruf so einfach wie Erteilung.
- **Speicherung:** Entscheidung clientseitig (z.B. `localStorage`/First-Party-Cookie), inkl. Zeitstempel; erneute Abfrage nach angemessener Frist (z.B. 6–12 Monate).
- **Kein externer Dienst** nötig (kein Cookiebot/Usercentrics) – eigener, schlanker Client-Banner reicht.
- **Barrierefrei:** fokussierbar, per Tastatur bedienbar, Fokus beim Öffnen in den Banner, `role="dialog"`/`aria-label`. Siehe `docs/BARRIEREFREIHEIT.md`.

### Technische Umsetzung (Next.js)
- Analytics/Pixel werden über `next/script` mit `strategy="afterInteractive"` geladen – **aber nur konditional gerendert**, wenn `consent.statistics === true`. Vor Einwilligung wird das `<Script>` gar nicht gemountet.
- GA mit `gtag('consent', 'default', { analytics_storage: 'denied' })` initialisieren; erst bei Zustimmung auf `'granted'` setzen (Google Consent Mode v2).
- Kein Tracking-Code im `<head>` hardcoden. Einbindung läuft ausschließlich über die Consent-Logik.
- `features.analytics === false` → es wird überhaupt kein Tracking-Code generiert.
- IP-Anonymisierung aktiv; Vercel-Hosting (EU-Region wählbar) im Datenschutztext nennen.

### Konsistenz mit dem Datenschutztext
- Der Analytics-/Cookie-Absatz in der Datenschutzerklärung wird nur generiert, wenn die jeweiligen Dienste aktiv sind (`features.analytics`, Maps etc.). Genannt werden: Dienst, Zweck, Rechtsgrundlage (Einwilligung Art. 6 Abs. 1 lit. a DSGVO), Speicherdauer, Widerrufsmöglichkeit.

> ⚠️ **Keine Rechtsberatung:** Diese Vorgaben setzen den Stand gängiger Praxis technisch um, ersetzen aber keine rechtliche Prüfung. Verantwortlich für DSGVO-Konformität bleibt der Seitenbetreiber. Siehe Hinweis bei den rechtlichen Seiten und `LICENSE.md`.

---

## DSGVO-Konformität (verbindliche Gesamt-Checkliste)

> Ziel: **Datensparsamkeit by default, keine ungefragten Drittanbieter-Requests.** Die Seite soll im Auslieferungszustand (ohne Einwilligung) datenschutzrechtlich „still" sein – nichts lädt von Dritten, keine IP verlässt unkontrolliert das EU-Hosting. Diese Liste ist beim Generieren abzuarbeiten. (Rechtlicher Hinweis: keine Rechtsberatung, keine Gewähr – siehe rechtliche Seiten.)

### Keine externen Requests ohne Einwilligung
- ✅ **Schriften self-hosted** über `next/font` (kein Google-Fonts-/CDN-Request, keine IP an Google). Siehe `docs/DESIGNSYSTEM.md`. **Niemals** `fonts.googleapis.com`, Fontshare o.ä.
- ✅ **Keine externen CDNs** für JS/CSS/Icons/Bilder. Lucide-Icons werden als npm-Paket gebündelt, nicht per CDN geladen.
- ✅ **Google Maps** lädt von Google-Servern → **nur consent-gated** (Opt-in). Default-Alternative ohne Einwilligung: statische Karte/Screenshot oder reine Adressangabe + Button „Route planen" (öffnet Maps erst auf Klick). Optional: OpenStreetMap.
- ✅ **YouTube/Vimeo-Einbettungen**: nur consent-gated; YouTube im `youtube-nocookie`-Modus, erst nach Klick/Zustimmung.
- ✅ **Keine Social-Media-Widgets/-Embeds**. Social-Links sind einfache `<a>`-Links mit lokalen Icons – keine Like-Buttons/Tracking-Pixel.
- ✅ **Kein Google reCAPTCHA** (überträgt Daten an Google). Spam-Schutz über Honeypot + Zeit-Token + Rate-Limit (siehe Kontaktformular).
- ✅ **Favicon/OG-Bilder** liegen lokal im Projekt, nicht extern.

### Tracking & Cookies
- ✅ Analytics/Pixel **nur per Opt-in** (siehe Abschnitt „Cookie-Consent & Tracking"). Google Consent Mode v2, `analytics_storage: 'denied'` als Default.
- ✅ Ohne aktive Dienste werden **keine** nicht-essenziellen Cookies gesetzt. Essenzielle Cookies (z.B. Consent-Speicherung) sind erlaubt und im Datenschutztext genannt.
- ✅ Vercel Web Analytics (falls genutzt) ist cookieless – trotzdem im Datenschutztext erwähnen.

### Formulare & Daten
- ✅ **Datensparsamkeit:** nur wirklich nötige Felder (Name, Kontakt, Anliegen). Keine optionalen Tracking-/Profilfelder.
- ✅ **Übertragung verschlüsselt** (HTTPS/TLS erzwungen – Vercel-Standard).
- ✅ **Datenschutz-Checkbox** (aktiv anzuhaken, nicht vorausgewählt) mit Link zur Datenschutzerklärung; ohne Häkchen kein Absenden.
- ✅ **Zweckbindung:** Kontaktdaten nur zur Bearbeitung der Anfrage. Rechtsgrundlage Art. 6 Abs. 1 lit. b/f DSGVO – im Datenschutztext benennen.
- ✅ **Lead-Magnet-E-Mail:** Wird die E-Mail über die Anfragebearbeitung hinaus (z.B. Newsletter/Werbung) genutzt → **Double-Opt-in** verpflichtend (Bestätigungsmail), sonst nur einmalige Auslieferung des Downloads.
- ✅ **Backend-Dienstleister** (Resend, Make.com/n8n) sind Auftragsverarbeiter → **AVV/DPA** nötig; bei US-Diensten Transfermechanismus (EU-Standardvertragsklauseln / EU-US DPF) beachten. Im Datenschutztext nennen. Hinweis an den Kunden im Setup.

### Hosting & Logs
- ✅ **Vercel:** EU-Hosting-Region wählen; Vercel ist Auftragsverarbeiter (DPA verfügbar). Im Datenschutztext „Hosting"-Absatz mit Anbieter, Region, Server-Logfiles (inkl. IP) und Speicherdauer.
- ✅ **Server-Logfiles/IP:** kurze, begründete Speicherdauer; IP nur soweit für Betrieb/Sicherheit nötig.

### Rechte der Betroffenen & Transparenz
- ✅ Datenschutzerklärung nennt: Verantwortlichen, Zwecke, Rechtsgrundlagen, Empfänger/Auftragsverarbeiter, Drittlandtransfers, Speicherdauer, Betroffenenrechte (Auskunft, Berichtigung, Löschung, Widerspruch, Beschwerde bei Aufsichtsbehörde) und Widerruf der Einwilligung.
- ✅ Datenschutzerklärung & Impressum **ohne Einwilligung** und von jeder Seite (Footer) erreichbar.
- ✅ Inhalte der Datenschutzerklärung werden **konditional** generiert: nur tatsächlich genutzte Dienste werden beschrieben (kein Analytics-Absatz, wenn kein Analytics aktiv ist).

### Viewport / Sonstiges
- ✅ Kein `user-scalable=no` (Zoom muss möglich bleiben – a11y + Nutzerrecht).

> ⚠️ **Keine Rechtsberatung, keine Gewähr.** Diese Checkliste setzt gängige Praxis technisch um; die rechtliche Verantwortung trägt der Seitenbetreiber. Texte anwaltlich prüfen lassen.

---

## SEO & Structured Data

### Metadata (Next.js App Router):
- Dynamisch pro Seite via `generateMetadata()`
- Open Graph + Twitter Cards
- Canonical URLs

### JSON-LD Schemas:
```typescript
// Auf jeder Seite: LocalBusiness
{
  "@type": "LocalBusiness",
  "name": config.company.name,
  "address": { ... },
  "telephone": config.company.phone,
  "openingHours": [ ... ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": config.socialProof.googleRating,
    "reviewCount": config.socialProof.googleReviewCount,
  }
}

// Auf Leistungsseiten: Service
{
  "@type": "Service",
  "name": service.titel,
  "provider": { "@type": "LocalBusiness", "name": config.company.name },
  "areaServed": config.company.region,
}

// Auf FAQ-Sektion: FAQPage
{
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.frage,
    "acceptedAnswer": { "@type": "Answer", "text": f.antwort }
  }))
}
```

### Auto-generiert:
- `app/sitemap.ts` → XML Sitemap (Basis-URL aus `NEXT_PUBLIC_SITE_URL`, alle statischen Seiten + alle `leistungen/[slug]`)
- `app/robots.ts` → robots.txt (inkl. `sitemap`-Verweis)

---

## Barrierefreiheit (WCAG 2.2 AA – verbindlich)

Jede generierte Seite muss WCAG 2.2 AA erfüllen. Das ist **kein optionales Feature**, sondern Teil jeder Komponente. Die vollständigen, verbindlichen Regeln stehen in **`docs/BARRIEREFREIHEIT.md`**. Das Wichtigste in Kürze:

- **Semantik:** echte Landmarks (`header`/`nav`/`main`/`footer`), korrekte Überschriften-Hierarchie (genau ein `h1` pro Seite), Buttons sind `<button>`, Links sind `<a>`.
- **Tastatur:** alles ohne Maus bedienbar, sichtbarer Fokus-Ring überall, logische Tab-Reihenfolge, Skip-Link „Zum Inhalt springen".
- **Kontrast:** Text ≥ 4,5:1, große Schrift/UI-Elemente ≥ 3:1 (betrifft die Farbwahl im Designsystem!).
- **Formulare:** jedes Feld mit `<label>`, Fehler per `aria-describedby` + Text (nicht nur Farbe), `aria-invalid`.
- **Bewegung:** `prefers-reduced-motion` respektieren (alle Reveals/Animationen).
- **Bilder:** sinnvolle `alt`-Texte, dekorative Bilder mit `alt=""`.
- **Rechtlich (DE):** Hinweis auf das **BFSG** (gültig ab 28.06.2025) im Kunden-Briefing; optionale Seite „Erklärung zur Barrierefreiheit".

---

## Performance

- Lighthouse Score: **90+** auf allen Kategorien (inkl. **Accessibility 100** als Ziel – siehe `docs/BARRIEREFREIHEIT.md`)
- Core Web Vitals als verbindliches Budget: **LCP < 2,5s**, **INP < 200ms**, **CLS < 0,1**
- `next/image` mit `priority` für Hero, `loading="lazy"` für alles andere; immer `width`/`height` oder `fill` + `sizes` setzen (verhindert CLS)
- `next/font` mit `display: "swap"` – keine externen Font-Requests
- SSG/ISR für alle Seiten; `generateStaticParams()` für `leistungen/[slug]`
- Keine unnötigen Client-Komponenten – `"use client"` nur wo nötig (Formulare, Animationen)
- Bundle-Größe minimieren: Motion (`motion/react`) ist tree-shakebar – nur importieren was genutzt wird
- **Hinweis Next 16:** `next build` zeigt keine `size`/`First Load JS`-Metriken mehr an (in RSC-Architekturen ungenau). Echte Messung über **Lighthouse** oder **Vercel Speed Insights**, nicht über die Build-Ausgabe.

---

## Mobil-spezifisch

- **Floating CTA** am unteren Rand (nur mobil): "Jetzt anrufen" mit Telefon-Icon
- Click-to-Call auf ALLEN Telefonnummern
- Sheet-basierte Mobile Navigation (kein Fullscreen-Overlay)
- Touch-Targets: mindestens 44px
- Kein Hover-only Content (alles auch per Tap erreichbar)

---

## Deployment (Vercel)

```bash
# 1. Projekt-Scaffold (Next.js 16 – Turbopack & App Router sind Default)
#    --no-src-dir: app/, components/, lib/ liegen im Projekt-Root (so referenzieren es alle Specs)
npx create-next-app@latest [projektname] --typescript --tailwind --app --no-src-dir --eslint --import-alias "@/*"
cd [projektname]

# 2. shadcn/ui initialisieren (Tailwind-v4-kompatibel) + benötigte Komponenten
npx shadcn@latest init
npx shadcn@latest add button card accordion sheet input textarea select checkbox badge separator form label sonner

# 3. Abhängigkeiten – WICHTIG: Paket heißt "motion" (nicht mehr "framer-motion")
npm install motion react-hook-form @hookform/resolvers zod lucide-react

# 4. Deploy
npx vercel
```

> **Tailwind 4 Hinweise (Stand 2026):**
> - `create-next-app --tailwind` installiert bereits Tailwind 4. Es gibt **keine `tailwind.config.ts`** – das Theme wird in `app/globals.css` per `@theme` definiert (siehe `docs/DESIGNSYSTEM.md`).
> - PostCSS nutzt `@tailwindcss/postcss` in `postcss.config.mjs` (von `create-next-app` bereits angelegt).
> - shadcn/ui legt seine CSS-Variablen ebenfalls in `globals.css` ab (`:root` / `.dark` + `@theme inline`). Unsere Branchenfarben werden dort eingehängt.

> **Next.js 16 Hinweise:**
> - Turbopack ist Default – `package.json`-Scripts brauchen kein `--turbopack` mehr (`"dev": "next dev"`, `"build": "next build"`).
> - `next build` führt **kein** Linting mehr aus (`next lint` wurde entfernt) – ESLint/Biome separat laufen lassen.
> - Node.js **20.9+** ist Pflicht.

### Env-Variablen (falls nötig, in `.env.local`):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxx
WEBHOOK_URL=https://...
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIza...
NEXT_PUBLIC_SITE_URL=https://www.example.de   # für Canonicals, Sitemap, OG
```

---

## Lead-Generierung: Strategie-Zusammenfassung

### Die 7 Conversion-Hebel auf der Seite:
1. **Hero CTA** – Sofort sichtbar, Benefit-driven
2. **Telefonnummer überall** – Header, Hero, Footer, Floating Button
3. **Lead Magnet** – E-Mail-Capture gegen Mehrwert
4. **Kontaktformular** – Kurz, mit Betreff-Vorauswahl
5. **Notdienst-Banner** – Dringlichkeit für Akut-Leads
6. **Social Proof** – Google-Sterne, Kundenstimmen, Kennzahlen
7. **CTA-Banner** – Letzter Push vor dem Footer

### Effektive Lead Magneten nach Branche:
| Branche | Lead Magnet 1 | Lead Magnet 2 |
|---|---|---|
| SHK | Heizungs-Check Checkliste | Badsanierungs-Kostenrechner |
| Dachdecker | Dach-Check: 8 Warnsignale | Sturmschaden-Sofortguide |
| Elektriker | Elektro-Sicherheitscheck | Smart-Home Einsteiger-Guide |
| Maler | Farbberater-Tool | Fassaden-Renovierungs-Checkliste |
| Schreiner | Küchenplanungs-Guide | Holzpflege-Ratgeber |

---

## Reihenfolge der Implementierung

1. Projekt-Scaffold + Dependencies (Next 16, Tailwind 4, shadcn, `motion`)
2. `app/globals.css`: Tailwind 4 importieren + Theme/Branchenfarben als CSS-Variablen anlegen (siehe `docs/DESIGNSYSTEM.md`)
3. `lib/config.ts` aus BRANCHE.md befüllen (inkl. `{stadt}`/`{region}`-Auflösung)
4. `lib/animations.ts` + `lib/services-data.ts` + `lib/utils.ts` (`cn`)
5. `components/shared/RevealOnScroll.tsx` (mit `prefers-reduced-motion`-Fallback)
6. `components/layout/Header.tsx` + `Footer.tsx` (inkl. Skip-Link im Header)
7. `app/layout.tsx` (Root Layout: Font, `<html lang="de" data-scroll-behavior="smooth">`, Skip-Link-Ziel `<main id="main">`, JSON-LD `LocalBusiness`)
8. Sektionen der Hauptseite (in Reihenfolge: Hero → Trust → Services → About → Lead Magnet → Testimonials → Area → FAQ → CTA)
9. `app/page.tsx` (alles zusammensetzen)
10. Leistungs-Unterseiten (`generateStaticParams` + async `params`)
11. Kontaktformular + API Route (Zod client+server, Honeypot, Rate-Limit)
12. Rechtliche Seiten (Impressum, Datenschutz, AGB; optional Barrierefreiheits-Erklärung)
13. SEO (Metadata, JSON-LD `Service`/`FAQPage`, `sitemap.ts`, `robots.ts`)
14. Mobile Floating CTA
15. Optionale Features (Analytics, Cookie-Consent, Maps, WhatsApp)
16. **Barrierefreiheits-Check** gegen `docs/BARRIEREFREIHEIT.md` (Tastatur-Durchlauf, Kontraste, Screenreader-Stichprobe, axe/Lighthouse a11y)
17. Performance-Audit (Lighthouse / Core Web Vitals) + Deploy

---

<sub>**Handwerker-Landingpage System v1.2.4** · Stand: 2026-06-02 · Lizenz: kostenlos nutzbar · Hilfe, Community & DFY-Projekte: [aibymike.de](https://aibymike.de)</sub>
