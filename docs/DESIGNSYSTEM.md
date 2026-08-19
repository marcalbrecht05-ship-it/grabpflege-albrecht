# Design-System: Handwerker-Landingpage

> Dieses Design-System definiert die visuelle Sprache für alle Handwerker-Landingpages.
> Ziel: Professionell, vertrauenswürdig, handwerklich solide – **kein AI-Look**.

---

## Design-Philosophie

### Was wir sind:
- **Handwerk, nicht Startup.** Die Seite soll aussehen wie von einer seriösen Agentur gebaut – nicht wie ein SaaS-Dashboard.
- **Vertrauen statt Wow.** Ein Hausbesitzer mit Wasserrohrbruch braucht Klarheit, nicht Animationen.
- **Deutsch, nicht Silicon Valley.** Angemessen, sachlich, warm – keine übertriebene Lockerheit.

### Das Anti-Vibe-Coding-Manifest:

Typische AI-generierte Websites erkennt man sofort. Sie nutzen alle dasselbe visuelle Vokabular. Wir brechen bewusst damit:

| ❌ Vibe-Coding-Look | ✅ Unser Ansatz |
|---|---|
| `rounded-2xl` / `rounded-3xl` auf allem | Bewusster Mix: `rounded-none` für Cards, `rounded-md` für Buttons, `rounded-full` nur für Avatare |
| Lila/Violet als Akzent | Branchenspezifische Farben (Blau für Wasser/SHK, Rot für Dachdecker, etc.) |
| Gradient-Buttons (`bg-gradient-to-r`) | Solide Farben, klarer Hover-State mit Farbshift |
| `shadow-2xl` auf jeder Card | Kein Shadow oder maximal `shadow-sm`. Stattdessen: Border `border border-slate-200` |
| Glassmorphism (`backdrop-blur`) | Nur im Header beim Scrollen, nirgends sonst |
| Identische Card-Höhe überall | Bewusst unterschiedliche Sektionslayouts: Grid, Split, Full-Width wechseln ab |
| Poppins + alles rounded | Klare Grotesk-Font (siehe unten) + geometrische Strenge |
| Übertriebener Whitespace (`py-32 gap-12`) | Straffer: `py-16 md:py-20` für Sektionen, `gap-6 md:gap-8` für Grids |
| Emojis in Headlines | Icons aus Lucide, dezent in der Sekundärfarbe |
| Hero mit riesigem Gradient-Overlay | Hero mit echtem/realistischem Bild, dunkles Overlay (`bg-black/50`) ohne Farbstich |

---

## Typographie

### Font-Stack

> ⚠️ **DSGVO-Pflicht – Fonts immer selbst hosten, NIE extern laden.**
> `next/font` lädt die Schriften **zur Build-Zeit herunter und hostet sie selbst** – zur Laufzeit geht **kein** Request an Google-Server, es wird **keine IP** an Google übertragen. Das ist genau das, was nach dem bekannten Google-Fonts-Urteil (LG München I, 20.01.2022, Az. 3 O 17493/20) verlangt wird.
> - **Niemals** `<link href="fonts.googleapis.com">` oder `@import url(fonts.googleapis.com)` verwenden.
> - **Niemals** Schriften „via CDN" einbinden (z.B. Fontshare, Google Fonts CSS, Adobe Fonts per Web-Embed) – das überträgt wieder IPs an Dritte.
> - Custom-Fonts (z.B. Satoshi) nur als **lokale Datei** über `next/font/local` einbinden.

```typescript
// next/font - Fonts werden self-hosted (kein externer Request, keine IP an Google)
import { DM_Sans } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

// Primär: DM Sans – humanistische Grotesk, professionell aber nicht steril
const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

// Mono (für Zahlen, Badge-Akzente): JetBrains Mono
const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500"],
});
```

**Warum DM Sans?**
- Wird selten in AI-generierten Seiten genutzt (dort dominieren Inter, Poppins, Geist)
- Hat Charakter, bleibt aber lesbar
- Gute Gewichtung zwischen Freundlichkeit und Professionalität
- Hervorragend für deutsche Texte (Umlaute, lange Wörter)

