import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { config } from "@/lib/config";

export function Faq() {
  if (!config.features.faq) return null;

  return (
    <section aria-labelledby="faq-heading" className="bg-stein-0">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <RevealOnScroll>
          <p className="text-[12px] font-medium uppercase tracking-[.22em] text-moos-700">Fragen</p>
          <h2 id="faq-heading" className="mt-3 text-[30px] md:text-[38px]">
            Häufige Fragen
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <Accordion>
            {config.faqs.map((item, index) => (
              <AccordionItem key={item.frage} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-base font-normal text-schiefer-800">
                  {item.frage}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-light leading-relaxed text-schiefer-600">
                  {item.antwort}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </div>
    </section>
  );
}
