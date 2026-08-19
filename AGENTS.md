# Handwerker-Landingpage System – Agenten-Einstieg

> **Single Source of Truth ist [CLAUDE.md](CLAUDE.md).** Diese Datei existiert nur, damit tool-agnostische Agenten (die `AGENTS.md` lesen) denselben Einstieg finden. Sie wird bewusst kurz gehalten, um Doppelpflege zu vermeiden.

## Was du als Erstes tun musst
1. Lies **[CLAUDE.md](CLAUDE.md)** – Tech-Stack, goldene Regeln, Datei-Regeln, Anti-Vibe-Coding.
2. Lies **[docs/ANFORDERUNGEN.md](docs/ANFORDERUNGEN.md)** – vollständige Spec inkl. dem **interaktiven Setup-Prozess**, den du mit dem Kunden durchgehst, bevor du Code schreibst.
3. Halte dich an **[docs/DESIGNSYSTEM.md](docs/DESIGNSYSTEM.md)** und **[docs/BARRIEREFREIHEIT.md](docs/BARRIEREFREIHEIT.md)**.

## Kurzfassung
Lead-generierende Landingpage für deutsche Handwerksbetriebe. Branche & Inhalte kommen ausschließlich aus `docs/BRANCHE.md`. Stack: Next.js 16, TypeScript, Tailwind CSS 4 (CSS-first), shadcn/ui, Motion 12. Dieses Repo ist ein **Spezifikations-Kit** – es enthält bewusst keinen Code; du generierst ihn nach diesen Specs.

Nutzer von Claude Code starten den Ablauf am einfachsten über den Skill `handwerker-landingpage` (siehe `.claude/skills/`).

---

<sub>**Handwerker-Landingpage System v1.2.4** · Stand: 2026-06-02 · Lizenz: kostenlos nutzbar · Hilfe, Community & DFY-Projekte: [aibymike.de](https://aibymike.de)</sub>

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
