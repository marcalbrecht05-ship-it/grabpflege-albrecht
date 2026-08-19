/**
 * Leistungen mit eigener Unterseite (app/leistungen/[slug]/page.tsx).
 * Weitere Leistungen ohne eigene Seite stehen in lib/pricing.ts
 * (zusatzleistungen) und werden auf /leistungen dargestellt. Wird für eine
 * davon später eine eigene Seite gewünscht, genügt hasDetailPage: true plus
 * ein Eintrag hier.
 */

export interface Service {
  slug: string;
  titel: string;
  icon: string;
  kurz: string;
  beschreibung: string;
  kundenprobleme: string[];
  vorteile: { titel: string; text: string }[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  faqs: { frage: string; antwort: string }[];
}

export const services: Service[] = [
  {
    slug: "grabpflege",
    titel: "Regelmäßige Grabpflege",
    icon: "Leaf",
    kurz: "Pflege im festen Rhythmus, 1×, 2× oder 3× im Monat",
    beschreibung:
      "Mit unserer regelmäßigen Grabpflege bleibt die Grabstätte dauerhaft gepflegt, auch wenn Sie sich nicht selbst regelmäßig darum kümmern können. Sie wählen, wie häufig wir die Pflege übernehmen. Bei jedem Besuch kümmern wir uns um Unkraut, verblühte Pflanzen, Grabkanten und den gepflegten Gesamteindruck. Der Preis richtet sich transparent nach der Größe der zu pflegenden Grabfläche.",
    kundenprobleme: [
      "Sie wohnen weit entfernt und können das Grab nicht regelmäßig besuchen?",
      "Die Zeit für regelmäßige Pflege fehlt im Alltag?",
      "Sie möchten sicher sein, dass sich zuverlässig jemand kümmert, ohne selbst jedes Mal nachzufragen?",
    ],
    vorteile: [
      {
        titel: "Drei gleichwertige Intervalle",
        text: "1×, 2× oder 3× monatlich, mit identischem Leistungsumfang je Besuch. Sie wählen die Häufigkeit, die zur Grabstätte passt.",
      },
      {
        titel: "Preis nach Fläche",
        text: "Die Grabgröße bestimmt den Preis, nicht die Grabart. Das macht die Kalkulation nachvollziehbar.",
      },
      {
        titel: "Foto nach jeder Pflege",
        text: "Sie sehen, was gemacht wurde, ohne selbst vor Ort sein zu müssen.",
      },
    ],
    seoTitle: "Regelmäßige Grabpflege in Chemnitz",
    seoDescription:
      "Regelmäßige Grabpflege in Chemnitz und Umgebung: 1×, 2× oder 3× monatlich, Preis nach Grabgröße, mit Fotodokumentation.",
    seoKeywords: ["Grabpflege Chemnitz", "Dauergrabpflege Chemnitz", "Grabpflege Abo Chemnitz"],
    faqs: [
      {
        frage: "Wie wird der Preis für die regelmäßige Grabpflege berechnet?",
        antwort:
          "Nach der tatsächlich zu pflegenden Grabfläche in drei Größenklassen (bis 1 m², über 1 bis 2 m², über 2 bis 4 m²) und dem gewählten Pflegeintervall. Die genauen Preise finden Sie auf der Seite Leistungen & Preise.",
      },
      {
        frage: "Kann ich das Pflegeintervall später wechseln?",
        antwort: "Ja, sprechen Sie uns einfach an, wenn sich Ihr gewünschter Rhythmus ändert.",
      },
      {
        frage: "Ist die regelmäßige Grabpflege monatlich kündbar?",
        antwort: "Ja, die regelmäßige Grabpflege ist monatlich kündbar.",
      },
    ],
  },
  {
    slug: "einzelpflege",
    titel: "Einzelpflege",
    icon: "Sprout",
    kurz: "Einmalige Pflege ohne laufende Betreuung",
    beschreibung:
      "Die Einzelpflege umfasst grundsätzlich dieselben Arbeiten wie ein regulärer Pflegebesuch, wird aber einmalig und ohne laufende Betreuung gebucht. Sie eignet sich für alle, die keine laufende Betreuung wünschen, etwa vor einem Feiertag oder vor anstehendem Besuch.",
    kundenprobleme: [
      "Ein bestimmter Anlass steht bevor und das Grab soll gepflegt sein?",
      "Sie möchten die Grabpflege zunächst einmalig testen, bevor Sie sich für eine laufende Betreuung entscheiden?",
      "Eine laufende Betreuung kommt für Sie aktuell nicht infrage?",
    ],
    vorteile: [
      {
        titel: "Ohne Vertragsbindung",
        text: "Eine einzelne Pflege, ein einzelner Preis, keine laufende Verpflichtung.",
      },
      {
        titel: "Gleicher Leistungsumfang",
        text: "Die Einzelpflege umfasst dieselben Arbeiten wie ein Besuch in der regelmäßigen Pflege.",
      },
      {
        titel: "Fester Preis nach Größe",
        text: "Der Preis richtet sich nach der Grabgröße und steht vorab fest.",
      },
    ],
    seoTitle: "Einzelpflege für Gräber in Chemnitz",
    seoDescription:
      "Einmalige Grabpflege in Chemnitz ohne laufende Betreuung. Fester Preis nach Grabgröße, gleicher Leistungsumfang wie die regelmäßige Pflege.",
    seoKeywords: ["Einzelpflege Grab Chemnitz", "einmalige Grabpflege Chemnitz"],
    faqs: [
      {
        frage: "Was kostet eine Einzelpflege?",
        antwort:
          "25 € für Grabstätten bis 1 m², 32 € für über 1 bis 2 m² und 42 € für über 2 bis 4 m². Bei Sondergrößen erstellen wir ein individuelles Angebot.",
      },
      {
        frage: "Erhalte ich auch bei der Einzelpflege eine Fotodokumentation?",
        antwort: "Ja, auch bei der Einzelpflege erhalten Sie nach dem Besuch eine Fotodokumentation der Grabstätte.",
      },
    ],
  },
  {
    slug: "grabsteinreinigung",
    titel: "Grabsteinreinigung",
    icon: "Sparkles",
    kurz: "Materialgerechte Reinigung, gestaffelt nach Steingröße",
    beschreibung:
      "Wir reinigen den Grabstein materialgerecht. Die Preisgestaltung ist bewusst einfach gehalten und richtet sich allein nach der Größe der zu reinigenden Steinfläche. Restaurierungen, Reparaturen und Steinmetzarbeiten führen wir nicht selbst aus, vermitteln Sie bei Bedarf aber gern an einen Steinmetzbetrieb.",
    kundenprobleme: [
      "Der Grabstein wirkt durch Witterung und Bewuchs dunkler als früher?",
      "Moos oder Flechten haben sich auf dem Stein festgesetzt?",
      "Der Grabstein soll wieder gut lesbar und gepflegt aussehen?",
    ],
    vorteile: [
      {
        titel: "Materialgerecht",
        text: "Die Reinigung ist auf das jeweilige Steinmaterial abgestimmt.",
      },
      {
        titel: "Einfache Preisstaffel",
        text: "Drei Größenkategorien, drei feste Preise, keine versteckten Zuschläge.",
      },
      {
        titel: "Kombinierbar",
        text: "Lässt sich mit der regelmäßigen Pflege oder der Einzelpflege verbinden.",
      },
    ],
    seoTitle: "Grabsteinreinigung in Chemnitz",
    seoDescription:
      "Materialgerechte Grabsteinreinigung in Chemnitz. Feste Preise nach Steingröße, ohne Restaurierung oder Steinmetzarbeiten.",
    seoKeywords: ["Grabsteinreinigung Chemnitz", "Grabstein reinigen lassen Chemnitz"],
    faqs: [
      {
        frage: "Wie wird die Größe des Grabsteins eingeordnet?",
        antwort: "Wir schätzen die Größenkategorie bei der Besichtigung gemeinsam mit Ihnen ein.",
      },
      {
        frage: "Werden auch Inschriften aufgefrischt?",
        antwort:
          "Nein, wir bieten nur die materialgerechte Reinigung an. Bei Restaurierungen, Reparaturen oder der Erneuerung von Beschriftungen vermitteln wir Sie gern an einen Steinmetzbetrieb.",
      },
    ],
  },
  {
    slug: "saisonale-bepflanzung",
    titel: "Saisonale Bepflanzung",
    icon: "Flower2",
    kurz: "Bepflanzung passend zur Jahreszeit",
    beschreibung:
      "Die saisonale Bepflanzung passt die Grabstätte der jeweiligen Jahreszeit an. Servicekosten und Pflanzen- beziehungsweise Materialkosten weisen wir transparent getrennt aus. Auswahl und Budget stimmen wir vorher mit Ihnen ab.",
    kundenprobleme: [
      "Die Bepflanzung ist verblüht oder passt nicht mehr zur Jahreszeit?",
      "Sie möchten eine neue Bepflanzung, wissen aber nicht genau, was zu Standort und Jahreszeit passt?",
      "Die Auswahl und Beschaffung der Pflanzen soll jemand anders übernehmen?",
    ],
    vorteile: [
      {
        titel: "Transparente Kosten",
        text: "Servicepauschale und Materialkosten sind klar getrennt ausgewiesen.",
      },
      {
        titel: "Abstimmung vorab",
        text: "Auswahl und Budget für Pflanzen und Material legen wir vorher gemeinsam fest.",
      },
      {
        titel: "Foto nach der Umsetzung",
        text: "Sie erhalten eine Fotodokumentation nach der Bepflanzung.",
      },
    ],
    seoTitle: "Saisonale Grabbepflanzung in Chemnitz",
    seoDescription:
      "Saisonale Bepflanzung für Gräber in Chemnitz, abgestimmt auf die Jahreszeit. Service und Materialkosten transparent getrennt.",
    seoKeywords: ["Grabbepflanzung Chemnitz", "saisonale Grabbepflanzung Chemnitz"],
    faqs: [
      {
        frage: "Was kostet die saisonale Bepflanzung?",
        antwort:
          "30 € Servicepauschale zzgl. der Kosten für Pflanzen und Material. Auswahl und Budget stimmen wir vorher mit Ihnen ab.",
      },
      {
        frage: "Kann ich bestimmte Pflanzen wünschen?",
        antwort: "Ja, wir besprechen Auswahl und Budget vorab gemeinsam mit Ihnen.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
