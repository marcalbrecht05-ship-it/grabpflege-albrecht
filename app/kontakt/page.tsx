import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${config.company.name} für eine kostenlose Besichtigung und einen Pflegevorschlag für Ihre Grabstätte in ${config.contact.region}.`,
  alternates: { canonical: `${config.seo.siteUrl}/kontakt` },
};

export default function KontaktPage() {
  return (
    <section aria-labelledby="kontakt-heading" className="bg-stein-100">
      <div className="mx-auto max-w-[1120px] px-6 py-20">
        <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">Kontakt</p>
        <h1 id="kontakt-heading" className="mt-3 max-w-[24ch] text-[38px] md:text-[48px]">
          Besichtigung und Pflegevorschlag anfragen
        </h1>
        <p className="mt-4 max-w-[64ch] text-[17px] font-light leading-relaxed text-schiefer-600">
          Feld und Nummer genügen. Wir melden uns innerhalb von 24 Stunden.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="border border-hairline bg-stein-0 p-8">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-lg text-schiefer-800">Direkt erreichbar</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm font-light text-schiefer-600">
                <li>
                  <a
                    href={`tel:${config.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-schiefer-700 hover:text-moos-700"
                  >
                    <Phone className="h-4 w-4 text-moos-700" aria-hidden="true" />
                    Anrufen: {config.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="flex items-center gap-2 text-schiefer-700 hover:text-moos-700"
                  >
                    <Mail className="h-4 w-4 text-moos-700" aria-hidden="true" />
                    {config.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg text-schiefer-800">Erreichbarkeit</h2>
              <ul className="mt-4 flex flex-col gap-1.5 text-sm font-light text-schiefer-600">
                <li>{config.contact.openingHours.werktags}</li>
                <li>{config.contact.openingHours.wochenende}</li>
              </ul>
              <p className="mt-3 text-sm font-light text-schiefer-500">{config.contact.openingHours.hinweis}</p>
            </div>

            <div>
              <h2 className="text-lg text-schiefer-800">Adresse</h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-schiefer-600">
                {config.contact.address.street}
                <br />
                {config.contact.address.zip} {config.contact.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
