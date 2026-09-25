"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sprout, Compass, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { processSteps } from "@/constants/process";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const stepIcons = [Compass, Leaf, Sprout, CheckCircle2];

export function OurProcess() {
  return (
    <section className="container-hg py-20 lg:py-28" aria-labelledby="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="Our Working Process"
        title={
          <span>
            How We Create{" "}
            <span className="text-higarden-primary">Your Garden.</span>
          </span>
        }
        description="A clear, stress-free four-stage journey from your first consultation to a lush garden that thrives for years."
        align="center"
        className="mx-auto mb-16 max-w-2xl"
      />

      {/* Organic Timeline Grid */}
      <div className="relative">
        {/* Desktop Connecting Line */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 right-0 hidden h-0.5 -translate-y-12 bg-gradient-to-r from-higarden-bright/30 via-higarden-primary/40 to-higarden-bright/30 lg:block"
        />

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? Leaf;
            return (
              <motion.li
                key={step.step}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-4 rounded-3xl bg-white p-7 border border-higarden-soft shadow-[0_6px_25px_rgba(7,91,42,0.06)] transition-all duration-300 hover:border-higarden-bright/50 hover:shadow-[0_16px_36px_rgba(7,91,42,0.14)]"
              >
                {/* Step Badge with Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-higarden-soft border-2 border-higarden-bright/40 font-heading text-lg font-black text-higarden-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-higarden-bright group-hover:text-forest-950">
                    {step.step}
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-xl bg-forest-900/5 text-higarden-primary group-hover:bg-forest-900 group-hover:text-white transition-colors">
                    <Icon className="size-4" />
                  </span>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="font-heading text-xl font-bold text-forest-900 group-hover:text-higarden-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-higarden-muted">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>

      <div className="mt-14 flex justify-center">
        <MagneticButton href="/contact" variant="bright" className="px-8 py-4 text-sm font-bold uppercase tracking-wider">
          Start Your Garden Journey
        </MagneticButton>
      </div>
    </section>
  );
}
