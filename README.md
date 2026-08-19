# Handwerker-Landingpage System

Ein **Spezifikations-Kit** zum Bauen lead-generierender Landingpages für deutsche Handwerksbetriebe – mit einem KI-Agenten (z.B. Claude Code) in Minuten statt Tagen.

Dieses Repo enthält bewusst **keinen Code**, sondern präzise Vorgaben (Specs). Der Agent liest sie, fragt dich kurz ab und generiert daraus eine fertige, moderne Website.

| | |
|---|---|
| **Version** | 1.2.4 |
| **Stand** | 2026-06-02 |
| **Lizenz** | Kostenlos nutzbar (Free to use) – privat & kommerziell. Weitergabe mit Quellenangabe. Ohne Gewähr; rechtliche Texte (Impressum/Datenschutz/AGB) sind Platzhalter und vom Kunden prüfen zu lassen. |
| **Stack** | Next.js 16 · TypeScript · Tailwind CSS 4 · shadcn/ui · Motion 12 · Vercel |

---

## So funktioniert's

1. **Repo öffnen** und KI-Agent (Claude Code) im Projektordner starten.
2. **Skill aufrufen:** `/handwerker-landingpage` (oder einfach „leg los, bau die Handwerker-Website").
3. **Setup-Dialog:** Der Agent stellt dir 9 kurze Fragen (Firma, Leistungen, Farben, Lead Magnet, Features …).
4. **Generierung:** Der Agent trägt alles in `docs/BRANCHE.md` ein und baut die komplette Seite nach den Specs.
5. **Deploy:** Auf Vercel veröffentlichen.

> Du willst es für eine andere Branche (Dachdecker, Elektriker, Maler …)? Nur `docs/BRANCHE.md` anpassen – Design, Technik und Struktur bleiben gleich.

## Was drin ist

- **Vollständige Seite:** Hero, Trust-Bar, Leistungen, Über-uns, Lead Magnet, Bewertungen, Einzugsgebiet, FAQ, CTA, Footer + dynamische Leistungs-Unterseiten, Kontakt & Rechtsseiten.
- **SEO:** SSG, dynamische Metadata, JSON-LD (LocalBusiness/Service/FAQPage), Sitemap & robots.txt, Canonicals.
- **Barrierefreiheit:** WCAG 2.2 AA verbindlich (BFSG-konform gedacht).
- **Anti-Vibe-Coding-Designsystem:** sieht nach Agentur aus, nicht nach AI-Baukasten.
- **Lead-Generierung:** 7 Conversion-Hebel, Click-to-Call überall, Spam-geschütztes Formular.

## Dateien

| Datei | Inhalt |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Regeln & Tech-Stack für den Agenten (Single Source of Truth) |
| [AGENTS.md](AGENTS.md) | Schlanker Einstieg für tool-agnostische Agenten |
| [docs/BRANCHE.md](docs/BRANCHE.md) | **Die einzige Datei, die du anpasst** – Firmendaten & Inhalte |
| [docs/ANFORDERUNGEN.md](docs/ANFORDERUNGEN.md) | Vollständige Spec (Setup, Sektionen, SEO, Deployment) |
| [docs/DESIGNSYSTEM.md](docs/DESIGNSYSTEM.md) | Design-System (Farben, Typo, Motion, Layout) |
| [docs/BARRIEREFREIHEIT.md](docs/BARRIEREFREIHEIT.md) | Verbindliche WCAG-2.2-AA-Regeln |
| [.claude/skills/handwerker-landingpage/](.claude/skills/handwerker-landingpage/SKILL.md) | Build-Skill, der den Ablauf kapselt |

---

## Hilfe, Unterstützung & DFY

Fragen, individuelle Anpassungen, Community oder **Done-for-you-Projekte** (wir bauen es komplett für dich)?

👉 **[aibymike.de](https://aibymike.de)** – Hilfe · Unterstützung · Community · DFY-Projekte

---

<sub>Handwerker-Landingpage System · v1.2.4 · Stand 2026-06-02 · Kostenlos nutzbar · von [AIbyMike](https://aibymike.de)</sub>
