"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Trees,
  MapPin,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { site } from "@/constants/site";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#02170b] via-[#032412] to-[#011409] text-white pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28"
      aria-label="HiGarden Landscaping Studio"
    >
      {/* Background Ambient Lighting Accents */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-higarden-primary/25 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-higarden-bright/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-hg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Brand Headline, Story & Action Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-5"
          >
            {/* Studio Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-higarden-bright/30 bg-forest-900/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-higarden-lime shadow-md backdrop-blur-md">
                <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
                <span>Sharing Knowledge Everyday &bull; Kerala</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span>Let&rsquo;s Grow </span>
              <span className="bg-gradient-to-r from-higarden-bright via-higarden-lime to-white bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(99,193,50,0.35)]">
                Greener Homes.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed">
              From raw ground to a flourishing architectural paradise. As shared across @higardencamp and @higardenclub, we design, build, and nurture living Kerala villa gardens, velvety lawns, and climate-hardened nursery plants.
            </p>

            {/* CTAs & WhatsApp */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <MagneticButton
                href="/contact"
                variant="bright"
                className="justify-center px-6 py-3 text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_25px_rgba(99,193,50,0.4)] text-center flex items-center gap-2 group"
              >
                <span>Free Consultation</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </MagneticButton>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-forest-900/70 px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp className="size-4 text-higarden-bright group-hover:text-forest-950" />
                <span>WhatsApp</span>
              </a>

              <MagneticButton
                href="/services"
                variant="ghost"
                className="hidden sm:inline-flex px-4 py-3 text-xs sm:text-sm font-semibold border border-white/20 text-white/90 hover:bg-white/10 hover:text-white"
              >
                Our Services
              </MagneticButton>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-1.5 sm:gap-4 text-white/90">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-higarden-soft/15 text-higarden-bright">
                  <Trees className="size-3.5 sm:size-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">50+</p>
                  <p className="text-[0.62rem] sm:text-xs text-white/60 truncate">Gardens Built</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-higarden-soft/15 text-higarden-bright">
                  <ShieldCheck className="size-3.5 sm:size-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">100%</p>
                  <p className="text-[0.62rem] sm:text-xs text-white/60 truncate">Palakkad Farm</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-higarden-soft/15 text-higarden-bright">
                  <Star className="size-3.5 sm:size-4 fill-higarden-bright text-higarden-bright" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">10k+</p>
                  <p className="text-[0.62rem] sm:text-xs text-white/60 truncate">Plant Lovers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Single Kerala Neighbourhood Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/20 bg-forest-950/80 p-3 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
              {/* Framed Image Container (16:9) */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-black border border-white/15 shadow-2xl group select-none">
                <Image
                  src="/images/hero/hero-kerala-neighbourhood.jpg"
                  alt="HiGarden botanical nursery farm in Katampazhipuram, Palakkad with red laterite walkways, potted tropical flowers, shade house, and traditional Kerala villa — by HiGarden"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Gentle Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Instagram-Style Location & Handle Badge */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="flex items-center gap-2">
                    {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 border border-white/15 px-3 py-1.5 text-[0.65rem] sm:text-xs font-semibold text-white backdrop-blur-md shadow-sm">
                      <MapPin className="size-3 text-higarden-bright" />
                      <span>Palakkad, Kerala</span>
                    </span> */}
                  </div>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-black/50 border border-white/15 px-3 py-1.5 text-[0.65rem] sm:text-xs font-semibold text-white backdrop-blur-md shadow-sm transition-colors duration-200 hover:bg-higarden-primary/80 hover:border-higarden-bright/40"
                    aria-label="Follow @higardencamp on Instagram"
                  >
                    <FaInstagram className="size-3 text-higarden-bright" />
                    <span>@higardencamp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
