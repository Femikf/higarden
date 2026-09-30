import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/constants/testimonials";

const marqueeItems = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section
      className="overflow-hidden bg-sand-100 py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-hg mb-14">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="What clients say once the dust settles."
          align="center"
          className="mx-auto max-w-2xl"
        />
      </div>

      <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
