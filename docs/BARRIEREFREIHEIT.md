# Barrierefreiheit (WCAG 2.2 AA)

> Diese Datei ist **verbindlich**. Jede generierte Seite und jede Komponente muss WCAG 2.2 Level AA erfüllen. Barrierefreiheit ist kein optionales Feature und kein Aufpreis – sie ist Teil der Definition von „fertig". Ziel: **Lighthouse Accessibility 100** und ein sauberer axe-Scan ohne kritische Verstöße.

---

## Warum (rechtlicher Kontext DE)

- Das **Barrierefreiheitsstärkungsgesetz (BFSG)** gilt seit **28.06.2025**. Es setzt den European Accessibility Act in DE um.
- Betroffen sind u.a. Websites mit elektronischem Geschäftsverkehr (Online-Buchung, Shop, Vertragsabschluss, Dienstleistungsbuchung). Eine reine Firmen-„Visitenkarte" ohne Transaktion ist oft **nicht** zwingend betroffen – aber sobald Online-Terminbuchung, Kostenrechner-mit-Abschluss o.ä. dazukommt, kann sie es sein.
- **Kleinstunternehmen** (< 10 MA und ≤ 2 Mio. € Jahresumsatz) sind bei Dienstleistungen teils ausgenommen – das ist aber eine rechtliche Einzelfallfrage.
- **Haltung dieses Kits:** Wir bauen grundsätzlich konform. Das ist günstiger als Nachrüsten, besser fürs SEO und schützt den Kunden. Im Kunden-Briefing wird auf das BFSG hingewiesen; die rechtliche Bewertung bleibt beim Kunden / dessen Anwalt.

> **Hinweis-Pflicht für den Agenten:** Beim Setup dem Kunden sagen, dass die Seite barrierefrei gebaut wird, und fragen, ob eine Seite „Erklärung zur Barrierefreiheit" (`app/barrierefreiheit/page.tsx`) angelegt werden soll.

---

## Die 4 Prinzipien (POUR) – konkret für diese Seiten

### 1. Wahrnehmbar (Perceivable)

