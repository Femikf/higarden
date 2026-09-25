import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex w-[340px] shrink-0 flex-col gap-5 rounded-[2rem] border border-higarden-soft bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(7,91,42,0.06)] sm:w-[400px]",
        className
      )}
    >
      <div className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-higarden-bright text-higarden-bright" />
        ))}
      </div>
      <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-forest-900 font-normal">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-2 border-t border-higarden-soft/70">
        <Image
          src={testimonial.avatar.src}
          alt={testimonial.avatar.alt}
          width={48}
          height={48}
          className="size-12 rounded-full object-cover border-2 border-higarden-bright/30"
        />
        <div className="leading-tight">
          <p className="font-bold text-forest-900">{testimonial.name}</p>
          <p className="text-xs text-higarden-muted">
            {testimonial.role} &middot; {testimonial.location}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
