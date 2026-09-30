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
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-forest-950"
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

      {/* Gentle Edge Vignettes Only (Middle 80% is 100% crystal clear natural sunlight) */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-forest-950/60 via-forest-950/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 sm:h-48 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent pointer-events-none" />

      {/* Middle Spacer: Keeps the entire villa house, lawn, and garden completely unobstructed */}
      <div className="flex-1 pointer-events-none" />

      {/* Compact Bottom Floating Dock: Purely Visible Writings & CTAs */}
      <div className="container-hg relative z-20 pb-4 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full rounded-2xl sm:rounded-3xl border border-white/20 bg-forest-950/85 px-4 py-3.5 sm:px-8 sm:py-5 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {/* Top row: Category Badge on left, Live Stage Pill on right */}
          <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-forest-950/75 px-3 py-1 sm:px-4 sm:py-1.5 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-higarden-lime shadow-md backdrop-blur-md"
            >
              <span className="size-1.5 sm:size-2 rounded-full bg-higarden-bright animate-pulse" />
              <span className="hidden xs:inline">LANDSCAPING &bull; GARDEN DESIGN &bull; MAINTENANCE</span>
              <span className="xs:hidden">LANDSCAPING &bull; DESIGN</span>
            </motion.div>

            <motion.div
              key={`badge-${activeStage.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-higarden-bright/40 bg-forest-900/80 px-2.5 py-1 sm:px-3 sm:py-1 text-[0.68rem] sm:text-xs font-semibold text-white shadow-md backdrop-blur-md shrink-0"
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
              <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                From raw ground to living paradise. Professional Kerala architectural landscaping and plant solutions.
              </p>
            </div>

            {/* CTAs & WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-0">
              <MagneticButton
                href="/contact"
                variant="bright"
                className="flex-1 sm:flex-none justify-center px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_20px_rgba(99,193,50,0.35)] text-center"
              >
                Free Consultation
              </MagneticButton>

              <MagneticButton
                href="/services"
                variant="ghost"
                className="hidden md:inline-flex px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold border border-white/30 text-white hover:bg-white/10"
              >
                Our Services
              </MagneticButton>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-forest-900/60 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950 shrink-0"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="size-4 text-higarden-bright" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


