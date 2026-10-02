"use client";

import Image from "next/image";
import Link from "next/link";
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
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { fadeUp } from "@/lib/motion";
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

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? Flower2;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-higarden-soft bg-white shadow-[0_6px_25px_rgba(7,91,42,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-higarden-bright/40 hover:shadow-[0_20px_50px_-10px_rgba(7,91,42,0.18)]"
    >
      {/* Large Botanical Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-100/80">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, calc(100vw - 32px)"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Floating Icon Badge on top of image */}
        <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-2xl bg-white/95 text-higarden-primary shadow-md backdrop-blur-md transition-colors duration-300 group-hover:bg-higarden-bright group-hover:text-forest-950">
          <Icon className="size-6" aria-hidden="true" />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-7">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-xl font-bold text-forest-900 transition-colors group-hover:text-higarden-primary">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-higarden-muted line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-higarden-primary transition-colors group-hover:text-higarden-bright"
        >
          <span>Explore Service</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  );
}
