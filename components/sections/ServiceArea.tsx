import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { config } from "@/lib/config";

export function ServiceArea() {
  return (
    <section aria-labelledby="area-heading" className="bg-stein-50">
      <div className="mx-auto max-w-[1120px] px-6 py-24">
        <RevealOnScroll className="max-w-[46ch]">
          <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">Einzugsgebiet</p>
          <h2 id="area-heading" className="mt-3 text-[30px] md:text-[38px]">
            Wir sind für Sie da, in {config.contact.region}
          </h2>
          <p className="mt-4 text-[17px] font-light leading-relaxed text-schiefer-600">
            Beispielhaft betreuen wir Grabstätten auf folgenden Friedhöfen. Ist Ihr Friedhof nicht gelistet,
            fragen Sie gern nach.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-8 flex flex-wrap gap-3">
          {config.serviceOrte.map((ort) => (
            <span
              key={ort}
              className="rounded-full border border-hairline bg-stein-0 px-4 py-2 text-sm font-light text-schiefer-600"
            >
              {ort}
            </span>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