**Alternative Fonts (alle akzeptabel) – aber immer self-hosted:**
- `Outfit` – Modern, geometrisch, unterschätzt (via `next/font/google`, self-hosted)
- `Satoshi` – Premium-Feel, beliebt bei Agenturen → **nur** als lokale Datei über `next/font/local` (NICHT via Fontshare-CDN)
- `General Sans` – Clean mit Charakter → **nur** als lokale Datei über `next/font/local` (NICHT via CDN)

> Faustregel: Wenn eine Schrift nicht über `next/font/google` (self-hosted) verfügbar ist, lade die `.woff2`-Datei herunter und binde sie über `next/font/local` ein. Kein externer Font-Request – niemals.

### Typographie-Skala

```css
/* Tailwind-Klassen – NICHT custom font-sizes */
h1 / Hero:       text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]
h2 / Sektion:    text-3xl md:text-4xl font-bold tracking-tight
h3 / Card-Titel: text-xl md:text-2xl font-bold
h4 / Sub-Titel:  text-lg font-medium
Body:             text-base leading-relaxed
Small:            text-sm text-slate-500
```

**Wichtig:**
- Headlines IMMER `tracking-tight` (wirkt professioneller als Standard-Tracking)
- Body IMMER `leading-relaxed` (bessere Lesbarkeit bei deutschen Texten)
- Kein `font-black` oder `font-extrabold`, maximal `font-bold`

---

## Copy & Tonalität (Anti-KI-Sprache)

Texte sind genauso ein KI-Tell wie das Design. Die Copy soll klingen, als hätte sie ein Mensch aus dem Betrieb geschrieben, nicht ein Sprachmodell. Gilt für **alle sichtbaren Texte** (Hero, Sektionen, Leistungsseiten, FAQ, Buttons) und für die Inhalte in `docs/BRANCHE.md`.

### Verboten
- ❌ **Gedankenstriche (Em-Dash `—` und En-Dash `–`) als Stilmittel / Einschub.** Das ist der auffälligste KI-Tell. Stattdessen: normaler Punkt, Komma oder Klammern.
  - ❌ „Wir sind für Sie da – schnell, zuverlässig und fair."
  - ✅ „Wir sind für Sie da: schnell, zuverlässig und fair." oder „Wir sind für Sie da. Schnell, zuverlässig, fair."
