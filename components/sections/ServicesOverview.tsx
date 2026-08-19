import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/shared/Icon";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/services-data";

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading" className="bg-stein-50">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <RevealOnScroll className="max-w-[46ch]">
          <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">Leistungen</p>
          <h2 id="services-heading" className="mt-3 text-[30px] md:text-[38px]">
            Dabei helfen wir Ihnen.
          </h2>
          <p className="mt-4 text-[17px] font-light leading-relaxed text-schiefer-600">
            Von der regelmäßigen Pflege bis zur einmaligen Grabsteinreinigung. Die passenden Preise finden
            Sie auf der Übersichtsseite.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              className="group flex flex-col gap-4 border border-hairline bg-stein-0 p-6 transition-colors hover:border-moos-300"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-moos-50 text-moos-700">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-xl">{service.titel}</h3>
              <p className="flex-1 text-sm font-light leading-relaxed text-schiefer-500">{service.kurz}</p>
              <span className="flex items-center gap-1.5 text-sm text-moos-700 group-hover:underline">
                Mehr erfahren
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <Link href="/leistungen" className={buttonVariants({ variant: "outline" })}>
            Alle Leistungen &amp; Preise ansehen
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
