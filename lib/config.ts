/**
 * Zentrale, typisierte Konfiguration für die Grabpflege-Albrecht-Website.
 * Spiegelt docs/BRANCHE.md. Firmendaten, Kontakt und Preise werden
 * ausschließlich hier gepflegt, nie in Komponenten hardcodiert.
 *
 * PLATZHALTER: Adresse, Telefon, E-Mail, Öffnungszeiten und Einzugsgebiet
 * sind Platzhalter (Firma gegründet 2026, Daten noch nicht final) und
 * müssen vor Live-Gang ersetzt werden. Alle sind an dieser einen Stelle
 * änderbar.
 */

export interface SiteConfig {
  company: {
    name: string;
    legalName: string;
    owner: string;
    claim: string;
    legalForm: string;
    foundedYear: number;
    meisterbetrieb: false;
    innungsmitglied: false;
  };
  contact: {
    phone: string;
    email: string;
    address: { street: string; zip: string; city: string };
    region: string;
    serviceRadius: string;
    openingHours: { werktags: string; wochenende: string; hinweis: string };
  };
  seo: {
    titleSuffix: string;
    defaultDescription: string;
    siteUrl: string;
    gaId: string;
  };
  features: {
    analytics: boolean;
    cookieConsent: boolean;
    galerie: boolean;
    faq: boolean;
    googleMaps: boolean;
    whatsapp: boolean;
    teamSektion: boolean;
    notdienstBanner: boolean;
    floatingCta: boolean;
    barrierefreiheitSeite: boolean;
    kontaktBackend: "frontend" | "email" | "webhook";
  };
  navigation: Array<{ label: string; href: string }>;
  serviceOrte: string[];
  hero: {
    headline: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  vertrauenssignale: Array<{ titel: string; text: string; icon: string }>;
  faqs: Array<{ frage: string; antwort: string }>;
}

export const config: SiteConfig = {
  company: {
    name: "Grabpflege Albrecht",
    legalName: "Grabpflege Albrecht (Einzelunternehmen, Inh. Marc Albrecht)",
    owner: "Marc Albrecht",
    claim: "Andenken mit Sorgfalt bewahren",
    legalForm: "Einzelunternehmen",
    foundedYear: 2026,
    meisterbetrieb: false,
    innungsmitglied: false,
  },
  contact: {
    phone: "0152 32053131",
    email: "kontakt@grabpflege-albrecht.de",
    // PLATZHALTER — noch keine Geschäftsadresse (Gewerbe noch nicht angemeldet).
    // Wird nur im Impressum verwendet, sobald final. Bis dahin taucht die
    // Adresse bewusst nirgends sonst auf der Website auf.
    address: { street: "Musterstraße 1", zip: "09111", city: "Chemnitz" },
    region: "Chemnitz und Umgebung",
    serviceRadius: "20 km",
    openingHours: {
      werktags: "Mo–Fr: 10:00–15:00 Uhr",
      wochenende: "Sa: nach Vereinbarung",
      hinweis: "Kein 24-Stunden-Notdienst. Anfragen außerhalb der Zeiten beantworten wir am nächsten Werktag.",
    },
  },
  seo: {
    titleSuffix: "Grabpflege Albrecht",
    defaultDescription:
      "Grabpflege in Chemnitz und Umgebung: regelmäßige Pflege, Einzelpflege, Grabsteinreinigung und saisonale Bepflanzung. Persönlich betreut von Marc Albrecht.",
    // PLATZHALTER — Domain noch nicht final.
    siteUrl: "https://www.grabpflege-albrecht.de",
    // PLATZHALTER — Analytics ist technisch vorbereitet (Opt-in-Consent-Gating),
    // die Measurement-ID wird erst eingetragen, wenn sie vorliegt. Solange sie
    // leer ist, lädt kein Skript, auch nicht nach Einwilligung.
    gaId: "",
  },
  features: {
    analytics: true,
    cookieConsent: true,
    galerie: true,
    faq: true,
    googleMaps: false,
    whatsapp: false,
    teamSektion: false,
    notdienstBanner: false,
    floatingCta: true,
    barrierefreiheitSeite: false,
    kontaktBackend: "webhook",
  },
  navigation: [
    { label: "Start", href: "/" },
    { label: "Leistungen & Preise", href: "/leistungen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  serviceOrte: ["Städtischer Friedhof Chemnitz"],
  hero: {
    headline: "Die Grabstätte Ihrer Angehörigen in guten Händen",
    subline:
      "Wir kümmern uns zuverlässig und mit Sorgfalt um die Ruhestätte Ihrer Liebsten. Persönlich und transparent für Sie.",
    ctaPrimary: "Kostenlose Besichtigung anfragen",
    ctaSecondary: "Leistungen & Preise ansehen",
  },
  vertrauenssignale: [
    {
      titel: "Persönlich für Sie da",
      text: "Mit einem festen Ansprechpartner, der Ihre Wünsche und die Grabstätte kennt.",
      icon: "UserRound",
    },
    {
      titel: "Pflege mit Rückmeldung",
      text: "Nach jedem Pflegebesuch erhalten Sie eine Fotodokumentation der Grabstätte.",
      icon: "Camera",
    },
    {
      titel: "Klare & transparente Preise",
      text: "Verständliche Preise nach Grabgröße, ohne versteckte Zusatzkosten.",
      icon: "ReceiptText",
    },
    {
      titel: "Regional vor Ort",
      text: "Persönliche Betreuung in Chemnitz und Umgebung mit kurzen Wegen und direktem Kontakt.",
      icon: "MapPin",
    },
    {
      titel: "Nach Ihren Wünschen",
      text: "Individuelle Leistungen und Angebote, abgestimmt auf Ihre persönlichen Vorstellungen.",
      icon: "Heart",
    },
  ],
  faqs: [
    {
      frage: "Wie wird der Preis für die Grabpflege berechnet?",
      antwort:
        "Der Preis richtet sich nach der tatsächlich zu pflegenden Grabfläche, nicht nur nach der Bezeichnung der Grabart. Wir unterscheiden drei Größenklassen (bis 1 m², über 1 bis 2 m², über 2 bis 4 m²). Für Grabstätten über 4 m² erstellen wir ein individuelles Angebot.",
    },
    {
      frage: "Was ist der Unterschied zwischen 1×, 2× und 3× monatlicher Pflege?",
      antwort:
        "Der Leistungsumfang ist bei jedem Pflegebesuch identisch. Die drei Varianten unterscheiden sich ausschließlich in der Anzahl der monatlichen Besuche.",
    },
    {
      frage: "Kann ich die Grabpflege auch ohne laufenden Vertrag buchen?",
      antwort:
        "Ja, über die Einzelpflege. Sie umfasst dieselben Arbeiten wie ein regulärer Pflegebesuch, wird aber einmalig gebucht.",
    },
    {
      frage: "Was passiert, wenn eine Grabstätte länger nicht gepflegt wurde?",
      antwort:
        "Stark verwachsene oder länger ungepflegte Grabstätten kalkulieren wir zunächst als Intensiv- beziehungsweise Erstpflege individuell nach Zustand und Aufwand. Danach kann die Grabstätte auf Wunsch in die regelmäßige Pflege übernommen werden.",
    },
    {
      frage: "Erhalte ich einen Nachweis über die durchgeführte Pflege?",
      antwort: "Ja, nach jedem Pflegebesuch und jeder Zusatzleistung erhalten Sie eine Fotodokumentation.",
    },
    {
      frage: "Sind die Friedhofsgebühren im Preis enthalten?",
      antwort:
        "Nein. Unsere Preise umfassen die Pflege inklusive Pflanzen, Material und Anfahrt. Friedhofsgebühren rechnet die jeweilige Friedhofsverwaltung direkt mit Ihnen ab.",
    },
  ],
};
