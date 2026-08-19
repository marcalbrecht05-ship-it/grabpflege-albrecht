# Grabpflege Albrecht — Design System

> Andenken mit Sorgfalt bewahren.

Grabpflege Albrecht is a German grave-care business (*Grabpflege*): a small family firm that maintains graves on behalf of families — seasonal planting, watering, gravestone cleaning, year-round care contracts. The customers are almost always bereaved relatives, often elderly, often living far from the cemetery. Every design decision in this system serves two feelings at once: **dignity** (nothing loud, nothing salesy, nothing playful) and **reliability** (clear prices, clear steps, legible type, generous hit areas).

## Sources given

| Source | Notes |
| --- | --- |
| `uploads/Logo.PNG` (1254×1254) | The **only** material provided. Everything below is derived from it plus the tagline. |
| Company description | "Grabpflege Albrecht – Andenken mit Sorgfalt bewahren." |

No website, codebase, Figma file, deck or photography was supplied. There is therefore **no existing product to recreate**: the UI kit in `ui_kits/website/` is a proposal built from these foundations, and all copy, prices, addresses and phone numbers in it are placeholder.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Single entry point for consumers — `@import` list only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css` |
| `assets/` | `logo-full.png`, `logo-mark.png`, `logo-wordmark.png` (cropped from the supplied artwork) |
| `guidelines/` | 21 specimen cards (Brand, Colors, Type, Spacing) |
| `components/` | `core/`, `forms/`, `feedback/`, `navigation/` — React primitives + `.d.ts` + `.prompt.md` |
| `ui_kits/website/` | Four-route click-through marketing site |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skill wrapper for use in Claude Code |

### Components

Namespace: `window.GrabpflegeAlbrechtDesignSystem_a7ca22`.

- **core/** — `Button`, `IconButton`, `Card`, `Badge`, `Tag`, `SectionHeading`, `Rule`, `Icon`, `Logo`
- **forms/** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **feedback/** — `Dialog`, `Toast`, `Tooltip`
- **navigation/** — `Tabs`, `NavLink`

**Intentional additions** (no source defined a component inventory, so a standard set was authored; these four go beyond it):
- `Icon` — wrapper over the substituted Lucide set so every glyph inherits `currentColor`.
- `Logo` — renders the supplied artwork; exists so nobody redraws or recolours the mark.
- `SectionHeading` + `Rule` — the eyebrow / display-heading / hairline-rule pattern is the single most repeated composition in the brand; codifying it prevents drift.

## Content fundamentals

**Language.** German, always. Formal **Sie**, never *du*. The company speaks as **wir**; the reader is **Sie**. Never "ich".

**Register.** Plain, concrete, unhurried. Prefer the everyday word over the industry word (*Grabstätte* over *Grabmalanlage*), and a fact over an adjective. Short sentences; one idea each. No superlatives ("beste", "einzigartig"), no urgency ("jetzt", "nur noch"), no marketing verbs ("optimieren", "gestalten Sie Ihr…").

**Tone examples.**

| Do | Don't |
| --- | --- |
| "Wir übernehmen die Pflege und melden uns, wenn etwas zu entscheiden ist." | "Jetzt Top-Angebot sichern – Dein Grab wird zum Hingucker!" |
| "Die Besichtigung und der Pflegevorschlag sind kostenfrei." | "Kostenloses Beratungsgespräch – 100 % unverbindlich!!" |
| "Nach jeder Pflege erhalten Sie ein Foto." | "Volle Transparenz dank digitalem Reporting." |
| "ab 39 € / Monat" | "Nur 39 €!" |

**Death and grief.** Named plainly, never euphemised into vagueness and never dramatised. Say *Grab*, *Grabstätte*, *Verstorbene*. Avoid *Ruhestätte für die Ewigkeit*, avoid *Abschied nehmen* as a sales frame. The tagline sets the ceiling of sentiment: *Andenken mit Sorgfalt bewahren* — memory, care, that's it.

**Casing.** Sentence case in body copy and headings (German capitalisation rules aside). ALL CAPS with wide tracking only for eyebrows, labels, buttons and nav — never for a sentence. Never all-lowercase styling.

**Punctuation.** German quotation marks „so“. En dash with spaces for asides – like this. **No exclamation marks anywhere.** Numerals as digits; prices as `39 €`, dates as `12. Juni 2026`, phone as `0 92 71 / 44 08`.

**Emoji: never.** Not in UI, not in email, not in social. Icons carry that job.

**Microcopy.** Buttons name the action from the customer's side: *Pflege anfragen*, *Termin anfragen*, *Beispielbericht anfordern* — not *Absenden* or *Weiter*. Hints reassure rather than instruct: "Feld und Nummer genügen."

## Visual foundations

**Palette.** Three families, all sampled from the logo. **Schiefer** (`#3D3D3C`) is the headstone charcoal — text, inverse bands, footer. **Moos** (`#4B5B36`) is the foliage green — the single accent: primary buttons, eyebrows, icons, rules, active states. **Stein** is a warm off-white family (`#FDFDFC` → `#BFB9A9`) for pages, cards and hairlines. **Sand** (`#C9A961`) is a candle-warm accent used sparingly — warning states, an occasional highlight. Never more than one accent colour in a view. Status colours are deliberately desaturated: no bright alert red, no signal green.

