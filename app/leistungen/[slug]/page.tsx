import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/shared/Icon";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/lib/config";
import { getServiceBySlug, services } from "@/lib/services-data";
import { einzelpflegePreise, regelpflegePreise, zusatzleistungen } from "@/lib/pricing";

const PROZESS = [
  { titel: "Kontakt aufnehmen", text: "Sie schreiben, rufen an oder nutzen das Kontaktformular." },
  { titel: "Kostenlose Besichtigung", text: "Wir schauen uns die Grabstätte gemeinsam mit Ihnen an." },
  { titel: "Pflegevorschlag & Preis", text: "Sie erhalten einen klaren Vorschlag, unverbindlich." },
  { titel: "Pflege mit Fotodokumentation", text: "Nach jedem Einsatz erhalten Sie ein Foto." },
];

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `${config.seo.siteUrl}/leistungen/${slug}` },
  };
}

function PricingSnippet({ slug }: { slug: string }) {
  if (slug === "grabpflege") {
    return (
      <div className="border border-hairline bg-stein-50 p-6">
        <p className="text-xs font-medium uppercase tracking-[.12em] text-schiefer-400">
          Ab (kleine Grabstätte, 1× monatlich)
        </p>
        <p className="mt-2 font-display text-3xl text-schiefer-800">{regelpflegePreise.klein["1x"]} € / Monat</p>
        <Link href="/leistungen#regelpflege-heading" className="mt-3 inline-block text-sm text-moos-700 hover:underline">
          Vollständige Preistabelle ansehen
        </Link>
      </div>
    );
  }
  if (slug === "einzelpflege") {
    return (
      <div className="border border-hairline bg-stein-50 p-6">
        <p className="text-xs font-medium uppercase tracking-[.12em] text-schiefer-400">Ab (kleine Grabstätte)</p>
        <p className="mt-2 font-display text-3xl text-schiefer-800">{einzelpflegePreise.klein} €</p>
        <Link href="/leistungen#einzelpflege-heading" className="mt-3 inline-block text-sm text-moos-700 hover:underline">
          Alle Preise nach Größe ansehen
        </Link>
      </div>
    );
  }
  const zusatz = zusatzleistungen.find((z) => z.slug === slug);
  if (!zusatz) return null;
  return (
    <div className="border border-hairline bg-stein-50 p-6">
      {zusatz.preisModell === "gestaffelt" && zusatz.gestaffeltePreise ? (
        <table className="w-full text-left">
          <caption className="mb-3 text-left text-xs font-light text-schiefer-500">
            Preis nach Größe des Grabsteins
          </caption>
          <thead>
            <tr className="border-b border-hairline">
              <th scope="col" className="pb-2 text-xs font-medium uppercase tracking-[.1em] text-schiefer-400">
                Größe
              </th>
              <th scope="col" className="pb-2 text-xs font-medium uppercase tracking-[.1em] text-schiefer-400">
                Preis
              </th>
            </tr>
          </thead>
          <tbody>
            {zusatz.gestaffeltePreise.map((p) => (
              <tr key={p.label} className="border-b border-hairline last:border-b-0">
                <th scope="row" className="py-3 pr-4 text-sm font-normal text-schiefer-700">
                  {p.label}
                  {p.bereich ? <span className="block text-xs font-light text-schiefer-400">{p.bereich}</span> : null}
                </th>
                <td className="py-3 font-display text-xl text-schiefer-800">{p.preis} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {zusatz.slug === "grabsteinreinigung" ? (
        <p className="mt-4 text-xs font-light text-schiefer-400">
          Die Größenangaben beziehen sich jeweils auf die zu reinigende Steinfläche.
        </p>
      ) : null}
      {zusatz.preisModell === "service-plus-material" && zusatz.servicePreis ? (
        <p className="font-display text-3xl text-schiefer-800">
          {zusatz.servicePreis} €{" "}
          <span className="text-sm font-sans font-light text-schiefer-500">zzgl. Material</span>
        </p>
      ) : null}
    </div>
  );
}

export default async function ServiceDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.titel,
    description: service.beschreibung,
    provider: { "@type": "LocalBusiness", name: config.company.name },
    areaServed: config.contact.region,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section aria-labelledby="service-heading" className="bg-stein-100">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <div className="flex h-11 w-11 items-center justify-center bg-moos-50 text-moos-700">
            <Icon name={service.icon} className="h-5 w-5" />
          </div>
          <h1 id="service-heading" className="mt-5 max-w-[24ch] text-[38px] md:text-[48px]">
            {service.titel}
          </h1>
          <p className="mt-4 max-w-[64ch] text-[17px] font-light leading-relaxed text-schiefer-600">
            {service.beschreibung}
          </p>
        </div>
      </section>

      <section aria-labelledby="problem-heading" className="bg-stein-0">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <RevealOnScroll>
              <h2 id="problem-heading" className="text-2xl text-schiefer-800">
                Kennen Sie das?
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {service.kundenprobleme.map((frage) => (
                  <li key={frage} className="border-l border-moos-300 pl-4 text-[17px] font-light text-schiefer-600">
                    {frage}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="text-2xl text-schiefer-800">Preis</h2>
              <div className="mt-6">
                <PricingSnippet slug={service.slug} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section aria-labelledby="vorteile-heading" className="bg-stein-50">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <RevealOnScroll>
            <h2 id="vorteile-heading" className="text-[30px] md:text-[38px]">
              Im Überblick
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {service.vorteile.map((vorteil) => (
              <div key={vorteil.titel} className="border border-hairline bg-stein-0 p-6">
                <h3 className="text-lg text-schiefer-800">{vorteil.titel}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-schiefer-500">{vorteil.text}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section aria-labelledby="ablauf-heading" className="bg-stein-0">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <RevealOnScroll>
            <h2 id="ablauf-heading" className="text-[30px] md:text-[38px]">
              So läuft es ab
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10 flex flex-col">
            {PROZESS.map((schritt, index) => (
              <div key={schritt.titel} className="flex gap-6 border-t border-hairline py-6 first:border-t-0">
                <span className="font-display text-2xl text-moos-700">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-base font-medium text-schiefer-800">{schritt.titel}</p>
                  <p className="mt-1 text-sm font-light text-schiefer-500">{schritt.text}</p>
                </div>
              </div>
            ))}
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <Link href="/kontakt" className={buttonVariants({ variant: "default", size: "lg" })}>
              Jetzt anfragen
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {service.faqs.length > 0 ? (
        <section aria-labelledby="service-faq-heading" className="bg-stein-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2 id="service-faq-heading" className="text-[30px] md:text-[38px]">
              Fragen zu {service.titel.toLowerCase()}
            </h2>
            <Accordion className="mt-8">
              {service.faqs.map((item, index) => (
                <AccordionItem key={item.frage} value={`service-faq-${index}`}>
                  <AccordionTrigger className="py-5 text-base font-normal text-schiefer-800">
                    {item.frage}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] font-light leading-relaxed text-schiefer-600">
                    {item.antwort}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ) : null}
    </>
  );
}
