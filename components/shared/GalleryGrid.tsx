"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { Lightbox } from "@/components/shared/Lightbox";
import { useLightbox } from "@/hooks/useLightbox";
import { galleryCategories } from "@/constants/gallery";
import { cn } from "@/lib/utils";
import type { GalleryCategory, GalleryImage } from "@/types";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory),
    [images, activeCategory]
  );

  const { activeIndex, open, close, next, prev } = useLightbox(filtered.length);

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Filter gallery by category"
        className="flex flex-wrap gap-2"
      >
        {galleryCategories.map((category) => (
          <button
            key={category.value}
            role="tab"
            type="button"
            aria-selected={activeCategory === category.value}
            onClick={() => setActiveCategory(category.value)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300",
              activeCategory === category.value
                ? "border-forest-800 bg-forest-800 text-cream"
                : "border-sand-300 text-forest-800/70 hover:border-forest-800/40 hover:text-forest-900"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            onClick={() => open(index)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "60px" }}
            transition={{ duration: 0.4 }}
            className={cn(
              "group relative block w-full overflow-hidden rounded-2xl bg-forest-100/70 border border-higarden-soft/40 shadow-sm",
              image.aspectClass
            )}
          >
            <Image
              src={image.image.src}
              alt={image.image.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/40">
              <Expand
                className="size-7 scale-75 text-cream opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox images={filtered} activeIndex={activeIndex} onClose={close} onNext={next} onPrev={prev} />
    </div>
  );
}
