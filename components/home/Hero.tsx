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
    // Preload stage images in browser memory
    STAGES.forEach((stage) => {
      const img = new window.Image();
      img.src = stage.src;
    });

    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STAGES.length);
    }, STAGE_DURATION);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, currentStep]);

  const activeStage = STAGES[currentStep];

  return (
    <section
      className="relative lg:min-h-[100svh] flex flex-col lg:justify-between overflow-hidden bg-forest-950"
      aria-label="HiGarden Landscaping Studio"
    >
      {/* Hidden preloader so browser HTTP cache and decode pipeline are instantly warm */}
      <div className="hidden pointer-events-none" aria-hidden="true">
        {STAGES.map((stage) => (
          <Image
            key={`preload-${stage.id}`}
            src={stage.src}
            alt=""
            width={10}
            height={10}
            priority
          />
        ))}
      </div>

      {/* Desktop Full-Bleed Panoramic Background Image (lg: screens) */}
      <div className="hidden lg:block absolute inset-0 scale-105 pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{
              opacity: 1,
              scale: prefersReducedMotion ? 1 : 1.03,
              transition: {
                opacity: { duration: 1.0, ease: "easeInOut" },
                scale: { duration: STAGE_DURATION / 1000 + 0.5, ease: "easeOut" },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.9, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeStage.src}
              alt={activeStage.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Gentle Edge Vignettes Only (Middle 80% is 100% crystal clear natural sunlight) */}
      <div className="hidden lg:block absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-forest-950/60 via-forest-950/15 to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute inset-x-0 bottom-0 h-44 sm:h-48 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent pointer-events-none" />

      {/* Mobile Stage Viewport (< lg): Edge-to-edge full width from top of screen */}
      <div className="lg:hidden relative w-full aspect-[1376/768] sm:aspect-[16/10] overflow-hidden select-none bg-forest-950">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeStage.src}
              alt={activeStage.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Top Vignette so Navbar is crystal clear */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-forest-950/80 via-forest-950/30 to-transparent pointer-events-none" />

        {/* Bottom Smooth Gradient fading into the content sheet */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent pointer-events-none" />

        {/* Mobile Stage Pills on Image (Cleanly positioned below navbar) */}
        <div className="absolute inset-x-0 top-16 sm:top-20 px-4 flex items-center justify-between gap-2 pointer-events-none z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-forest-950/80 px-3 py-1 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-higarden-lime shadow-lg backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-higarden-bright animate-pulse" />
            <span>LANDSCAPING &bull; DESIGN</span>
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-higarden-bright/50 bg-forest-900/85 px-2.5 py-1 text-[0.68rem] sm:text-xs font-semibold text-white shadow-lg backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-higarden-bright animate-ping" />
            <span>{activeStage.badge}</span>
          </span>
        </div>
      </div>

      {/* Middle Spacer for Desktop: Keeps the entire villa house, lawn, and garden completely unobstructed */}
      <div className="hidden lg:flex flex-1 pointer-events-none" />

      {/* Content Sheet: Connected seamlessly to image, ZERO EMPTY VOID */}
      <div className="container-hg relative z-20 -mt-6 sm:-mt-8 lg:mt-0 pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-xl mx-auto lg:max-w-none rounded-3xl border border-white/20 bg-forest-950/90 px-5 py-4 sm:px-8 sm:py-5 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {/* Desktop Top Row (Hidden on mobile because it's overlaid on the stage photo) */}
          <div className="hidden lg:flex items-center justify-between gap-2 mb-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-forest-950/75 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-higarden-lime shadow-md backdrop-blur-md"
            >
              <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
              <span>LANDSCAPING &bull; GARDEN DESIGN &bull; MAINTENANCE</span>
            </motion.div>

            <motion.div
              key={`badge-${activeStage.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-higarden-bright/40 bg-forest-900/80 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-md shrink-0"
            >
              <span className="size-1.5 rounded-full bg-higarden-bright animate-ping" />
              <span>{activeStage.badge}</span>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
            {/* Headline & Tagline Lockup */}
            <div className="flex flex-col gap-0.5 sm:gap-1 max-w-xl">
              <h1 className="font-heading text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                <span>Let&rsquo;s Grow </span>
                <span className="text-higarden-bright drop-shadow-[0_2px_12px_rgba(99,193,50,0.45)]">
                  Something Beautiful.
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed">
                From raw ground to living paradise. Professional Kerala architectural landscaping and plant solutions.
              </p>
            </div>

            {/* CTAs & WhatsApp */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-0">
              <MagneticButton
                href="/contact"
                variant="bright"
                className="flex-1 sm:flex-none justify-center px-5 sm:px-6 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_20px_rgba(99,193,50,0.35)] text-center"
              >
                Free Consultation
              </MagneticButton>

              <MagneticButton
                href="/services"
                variant="ghost"
                className="hidden md:inline-flex px-4 py-2.5 text-xs sm:text-sm font-semibold border border-white/30 text-white hover:bg-white/10"
              >
                Our Services
              </MagneticButton>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-forest-900/60 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950 shrink-0"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="size-4 text-higarden-bright" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 4-Stage Interactive Progress Scrubber */}
          <div className="mt-3.5 pt-3 border-t border-white/10 grid grid-cols-4 gap-2 sm:gap-4">
            {STAGES.map((stage, idx) => {
              const isActive = idx === currentStep;
              const isPast = idx < currentStep;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setCurrentStep(idx)}
                  className="group flex flex-col text-left focus:outline-none cursor-pointer"
                  aria-label={`Jump to stage ${stage.step}: ${stage.phase}`}
                >
                  <div className="relative h-1 sm:h-1.5 w-full overflow-hidden rounded-full bg-white/20">
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
                  <div className="mt-1 flex items-center justify-between text-[0.62rem] sm:text-xs font-bold">
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


