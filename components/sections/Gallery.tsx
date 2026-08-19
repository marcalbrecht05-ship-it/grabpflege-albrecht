import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const PLATZHALTER = [
  "Vorher / nachher: Frühjahrsbepflanzung",
  "Grabsteinreinigung",
  "Sommerbepflanzung",
  "Herbstliche Grabpflege",
  "Winterabdeckung",
  "Grabkantenpflege",
];

/**
 * Es liegt noch keine eigene Fotografie vor. Bildslots sind bewusst als
 * Platzhalter erkennbar statt mit Stock-Fotos gefüllt (siehe Design System:
 * "no generic stock photo"). Sobald Aufnahmen vorliegen, next/image mit
 * sinnvollem alt-Text einsetzen.
 */
export function Gallery() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-moos-50">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <RevealOnScroll className="max-w-[46ch]">
          <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">Einblicke</p>
          <h2 id="gallery-heading" className="mt-3 text-[30px] md:text-[38px]">
            Beispiele aus der Pflege
          </h2>
          <p className="mt-4 text-[17px] font-light leading-relaxed text-schiefer-600">
            Fotos folgen, sobald erste Pflegeeinsätze dokumentiert sind.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {PLATZHALTER.map((label) => (
            <div
              key={label}
              className="flex aspect-square items-center justify-center border border-hairline bg-stein-0 p-4"
            >
              <p className="text-center text-xs font-light text-schiefer-400">{label}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
