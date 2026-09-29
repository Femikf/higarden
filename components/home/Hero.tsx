"use client";

import { useEffect, useState, useCallback } from "react";
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
      className="relative min-h-[92svh] flex items-center bg-cream overflow-hidden pt-28 pb-16 lg:py-28"
      aria-label="HiGarden Landscaping Studio"
    >
      {/* Soft Ambient Organic Warmth Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-higarden-soft/60 blur-[130px] pointer-events-none -translate-y-1/3 translate-x-1/3"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-higarden-soft/40 blur-[120px] pointer-events-none translate-y-1/4 -translate-x-1/4"
      />

      <div className="container-hg relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Brand Message & High-Converting CTAs */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start gap-6">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-higarden-bright/40 bg-higarden-soft/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-higarden-primary shadow-sm"
          >
            <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
            <span>LANDSCAPING &bull; GARDEN DESIGN &bull; MAINTENANCE</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-forest-900 text-balance">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Let&rsquo;s Grow
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 block text-higarden-primary drop-shadow-[0_2px_12px_rgba(7,91,42,0.18)]"
            >
              Something Beautiful.
            </motion.span>
          </h1>

          {/* Subtitle / Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-xl text-base sm:text-lg leading-relaxed text-higarden-muted font-normal"
          >
            Professional Kerala landscaping, architectural garden design, and acclimatized plant solutions that turn bare spaces into vibrant outdoor sanctuaries.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <MagneticButton
              href="/contact"
              variant="bright"
              className="px-8 py-4 text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_24px_rgba(99,193,50,0.35)]"
            >
              Get a Free Consultation
            </MagneticButton>

            <MagneticButton
              href="/services"
              variant="ghost"
              className="px-7 py-3.5 text-sm font-semibold border-2 border-forest-900/15 text-forest-900 hover:bg-forest-900/5 hover:border-forest-900/30"
            >
              Explore Services
            </MagneticButton>

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-forest-900/15 bg-white/80 px-5 py-3.5 text-sm font-semibold text-forest-900 shadow-sm transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950"
              aria-label="Chat with HiGarden on WhatsApp"
            >
              <FaWhatsapp className="size-4 text-emerald-600 group-hover:text-forest-950" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center gap-5 pt-3 text-xs font-semibold text-higarden-muted"
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-higarden-bright" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-higarden-bright" />
              <span>100+ Projects in Kerala</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-higarden-bright" />
              <span>Direct Nursery Supply</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Vivid, High-Impact Step-by-Step Landscape Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-5 w-full flex flex-col gap-3"
        >
          {/* Framed Visual Canvas: 100% natural daylight brightness, un-obscured */}
          <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[2.2rem] sm:rounded-[2.5rem] bg-forest-900 shadow-[0_20px_50px_-10px_rgba(7,91,42,0.25)] border-4 border-white">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    opacity: { duration: 0.9, ease: "easeInOut" },
                    scale: { duration: 5, ease: "easeOut" },
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeStage.src}
                  alt={activeStage.title}
                  fill
                  priority
                  sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 50vw, 92vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Discreet floating glass badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-forest-950/75 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md border border-white/15">
              <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
              <span>{activeStage.badge}</span>
            </div>
          </div>

          {/* Minimal 4-stage interactive progress bar below the photo */}
          <div className="grid grid-cols-4 gap-2 px-1 pt-1">
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
                  <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-forest-900/15">
                    {isActive ? (
                      <motion.div
                        key={`progress-${currentStep}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: STAGE_DURATION / 1000, ease: "linear" }}
                        className="absolute inset-y-0 left-0 bg-higarden-primary rounded-full shadow-sm"
                      />
                    ) : (
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isPast ? "bg-higarden-primary/80 w-full" : "w-0"
                        }`}
                      />
                    )}
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[0.7rem] font-bold">
                    <span
                      className={
                        isActive ? "text-higarden-primary" : "text-forest-900/40 group-hover:text-forest-900/70"
                      }
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`truncate hidden sm:inline ${
                        isActive ? "text-forest-900" : "text-forest-900/40 group-hover:text-forest-900/70"
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
