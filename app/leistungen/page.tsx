import type { Metadata } from "next";
import Link from "next/link";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Icon } from "@/components/shared/Icon";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/lib/config";
import {
  careIntervals,
  einzelpflegePreise,
  graveSizeClasses,
  regelpflegeLeistungsumfang,
  regelpflegeNichtEnthalten,
  regelpflegePreise,
  zusatzleistungen,
  type PreisModell,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Regelmäßige Grabpflege, Einzelpflege, Grabsteinreinigung und weitere Zusatzleistungen für Gräber in Chemnitz. Preise nach Grabgröße, transparent aufgeschlüsselt.",
  alternates: { canonical: `${config.seo.siteUrl}/leistungen` },
};

const sizeClassesMitPreis = graveSizeClasses.filter(
  (s): s is typeof s & { id: "klein" | "mittel" | "gross" } => s.id !== "sonder",
);

function preisLabel(modell: PreisModell) {
  switch (modell) {
    case "gestaffelt":
      return "Fester Preis nach Größe";
    case "service-plus-material":
      return "Servicepauschale zzgl. Material";
    case "individuell":
      return "Preis nach Absprache";
  }
}

export default function LeistungenPage() {
  return (
    <>
      <section aria-labelledby="leistungen-heading" className="bg-stein-100">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">
            Leistungen &amp; Preise
          </p>
          <h1 id="leistungen-heading" className="mt-3 max-w-[24ch] text-[38px] md:text-[48px]">
            Die passende Pflege für jede Grabstätte
          </h1>
          <p className="mt-4 max-w-[64ch] text-[17px] font-light leading-relaxed text-schiefer-600">
            Wählen Sie die Betreuung, die zu Ihren Wünschen passt. Unsere Leistungen und Preise sind klar und
            transparent nach Pflegeumfang und Grabgröße aufgebaut.
          </p>
        </div>
      </section>

      {/* Regelmäßige Grabpflege */}
      <section aria-labelledby="regelpflege-heading" className="bg-stein-0">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <RevealOnScroll>
            <h2 id="regelpflege-heading" className="text-[30px] md:text-[38px]">
              Regelmäßige Grabpflege
            </h2>
            <p className="mt-4 max-w-[64ch] text-[17px] font-light leading-relaxed text-schiefer-600">
              Nicht immer ist es möglich, sich regelmäßig selbst um die Grabstätte eines Angehörigen zu
              kümmern. Wir sorgen dafür, dass sie dennoch dauerhaft gepflegt und in guten Händen bleibt. Wir
              besuchen die Grabstätte in einem Rhythmus Ihrer Wahl.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {careIntervals.map((interval) => (
              <div key={interval.id} className="border border-hairline bg-stein-50 p-6">
                <p className="text-xl">{interval.label}</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-schiefer-500">
                  {interval.besucheProMonat} {interval.besucheProMonat === 1 ? "Besuch" : "Besuche"} pro Monat
                </p>
              </div>
            ))}
          </RevealOnScroll>
          <RevealOnScroll className="mt-4 text-sm font-light text-schiefer-500">
            Unabhängig vom gewählten Rhythmus ist der Pflegeumfang je Besuch immer der gleiche.
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <caption className="mb-3 text-left text-sm font-light text-schiefer-500">
                Preis pro Monat in Euro, nach Grabgröße und Pflegeintervall
              </caption>
              <thead>
                <tr className="border-b border-hairline">
                  <th scope="col" className="py-3 pr-4 text-sm font-medium text-schiefer-800">
                    Grabgröße
                  </th>
                  {careIntervals.map((interval) => (
                    <th key={interval.id} scope="col" className="py-3 pr-4 text-sm font-medium text-schiefer-800">
                      {interval.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeClassesMitPreis.map((size) => (
                  <tr key={size.id} className="border-b border-hairline">
                    <th scope="row" className="py-4 pr-4 text-sm font-normal text-schiefer-700">
                      {size.label}
                      <span className="block text-xs font-light text-schiefer-400">{size.range}</span>
                    </th>
                    {careIntervals.map((interval) => (
                      <td key={interval.id} className="py-4 pr-4 font-display text-xl text-schiefer-800">
                        {regelpflegePreise[size.id][interval.id]} €
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="py-4 pr-4 text-sm font-normal text-schiefer-700">
                    Sondergröße
                    <span className="block text-xs font-light text-schiefer-400">über 4 m²</span>
                  </th>
                  <td colSpan={3} className="py-4 text-sm font-light text-schiefer-500">
                    Individuelles Angebot nach Besichtigung.
                  </td>
                </tr>
              </tbody>
            </table>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg text-schiefer-800">Bei jedem Besuch enthalten</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {regelpflegeLeistungsumfang.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-light text-schiefer-600">
                    <Icon name="Leaf" className="mt-0.5 h-4 w-4 shrink-0 text-moos-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-schiefer-800">Nicht enthalten</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {regelpflegeNichtEnthalten.map((item) => (
                  <li key={item} className="text-sm font-light text-schiefer-500">
                    {item}
                  </li>
                ))}
                <li className="text-sm font-light text-schiefer-500">
                  <Link href="/leistungen#zusatz-heading" className="text-moos-700">
                    Mehr siehe Zusatzleistungen
                  </Link>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <Link href="/kontakt" className={buttonVariants({ variant: "default", size: "lg" })}>
              Besichtigung anfragen
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Einzelpflege */}
      <section aria-labelledby="einzelpflege-heading" className="bg-stein-50">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <RevealOnScroll>
            <h2 id="einzelpflege-heading" className="text-[30px] md:text-[38px]">
              Einzelpflege ohne laufende Betreuung
            </h2>
            <p className="mt-4 max-w-[64ch] text-[17px] font-light leading-relaxed text-schiefer-600">
              Die Einzelpflege umfasst dieselben Arbeiten wie ein regulärer Pflegebesuch, wird aber einmalig
              gebucht.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {sizeClassesMitPreis.map((size) => (
              <div key={size.id} className="border border-hairline bg-stein-0 p-6">
                <p className="text-sm font-medium uppercase tracking-[.12em] text-moos-700">{size.label}</p>
                <p className="mt-1 text-xs font-light text-schiefer-400">{size.range}</p>
                <p className="mt-4 font-display text-3xl text-schiefer-800">{einzelpflegePreise[size.id]} €</p>
              </div>
            ))}
          </RevealOnScroll>

          <RevealOnScroll className="mt-6 max-w-[64ch] text-sm font-light leading-relaxed text-schiefer-500">
            <p>Sondergröße (über 4 m²): individuelles Angebot nach Besichtigung.</p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Link href="/leistungen/einzelpflege" className={buttonVariants({ variant: "outline" })}>
              Mehr zur Einzelpflege
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Zusatzleistungen */}
      <section aria-labelledby="zusatz-heading" className="bg-stein-0">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <RevealOnScroll>
            <h2 id="zusatz-heading" className="text-[30px] md:text-[38px]">
              Zusatzleistungen
            </h2>
            <p className="mt-4 max-w-[64ch] text-[17px] font-light leading-relaxed text-schiefer-600">
              Einzeln buchbar, zusätzlich zur regelmäßigen Pflege oder zur Einzelpflege.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {zusatzleistungen.map((leistung) => (
              <div key={leistung.slug} className="flex flex-col gap-4 border border-hairline bg-stein-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center bg-moos-50 text-moos-700">
                  <Icon name={leistung.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-xl">{leistung.titel}</h3>
                <p className="flex-1 text-sm font-light leading-relaxed text-schiefer-500">{leistung.kurz}</p>

                <div className="border-t border-hairline pt-4">
                  <p className="text-xs font-medium uppercase tracking-[.12em] text-schiefer-400">
                    {preisLabel(leistung.preisModell)}
                  </p>
                  {leistung.preisModell === "gestaffelt" && leistung.gestaffeltePreise ? (
                    <ul className="mt-2 flex flex-col gap-1">
                      {leistung.gestaffeltePreise.map((p) => (
                        <li key={p.label} className="flex justify-between text-sm text-schiefer-700">
                          <span className="font-light">{p.label}</span>
                          <span className="font-display text-base">{p.preis} €</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {leistung.preisModell === "service-plus-material" && leistung.servicePreis ? (
                    <p className="mt-2 font-display text-2xl text-schiefer-800">
                      {leistung.servicePreis} € <span className="text-sm font-sans font-light text-schiefer-500">zzgl. Material</span>
                    </p>
                  ) : null}
                </div>

                <Link
                  href={leistung.hasDetailPage ? `/leistungen/${leistung.slug}` : "/kontakt"}
                  className="text-sm text-moos-700 hover:underline"
                >
                  {leistung.hasDetailPage ? "Mehr erfahren" : "Anfragen"}
                </Link>
              </div>
            ))}
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 max-w-[64ch] text-sm font-light text-schiefer-500">
            Alle Preise verstehen sich zzgl. der jeweils angegebenen Material- oder Zusatzkosten.
            Friedhofsgebühren rechnet die Friedhofsverwaltung direkt mit Ihnen ab.
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
