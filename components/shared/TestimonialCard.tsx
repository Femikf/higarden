import Image from "next/image";
import { Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

const AVATAR_BG_COLORS = [
  "bg-emerald-700 text-white",
  "bg-forest-800 text-white",
  "bg-teal-700 text-white",
  "bg-lime-800 text-white",
  "bg-amber-700 text-white",
  "bg-stone-700 text-white",
  "bg-green-700 text-white",
];

function getAvatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_BG_COLORS[Math.abs(hash) % AVATAR_BG_COLORS.length];
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const initial = testimonial.name.trim().charAt(0).toUpperCase();

  return (
    <figure
      className={cn(
        "flex w-[340px] shrink-0 flex-col justify-between gap-5 rounded-[2rem] border border-higarden-soft bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(7,91,42,0.06)] sm:w-[410px] transition-shadow hover:shadow-[0_12px_40px_rgba(7,91,42,0.1)]",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-sand-100/90 px-2.5 py-1 text-[11px] font-semibold text-forest-800 border border-higarden-soft">
            <FcGoogle className="size-3.5 shrink-0" aria-hidden="true" />
            <span>Google Review</span>
          </div>
        </div>

        <blockquote className="text-[0.98rem] sm:text-[1.02rem] leading-relaxed text-forest-900 font-normal">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <figcaption className="flex items-center gap-3 pt-4 border-t border-higarden-soft/70">
        {testimonial.avatar?.src ? (
          <Image
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover border-2 border-higarden-bright/30"
          />
        ) : (
          <div
            className={cn(
              "relative flex size-11 shrink-0 items-center justify-center rounded-full text-base font-bold shadow-sm",
              getAvatarColor(testimonial.name)
            )}
            aria-hidden="true"
          >
            {initial}
          </div>
        )}
        <div className="min-w-0 flex-1 leading-tight">
          <div className="flex items-center gap-1.5 flex-wrap">
            <p className="font-bold text-forest-900 text-[0.95rem]">{testimonial.name}</p>
            {testimonial.badge === "Local Guide" && (
              <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 border border-amber-200">
                Local Guide
              </span>
            )}
          </div>
          <p className="text-xs text-higarden-muted mt-0.5">
            {testimonial.location}
            {testimonial.date ? ` \u00B7 ${testimonial.date}` : ""}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
