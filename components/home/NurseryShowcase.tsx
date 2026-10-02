"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Sun, Droplets, Leaf } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { nurseryPlants } from "@/constants/nursery";
import { site } from "@/constants/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const nurseryCategories = [
  { name: "Indoor Plants", count: "Air-purifying & shade species", slug: "indoor" },
  { name: "Outdoor Plants", count: "Hardy tropical sun varieties", slug: "outdoor" },
  { name: "Ornamental Plants", count: "Architectural foliage & palms", slug: "ornamental" },
  { name: "Flowering Plants", count: "Vibrant Kerala blossoms", slug: "flowering" },
  { name: "Landscape Plants", count: "Bulk hedge & ground covers", slug: "landscaping" },
];

export function NurseryShowcase() {
  const featuredPlants = nurseryPlants.slice(0, 4);

  return (
    <section className="container-hg py-20 lg:py-28" aria-labelledby="nursery-showcase-heading">
      <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-[#eef7ec] p-5 sm:p-12 lg:p-16 border border-higarden-soft">
        {/* Background decorative botanical pattern */}
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-96 rounded-full bg-higarden-bright/15 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 flex flex-col gap-8 sm:gap-10">
          {/* Section Header */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              id="nursery-showcase-heading"
              eyebrow="HiGarden Nursery &middot; Palakkad"
              title={
                <span>
                  Looking for the{" "}
                  <span className="text-higarden-primary">Right Plants?</span>
                </span>
              }
              description="Our nursery brings together plants selected for homes, gardens and landscape projects."
            />
            <MagneticButton href="/nursery" variant="bright" className="shrink-0">
              Explore Nursery
            </MagneticButton>
          </div>

          {/* 5 Plant Categories Badges */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {nurseryCategories.map((cat) => (
              <Link
                key={cat.name}
                href={`/nursery?cat=${cat.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-higarden-soft bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-200 hover:border-higarden-bright hover:shadow-md last:col-span-2 sm:last:col-span-1"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-higarden-soft text-higarden-primary group-hover:bg-higarden-bright group-hover:text-forest-950 transition-colors">
                    <Leaf className="size-3.5" />
                  </span>
                  <ArrowRight className="size-3.5 text-higarden-muted transition-transform group-hover:translate-x-0.5 group-hover:text-higarden-primary" />
                </div>
                <div className="mt-3">
                  <h4 className="font-heading text-sm font-bold text-forest-900 group-hover:text-higarden-primary transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[0.7rem] text-higarden-muted leading-tight mt-0.5">
                    {cat.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Plant Cards Grid */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredPlants.map((plant) => (
              <motion.div
                key={plant.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex flex-col overflow-hidden rounded-[2rem] bg-white border border-higarden-soft/80 shadow-[0_6px_20px_rgba(7,91,42,0.06)] transition-[box-shadow,border-color] duration-300 hover:shadow-[0_16px_36px_rgba(7,91,42,0.15)] hover:border-higarden-bright/40"
              >
                {/* Plant Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-forest-100/70">
                  <Image
                    src={plant.image.src}
                    alt={plant.image.alt}
                    fill
                    sizes="(min-width: 1280px) 280px, (min-width: 640px) 44vw, calc(100vw - 32px)"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-forest-900">
                    {plant.categoryLabel}
                  </span>
                </div>

                {/* Plant Details */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-bold text-forest-900">
                    {plant.name}
                  </h3>
                  {plant.scientificName && (
                    <p className="text-xs italic text-higarden-muted">{plant.scientificName}</p>
                  )}
                  <p className="mt-2 text-xs leading-relaxed text-higarden-muted line-clamp-2">
                    {plant.description}
                  </p>

                  {/* Micro Specs */}
                  <div className="mt-4 flex items-center justify-between border-t border-higarden-soft/70 pt-3 text-[0.7rem] font-medium text-forest-800">
                    <span className="flex items-center gap-1">
                      <Sun className="size-3.5 text-higarden-bright" />
                      {plant.light.split("/")[0]}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-higarden-primary">
                      <Droplets className="size-3.5 text-higarden-bright" />
                      {plant.careLevel}
                    </span>
                  </div>

                  {/* Order via WhatsApp */}
                  <a
                    href={`https://wa.me/918943638384?text=Hi%20HiGarden,%20I'm%20interested%20in%20the%20${encodeURIComponent(plant.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-higarden-soft py-2.5 text-xs font-bold text-forest-900 transition-colors hover:bg-higarden-bright hover:text-forest-950"
                  >
                    <FaWhatsapp className="size-3.5 text-higarden-primary" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Plant Sourcing & Consultation Banner */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 sm:p-8 sm:flex-row border border-higarden-soft shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-higarden-soft text-higarden-primary">
                <Sparkles className="size-6 text-higarden-bright" />
              </span>
              <div>
                <h4 className="font-heading text-base font-bold text-forest-900">
                  Looking for rare plants or bulk landscaping stock?
                </h4>
                <p className="text-xs text-higarden-muted">
                  We supply mature specimens, tropical palms, hedges, and flowering varieties directly from our Palakkad nursery.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/nursery"
                className="inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-forest-950"
              >
                <span>Explore Nursery</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-forest-800/30 px-4 py-2.5 text-xs font-semibold text-forest-900 hover:bg-higarden-soft"
              >
                <FaWhatsapp className="size-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
