"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PenTool, Sprout, ShieldCheck, Palmtree } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { stats } from "@/constants/stats";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { unsplash } from "@/lib/unsplash";

const visualPoints = [
  {
    icon: PenTool,
    title: "Thoughtful Design",
    description:
      "Custom garden architecture planned around your site's light, slopes, and family lifestyle before touching the soil.",
  },
  {
    icon: Sprout,
    title: "Quality Plants",
    description:
      "Direct nursery sourcing from Palakkad. Acclimatized, pest-free species hardened to thrive in Kerala's climate.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Garden Care",
    description:
      "End-to-end execution including soil microbiology, automated drip irrigation, seasonal pruning, and fertilization.",
  },
  {
    icon: Palmtree,
    title: "Local Tropical Expertise",
    description:
      "Deep understanding of Kerala's heavy monsoons, red-loam soils, and coastal conditions so gardens stay vibrant year-round.",
  },
];

export function WhyHigarden() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 text-white lg:py-28" aria-labelledby="why-higarden-heading">
      {/* Background Tropical Ambience */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src={unsplash("1765421528551-2bdcce4ddade", 2000, 1200)}
          alt="Winding tropical path through lush green Kerala garden"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900/90 to-forest-950" />

      <div className="container-hg relative z-10 flex flex-col gap-16">
        <SectionHeading
          id="why-higarden-heading"
          eyebrow="Why Choose Us"
          title={
            <span>
              Why Choose{" "}
              <span className="text-higarden-bright">HiGarden?</span>
            </span>
          }
          description="We take full ownership of your outdoor space — architectural design, direct nursery plant supply, and disciplined ongoing care."
          tone="light"
          align="center"
          className="mx-auto max-w-2xl"
        />

        {/* 4 Visual Points with Botanical Icons */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visualPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 hover:border-higarden-bright/50 hover:bg-white/10 hover:shadow-[0_15px_35px_rgba(99,193,50,0.15)]"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-forest-900 border border-higarden-bright/40 text-higarden-bright transition-colors duration-300 group-hover:bg-higarden-bright group-hover:text-forest-950">
                  <Icon className="size-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white transition-colors group-hover:text-higarden-lime">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Verified Kerala Stats Strip */}
        <motion.dl
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:gap-6 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/5 bg-forest-900/40 py-6 px-4 text-center backdrop-blur-sm"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl font-extrabold text-higarden-bright sm:text-4xl lg:text-5xl drop-shadow-[0_2px_10px_rgba(99,193,50,0.3)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
