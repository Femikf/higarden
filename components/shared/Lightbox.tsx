"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-950/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close gallery viewer"
            onClick={onClose}
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-500 hover:text-gold-400"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-500 hover:text-gold-400 sm:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center gap-4"
          >
            <div className="relative max-h-[75vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={active.image.src}
                alt={active.image.alt}
                width={1400}
                height={1400}
                className="h-auto max-h-[75vh] w-full object-contain"
                priority
              />
            </div>
            <p className="text-sm text-cream/70">{active.categoryLabel}</p>
          </motion.div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-500 hover:text-gold-400 sm:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