- **Textalternativen:** Jedes `<Image>` hat einen sinnvollen `alt`-Text, der den Zweck beschreibt (nicht „Bild123"). Rein dekorative Bilder: `alt=""` (leer, nicht weglassen). Das Hero-Bild beschreibt knapp die Szene.
- **Icons:** Lucide-Icons, die allein eine Bedeutung tragen, brauchen ein `aria-label` ODER begleitenden sichtbaren Text. Icons neben Text sind dekorativ → `aria-hidden="true"`.
- **Kontrast (AA):**
  - Normaler Text: **≥ 4,5:1**
  - Großer Text (≥ 24px, oder ≥ 18,66px/14pt **bold**): **≥ 3:1**
  - UI-Komponenten & Grafik-Begrenzungen (Button-Rand, Input-Border, Fokus-Ring, Icon): **≥ 3:1**
  - ⚠️ Akzent-Amber `#d97706` auf Weiß ≈ 3,4:1 → **nicht** für normalen Fließtext. Nur große/fette Schrift oder als Button-Hintergrund mit geprüftem Textkontrast. Im Zweifel Amber leicht abdunkeln.
  - Primär-Dunkelblau `#1a365d` auf Weiß ≈ 11:1 → unkritisch.
- **Keine reine Farbcodierung:** Information nie nur über Farbe transportieren (z.B. Formularfehler immer auch als Text + Icon, nicht nur roter Rahmen).
- **Reflow & Zoom:** Layout muss bis **200 % Zoom** und bei 320px Breite ohne horizontales Scrollen funktionieren (Mobile-First hilft hier ohnehin). Keine `user-scalable=no` im Viewport-Meta.
- **Text statt Bild-Text:** Keine wichtigen Texte als Bild rendern.

### 2. Bedienbar (Operable)

- **Vollständige Tastaturbedienung:** Alles, was per Maus geht, geht per Tastatur (Tab/Shift+Tab, Enter/Space, Pfeile in Menüs/Akkordeon). Keine Tastaturfallen.
- **Sichtbarer Fokus:** Globaler `:focus-visible`-Stil (siehe `docs/DESIGNSYSTEM.md` → globals.css). Fokus-Ring nie per `outline: none` ohne Ersatz entfernen.
- **Skip-Link:** Erstes fokussierbares Element ist „Zum Inhalt springen" → Sprung zu `<main id="main">`. Sichtbar bei Fokus.
- **Logische Reihenfolge:** DOM-Reihenfolge = visuelle Reihenfolge. Kein positives `tabindex`.
- **Touch-Targets:** Mindestens **44×44px** (WCAG 2.2: Target Size Minimum 24px, wir nehmen 44px als Komfort-Standard).
- **Fokus nicht verdeckt (WCAG 2.2):** Sticky-Header darf das gerade fokussierte Element nicht überdecken → `scroll-margin-top` auf Anker-Ziele setzen.
- **Bewegung:** `prefers-reduced-motion` respektieren (siehe DESIGNSYSTEM → RevealOnScroll). Keine Endlos-Animation außer dezentem Notdienst-Puls, der bei reduced-motion stoppt.
- **Kein Auto-Karussell ohne Pause:** Falls Testimonials als Slider → pausierbar, per Tastatur bedienbar, kein Auto-Advance schneller als 5s (besser: kein Auto-Advance).
- **Konsistente Navigation:** Header/Footer auf allen Seiten gleich aufgebaut.

### 3. Verständlich (Understandable)

- **Sprache gesetzt:** `<html lang="de">`.
- **Klare Labels & Fehlermeldungen** in einfacher Sprache (Sie-Form).
- **Vorhersehbarkeit:** Fokus oder Auswahl löst keinen unerwarteten Kontextwechsel aus (kein Auto-Submit beim Select-Wechsel).
- **Hilfe konsistent:** Telefon/Notdienst-CTA an festen, erwartbaren Stellen.

### 4. Robust (Robust)

- **Valides, semantisches HTML:** echte Elemente statt `div`-Soup.
- **Name/Rolle/Wert:** Interaktive Elemente haben zugänglichen Namen (Label, `aria-label`, oder Textinhalt). Status (z.B. „Akkordeon offen") über native Elemente oder korrektes ARIA.
- **ARIA nur wo nötig:** Native Elemente bevorzugen. „No ARIA is better than bad ARIA." shadcn/Radix-Komponenten bringen korrektes ARIA bereits mit – nicht kaputt-overriden.

---

## Komponenten-Checkliste (auf diese Seite gemünzt)

### Semantische Struktur (Pflicht pro Seite)
- Genau **ein `<h1>`** pro Seite (Hero-Headline). Danach hierarchisch `h2` → `h3`, keine Ebene überspringen.
- Landmarks: `<header>`, `<nav aria-label="Hauptnavigation">`, `<main id="main">`, `<footer>`. Mehrere `nav` jeweils mit eigenem `aria-label` (z.B. Footer-Nav).
- Sektionen als `<section aria-labelledby="…">` mit Bezug zur jeweiligen Überschrift.

### Header / Navigation
- Skip-Link als erstes Element.
- Logo-Link hat zugänglichen Namen („{Firmenname} – Startseite").
- Mobile-Menü (shadcn `Sheet`): per Tastatur öff/schließbar, Fokus wandert ins Menü, **Escape schließt**, Fokus kehrt zum Trigger zurück (Radix erledigt das – nicht aushebeln). Hamburger-Button mit `aria-label="Menü öffnen"` und `aria-expanded`.

### Buttons & Links
- Telefon-CTAs: `<a href="tel:…">` mit klarem Text („Anrufen: 0228 1234567"), nicht nur ein Icon.
- Kein Icon-only-Button ohne `aria-label`.
- Links, die in neuem Tab öffnen (`target="_blank"`): Hinweis im Namen + `rel="noopener noreferrer"`.

### Formular (Kontakt & Lead Magnet)
- Jedes Feld hat ein sichtbares `<label for>` (kein reines Placeholder-Label).
- Pflichtfelder im Label kennzeichnen (z.B. „E-Mail (Pflichtfeld)"), nicht nur per `*`-Farbe.
- Fehler: `aria-invalid="true"` am Feld + Fehlermeldung per `aria-describedby` verknüpft, als **Text** (nicht nur roter Rand). Bei Absenden mit Fehlern: Fokus auf das **erste** fehlerhafte Feld.
- Erfolg/Fehler nach Submit über eine **Live-Region** ankündigen (`role="status"` / shadcn `sonner` mit korrektem Rollen-Setup).
- Datenschutz-Checkbox: echtes `<label>` mit anklickbarem Text inkl. Link zur Datenschutzerklärung.
- Honeypot-Feld: `aria-hidden="true"`, `tabindex="-1"`, `autocomplete="off"` – für Screenreader & Tastatur unsichtbar.

### FAQ (shadcn `Accordion`)
- Radix-`Accordion` nutzen (bringt `button`, `aria-expanded`, `aria-controls`, Tastatur mit). Nicht durch eigene `div`-Klick-Logik ersetzen.

### Bilder & Media
- Hero: `alt` beschreibt Szene knapp; `priority`.
- Galerie/Referenzen: jedes Bild mit aussagekräftigem `alt`; rein dekorative mit `alt=""`.
- Google-Maps-Embed (falls aktiv): `<iframe title="Karte: Standort {Firmenname}">`.

### Notdienst-Banner
- Schließen-Button mit `aria-label="Banner schließen"`.
- Pulsierender Punkt: `aria-hidden="true"`; bei `prefers-reduced-motion` statisch.

---

## Erklärung zur Barrierefreiheit (optionale Seite)

Wenn beim Setup gewünscht: `app/barrierefreiheit/page.tsx` mit:
- Geltungsbereich (welche Website),
- angestrebter Konformitätsstatus (WCAG 2.2 AA),
- bekannte Einschränkungen (falls vorhanden),
- **Feedback-/Kontaktmechanismus** (Barriere melden) – Link aufs Kontaktformular/Mail,
- Datum der Erstellung/letzten Prüfung.
Footer-Link „Barrierefreiheit" ergänzen (neben Impressum/Datenschutz/AGB).

---

## Testen (vor „fertig")

1. **Tastatur-Durchlauf:** Komplette Seite nur mit Tab/Shift+Tab/Enter/Escape bedienen – inkl. Mobile-Menü, FAQ, Formular. Fokus immer sichtbar?
2. **Zoom 200 %** und Breite **320px** – kein Inhaltsverlust, kein horizontales Scrollen.
3. **Automatik:** Lighthouse (Accessibility) + axe DevTools / `@axe-core/playwright`. Ziel: keine kritischen Verstöße, Lighthouse a11y = 100.
4. **Kontrast:** alle Text/Hintergrund-Kombinationen prüfen (insb. Amber-CTA, Badges, Footer-Text auf `slate-900`).
5. **Screenreader-Stichprobe:** NVDA (Windows) oder VoiceOver – Überschriften-Navigation, Formular-Labels, Fehlermeldungen werden vorgelesen.
6. **prefers-reduced-motion** aktiv → keine Reveal-Animationen, kein Puls.

> Automatische Tools finden nur ~30–40 % der Probleme. Der Tastatur- und Screenreader-Stichprobentest ist Pflicht, nicht optional.

---

## Schnell-Referenz: häufige Fehler in AI-generiertem Code (vermeiden)

- ❌ `<div onClick>` statt `<button>` → ✅ echtes `<button>`
- ❌ Placeholder als einziges Label → ✅ `<label>`
- ❌ `outline: none` ohne Fokus-Ersatz → ✅ `:focus-visible`-Stil
- ❌ Mehrere `<h1>` oder übersprungene Ebenen → ✅ eine `h1`, saubere Hierarchie
- ❌ Icon-Button ohne Namen → ✅ `aria-label`
- ❌ Fehler nur per Farbe → ✅ Text + `aria-describedby`
- ❌ Auto-Karussell ohne Pause/Tastatur → ✅ statisch oder bedienbar
- ❌ `alt` weggelassen → ✅ sinnvoll oder `alt=""`

---

<sub>**Handwerker-Landingpage System v1.2.4** · Stand: 2026-06-02 · Lizenz: kostenlos nutzbar · Hilfe, Community & DFY-Projekte: [aibymike.de](https://aibymike.de)</sub>
