import Image from "next/image";
import Link from "next/link";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { config } from "@/lib/config";

export function AboutTeaser() {
  return (
    <section aria-labelledby="about-heading" className="bg-stein-0">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16">
        <RevealOnScroll variants={fadeLeft}>
          <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">
            {config.company.name}
          </p>
          <h2 id="about-heading" className="mt-3 text-[30px] md:text-[38px]">
            {config.company.claim}
          </h2>
          <div aria-hidden="true" className="mt-6 h-px w-24 bg-stein-300" />
          <p className="mt-6 max-w-[46ch] text-[17px] font-light leading-relaxed text-schiefer-600">
            Eine Grabstätte ist mehr als ein Ort der Erinnerung. Sie verdient eine Pflege, die mit Sorgfalt,
            Respekt und einem Blick für die kleinen Dinge erfolgt.
          </p>
          <p className="mt-4 max-w-[46ch] text-[17px] font-light leading-relaxed text-schiefer-600">
            Bei Grabpflege Albrecht haben Sie einen persönlichen Ansprechpartner, der sich zuverlässig um die
            Grabstätte Ihrer Angehörigen kümmert. Von der ersten Besichtigung bis zur regelmäßigen Pflege
            stimmen wir die Betreuung individuell mit Ihnen ab. Transparent, persönlich und nach Ihren
            Wünschen.
          </p>
          <Link
            href="/ueber-mich"
            className="mt-8 inline-block border-b border-moos-300 text-sm text-moos-700 hover:border-moos-700 hover:text-moos-900"
          >
            Lernen Sie mich kennen
          </Link>
        </RevealOnScroll>

        <RevealOnScroll variants={fadeRight}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden border border-hairline bg-stein-100">
            <Image
              src="/images/marc-albrecht.png"
              alt={`${config.company.owner}, Inhaber von ${config.company.name}`}
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
