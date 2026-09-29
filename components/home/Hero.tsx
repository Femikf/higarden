"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, Pause, Sparkles, Layers, ArrowLeft, ArrowRight, Wand2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { site } from "@/constants/site";

const STAGES = [
  {
    id: 1,
    step: "01",
    phase: "Raw Canvas",
    title: "Untouched Yard",
    highlight: "Initial State",
    description: "Plain house exterior with bare uncultivated ground awaiting architectural landscape design.",
    src: "/images/hero/hero-stage-1.jpg",
    badge: "Step 01 / Raw Ground",
  },
  {
    id: 2,
    step: "02",
    phase: "Hardscape & Layout",
    title: "Granite Stone Pathways",
    highlight: "Groundwork",
    description: "Sculpting modern stepping stones, curved planter retaining borders, and grading rich soil beds.",
    src: "/images/hero/hero-stage-2.jpg",
    badge: "Step 02 / Hardscaping",
  },
  {
    id: 3,
    step: "03",
    phase: "Botanical Planting",
    title: "Tropical Palms & Lawn",
    highlight: "Living Greens",
    description: "Installing acclimatized Kerala palms, monstera, ornamental shrubs, and emerald lawn turf.",
    src: "/images/hero/hero-stage-3.jpg",
    badge: "Step 03 / Planting",
  },
  {
    id: 4,
    step: "04",
    phase: "Living Oasis",
    title: "Finished Garden Masterpiece",
    highlight: "Masterpiece",
    description: "Vibrant blooming bougainvillea arches, exotic flowers, and warm evening landscape lighting.",
    src: "/images/hero/hero-stage-4.jpg",
    badge: "Step 04 / Finished Oasis",
  },
];

const STAGE_DURATION = 5000; // 5 seconds per step for comfortable viewing

const leaves = [
  { left: "7%", top: "24%", size: 36, duration: 8, delay: 0, rotate: -15 },
  { left: "16%", top: "68%", size: 24, duration: 10, delay: 1.2, rotate: 14 },
  { left: "84%", top: "20%", size: 32, duration: 9, delay: 0.6, rotate: 22 },
  { left: "89%", top: "62%", size: 22, duration: 7, delay: 1.8, rotate: -8 },
  { left: "48%", top: "14%", size: 20, duration: 11, delay: 0.3, rotate: 5 },
];

