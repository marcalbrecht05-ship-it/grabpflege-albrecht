import type { Metadata } from "next";
import Image from "next/image";

import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Über mich",
  description: `Lernen Sie ${config.company.owner} kennen, den persönlichen Ansprechpartner von ${config.company.name}.`,
  alternates: { canonical: `${config.seo.siteUrl}/ueber-mich` },
};

export default function UeberMichPage() {
  return (
    <section aria-labelledby="ueber-mich-heading" className="bg-stein-100">
      <div className="mx-auto max-w-[1120px] px-6 py-20">
        <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">Über mich</p>
        <h1 id="ueber-mich-heading" className="mt-3 max-w-[24ch] text-[38px] md:text-[48px]">
          {config.company.owner}
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-stein-0">
            <Image
              src="/images/marc-albrecht.png"
              alt={`${config.company.owner}, Inhaber von ${config.company.name}`}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[17px] font-light leading-relaxed text-schiefer-600">
              Hallo, ich bin Marc, 21 Jahre alt und studiere derzeit in Chemnitz Lehramt für die Grundschule.
              Neben dem Studium kümmere ich mich schon lange innerhalb meiner Familie um Gräber von
              Angehörigen, für die Zeit oder Entfernung die eigene Pflege oft erschwert hat.
            </p>
            <p className="text-[17px] font-light leading-relaxed text-schiefer-600">
              Die Dankbarkeit, die mir dafür entgegengebracht wurde, hat mich motiviert und dazu inspiriert,
              auch anderen Menschen dieses Privileg zukommen zu lassen und ihnen die Gewissheit zu geben,
              dass sich jemand um die Grabstätte ihrer Liebsten kümmert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
