"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Palmtree,
  PenTool,
  Home,
  Flower2,
  Layers,
  Scissors,
  Hammer,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Palmtree,
  PenTool,
  Home,
  Flower2,
  Layers,
  Scissors,
  Hammer,
  Compass,
};

export function ServiceDetailCard({ service, reverse }: { service: Service; reverse?: boolean }) {
  const Icon = iconMap[service.icon] ?? Flower2;

  return (
    <div
      id={service.slug}
      className={cn(
        "grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20",
        reverse && "lg:[&>*:first-child]:order-2"
      )}
    >
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]"
      >
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 44vw, 90vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-col gap-5"
      >
        <motion.div
          variants={fadeUp}
          className="flex size-14 items-center justify-center rounded-2xl bg-higarden-soft text-higarden-primary border border-higarden-bright/30"
        >
          <Icon className="size-6 text-higarden-primary" aria-hidden="true" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl font-extrabold text-forest-900 text-balance sm:text-4xl"
        >
          {service.title}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-base leading-relaxed text-higarden-muted">
          {service.description}
        </motion.p>
        <motion.div variants={fadeUp} className="pt-2">
          <a
            href={`https://wa.me/918943638384?text=Hi%20HiGarden,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest-800 text-white px-5 py-2.5 text-xs font-bold hover:bg-forest-900 transition-colors"
          >
            Inquire About {service.title}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
