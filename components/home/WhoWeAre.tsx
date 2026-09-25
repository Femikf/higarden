"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, MapPin, Trees } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { unsplash } from "@/lib/unsplash";

const keyHighlights = [
  {
    icon: Calendar,
    stat: "10+ Years",
    label: "Gardening Experience",
    detail: "Mastery in Kerala's monsoon, soil conditions & tropical plants",
  },
  {
    icon: Trees,
    stat: "100+",
    label: "Garden Projects",
    detail: "Villas, residential courtyards, commercial cafes & resorts",
  },
  {
    icon: MapPin,
    stat: "Kerala Based",
    label: "Statewide Execution",
    detail: "Palakkad Nursery & Kochi Garden Design Studio",
  },
];

export function WhoWeAre() {
  return (
    <section className="container-hg py-20 lg:py-28" aria-labelledby="who-we-are-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Left: Large landscape image */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative lg:col-span-5"
        >
          {/* Main Photo with organic leaf border-radius */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(7,91,42,0.15)] border-4 border-white">
            <motion.div variants={scaleIn} className="relative h-full w-full">
              <Image
                src={unsplash("1758599543115-43fd2f939b7e", 1000, 1250)}
                alt="HiGarden team landscaping a lush tropical Kerala garden"
                fill
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Floating Experience Badge */}
          <motion.div
            variants={fadeUp}
            className="absolute -bottom-6 -right-4 w-56 rounded-3xl border border-higarden-soft bg-white/95 p-5 shadow-[0_16px_36px_rgba(7,91,42,0.16)] backdrop-blur-md sm:-right-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-higarden-bright/20 text-forest-900 font-extrabold">
                🌿
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-higarden-primary">
                  10+ Years
                </p>
                <p className="text-[0.7rem] font-bold uppercase tracking-wider text-higarden-muted">
                  Kerala Garden Craft
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Friendly text & key highlights */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <SectionHeading
            id="who-we-are-heading"
            eyebrow="Who We Are"
            title={
              <span>
                Your Space.{" "}
                <span className="text-higarden-primary">Our Green Touch.</span>
              </span>
            }
            description="From a small home garden to a complete landscape transformation, we create outdoor spaces that look beautiful and stay healthy."
          />

          <p className="text-base text-higarden-muted leading-relaxed">
            HiGarden was founded to bridge thoughtful landscape architecture with authentic nursery care in Kerala. Whether you are building a new contemporary home in Kochi, reviving a traditional courtyard in Thrissur, or styling an outdoor retreat in Palakkad, we take full responsibility for every root, stone, and irrigation line.
          </p>

          {/* 3 Key Highlights Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-3 pt-2"
          >
            {keyHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex flex-col gap-2 rounded-2xl border border-higarden-soft bg-higarden-soft/30 p-4 transition-all hover:border-higarden-bright/40 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-higarden-bright/20 text-higarden-primary">
                      <Icon className="size-4 text-higarden-primary" />
                    </span>
                    <span className="font-heading text-lg font-black text-forest-900">
                      {item.stat}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-forest-900">
                      {item.label}
                    </h4>
                    <p className="mt-1 text-[0.75rem] text-higarden-muted leading-snug">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton href="/contact" variant="bright" className="px-7 py-3.5 text-sm font-bold uppercase tracking-wide">
              Get a Free Consultation
            </MagneticButton>
            <MagneticButton href="/services" variant="outline" className="px-6 py-3.5 text-sm font-semibold">
              Explore Our Landscaping
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
