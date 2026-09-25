"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { unsplash } from "@/lib/unsplash";
import { site } from "@/constants/site";

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
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (!imageRef.current || !sectionRef.current) return;
        gsap.to(imageRef.current, {
          yPercent: 14,
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

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-950 py-24"
    >
      {/* Background Kerala Landscape Image */}
      <div ref={imageRef} className="absolute inset-0 scale-105">
        <Image
          src={unsplash("1719286092080-c0a74deb7822", 2400, 1500)}
          alt="Lush tropical Kerala landscape with palms and living green gardens"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* HiGarden Deep Green Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/70 to-forest-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-900/50 to-transparent" />

      {/* Subtle organic green glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-higarden-bright/15 blur-[120px]"
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

      <div className="container-hg relative z-20 flex flex-col items-start gap-7 pt-12 sm:pt-20">
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
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
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
          className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-xl font-normal"
        >
          Professional landscaping, garden design and plant solutions for homes and outdoor spaces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap items-center gap-4 pt-2"
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
          className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-white/75"
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

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/60"
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em]">Scroll Down</span>
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
