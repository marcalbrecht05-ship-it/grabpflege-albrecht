/**
 * Zentrale Preis- und Leistungslogik für Grabpflege Albrecht.
 * Einzige Quelle der Wahrheit für Größenklassen, Pflegeintervalle, Preise
 * und Zusatzleistungen. Preise stammen vom aktuellen Planungsstand
 * (siehe docs/BRANCHE.md) und sind hier zentral änderbar.
 */

export interface GraveSizeClass {
  id: "klein" | "mittel" | "gross" | "sonder";
  label: string;
  range: string;
  hinweis?: string;
}

export const graveSizeClasses: GraveSizeClass[] = [
  { id: "klein", label: "Klein", range: "bis 1 m²" },
  { id: "mittel", label: "Mittel", range: "über 1 m² bis 2 m²" },
  { id: "gross", label: "Groß", range: "über 2 m² bis 4 m²" },
  {
    id: "sonder",
    label: "Sondergröße",
    range: "über 4 m²",
    hinweis: "Individuelles Angebot nach Besichtigung.",
  },
];

export interface CareInterval {
  id: "1x" | "2x" | "3x";
  label: string;
  besucheProMonat: number;
}

export const careIntervals: CareInterval[] = [
  { id: "1x", label: "1× monatlich", besucheProMonat: 1 },
  { id: "2x", label: "2× monatlich", besucheProMonat: 2 },
  { id: "3x", label: "3× monatlich", besucheProMonat: 3 },
];

/** Regelmäßige Grabpflege: Preis in Euro pro Monat, nach Größenklasse × Intervall. */
export const regelpflegePreise: Record<
  Exclude<GraveSizeClass["id"], "sonder">,
  Record<CareInterval["id"], number>
> = {
  klein: { "1x": 15, "2x": 30, "3x": 45 },
  mittel: { "1x": 20, "2x": 40, "3x": 60 },
  gross: { "1x": 30, "2x": 55, "3x": 80 },
};

export const regelpflegeLeistungsumfang = [
  "Entfernen von Unkraut, Laub und ähnlichen Verschmutzungen",
  "Entfernen verblühter und abgestorbener Pflanzenteile",
  "Pflege und Rückschnitt vorhandener Pflanzen",
  "Bewässerung der vorhandenen Bepflanzung",
  "Oberflächliche Pflege und Lockerung des Bodens",
  "Säuberung der Grabkanten",
  "Herrichten des vorhandenen Grabschmucks",
  "Allgemeine Zustandskontrolle der Grabstätte",
  "Fotodokumentation nach jedem Besuch",
];

export const regelpflegeNichtEnthalten = [
  "Neue Pflanzen und Materialien",
  "Intensive Grabsteinreinigung",
  "Zusätzliche bedarfsgerechte Bewässerung",
];

/** Einzelpflege: einmaliger Preis in Euro, nach Größenklasse. */
export const einzelpflegePreise: Record<Exclude<GraveSizeClass["id"], "sonder">, number> = {
  klein: 25,
  mittel: 32,
  gross: 42,
};

export type PreisModell = "gestaffelt" | "service-plus-material" | "individuell";

export interface Zusatzleistung {
  slug: string;
  titel: string;
  kurz: string;
  beschreibung: string;
  icon: string;
  preisModell: PreisModell;
  /** Für preisModell "gestaffelt": Preise nach Kategorie. */
  gestaffeltePreise?: { label: string; bereich?: string; preis: number }[];
  /** Für preisModell "service-plus-material": feste Servicepauschale zzgl. Material. */
  servicePreis?: number;
  leistungen: string[];
  ausschluss?: string[];
  hasDetailPage: boolean;
}

export const zusatzleistungen: Zusatzleistung[] = [
  {
    slug: "grabsteinreinigung",
    titel: "Grabsteinreinigung",
    kurz: "Gründliche, materialgerechte Reinigung nach Steingröße",
    beschreibung:
      "Wir reinigen Grabsteine materialgerecht und bewusst einfach nach Größe gestaffelt, ohne unübersichtliche Sondertarife.",
    icon: "Sparkles",
    preisModell: "gestaffelt",
    gestaffeltePreise: [
      { label: "Klein / Urne", bereich: "bis 0,5 m²", preis: 35 },
      { label: "Mittel", bereich: "über 0,5 m² bis 1 m²", preis: 45 },
      { label: "Groß", bereich: "über 1 m²", preis: 60 },
    ],
    leistungen: ["Materialgerechte Reinigung der Steinoberfläche"],
    ausschluss: [
      "Restaurierungen",
      "Reparaturen",
      "Erneuerung von Beschriftungen",
      "Sonstige Steinmetzarbeiten",
    ],
    hasDetailPage: true,
  },
  {
    slug: "saisonale-bepflanzung",
    titel: "Saisonale Bepflanzung",
    kurz: "Bepflanzung nach Jahreszeit, Service und Material getrennt ausgewiesen",
    beschreibung:
      "Die Bepflanzung wird der Jahreszeit angepasst. Servicekosten und Pflanzen- beziehungsweise Materialkosten weisen wir transparent getrennt aus.",
    icon: "Flower2",
    preisModell: "service-plus-material",
    servicePreis: 30,
    leistungen: [
      "Entfernung der vorherigen beziehungsweise verblühten Bepflanzung",
      "Vorbereitung der Pflanzfläche",
      "Einsetzen der neuen Pflanzen",
      "Anschließende Säuberung der Grabstätte",
      "Fotodokumentation",
    ],
    hasDetailPage: true,
  },
  {
    slug: "grabschmuck-anlassservice",
    titel: "Grabschmuck- und Anlassservice",
    kurz: "Blumen, Kerzen oder Grabschmuck zu Geburtstag, Todestag oder Feiertagen",
    beschreibung:
      "Nach vorheriger Absprache besorgen und platzieren wir Blumen, Kerzen oder gewünschten Grabschmuck an der Grabstätte, etwa zu Geburtstagen, Todestagen, Gedenktagen oder Weihnachten.",
    icon: "Flame",
    preisModell: "service-plus-material",
    servicePreis: 20,
    leistungen: [
      "Absprache von Wünschen und Materialbudget",
      "Besorgung von Blumen, Kerzen oder Grabschmuck",
      "Platzierung an der Grabstätte",
      "Fotodokumentation nach Durchführung",
    ],
    hasDetailPage: false,
  },
  {
    slug: "bewaesserung",
    titel: "Bedarfsgerechte Bewässerung",
    kurz: "Umfang und Preis individuell nach Witterung und Standort",
    beschreibung:
      "Der tatsächliche Bewässerungsaufwand hängt von Witterung, Jahreszeit, Bepflanzung, Grabgröße und Standort ab. Umfang, Häufigkeit, Zeitraum und Preis stimmen wir deshalb individuell mit Ihnen ab.",
    icon: "Droplets",
    preisModell: "individuell",
    leistungen: [],
    hasDetailPage: false,
  },
];
