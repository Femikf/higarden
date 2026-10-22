import { Star, ExternalLink } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials, GOOGLE_REVIEWS_URL } from "@/constants/testimonials";

const marqueeItems = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section
      className="overflow-hidden bg-sand-100 py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-hg mb-12 sm:mb-16">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Google Reviews"
            title="What clients say once the dust settles."
            description="Real feedback from homeowners, plant enthusiasts, and landscaping clients at HiGarden Nursery Kadampazhipuram."
            align="center"
            className="mx-auto max-w-2xl"
          />

          {/* Google Reviews Trust Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-higarden-soft bg-white px-4 py-2 text-sm shadow-[0_2px_10px_rgba(7,91,42,0.04)]">
              <FcGoogle className="size-5 shrink-0" aria-hidden="true" />
              <div className="flex items-center gap-1 font-bold text-forest-900">
                <span>5.0</span>
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="hidden sm:inline text-higarden-muted text-xs">&bull; Kadampazhipuram, Palakkad</span>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-higarden-bright/40 bg-white px-4 py-2 text-xs font-bold text-forest-800 shadow-[0_2px_10px_rgba(7,91,42,0.04)] transition-all hover:border-higarden-bright hover:bg-higarden-soft/40 hover:text-forest-900"
            >
              <span>View all on Google</span>
              <ExternalLink className="size-3.5 text-higarden-muted" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
