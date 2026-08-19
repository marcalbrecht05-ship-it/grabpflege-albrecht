import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { config } from "@/lib/config";

/**
 * Rechts noch kein echtes Pflegefoto: Es liegt keine eigene Fotografie vor,
 * und ein generisches Stock-Foto widerspricht der Markenhaltung. Sobald
 * Aufnahmen vorliegen, hier ein next/image mit priority ergänzen (siehe
 * Design System, Abschnitt "Backgrounds & imagery").
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-stein-100">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <div className="flex flex-col items-start gap-8">
          <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">
            {config.contact.region}
          </p>
          <h1
            id="hero-heading"
            className="max-w-[18ch] text-[40px] leading-[1.08] tracking-[-0.01em] md:text-[60px]"
          >
            {config.hero.headline}
          </h1>
          <div aria-hidden="true" className="h-px w-24 bg-moos-700" />
          <p className="max-w-[46ch] text-[17px] font-light leading-relaxed text-schiefer-600">
            {config.hero.subline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt" className={buttonVariants({ variant: "default", size: "lg" })}>
              {config.hero.ctaPrimary}
            </Link>
            <Link href="/leistungen" className={buttonVariants({ variant: "outline", size: "lg" })}>
              {config.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div>
          <div className="flex aspect-[4/5] items-center justify-center border border-hairline bg-stein-0 md:aspect-square">
            <p className="px-8 text-center text-sm font-light text-schiefer-400">Foto folgt</p>
          </div>
          <p className="mt-3 text-sm font-light text-schiefer-500">Ein Beispiel aus unserer Pflege</p>
        </div>
      </div>
    </section>
  );
}