- ❌ Aufzählungen mit vorangestelltem Gedankenstrich im Fließtext.
- ❌ KI-Floskeln: „nahtlos", „maßgeschneidert", „in der heutigen schnelllebigen Welt", „wir verstehen, dass…", „Ihr verlässlicher Partner für alle Ihre Bedürfnisse", „heben Sie sich ab", „revolutionär", „Exzellenz", „Reise/Journey".
- ❌ Drei-Punkte-Trias-Rhythmus in jedem Satz („schnell, sauber und zuverlässig" überall).
- ❌ Überschriften, die mit Doppelpunkt-Marketing arbeiten („Heizung: Ihre Lösung für Wärme").
- ❌ Aufgesetzte Begeisterung / Ausrufezeichen-Inflation.

### Erwünscht
- ✅ **Normale Satzzeichen:** Punkt, Komma, Doppelpunkt, Klammern. Wo ein Einschub nötig ist, lieber zwei Sätze.
- ✅ Konkret statt generisch: „Wir tauschen Ihre alte Gastherme in der Regel an einem Tag." statt „Wir bieten erstklassige Heizungslösungen."
- ✅ Handwerker-Sprache: sachlich, direkt, regional, in der Sie-Form. So, wie der Meister es am Telefon sagen würde.
- ✅ Zahlen und Fakten statt Adjektive (60 Minuten Anfahrt, seit 2005, 87 Google-Bewertungen).

> **Hinweis zu Bindestrichen:** Echte Bindestriche in zusammengesetzten Wörtern sind deutsche Rechtschreibung und bleiben erlaubt (z.B. „Heizungs-Check", „SHK-Notdienst", „24/7-Service"). Verboten ist nur der **Gedankenstrich** als stilistisches Mittel.

---

## Tailwind 4 Setup (CSS-first – KEINE `tailwind.config.ts`)

> **Wichtig (Tailwind 4, Stand 2026):** Es gibt keine JavaScript-Config mehr. Theme, Farben und Tokens werden direkt in `app/globals.css` definiert. shadcn/ui legt dort ebenfalls seine Variablen ab. Veraltete v3-Syntax (`@tailwind base/components/utilities`, `tailwind.config.ts`, `theme.extend.colors`) **nicht** verwenden.

Grundgerüst von `app/globals.css`:

```css
@import "tailwindcss";

/* Dark-Mode-Variante (shadcn-Konvention) – nur falls Dark Mode genutzt wird */
@custom-variant dark (&:is(.dark *));

/* Branchen-/Designfarben als CSS-Variablen.
   Werte kommen aus lib/config.ts → colors (siehe BRANCHE.md / Branchen-Palette). */
:root {
  --color-primary: #1a365d;          /* Dunkelblau – Vertrauen, Seriosität */
  --color-primary-light: #2b5ea7;    /* Hover-States */
  --color-primary-lighter: #e8f0fe;  /* Hintergründe */

  --color-accent: #d97706;           /* Amber-600 – CTA, Notdienst, Highlights */
  --color-accent-light: #f59e0b;     /* Hover */
  --color-accent-lighter: #fef3c7;   /* Badge-Hintergründe */

  --color-emergency: #dc2626;        /* Rot – Notdienst */
  --color-success: #16a34a;          /* Grün – Erfolg/Bestätigung */
}

/* @theme inline macht die Variablen als Utility-Klassen verfügbar:
   bg-primary, text-accent, border-primary-lighter, ... */
@theme inline {
  --color-primary: var(--color-primary);
  --color-primary-light: var(--color-primary-light);
  --color-primary-lighter: var(--color-primary-lighter);
  --color-accent: var(--color-accent);
  --color-accent-light: var(--color-accent-light);
  --color-accent-lighter: var(--color-accent-lighter);
  --color-emergency: var(--color-emergency);
  --color-success: var(--color-success);

  --font-sans: var(--font-sans);     /* von next/font gesetzt (siehe Typographie) */
  --font-mono: var(--font-mono);
}

/* Neutraltöne: Tailwinds eingebaute slate-Skala nutzen (bg-slate-50, text-slate-700 …) –
   nicht gray. Slate hat mehr Tiefe. */

html {
  scroll-behavior: smooth;
}

/* Globaler, gut sichtbarer Fokus-Ring für Tastaturnutzer (a11y, Pflicht) */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

::selection {
  background: var(--color-primary-lighter);
}
```

> shadcn/ui-Komponenten bringen zusätzlich `--background`, `--foreground`, `--primary` etc. (oklch) in `:root`/`.dark` mit. Diese nicht entfernen – unsere Branchenfarben (`--color-primary` …) leben daneben und werden in eigenen Komponenten/Sektionen verwendet.

### Standard-Palette als Referenz (SHK / Wasser & Wärme)

| Token | Hex | Verwendung |
|---|---|---|
| `primary` | `#1a365d` | Dunkelblau – Vertrauen, Seriosität |
| `primary-light` | `#2b5ea7` | Hover-States |
| `primary-lighter` | `#e8f0fe` | Hintergründe |
| `accent` | `#d97706` | Amber-600 – CTA, Notdienst, Highlights |
| `accent-light` | `#f59e0b` | Hover |
| `accent-lighter` | `#fef3c7` | Badge-Hintergründe |
| `slate-50` | `#f8fafc` | Alternierende Sektionen |
| `slate-100` | `#f1f5f9` | Cards ohne Shadow |
| `slate-200` | `#e2e8f0` | Borders statt Shadows |
| `slate-900` | `#0f172a` | Headlines / dunkler Footer |
| `slate-700` | `#334155` | Fließtext |
| `slate-500` | `#64748b` | Sekundärtext |
| `emergency` | `#dc2626` | Rot – Notdienst |
| `success` | `#16a34a` | Grün – Erfolg/Bestätigung |

> ⚠️ **Kontrast-Check (a11y, Pflicht):** Akzent-Amber `#d97706` auf Weiß hat ~3,4:1 – das reicht **nicht** für normalen Fließtext (4,5:1). Amber daher nur für große/fette Schrift (≥ 24px bzw. ≥ 18,66px bold) oder als Button-**Hintergrund mit weißer/dunkler Schrift** verwenden, deren Kombination geprüft ist. Für CTA-Buttons: weißer Text auf `accent` prüfen – ggf. `accent` minimal abdunkeln. Details: `docs/BARRIEREFREIHEIT.md`.

### Branchenspezifische Paletten-Vorschläge

| Branche | Primary | Accent | Begründung |
|---|---|---|---|
| **SHK** | `#1a365d` (Dunkelblau) | `#d97706` (Amber) | Wasser + Wärme |
| **Dachdecker** | `#7f1d1d` (Dunkelrot) | `#1a365d` (Blau) | Ziegel + Himmel |
| **Elektriker** | `#1e3a5f` (Stahlblau) | `#eab308` (Gelb) | Strom-Assoziation |
| **Maler** | `#1e293b` (Anthrazit) | `#2563eb` (Blau) | Neutral + Frische |
| **Schreiner** | `#451a03` (Dunkelbraun) | `#d97706` (Amber) | Holz + Wärme |
| **Gartenbau** | `#14532d` (Dunkelgrün) | `#a16207` (Gold) | Natur + Qualität |

---

## Border-Radius Strategie

**Kein einheitlicher Radius!** Bewusste Variation erzeugt visuelles Interesse:

```css
/* Buttons */
.btn-primary:    rounded-md          /* 6px – knackig, nicht zu weich */
.btn-secondary:  rounded-md

/* Cards */
.card:           rounded-none        /* 0px – clean, kantig, professionell */
                 /* ODER */ rounded-sm /* 4px – minimal, wenn es zu hart wirkt */

/* Input-Felder */
.input:          rounded-md          /* 6px – passend zu Buttons */

/* Badges */
.badge:          rounded-full        /* Pill – Kontrast zu kantigen Cards */

/* Bilder */
.img-hero:       rounded-none        /* Vollbreite Heroes: keine Rundung */
.img-card:       rounded-sm          /* In Cards: minimal */

/* Avatare */
.avatar:         rounded-full        /* Immer rund */
```

**Faustregel:** Je größer das Element, desto weniger Radius.

---

## Shadow-Strategie

**Weniger ist mehr.** Shadows nur dort, wo sie funktional Tiefe kommunizieren:

```css
/* Standard-Cards: KEIN Shadow, stattdessen Border */
.card:           border border-slate-200 bg-white
                 hover:border-slate-300 transition-colors

/* Elevated Cards (z.B. Testimonials): Minimaler Shadow */
.card-elevated:  shadow-sm border border-slate-100

/* Header (beim Scrollen): Einziger stärkerer Shadow */
.header-scroll:  shadow-md bg-white/90 backdrop-blur-sm

/* Floating CTA (mobil): Shadow für "schwebt über Content" */
.floating-cta:   shadow-lg

/* Alles andere: Kein Shadow */
```

---

## Sektions-Rhythmus

Die Sektionen auf der Hauptseite sollen **nicht** alle gleich aussehen. Wechsle bewusst zwischen verschiedenen Layouts:

```
HEADER          → Sticky, transparent → bg-white on scroll
─────────────────────────────────────────────────────
HERO            → Full-Width, dunkles Bild, weißer Text
                  Layout: Zentriert oder Links-ausgerichtet
─────────────────────────────────────────────────────
TRUST BAR       → Schmaler Streifen, bg-primary, weiße Icons+Zahlen
                  Kein eigener Hintergrund-Wechsel, direkt am Hero dran
─────────────────────────────────────────────────────
LEISTUNGEN      → bg-white, Grid 3-Spalten, Cards mit Border
                  Layout: Cards mit Icon oben, NICHT seitlich
─────────────────────────────────────────────────────
ÜBER UNS        → bg-slate-50, Split: Text links, Bild rechts
                  Bild NICHT rounded, sondern kantig
─────────────────────────────────────────────────────
LEAD MAGNET     → bg-primary (dunkel), weißer Text
                  Layout: Zentriert, Formular darunter
─────────────────────────────────────────────────────
BEWERTUNGEN     → bg-white, Slider ODER 3er-Grid
                  Google-Logo + Sterne prominent
─────────────────────────────────────────────────────
EINZUGSGEBIET   → bg-slate-50, Badges als Chips
─────────────────────────────────────────────────────
FAQ             → bg-white, Akkordeon linksbündig, max-w-3xl
─────────────────────────────────────────────────────
CTA BANNER      → bg-primary, zentriert, 2 Buttons
─────────────────────────────────────────────────────
FOOTER          → bg-slate-900, 4-Spalten, helle Schrift
```

**Farbrhythmus:** weiß → dunkel → weiß → hell → dunkel → weiß → hell → weiß → dunkel → sehr dunkel

---

## Animationen (Framer Motion)

### Prinzipien:
- **Subtil.** Der Nutzer soll die Animation fühlen, nicht sehen.
- **Einmalig.** Jede Animation nur 1x abspielen (`viewport={{ once: true }}`)
- **Schnell.** Maximal 0.5s Duration für Reveals
- **Kein Bounce.** Kein `type: "spring"` mit sichtbarem Überschwinger
- **Kein Stagger-Overload.** Max 4–5 gestaggerte Elemente pro Sektion

### Animations-Presets (`lib/animations.ts`):

> **Import-Hinweis (Motion 12, Stand 2026):** Das Paket heißt `motion`, der React-Einstieg ist `motion/react`. **Nicht** mehr aus `framer-motion` importieren. Typen (`Variants`) kommen ebenfalls aus `motion/react`.
> ```typescript
> import { motion } from "motion/react";
> import type { Variants } from "motion/react";
> ```

```typescript
import type { Variants } from "motion/react";

// Standard-Reveal (für die meisten Sektionen)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Für Split-Layouts (Text links)
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Für Split-Layouts (Bild rechts)
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Container für gestaggerte Kinder
export const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Für Hero-Elemente (etwas langsamer, mehr Versatz)
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Für den Trust-Bar Counter
export const counterReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Für den Emergency-Banner Pulse
export const pulse = {
  scale: [1, 1.15, 1],
  opacity: [1, 0.7, 1],
  transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
};

// NICHT VERWENDEN:
// ❌ spring mit bounce
// ❌ duration > 0.6s
// ❌ y/x offset > 40px
// ❌ scale-Animationen auf große Elemente
// ❌ rotate-Animationen
// ❌ Endlos-Animationen (außer pulse auf Notdienst-Punkt)
```

### RevealOnScroll Wrapper:

```typescript
// Jede Sektion wird in diesen Wrapper gepackt:
<RevealOnScroll>
  <SectionContent />
</RevealOnScroll>

// Props:
// variants?: Variants (default: fadeUp)
// className?: string
// delay?: number (default: 0)

// Implementierung:
// - Nutzt motion.div mit whileInView="visible" initial="hidden"
// - viewport={{ once: true, amount: 0.2 }}
// - Kein Intersection Observer manuell – Motion macht das
// - "use client" (whileInView ist clientseitig)
```

**Pflicht – `prefers-reduced-motion` respektieren (a11y):**
Nutzer, die reduzierte Bewegung eingestellt haben, dürfen keine Reveal-/Slide-Animationen sehen. Per Motion-Hook abfangen und in diesem Fall sofort den sichtbaren Zustand rendern:

```tsx
import { useReducedMotion } from "motion/react";

export function RevealOnScroll({ children, variants = fadeUp, className }: RevealOnScrollProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>; // ohne Animation
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
```
Der pulsierende Notdienst-Punkt wird bei `prefers-reduced-motion` ebenfalls statisch dargestellt.

---

## Komponenten-Styling-Regeln

### Buttons (shadcn `Button`):

```tsx
// Primary CTA – Die einzige Farbe die "knallt"
<Button className="bg-accent hover:bg-accent-light text-white rounded-md px-6 py-3 font-medium transition-colors">
  Kostenlos anfragen
</Button>

// Secondary CTA
<Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md px-6 py-3 font-medium transition-colors">
  Notdienst anrufen
</Button>

// Ghost (z.B. "Mehr erfahren →")
<Button variant="ghost" className="text-primary hover:text-primary-light underline-offset-4 hover:underline p-0">
  Mehr erfahren →
</Button>
```

**Keine Gradient-Buttons. Keine Icon-only Buttons ohne Label. Keine Buttons mit Shadow.**

### Cards:

```tsx
// Standard Service-Card
<Card className="border border-slate-200 bg-white p-6 hover:border-primary/30 transition-colors group">
  <CardHeader className="p-0 mb-4">
    <div className="w-10 h-10 flex items-center justify-center bg-primary-lighter rounded-md text-primary mb-3">
      <Icon className="w-5 h-5" />
    </div>
    <CardTitle className="text-xl font-bold">{title}</CardTitle>
  </CardHeader>
  <CardContent className="p-0">
    <p className="text-slate-600 leading-relaxed">{description}</p>
    <Button variant="ghost" className="mt-4 p-0 text-primary group-hover:underline">
      Mehr erfahren →
    </Button>
  </CardContent>
</Card>

// NICHT: rounded-2xl, shadow-lg, gradient-border, hover:scale-105
```

### Trust Bar:

```tsx
// Direkt unter dem Hero, schmaler Streifen
<div className="bg-primary text-white py-4">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    {metrics.map(m => (
      <div key={m.label}>
        <span className="font-mono text-2xl font-bold">{m.value}</span>
        <span className="block text-sm text-white/70 mt-1">{m.label}</span>
      </div>
    ))}
  </div>
</div>

// font-mono für Zahlen = technisch, präzise – passt zum Handwerk
```

---

## Responsive Breakpoints

```css
/* Tailwind Standard-Breakpoints */
sm:  640px   → Kleine Anpassungen
md:  768px   → Tablet-Layout (2-Spalten Grids)
lg:  1024px  → Desktop-Layout (3-Spalten Grids, Split-Layouts)
xl:  1280px  → Max-Width Container (max-w-6xl)

/* Container: NICHT max-w-7xl, sondern max-w-6xl für strafferes Layout */
/* max-w-7xl (1280px) wirkt bei SHK-Seiten oft zu weit/leer */
```

---

## Bild-Strategie

```typescript
// Hero-Bild:
// → next/image mit priority, fill, object-cover
// → Dunkles Overlay: bg-black/50 (NICHT bg-primary/50 oder Gradient)
// → Bild-Vorschläge: Handwerker bei der Arbeit, modernes Bad, Heizungsraum
// → KEIN generisches Stock-Foto mit lächelndem Mann im blauen Overall

// Service-Card Icons:
// → Lucide Icons, 20x20px, in primary-Farbe
// → In einem quadratischen Container mit bg-primary-lighter

// Über-uns Bild:
// → Platzhalter: Neutraler grauer Kasten mit "Ihr Teamfoto" Text
// → Aspekt: 4:3 oder 16:9
// → rounded-none oder rounded-sm (NICHT rounded-2xl)

// Platzhalter generell:
// → <div className="bg-slate-200 aspect-video flex items-center justify-center text-slate-400">
//     Bild-Platzhalter
//   </div>
```

---

## Zusammenfassung: Die 10 Design-Gebote

1. **Kantig vor Rund** – Cards ohne Radius, Buttons mit minimalem Radius
2. **Border vor Shadow** – `border-slate-200` statt `shadow-lg`
3. **Solide vor Gradient** – Einfarbige Buttons, keine Verläufe
4. **Straff vor Luftig** – `py-16` statt `py-32`, `gap-6` statt `gap-12`
5. **DM Sans vor Inter** – Charakter vor Neutralität
6. **Mono für Zahlen** – JetBrains Mono für Trust-Zahlen und Badges
7. **Slate vor Gray** – Mehr Tiefe in den Neutraltönen
8. **Dunkelblau vor Lila** – Branchenfarben vor Trend-Farben
9. **Weniger Animieren** – 0.45s, einmal, kein Bounce, `prefers-reduced-motion` respektieren
10. **Handwerk vor Startup** – Die Seite verkauft Vertrauen, nicht Innovation
11. **Zugänglich vor hübsch** – Kontrast ≥ 4,5:1, sichtbarer Fokus, Tastatur-bedienbar. Schönheit, die jemanden aussperrt, ist kein gutes Design. Verbindlich: `docs/BARRIEREFREIHEIT.md`

---

<sub>**Handwerker-Landingpage System v1.2.4** · Stand: 2026-06-02 · Lizenz: kostenlos nutzbar · Hilfe, Community & DFY-Projekte: [aibymike.de](https://aibymike.de)</sub>
