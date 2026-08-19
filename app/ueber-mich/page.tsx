import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Über mich",
  description: `Lernen Sie ${config.company.owner} kennen, den persönlichen Ansprechpartner von ${config.company.name}.`,
  alternates: { canonical: `${config.seo.siteUrl}/ueber-mich` },
};

/**
 * PLATZHALTER-SEITE: Inhaber trägt hier persönliche Angaben (Werdegang, Foto,
 * Motivation) nachträglich selbst ein. Struktur und Design stehen, Texte sind
 * bewusst als Platzhalter markiert.
 */
export default function UeberMichPage() {
  return (
    <section aria-labelledby="ueber-mich-heading" className="bg-stein-100">
      <div className="mx-auto max-w-[1120px] px-6 py-20">
        <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">Über mich</p>
        <h1 id="ueber-mich-heading" className="mt-3 max-w-[24ch] text-[38px] md:text-[48px]">
          {config.company.owner}
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex aspect-[4/3] items-center justify-center border border-hairline bg-stein-0">
            <p className="px-8 text-center text-sm font-light text-schiefer-400">Porträtfoto folgt</p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[17px] font-light leading-relaxed text-schiefer-500">
              An dieser Stelle folgt in Kürze mehr über {config.company.owner}: der persönliche Werdegang,
              was {config.company.name} ausmacht und warum Ihnen die Grabstätte Ihrer Angehörigen hier
              anvertraut ist.
            </p>
            <p className="text-[17px] font-light leading-relaxed text-schiefer-500">
              Bis dahin erreichen Sie mich jederzeit direkt und persönlich.
            </p>
            <Link href="/kontakt" className={buttonVariants({ variant: "default", className: "self-start" })}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
