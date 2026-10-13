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
            Our Story &bull; Sharing Knowledge Everyday
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-extrabold leading-[1.15] text-forest-900 text-balance sm:text-4xl lg:text-5xl"
          >
            Sharing knowledge daily. Growing greener homes across Kerala.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-higarden-muted">
            HiGarden began with a deep passion for plants and a simple commitment: sharing daily gardening wisdom with Kerala homeowners so outdoor living spaces stay green, healthy, and thoughtfully crafted.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-higarden-muted">
            What grew out of our botanical nursery farm in Katampazhipuram, Palakkad has evolved into an active community of over 10,000 garden lovers on @higardencamp and @higardenclub. Because we cultivate and harden our own plants right in Palakkad, every palm, tropical shrub, and flowering specimen is fully acclimatized to Kerala&rsquo;s heavy monsoon rains and hot summer heat before arriving at your doorstep.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-higarden-muted">
            Today, our landscape studio partners with homeowners, architects, and builders statewide. From 3D masterplans and natural stone pathways to velvety lawn turfing and scheduled ongoing care, we take full pride in every living garden we build.
          </motion.p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg border border-higarden-soft/40 bg-forest-900">
            <Image
              src="/images/social/nursery-farm-pathway.jpg"
              alt="HiGarden botanical nursery farm pathway with red laterite soil and shade netting in Katampazhipuram, Palakkad"
              fill
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <span className="inline-block rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-bold text-white backdrop-blur-xs">
                Katampazhipuram Farm
              </span>
            </div>
          </div>
          <div className="group relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl shadow-lg border border-higarden-soft/40 bg-forest-900">
            <Image
              src="/images/social/seedling-propagation.jpg"
              alt="HiGarden team propagating seedlings and hardening plants for Kerala weather"
              fill
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <span className="inline-block rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-bold text-white backdrop-blur-xs">
                Hands-On Plant Care
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
