import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { unsplash } from "@/lib/unsplash";
import { site } from "@/constants/site";

export function CTABanner() {
  return (
    <section className="container-hg pb-20 lg:pb-28" aria-labelledby="cta-banner-heading">
      <div className="relative overflow-hidden rounded-[3rem] bg-forest-950 px-8 py-20 text-center sm:px-16 lg:py-28 shadow-[0_25px_60px_-15px_rgba(7,91,42,0.35)] border border-higarden-bright/20">
        {/* Tropical Garden Background */}
        <Image
          src={unsplash("1780283574760-e8d7fd944da5", 2200, 1300)}
          alt="Tranquil tropical pool courtyard framed by lush greenery"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/60" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-higarden-bright/35 bg-forest-900/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime shadow-sm backdrop-blur-md">
            <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
            <span>START YOUR GARDEN JOURNEY</span>
          </span>

          <h2
            id="cta-banner-heading"
            className="font-heading text-3xl font-extrabold leading-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Ready to Transform{" "}
            <span className="text-higarden-bright drop-shadow-[0_2px_12px_rgba(99,193,50,0.35)]">
              Your Space?
            </span>
          </h2>

          <p className="max-w-xl text-base sm:text-xl text-white/90 leading-relaxed font-normal">
            Let&rsquo;s create a garden that feels like it belongs there.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="/contact"
              variant="bright"
              className="px-9 py-4 text-sm font-extrabold uppercase tracking-wider shadow-[0_4px_24px_rgba(99,193,50,0.4)]"
            >
              Get a Free Consultation
            </MagneticButton>

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950 hover:scale-105"
            >
              <FaWhatsapp className="size-4 text-higarden-bright group-hover:text-forest-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <p className="mt-2 text-xs font-medium text-white/60">
            Based in Kerala &bull; Serving Kochi, Palakkad, Thrissur, Calicut, Trivandrum &amp; statewide
          </p>
        </div>
      </div>
    </section>
  );
}