**Type.** Two families. **Cormorant Garamond** (display serif) for every heading, price, pull-quote and the wordmark voice — light/regular weights only, tight tracking, italic for quotes, `font-variant: small-caps` with .10em tracking when echoing the logo. **Montserrat** for everything else: body at 300 weight / 17px / 1.65 line-height, and uppercase .22em-tracked at 11–12px for eyebrows, labels, buttons and nav — the treatment of the logo's tagline. Prose max 64ch. Nothing below 13px except the 11px tracked labels.

**Spacing & layout.** 4px base. 24 (card padding) / 48 / 96 (section rhythm) carry the page. Content lives in a 1120px container with 32px gutters; the header is 84px and sticky on a blurred paper background. Layout is calm and left-aligned by default; centred only for a section opener, a quote or a CTA band. Alternate section tones — paper, surface, moss tint, charcoal — at most two background colours visible at once.

**Corners & shape.** Near-square: 2/3/5/8px. Buttons and inputs 3px, cards 5px. The pill radius is reserved for tags and switches. **The arch** — the silhouette of the headstone in the logo — is the brand's one shape motif, used as an image mask (`--radius-arch`: `9999px 9999px 3px 3px`) for portrait photography. Never as a button or card corner.

**Cards.** Paper background, 1px `--border-hairline`, 5px radius, `--shadow-sm`. Interactive cards lift to `--shadow-md` over 340ms. No coloured left borders, no gradients, no glow.

**Shadows.** Four steps, all warm-neutral and low-opacity (.04–.10) with generous blur — light through a chapel window, not a drop shadow. A hairline inset is the flat alternative. Focus is a 3px moss ring at 28% (`--shadow-focus`).

**Backgrounds & imagery.** Flat warm colour, never a gradient wash. Photography is the only decoration: real cemeteries, plants, hands working — natural light, slightly cool green-grey, gentle contrast, no filters, no grain, no black-and-white. Full-bleed only for the hero and only with a scrim: `--scrim-flat` (38% charcoal) plus `--scrim-bottom` (a bottom-up protection gradient) so display type stays legible. Never text on unscrimmed photography. No illustrations, no patterns, no textures.

**Transparency & blur.** Two places only: the sticky header (92% paper + 10px blur) and the dialog scrim (55% charcoal + 2px blur). Nowhere else — frosted panels read as tech-product.

**Motion.** Understated. 120ms for hover/press colour, 200ms for controls and tooltips, 340ms for panels and cards, 600ms for a scroll reveal (fade + 12px rise). Easing `cubic-bezier(.32,.72,.32,1)`. Nothing bounces, nothing springs, nothing scales up on hover, nothing auto-plays or loops.

**States.** Hover: primary buttons darken one step (`--moos-800`); secondary fills with `--bg-inset`; ghost picks up a moss tint; cards raise their shadow; nav links go from 72% to full opacity. Press: 1px downward nudge and one step darker again (`--moos-900`) — never a scale. Focus-visible: 2px moss outline, 2px offset. Disabled: 45% opacity, `not-allowed`, no colour change. Selected: filled moss with paper text.

**Borders.** Hairlines do the structural work — `--border-hairline` between rows and around cards, `--border-subtle` on controls. The 96px `Rule` under a heading is a brand signature (it echoes the rule under the logo wordmark), moss for accent, stone for quiet.

**Fixed elements.** Only the header (sticky) and toasts (bottom-right, ~5s). No floating chat bubbles, no cookie-banner theatre, no sticky bottom CTA bars.

## Iconography

- **No icon assets were supplied.** **Lucide** (outline, 2px stroke, rounded caps) is the flagged substitution — the closest match to the logo's thin, organic linework. Loaded per-icon from `https://unpkg.com/lucide-static@0.474.0/icons/<name>.svg` and applied as a CSS mask on `currentColor`, so icons inherit text colour. **Flag:** if the brand acquires its own glyph set, replace `components/core/Icon.jsx`'s `BASE` constant and nothing else changes.
- **Always via `<Icon />`.** Never inline hand-drawn SVG, never an icon font, never emoji, never unicode symbols as icons (the one exception: the select chevron `▾` and the tag dismiss `✕`, both typographic details rather than icons).
- **Sizes** 14 / 16 / 20 / 22 / 26px. Colour: `--text-accent` when decorative-supportive, `currentColor` inside buttons and links, `--text-subtle` inside fields.
- **Vocabulary** — botanical and practical, never abstract: `leaf`, `sprout`, `flower-2`, `droplets`, `calendar-days`, `clock`, `map-pin`, `phone`, `mail`, `file-text`, `check`, `info`, `arrow-right`, `x`. Avoid tech iconography (rockets, sparkles, charts, lightning bolts).
- **Mark usage.** Logo files are raster PNGs cropped from the supplied artwork. Clear space = the wordmark's cap height on all sides; minimum width 180px for the full lockup, 120px for the wordmark, 28px for the mark. Never recolour, outline, stretch, rotate, or place the lockup directly on photography or charcoal — put it on a paper plate instead.

## Substitutions & gaps (please review)

1. **Fonts** — no binaries supplied. Cormorant Garamond + Montserrat are Google-Fonts stand-ins loaded via `@import` in `tokens/fonts.css` (so the compiler reports 0 local `@font-face` rules). Send the licensed originals and only that file changes.
2. **Icons** — Lucide substitution, as above.
3. **Logo** — only a raster PNG exists. A vector (SVG/EPS) and a paper-on-dark version are needed for print and small sizes.
4. **Photography** — none supplied; every image is an `<image-slot>` placeholder.
5. **Facts** — address, phone, prices, staff names, cemetery names and the founding year in the UI kit are invented placeholders.
