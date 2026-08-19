import type { Metadata } from "next";
import Link from "next/link";

import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: `Allgemeine Geschäftsbedingungen von ${config.company.name}.`,
  alternates: { canonical: `${config.seo.siteUrl}/agb` },
};

export default function AgbPage() {
  return (
    <section aria-labelledby="agb-heading" className="bg-stein-0">
      {/* Platzhalter – keine Rechtsberatung, keine Gewähr. Vor Live-Gang anwaltlich prüfen lassen. */}
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 id="agb-heading" className="text-[38px]">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="mt-10 flex flex-col gap-8 text-[17px] font-light leading-relaxed text-schiefer-600">
          <div>
            <h2 className="text-lg text-schiefer-800">1. Geltungsbereich</h2>
            <p className="mt-3">
              Diese Bedingungen gelten für alle Leistungen von {config.company.legalName} rund um die Pflege
              von Grabstätten, insbesondere regelmäßige Grabpflege, Einzelpflege, Grabsteinreinigung und
              saisonale Bepflanzung.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">2. Vertragsschluss</h2>
            <p className="mt-3">
              Ein Vertrag kommt zustande, wenn wir eine Anfrage schriftlich (z. B. per E-Mail) bestätigen.
              Die Erstbesichtigung und der Pflegevorschlag sind unverbindlich und kostenfrei.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">3. Leistungen und Preise</h2>
            <p className="mt-3">
              Der Umfang der jeweiligen Leistung sowie die aktuell gültigen Preise ergeben sich aus der Seite{" "}
              <Link href="/leistungen">Leistungen &amp; Preise</Link>. Für Grabstätten mit einer Pflegefläche über
              4 m² sowie für stark verwachsene oder länger ungepflegte Grabstätten wird ein individuelles
              Angebot erstellt.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">4. Laufzeit und Kündigung</h2>
            <p className="mt-3">
              Die regelmäßige Grabpflege ist monatlich kündbar. Weitere Einzelheiten zur Kündigung werden im
              Rahmen der Auftragsbestätigung festgelegt und folgen in einer künftigen Fassung dieser
              Bedingungen.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">5. Zahlung</h2>
            <p className="mt-3">Die Zahlungsmodalitäten werden bei Auftragsbestätigung mitgeteilt.</p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">6. Haftung</h2>
            <p className="mt-3">
              Wir haften nach den gesetzlichen Bestimmungen. Für die Verfügbarkeit von Pflanzen und
              Materialien in einer gewünschten Sorte oder Ausführung wird keine Gewähr übernommen.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">7. Schlussbestimmungen</h2>
            <p className="mt-3">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser Bedingungen
              unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
