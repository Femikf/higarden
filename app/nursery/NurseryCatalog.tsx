"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Droplets, MapPin, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { nurseryCategories, nurseryPlants } from "@/constants/nursery";
import type { PlantCategory } from "@/types";
import { cn } from "@/lib/utils";

export function NurseryCatalog() {
  const [activeCategory, setActiveCategory] = useState<PlantCategory | "all">("all");

  const filteredPlants =
    activeCategory === "all"
      ? nurseryPlants
      : nurseryPlants.filter((plant) => plant.category === activeCategory);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {nurseryCategories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-forest-800 text-white shadow-md scale-105"
                  : "bg-white text-forest-900 border border-higarden-soft hover:bg-higarden-soft"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Plants Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence>
          {filteredPlants.map((plant) => (
            <motion.div
              layout
              key={plant.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-white border border-higarden-soft shadow-[0_6px_24px_rgba(7,91,42,0.06)] transition-all hover:shadow-[0_16px_40px_rgba(7,91,42,0.15)]"
            >
              {/* Photo */}
              <div className="relative aspect-square w-full overflow-hidden bg-forest-900">
                <Image
                  src={plant.image.src}
                  alt={plant.image.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 88vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-forest-900 shadow-sm">
                  {plant.categoryLabel}
                </span>
              </div>

              {/* Information */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-forest-900">
                      {plant.name}
                    </h3>
                    {plant.scientificName && (
                      <p className="text-xs italic text-higarden-muted">{plant.scientificName}</p>
                    )}
                  </div>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-higarden-muted line-clamp-2">
                  {plant.description}
                </p>

                {/* Specs */}
                <div className="mt-4 space-y-1.5 border-t border-higarden-soft/70 pt-3 text-[0.72rem] text-forest-800">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-higarden-muted">
                      <Sun className="size-3.5 text-higarden-bright" />
                      Light
                    </span>
                    <span className="font-semibold text-forest-900">{plant.light}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-higarden-muted">
                      <Droplets className="size-3.5 text-higarden-bright" />
                      Care
                    </span>
                    <span className="font-bold text-higarden-primary">{plant.careLevel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-higarden-muted">
                      <MapPin className="size-3.5 text-higarden-bright" />
                      Ideal for
                    </span>
                    <span className="font-medium text-forest-900 truncate max-w-[140px] text-right">
                      {plant.idealFor}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <a
                  href={`https://wa.me/918943638384?text=Hi%20HiGarden,%20I%20would%20like%20to%20inquire%20about%20ordering%20the%20${encodeURIComponent(plant.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-higarden-soft py-2.5 text-xs font-bold text-forest-900 transition-colors hover:bg-higarden-bright hover:text-forest-950"
                >
                  <FaWhatsapp className="size-3.5 text-higarden-primary" />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
