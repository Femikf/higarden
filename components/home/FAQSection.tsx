import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq";

export function FAQSection() {
  return (
    <section className="container-hg py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ &amp; Advice"
          title={
            <span>
              Frequently asked <span className="text-higarden-primary">questions.</span>
            </span>
          }
          description="Have questions about landscaping cost, Kerala plant varieties, or timeline? Our team is always one message away."
        />

        <Accordion className="divide-y divide-higarden-soft border-y border-higarden-soft">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="py-2">
              <AccordionTrigger className="py-5 font-heading text-lg font-bold text-forest-900 hover:text-higarden-primary transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-higarden-muted pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
