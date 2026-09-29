"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-forest-950"
      aria-label="HiGarden Landscaping Studio"
    >
      {/* 100% Unobstructed Full-Bleed Panoramic Background Image */}
      <div className="absolute inset-0 scale-105 pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{
              opacity: 1,
              scale: prefersReducedMotion ? 1 : 1.03,
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

      {/* Gentle Edge Vignettes Only (Middle 80% is 100% crystal clear natural sunlight) */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-forest-950/60 via-forest-950/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent pointer-events-none" />

      {/* Top Header Row (Non-intrusive) */}
      <div className="container-hg relative z-20 pt-24 sm:pt-28 flex items-center justify-between gap-4">
        {/* Eyebrow Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-forest-950/75 px-4 py-1.5 text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime shadow-lg backdrop-blur-md"
        >
          <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
          <span>LANDSCAPING &bull; GARDEN DESIGN &bull; MAINTENANCE</span>
        </motion.div> */}

        {/* Current Live Stage Pill */}

      </div>

      {/* Middle Spacer: Keeps the entire villa house, lawn, and garden completely unobstructed */}
      <div className="flex-1 pointer-events-none" />

      {/* Compact Bottom Floating Dock: Purely Visible Writings & CTAs */}
      <div className="container-hg relative z-20 pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full rounded-2xl sm:rounded-3xl border border-white/20 bg-forest-950/80 px-5 py-4 sm:px-8 sm:py-5 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-forest-950/75 px-4 py-1.5 text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime shadow-lg backdrop-blur-md"
        >
          <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
          <span>LANDSCAPING &bull; GARDEN DESIGN &bull; MAINTENANCE</span>
        </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Headline & Tagline Lockup */}
            <div className="flex flex-col gap-1 max-w-xl">
              <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                <span>Let&rsquo;s Grow </span>
                <span className="text-higarden-bright drop-shadow-[0_2px_12px_rgba(99,193,50,0.45)]">
                  Something Beautiful.
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-white/85 font-normal">
                From raw ground to living paradise. Professional Kerala architectural landscaping and plant solutions.
              </p>
            </div>

            {/* CTAs & WhatsApp */}
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                href="/contact"
                variant="bright"
                className="px-6 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_20px_rgba(99,193,50,0.35)]"
              >
                Free Consultation
              </MagneticButton>

              <MagneticButton
                href="/services"
                variant="ghost"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold border border-white/30 text-white hover:bg-white/10"
              >
                Our Services
              </MagneticButton>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-forest-900/60 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="size-4 text-higarden-bright group-hover:text-forest-950" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Minimal 4-Stage Progress Scrubber */}
          <div className="mt-3.5 pt-3 border-t border-white/10 grid grid-cols-4 gap-2 sm:gap-4">
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
                        key={`progress-${currentStep}`}
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
                  <div className="mt-1 flex items-center justify-between text-[0.65rem] sm:text-xs font-bold">
                    <span
                      className={
                        isActive ? "text-higarden-bright" : "text-white/50 group-hover:text-white/80"
                      }
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`truncate hidden xs:inline ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {stage.phase}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