function BotanicalLeaf({ size, rotate }: { size: number; rotate: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotate}deg)` }}
      className="text-higarden-bright/40 filter drop-shadow-sm"
    >
      <path
        d="M12 2c5 2 8 6.5 8 11a8 8 0 0 1-16 0c0-2.2.9-4.1 2.4-5.7C8 9.8 10 12 11 14.5 11.4 10 11.9 6 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Parallax GSAP effect on scroll
  useEffect(() => {
    if (prefersReducedMotion) return;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (!imageContainerRef.current || !sectionRef.current) return;
        gsap.to(imageContainerRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, sectionRef);
    })();

    return () => ctx?.revert();
  }, [prefersReducedMotion]);

  // Step progression timer
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STAGES.length);
    }, STAGE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, prefersReducedMotion, currentStep]);

  const goToStep = useCallback((index: number) => {
    setCurrentStep(index);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % STAGES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => (prev - 1 + STAGES.length) % STAGES.length);
  }, []);

  const toggleBeforeAfter = useCallback(() => {
    setCurrentStep((prev) => (prev === 0 ? 3 : 0));
  }, []);

  const activeStage = STAGES[currentStep];

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-950 py-20 lg:py-24"
      aria-label="HiGarden Landscaping Transformation Hero"
    >
      {/* Dynamic 4-Stage Motion Background */}
      <div ref={imageContainerRef} className="absolute inset-0 scale-105 pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{
              opacity: 1,
              scale: prefersReducedMotion ? 1 : 1.04,
              transition: {
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: STAGE_DURATION / 1000 + 0.5, ease: "easeOut" },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1.1, ease: "easeInOut" },
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

      {/* HiGarden Signature Gradients for Premium Visual Clarity & Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/65 to-forest-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 sm:via-forest-950/65 to-forest-950/20 lg:to-transparent pointer-events-none" />

      {/* Subtle organic green atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-higarden-bright/15 blur-[120px] pointer-events-none"
      />

      {/* Floating Botanical Leaf Accents */}
      {!prefersReducedMotion &&
        leaves.map((leaf, i) => (
          <motion.div
            key={i}
            aria-hidden="true"
            className="absolute z-10 pointer-events-none"
            style={{ left: leaf.left, top: leaf.top }}
            animate={{ y: [0, -14, 0], rotate: [leaf.rotate, leaf.rotate + 6, leaf.rotate] }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BotanicalLeaf size={leaf.size} rotate={0} />
          </motion.div>
        ))}

      <div className="container-hg relative z-20 flex flex-col items-start justify-between min-h-[calc(100svh-8rem)] pt-12 pb-16 sm:pt-16 sm:pb-20">
        {/* Main Content Area */}
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-higarden-bright/35 bg-forest-900/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime shadow-lg backdrop-blur-md"
          >
            <span className="size-2 rounded-full bg-higarden-bright animate-pulse" />
            <span>LANDSCAPING &bull; GARDEN DESIGN &bull; MAINTENANCE</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Let&rsquo;s Grow
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 block text-higarden-bright drop-shadow-[0_2px_16px_rgba(99,193,50,0.35)]"
            >
              Something Beautiful.
            </motion.span>
          </h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-base leading-relaxed text-white/90 sm:text-xl font-normal max-w-2xl"
          >
            Watch how our Kerala landscape experts transform raw ground into a living, aesthetic garden paradise step-by-step.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <MagneticButton
              href="/contact"
              variant="bright"
              className="px-8 py-4 text-sm uppercase tracking-wider font-extrabold shadow-[0_4px_24px_rgba(99,193,50,0.4)]"
            >
              Get a Free Consultation
            </MagneticButton>

            <MagneticButton
              href="/services"
              variant="ghost"
              className="px-7 py-3.5 text-sm font-semibold border border-white/30 text-white hover:bg-white/10"
            >
              Explore Our Landscaping
            </MagneticButton>

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-forest-900/60 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950"
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
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-5 pt-2 text-xs font-semibold text-white/75"
          >
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-higarden-bright" />
              <span>10+ Years Gardening Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-higarden-bright" />
              <span>100+ Garden Projects in Kerala</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-higarden-bright" />
              <span>Direct Nursery Supply</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Step-by-Step Landscaping Motion Controller Dock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 w-full max-w-4xl rounded-3xl border border-white/20 bg-forest-950/85 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          {/* Top Bar inside dock: Stage info & controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-higarden-bright/20 border border-higarden-bright/40 px-3 py-1 text-xs font-bold text-higarden-lime">
                <span className="size-2 rounded-full bg-higarden-bright animate-ping" />
                <span className="uppercase tracking-wider">Motion Representation</span>
              </div>
              <span className="hidden sm:inline text-xs font-medium text-white/70">
                Landscaping Transformation in Action
              </span>
            </div>

            {/* Quick Actions: Play/Pause, Before/After & Next/Prev */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleBeforeAfter}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-forest-900/60 px-3 py-1 text-xs font-semibold text-white/90 transition hover:border-higarden-bright hover:bg-forest-900"
                title="Instant Before & After Comparison"
              >
                <Wand2 className="size-3 text-higarden-bright" />
                <span className="hidden xs:inline">Compare</span> {currentStep === 0 ? "After" : "Before"}
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex size-7 items-center justify-center rounded-full border border-white/20 bg-forest-900/70 text-white transition hover:border-higarden-bright hover:bg-forest-800"
                aria-label={isPlaying ? "Pause motion loop" : "Play motion loop"}
                title={isPlaying ? "Pause transformation" : "Resume transformation"}
              >
                {isPlaying ? <Pause className="size-3" /> : <Play className="size-3 fill-current ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={handlePrev}
                className="flex size-7 items-center justify-center rounded-full border border-white/20 bg-forest-900/70 text-white transition hover:border-higarden-bright hover:bg-forest-800"
                aria-label="Previous transformation step"
              >
                <ArrowLeft className="size-3" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex size-7 items-center justify-center rounded-full border border-white/20 bg-forest-900/70 text-white transition hover:border-higarden-bright hover:bg-forest-800"
                aria-label="Next transformation step"
              >
                <ArrowRight className="size-3" />
              </button>
            </div>
          </div>

          {/* Segmented Timeline Progress Bars (Story style) */}
          <div className="grid grid-cols-4 gap-2 pt-3">
            {STAGES.map((stage, idx) => {
              const isActive = idx === currentStep;
              const isPast = idx < currentStep;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => goToStep(idx)}
                  className="group relative flex flex-col text-left transition focus:outline-none"
                  aria-label={`Jump to stage ${stage.step}: ${stage.phase}`}
                >
                  {/* Progress Line */}
                  <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                    {isActive ? (
                      <motion.div
                        key={`bar-${currentStep}-${isPlaying}`}
                        initial={{ width: "0%" }}
                        animate={{ width: isPlaying ? "100%" : "50%" }}
                        transition={{
                          duration: isPlaying ? STAGE_DURATION / 1000 : 0.2,
                          ease: "linear",
                        }}
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

                  {/* Stage Label */}
                  <div className="mt-2 flex items-baseline justify-between">
                    <span
                      className={`text-[0.65rem] font-bold tracking-wider uppercase transition-colors ${
                        isActive ? "text-higarden-bright" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`hidden md:inline text-[0.65rem] font-semibold truncate transition-colors ${
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

          {/* Current Step Description Card */}
          <div className="mt-3 flex items-start gap-3 rounded-2xl bg-forest-900/60 p-3 border border-white/10">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-higarden-bright text-xs font-black text-forest-950">
              {activeStage.step}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white truncate">{activeStage.title}</h4>
                <span className="rounded-full bg-forest-800 px-2 py-0.5 text-[0.65rem] font-semibold text-higarden-lime">
                  {activeStage.highlight}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-white/75 leading-relaxed line-clamp-2">
                {activeStage.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50 pointer-events-none"
      >
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em]">Scroll to Explore</span>
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}

