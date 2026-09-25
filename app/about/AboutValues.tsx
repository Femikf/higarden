"use client";

import { motion } from "framer-motion";
import { Leaf, Ruler, HeartHandshake, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const values = [
  {
    icon: Ruler,
    title: "Design First",
    description:
      "No garden starts without a plan. We design before we plant, every time, no exceptions.",
  },
  {
    icon: Leaf,
    title: "Climate Native",
    description:
      "Plant selections tuned to Kerala's monsoon and humidity, not imported mood boards.",
  },
  {
    icon: HeartHandshake,
    title: "One Accountable Team",
    description:
      "The people who design your garden are the people who build and maintain it.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description:
      "We're judged by how the garden looks in year three, not on handover day.",
  },
];

export function AboutValues() {
  return (
    <section className="container-hg py-24 lg:py-32" aria-labelledby="values-heading">
      <SectionHeading
        id="values-heading"
        eyebrow="What We Believe"
        title="Principles that shape every project."
        align="center"
        className="mx-auto mb-14 max-w-2xl"
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            variants={fadeUp}
            className="flex flex-col items-center gap-4 rounded-3xl border border-sand-300 bg-warm-white p-8 text-center"
          >
            <div className="flex size-14 items-center justify-center rounded-2xl bg-forest-800/5 text-forest-800">
              <value.icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-lg font-medium text-forest-900">{value.title}</h3>
            <p className="text-sm leading-relaxed text-stone-600">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
