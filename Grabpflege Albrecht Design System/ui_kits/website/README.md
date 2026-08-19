# UI kit — Website (Grabpflege Albrecht)

Marketing website for the business: the surface a bereaved family actually meets. Four routes, click-through via the header nav.

| File | Surface |
| --- | --- |
| `index.html` | Mounts the kit; holds the router state (`home / leistungen / ablauf / kontakt`) |
| `Chrome.jsx` | `Header` (sticky, blurred paper), `Footer` (charcoal), `Section` (container + tone) |
| `HomeScreen.jsx` | Full-bleed hero with scrim, about + numbers, three service cards, testimonial, CTA band |
| `ServicesScreen.jsx` | Seasonal tabs, package cards (three tiers), fine print |
| `ProcessScreen.jsx` | Four numbered steps on hairline rows, photo-report block |
| `ContactScreen.jsx` | Enquiry form → confirm `Dialog` → success `Toast` |

All primitives come from `window.GrabpflegeAlbrechtDesignSystem_a7ca22` (the compiled design system bundle) — nothing is re-implemented here.

**Photography:** every image is an `<image-slot>` placeholder. No brand photography was supplied; drop real photos onto the slots (they persist) or replace the tags with `<img>`.

**Status:** this kit is a *proposal built from the brand foundations*, not a recreation — no existing website, codebase or Figma file was provided. Copy is plausible placeholder German written to the tone rules in `readme.md`; addresses, phone numbers and prices are invented and must be replaced.
