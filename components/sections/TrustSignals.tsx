import { Icon } from "@/components/shared/Icon";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { config } from "@/lib/config";

/**
 * Ersetzt die generische, zahlenbasierte Trust-Bar: Als 2026 gegründeter
 * Betrieb gibt es noch keine belastbaren Kennzahlen oder Bewertungen.
 * Statt erfundener Zahlen stehen hier nachprüfbare, qualitative Signale.
 */
export function TrustSignals() {
  return (
    <section aria-label="Vertrauenssignale" className="border-y border-hairline bg-stein-0">
      <RevealOnScroll className="mx-auto max-w-[1120px] px-6 py-12">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {config.vertrauenssignale.map((signal) => (
            <li key={signal.titel} className="flex flex-col gap-3">
              <Icon name={signal.icon} className="h-5 w-5 text-moos-700" />
              <p className="text-sm font-medium text-schiefer-800">{signal.titel}</p>
              <p className="text-sm font-light leading-relaxed text-schiefer-500">{signal.text}</p>
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}
