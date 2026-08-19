import Link from "next/link";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { config } from "@/lib/config";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="bg-moos-700">
      <RevealOnScroll className="mx-auto flex max-w-[1120px] flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 id="cta-heading" className="max-w-[24ch] text-[30px] text-stein-0 md:text-[38px]">
          Die Besichtigung und der Pflegevorschlag sind kostenfrei
        </h2>
        <p className="max-w-[46ch] text-[17px] font-light leading-relaxed text-stein-0/80">
          Wir schauen uns die Grabstätte gemeinsam mit Ihnen an und schlagen die passende Pflege vor, ohne
          Verpflichtung.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-md border-none bg-stein-0 px-6 py-3 text-sm font-medium text-moos-800 transition-colors hover:bg-stein-100"
          >
            Besichtigung anfragen
          </Link>
          <a
            href={`tel:${config.contact.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center rounded-md border border-stein-0/40 px-6 py-3 text-sm font-medium text-stein-0 transition-colors hover:bg-moos-800"
          >
            Anrufen: {config.contact.phone}
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
