# Handwerker-Landingpage System

## Kontext
Lead-generierende Landingpage für deutsche Handwerksbetriebe. Die Branche und alle Inhalte werden ausschließlich aus `docs/BRANCHE.md` geladen. Für Seitenstruktur, Design und technische Anforderungen: siehe `docs/ANFORDERUNGEN.md`.

> **Dieses Repo ist ein Spezifikations-Kit, kein fertiges Projekt.** Es enthält bewusst keinen Code. Der KI-Agent liest diese Specs, führt den Setup-Dialog mit dem Kunden durch (siehe `docs/ANFORDERUNGEN.md` → „Interaktiver Setup-Prozess") und generiert daraus die fertige Next.js-Seite. Ziel: Alle Entscheidungen sind hier so präzise vorgegeben, dass der Agent beim Loslegen direkt alles richtig macht.

## Tech-Stack (Stand 2026)
- **Next.js 16** (App Router, kein Pages Router; Turbopack ist Default; React 19.2)
- **TypeScript** (strict mode, min. 5.1)
- **Tailwind CSS 4** (CSS-first via `@theme`, **keine** `tailwind.config.ts` mehr)
- **shadcn/ui** (alle UI-Elemente; `npx shadcn@latest`, Tailwind-v4-kompatibel)
- **Motion 12** (vormals Framer Motion – Paket `motion`, Import aus `motion/react`)
- **Node.js 20.9+** (Voraussetzung für Next 16)
- **Vercel** (Deployment)

> ⚠️ **Versions-Fallen, die der Agent kennen muss:**
> - `params` / `searchParams` / `cookies()` / `headers()` sind in Next 16 **immer async** (Promises) → `await` nötig.
> - Tailwind 4 wird **in CSS** konfiguriert (`@import "tailwindcss"` + `@theme`), nicht in einer JS-Config.
> - Motion importiert man aus `motion/react`, **nicht** aus `framer-motion`.
> - `middleware.ts` heißt in Next 16 `proxy.ts` (brauchen wir hier i.d.R. nicht).
> - Vollständige Details: `docs/ANFORDERUNGEN.md` und `docs/DESIGNSYSTEM.md`.

## Goldene Regeln

1. **Firmendaten nie hardcoden** – alles aus `lib/config.ts` importieren
2. **shadcn/ui für ALLES** – keine eigenen Button/Card/Input Komponenten
3. **Animationen aus `lib/animations.ts`** – nie inline definieren
4. **Mobile-First** – alle Layouts von mobil nach desktop denken
5. **Click-to-Call** auf JEDER Telefonnummer (`<a href="tel:">`)
6. **Deutsche Texte**, DSGVO-konform, Sie-Form (kein „Du")
7. **Bilder via `next/image`** mit `priority` für Above-the-Fold
8. **Barrierefreiheit ist Pflicht, nicht Kür** – WCAG 2.2 AA. Details: `docs/BARRIEREFREIHEIT.md`
9. **DSGVO by default** – Schriften self-hosted (kein Google-Fonts-/CDN-Request), keine externen Drittanbieter-Requests ohne Einwilligung, Analytics/Pixel/Maps nur per Opt-in-Consent. Details: `docs/ANFORDERUNGEN.md` → „DSGVO-Konformität" & „Cookie-Consent & Tracking"
10. **Rechtstexte = Platzhalter** – Impressum/Datenschutz/AGB ohne Gewähr, keine Rechtsberatung; Hinweis sichtbar im Code, vom Kunden anwaltlich prüfen lassen

## Anti-Vibe-Coding Regeln (WICHTIG)

Die Seite soll sich von typischen AI-generierten Websites abheben. Folgende Dinge sind VERBOTEN:

- ❌ `rounded-2xl` oder `rounded-3xl` überall – stattdessen: `rounded-none` bis `rounded-lg`, bewusst eingesetzt
- ❌ Lila/Violet als Akzentfarbe
- ❌ Übertriebene Gradients auf Buttons oder Hintergründen
- ❌ `shadow-2xl` auf jeder Card
- ❌ Generische Hero-Bilder mit Gradient-Overlay in Lila/Blau
- ❌ Identische Card-Layouts für jede Sektion
- ❌ Poppins, Inter in Kombination mit zu viel Rounded überall
- ❌ Zu viel Spacing (nicht jede Sektion braucht `py-32`)
- ❌ Neon-Farben, Glassmorphism, übertriebene Blur-Effekte
- ❌ Emojis als Design-Element in Überschriften
- ❌ **Gedankenstriche (Em-Dash `—` / En-Dash `–`) in der Copy** – der auffälligste KI-Tell. Stattdessen Punkt, Komma oder Klammern. (Bindestriche in zusammengesetzten Wörtern bleiben erlaubt.)
- ❌ KI-Floskeln in Texten („nahtlos", „maßgeschneidert", „Ihr verlässlicher Partner für alle Ihre Bedürfnisse" etc.)

Stattdessen, siehe `docs/DESIGNSYSTEM.md` (inkl. Abschnitt „Copy & Tonalität") für das vollständige Design-System.

## Datei-Regeln (gelten für den generierten Code)

### `app/**/*.tsx` (App Router)
- Jede `page.tsx` MUSS `generateMetadata()` oder `export const metadata` haben (Titel `"{Seite} | {Firmenname}"`, Description < 160 Zeichen mit Ort, Canonical, OG-Bild).
- `params`/`searchParams` sind Promises → `const { slug } = await props.params`.
- Statisch rendern (SSG) wo möglich; `generateStaticParams()` für `leistungen/[slug]`.
- `"use client"` NUR in interaktiven Komponenten, nie auf Page-Ebene.
- Sektionen als separate Komponenten importieren, nicht inline.
- JSON-LD: `LocalBusiness` in `layout.tsx`, `Service`/`FAQPage` auf Unterseiten.
- `app/sitemap.ts`, `app/robots.ts` automatisch generieren.
- `app/api/contact/route.ts`: nur POST, Zod-Validierung, Honeypot + Rate-Limiting.

### `**/*.tsx` (Komponenten)
- Function Components, Props als separates `interface`, named `export function` (kein `export default` außer Pages).
- Server Components als Default; `"use client"` nur bei Formularen / Motion / Event-Handlern.
- Tailwind-Klassen direkt (keine CSS Modules, kein `@apply`).
- Motion-Variants aus `lib/animations.ts`, `RevealOnScroll`-Wrapper, `viewport={{ once: true, amount: 0.2 }}`.
- Bilder immer `next/image` mit `alt`; Hero mit `priority`.
- `prefers-reduced-motion` respektieren (siehe `docs/BARRIEREFREIHEIT.md`).

### `lib/**/*.ts`
- `config.ts`: zentrale, typisierte Datenquelle (`SiteConfig`); löst `{stadt}`/`{region}` in SEO-Texten auf.
- `animations.ts`: Motion-`Variants`; Duration ≤ 0.6s, Offset ≤ 40px, kein sichtbarer Spring-Bounce.
- `services-data.ts`: Array aus `BRANCHE.md` → `leistungen`; URL-sichere Slugs (lowercase, keine Umlaute).
- `utils.ts`: reine Hilfsfunktionen + `cn()` (clsx + tailwind-merge).

### CSS (`app/globals.css`)
- Tailwind 4 CSS-first: `@import "tailwindcss";` + `@theme { … }` (siehe `docs/DESIGNSYSTEM.md`). Keine JS-Config.
- Container `max-w-6xl` (nicht `max-w-7xl`).
- `html { scroll-behavior: smooth }` + `data-scroll-behavior="smooth"` am `<html>` (Next 16 überschreibt sonst nicht mehr automatisch).
- Globale Fokus-Styles für Tastatur-Navigation (siehe a11y-Doc).

## Projekt-Struktur (Ziel des generierten Projekts)
```
app/                          → Seiten (App Router)
  layout.tsx                  → Root Layout (Header + Footer, Font, JSON-LD)
  globals.css                 → Tailwind 4 + Theme (CSS-first)
  page.tsx                    → Hauptseite (Landingpage)
  leistungen/[slug]/page.tsx  → Dynamische Leistungs-Unterseiten
  kontakt/page.tsx            → Kontakt
  impressum/page.tsx          → Rechtlich
  datenschutz/page.tsx        → Rechtlich
  agb/page.tsx                → Rechtlich
  sitemap.ts / robots.ts      → SEO
  api/contact/route.ts        → Kontaktformular API
components/
  layout/                     → Header, Footer, MobileNav, EmergencyBanner
  sections/                   → HeroSection, ServicesGrid, TrustBar, etc.
  shared/                     → RevealOnScroll, AnimatedCounter, FloatingCTA
  ui/                         → shadcn/ui Komponenten
lib/
  config.ts                   → Zentrale Konfiguration (aus BRANCHE.md)
  animations.ts               → Motion Presets
  services-data.ts            → Leistungsdaten
  utils.ts                    → Hilfsfunktionen
```

## Referenzen
- Branche & Inhalte: [docs/BRANCHE.md](docs/BRANCHE.md)
- Design-System: [docs/DESIGNSYSTEM.md](docs/DESIGNSYSTEM.md)
- Barrierefreiheit (WCAG 2.2 AA): [docs/BARRIEREFREIHEIT.md](docs/BARRIEREFREIHEIT.md)
- Vollständige Spec: [docs/ANFORDERUNGEN.md](docs/ANFORDERUNGEN.md)
- Build-Skill (Claude Code): [.claude/skills/handwerker-landingpage/SKILL.md](.claude/skills/handwerker-landingpage/SKILL.md)

---

<sub>**Handwerker-Landingpage System v1.2.4** · Stand: 2026-06-02 · Lizenz: kostenlos nutzbar (privat & kommerziell, Weitergabe mit Quellenangabe, ohne Gewähr) · Hilfe, Community & DFY-Projekte: [aibymike.de](https://aibymike.de)</sub>
