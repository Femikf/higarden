"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  ShieldCheck,
  Star,
  Trees,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { site } from "@/constants/site";

const STAGES = [
  {
    id: 1,
    step: "01",
    phase: "Plain Yard",
    title: "Raw Ground & Site Survey",
    description: "Initial grading, ground preparation & architectural landscape planning",
    src: "/images/hero/hero-stage-1.jpg",
    badge: "01 / Plain Yard",
  },
  {
    id: 2,
    step: "02",
    phase: "Hardscape",
    title: "Granite Stone Pathways",
    description: "Natural stone paving, decorative gravel borders & water drainage setup",
    src: "/images/hero/hero-stage-2.jpg",
    badge: "02 / Hardscape & Stone",
  },
  {
    id: 3,
    step: "03",
    phase: "Greenery",
    title: "Lawn Turf & Exotic Palms",
    description: "Acclimatized royal palms, architectural shrubs & lush velvet carpet grass",
    src: "/images/hero/hero-stage-3.jpg",
    badge: "03 / Tropical Greenery",
  },
  {
    id: 4,
    step: "04",
    phase: "Living Oasis",
    title: "Finished Living Masterpiece",
    description: "Night landscape illumination, integrated drip irrigation & flourishing canopy",
    src: "/images/hero/hero-stage-4.jpg",
    badge: "04 / Living Masterpiece",
  },
];

const STAGE_DURATION = 4500; // 4.5 seconds per step

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % STAGES.length);
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => (prev - 1 + STAGES.length) % STAGES.length);
  }, []);

  // Auto-progress stages smoothly
  useEffect(() => {
    if (prefersReducedMotion || !isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STAGES.length);
    }, STAGE_DURATION);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, isPlaying]);

  const activeStage = STAGES[currentStep];

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
                <span>Kerala&rsquo;s Premier Landscape Studio</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span>Let&rsquo;s Grow </span>
              <span className="bg-gradient-to-r from-higarden-bright via-higarden-lime to-white bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(99,193,50,0.35)]">
                Something Beautiful.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed">
              From raw ground to a flourishing architectural paradise. We design, build, and nurture bespoke residential gardens, hardscaping, and acclimatized plant collections across Kerala.
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
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">500+</p>
                  <p className="text-[0.62rem] sm:text-xs text-white/60 truncate">Gardens Built</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-higarden-soft/15 text-higarden-bright">
                  <ShieldCheck className="size-3.5 sm:size-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">100%</p>
                  <p className="text-[0.62rem] sm:text-xs text-white/60 truncate">Acclimatized</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-higarden-soft/15 text-higarden-bright">
                  <Star className="size-3.5 sm:size-4 fill-higarden-bright text-higarden-bright" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">4.9 / 5.0</p>
                  <p className="text-[0.62rem] sm:text-xs text-white/60 truncate">Client Rating</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4-Stage Living Transformation Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/20 bg-forest-950/80 p-3 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between gap-2 mb-3 px-1 sm:px-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-higarden-bright animate-pulse" />
                  <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white">
                    Living Transformation
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-higarden-bright/40 bg-forest-900/90 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    <span className="size-1.5 rounded-full bg-higarden-bright animate-ping" />
                    <span>{activeStage.badge}</span>
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsPlaying((p) => !p)}
                    className="size-7 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                    title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                    aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                  >
                    {isPlaying ? <Pause className="size-3" /> : <Play className="size-3 ml-0.5" />}
                  </button>
                </div>
              </div>

              {/* Framed Image Container (Exact 16:9 Natural Aspect Ratio) */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-black border border-white/15 shadow-2xl group select-none">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeStage.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeStage.src}
                      alt={activeStage.title}
                      fill
                      priority={activeStage.id === 1}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gentle Gradient for Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Stage Info Overlay on Image */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="flex flex-col gap-0.5 max-w-md">
                    <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-higarden-bright">
                      Phase {activeStage.step}: {activeStage.phase}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                      {activeStage.title}
                    </h3>
                    <p className="text-[0.68rem] sm:text-xs text-white/80 line-clamp-1">
                      {activeStage.description}
                    </p>
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1 pointer-events-auto shrink-0">
                    <button
                      type="button"
                      onClick={prevStep}
                      aria-label="Previous transformation stage"
                      className="size-7 sm:size-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-higarden-bright hover:text-forest-950 transition-colors shadow-md backdrop-blur-md"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      aria-label="Next transformation stage"
                      className="size-7 sm:size-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-higarden-bright hover:text-forest-950 transition-colors shadow-md backdrop-blur-md"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
