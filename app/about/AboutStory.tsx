"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

export function AboutStory() {
  return (
    <section className="container-hg py-24 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-higarden-bright/30 bg-higarden-soft px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-higarden-primary"
          >
            <span className="size-1.5 rounded-full bg-higarden-bright" />
            Our Story
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-extrabold leading-[1.15] text-forest-900 text-balance sm:text-4xl lg:text-5xl"
          >
            Passionate about living gardens, rooted in Kerala.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-higarden-muted">
            HiGarden began in 2014 with a clear vision: outdoor spaces across Kerala deserve thoughtful, vibrant garden designs rather than generic afterthought lawns.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-higarden-muted">
            We combined architectural landscape planning with our own plant nursery in Katampazhipuram, Palakkad. This allows us to nurture acclimatized tropical plants, ornamental specimens, and native palms that thrive through Kerala&rsquo;s heavy monsoon rains and hot dry spells.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-higarden-muted">
            Today, our team partners with homeowners, villa owners, resorts, and architects. We take full ownership from initial site consultation and soil preparation to planting and ongoing care.
          </motion.p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg border border-higarden-soft/40">
            <Image
              src="/images/kerala-landscaping/kerala-terracotta-courtyard.png"
              alt="Traditional Kerala courtyard landscaping with terracotta planters and lush ferns"
              fill
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl shadow-lg border border-higarden-soft/40">
            <Image
              src="/images/transformation/kerala-garden-after.jpg"
              alt="Contemporary Kerala villa garden sanctuary designed and landscaped by HiGarden"
              fill
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
