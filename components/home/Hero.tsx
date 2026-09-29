"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { site } from "@/constants/site";

const STAGES = [
  {
    id: 1,
    step: "01",
    phase: "Plain Yard",
    title: "Untouched Yard",
    src: "/images/hero/hero-stage-1.jpg",
    badge: "01 / Plain Yard",
  },
  {
    id: 2,
    step: "02",
    phase: "Hardscape",
    title: "Granite Stone Pathways",
    src: "/images/hero/hero-stage-2.jpg",
    badge: "02 / Hardscape & Path",
  },
  {
    id: 3,
    step: "03",
    phase: "Greenery",
    title: "Tropical Palms & Lawn",
    src: "/images/hero/hero-stage-3.jpg",
    badge: "03 / Tropical Greenery",
  },
  {
    id: 4,
    step: "04",
    phase: "Living Oasis",
    title: "Finished Garden Masterpiece",
    src: "/images/hero/hero-stage-4.jpg",
    badge: "04 / Living Masterpiece",
  },
];

const STAGE_DURATION = 4500; // 4.5 seconds per step

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-progress stages smoothly
  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STAGES.length);
    }, STAGE_DURATION);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, currentStep]);

  const activeStage = STAGES[currentStep];

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-forest-950 py-20 lg:py-24"
      aria-label="HiGarden Landscaping Studio"
    >
      {/* Full-Bleed Grand Panoramic Background Image */}
      <div className="absolute inset-0 scale-105 pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{
              opacity: 1,
              scale: prefersReducedMotion ? 1 : 1.04,
              transition: {
                opacity: { duration: 1.1, ease: "easeInOut" },
                scale: { duration: STAGE_DURATION / 1000 + 0.5, ease: "easeOut" },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1.0, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeStage.src}
              alt={activeStage.title}
              fill
              priority={activeStage.id === 1}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gentle Vignettes (Clean & Soft - Keeping 80% of the image in full bright natural sunlight) */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-forest-950/25 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-forest-950/45 to-transparent pointer-events-none" />

      {/* Floating Status Pill on Top-Right */}
      <div className="absolute top-28 right-6 lg:right-12 z-20 hidden md:flex items-center gap-2.5 rounded-full border border-white/20 bg-forest-950/65 px-4 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
        <span className="size-2 rounded-full bg-higarden-bright animate-ping" />
        <span>{activeStage.badge}</span>
      </div>

      <div className="container-hg relative z-20 flex flex-col justify-between min-h-[calc(100svh-9rem)] pt-12 pb-6">
        {/* Luxury Glassmorphic Content Card on the Left */}
        <div className="max-w-2xl rounded-3xl sm:rounded-[2.5rem] border border-white/20 bg-forest-950/55 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-higarden-bright/35 bg-forest-900/80 px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime shadow-sm backdrop-blur-md"
          >
            <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
            <span>LANDSCAPING &bull; GARDEN DESIGN &bull; MAINTENANCE</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white text-balance">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Let&rsquo;s Grow
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 block text-higarden-bright drop-shadow-[0_2px_16px_rgba(99,193,50,0.35)]"
            >
              Something Beautiful.
            </motion.span>
          </h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 font-normal max-w-xl"
          >
            Watch how our Kerala landscape experts transform raw ground into a living, aesthetic garden paradise step-by-step.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 flex flex-wrap items-center gap-3.5"
          >
            <MagneticButton
              href="/contact"
              variant="bright"
              className="px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_24px_rgba(99,193,50,0.4)]"
            >
              Get a Free Consultation
            </MagneticButton>

            <MagneticButton
              href="/services"
              variant="ghost"
              className="px-6 py-3 text-xs sm:text-sm font-semibold border border-white/30 text-white hover:bg-white/10"
            >
              Explore Our Landscaping
            </MagneticButton>

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950"
              aria-label="Chat with HiGarden on WhatsApp"
            >
              <FaWhatsapp className="size-4 text-higarden-bright group-hover:text-forest-950" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/10 pt-4 text-[0.7rem] sm:text-xs font-semibold text-white/75"
          >
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-higarden-bright" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-higarden-bright" />
              <span>100+ Projects in Kerala</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-higarden-bright" />
              <span>Direct Nursery Supply</span>
            </div>
          </motion.div>
        </div>

        {/* Minimalist 4-Stage Scrubber at the Bottom */}
        <div className="mt-8 flex w-full max-w-xl flex-col gap-2 rounded-2xl border border-white/15 bg-forest-950/60 p-3 sm:p-4 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs font-bold text-white/90">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-higarden-bright animate-ping" />
              <span className="text-higarden-lime uppercase tracking-wider text-[0.65rem] sm:text-xs">
                Step {activeStage.step}: {activeStage.phase}
              </span>
            </div>
            <span className="text-[0.65rem] text-white/60">Click any step to preview</span>
          </div>

          {/* 4 Segmented Progress Bars */}
          <div className="grid grid-cols-4 gap-2 pt-1">
            {STAGES.map((stage, idx) => {
              const isActive = idx === currentStep;
              const isPast = idx < currentStep;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setCurrentStep(idx)}
                  className="group flex flex-col text-left focus:outline-none"
                  aria-label={`Jump to stage ${stage.step}: ${stage.phase}`}
                >
                  <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                    {isActive ? (
                      <motion.div
                        key={`bar-${currentStep}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: STAGE_DURATION / 1000, ease: "linear" }}
                        className="absolute inset-y-0 left-0 bg-higarden-bright rounded-full shadow-[0_0_8px_rgba(99,193,50,0.8)]"
                      />
                    ) : (
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isPast ? "bg-higarden-bright/80 w-full" : "w-0"
                        }`}
                      />
                    )}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[0.65rem] font-bold">
                    <span className={isActive ? "text-higarden-bright" : "text-white/50 group-hover:text-white/80"}>
                      {stage.step}
                    </span>
                    <span
                      className={`truncate hidden xs:inline ${
                        isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {stage.phase}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50 pointer-events-none hidden sm:flex"
      >
        <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  );
}

