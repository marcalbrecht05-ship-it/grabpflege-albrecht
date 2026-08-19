import type { Metadata } from "next";

import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${config.company.name}.`,
  alternates: { canonical: `${config.seo.siteUrl}/impressum` },
};

export default function ImpressumPage() {
  return (
    <section aria-labelledby="impressum-heading" className="bg-stein-0">
      {/* Platzhalter – keine Rechtsberatung, keine Gewähr. Vor Live-Gang anwaltlich prüfen lassen. */}
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 id="impressum-heading" className="text-[38px]">
          Impressum
        </h1>

        <div className="mt-10 flex flex-col gap-8 text-[17px] font-light leading-relaxed text-schiefer-600">
          <div>
            <h2 className="text-lg text-schiefer-800">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              {config.company.legalName}
              <br />
              {config.contact.address.street}
              <br />
              {config.contact.address.zip} {config.contact.address.city}
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">Vertreten durch</h2>
            <p className="mt-3">{config.company.owner}</p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">Kontakt</h2>
            <p className="mt-3">
              Telefon: {config.contact.phone}
              <br />
              E-Mail: {config.contact.email}
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">Umsatzsteuer</h2>
            <p className="mt-3">
              Angabe zur Umsatzsteuer-Identifikationsnummer beziehungsweise zur Anwendung der
              Kleinunternehmerregelung nach § 19 UStG folgt.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mt-3">
              {config.company.owner}, Anschrift wie oben.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">EU-Streitschlichtung</h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/ (öffnet in neuem Tab)
              </a>
              . Unsere E-Mail-Adresse finden Sie oben. Wir sind nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
