---
name: handwerker-landingpage
description: Baut eine lead-generierende Handwerker-Landingpage (Next.js 16, Tailwind 4, shadcn/ui, Motion) aus diesem Spezifikations-Kit. Nutze diesen Skill, wenn der User sagt "neue Handwerker-Website", "Landingpage bauen", "leg los", "Website für [Betrieb]", "Setup starten" oder das Kit in diesem Repo nutzen will. Führt erst den Setup-Dialog mit dem Kunden durch, trägt alles in docs/BRANCHE.md + lib/config.ts ein und generiert dann die komplette Seite nach den Specs.
---

# Handwerker-Landingpage – Build-Skill

Dieser Skill steuert den kompletten Ablauf vom Kunden-Briefing bis zur deploybaren Next.js-Seite. Er macht aus dem Spezifikations-Kit eine fertige Website.

## Grundprinzip
Dieses Repo enthält **keinen Code**, sondern Specs. Du liest die Specs, fragst den Kunden ab, befüllst die Datenquelle und generierst dann den Code – exakt nach den Regeln. Improvisiere nicht; die Specs sind die Wahrheit.

## Ablauf

### Schritt 0 – Specs laden (immer zuerst)
Lies in dieser Reihenfolge:
1. `CLAUDE.md` – Tech-Stack, goldene Regeln, Datei-Regeln, Anti-Vibe-Coding.
2. `docs/ANFORDERUNGEN.md` – vollständige Spec inkl. Setup-Dialog, Sektionen, SEO, Deployment.
3. `docs/DESIGNSYSTEM.md` – Farben (Tailwind 4 CSS-first), Typo, Motion, Layout-Rhythmus.
4. `docs/BARRIEREFREIHEIT.md` – verbindliche WCAG-2.2-AA-Regeln.
5. `docs/BRANCHE.md` – aktuelle (Beispiel-)Datenquelle; wird im Setup überschrieben.

### Schritt 1 – Setup-Dialog mit dem Kunden
Stelle die **9 Fragen** aus `docs/ANFORDERUNGEN.md` → „Interaktiver Setup-Prozess" **nacheinander**, eine nach der anderen, und warte jeweils die Antwort ab. Schlage branchenspezifische Defaults vor (Leistungen, Farbpalette, Lead Magnet – siehe Tabellen in den Docs), die der Kunde bestätigt oder ändert.
- Branche & Firmendaten → Leistungen → Analytics → Cookie-Consent → Formular-Backend → Farbschema → Lead Magnet → Zusatzfeatures → Barrierefreiheit/Hinweis.
- Beim Schritt Barrierefreiheit: Kunden auf das BFSG hinweisen und fragen, ob die Seite „Erklärung zur Barrierefreiheit" angelegt werden soll.

### Schritt 2 – Datenquelle befüllen
Trage alle Antworten in `docs/BRANCHE.md` ein (YAML-Struktur beibehalten). Das ist die einzige inhaltliche Datei. Danach `lib/config.ts` daraus ableiten (typisiert via `SiteConfig`), inkl. Auflösung von `{stadt}`/`{region}` in SEO-Texten und `seo.siteUrl`.

### Schritt 3 – Generieren (Reihenfolge strikt einhalten)
Folge der „Reihenfolge der Implementierung" (17 Schritte) aus `docs/ANFORDERUNGEN.md`. Kurzfassung:
scaffold → globals.css/Theme → config/lib → shared → layout (inkl. Skip-Link) → Sektionen → page → Leistungsseiten → Formular+API → Rechtsseiten → SEO → Floating CTA → optionale Features → a11y-Check → Performance/Deploy.

### Schritt 4 – Qualitäts-Gates (vor „fertig")
- **Versions-Korrektheit:** Next 16 async `params`/`searchParams` (`await`), Tailwind 4 CSS-first (keine `tailwind.config.ts`), Import aus `motion/react` (nicht `framer-motion`).
- **Anti-Vibe-Coding:** Regeln aus `CLAUDE.md` und `docs/DESIGNSYSTEM.md` einhalten.
- **Barrierefreiheit:** Checkliste + Tests aus `docs/BARRIEREFREIHEIT.md` durchgehen (Tastatur, Kontrast, Fokus, Labels, reduced-motion).
- **DSGVO:** Checkliste aus `docs/ANFORDERUNGEN.md` → „DSGVO-Konformität" + „Cookie-Consent & Tracking". Schriften self-hosted, keine externen Requests ohne Einwilligung, Analytics/Pixel/Maps nur per Opt-in. Rechtstexte mit „keine Gewähr / keine Rechtsberatung"-Hinweis (sichtbar im Code).
- **Performance:** SSG/`generateStaticParams`, `next/image` korrekt, Core Web Vitals im Budget.

## Wichtige Stolpersteine (häufige Fehlerquellen)
- ❌ `params` synchron lesen → ✅ `const { slug } = await props.params`
- ❌ `tailwind.config.ts` anlegen → ✅ Theme in `app/globals.css` (`@theme`)
- ❌ `import { motion } from "framer-motion"` → ✅ `from "motion/react"`
- ❌ Firmendaten hardcoden → ✅ alles aus `lib/config.ts`
- ❌ `outline: none` ohne Fokus-Ersatz / Icon-Buttons ohne Label → ✅ siehe a11y-Doc
- ❌ Google Fonts / Fonts via CDN → ✅ self-hosted über `next/font`
- ❌ Analytics/Maps/Pixel laden vor Einwilligung → ✅ Opt-in-Consent-Gating

## Anpassung für andere Branchen
Nur `docs/BRANCHE.md` ändern (Branche, Firmendaten, Leistungen, Hero, FAQ, Lead Magnet, Bewertungen). Design, Technik, Animationen, Struktur bleiben identisch. Branchen-Farbpaletten: siehe Tabelle in `docs/DESIGNSYSTEM.md`.
