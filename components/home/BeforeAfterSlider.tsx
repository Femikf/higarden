"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";

const before = {
  src: unsplash("1766229034504-176120cfbfd1", 1600, 1000),
  alt: "Overgrown, unplanned garden before HiGarden's renovation",
};
const after = {
  src: unsplash("1765421529635-ac766cf4229a", 1600, 1000),
  alt: "The same garden after HiGarden's considered redesign",
};

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  function onPointerDown(event: React.PointerEvent) {
    dragging.current = true;
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  }
  function onPointerMove(event: React.PointerEvent) {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  }
  function onPointerUp() {
    dragging.current = false;
  }
  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (event.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
    if (event.key === "Home") setPosition(0);
    if (event.key === "End") setPosition(100);
  }

  return (
    <section className="container-hg py-24 lg:py-32" aria-labelledby="before-after-heading">
      <div className="mx-auto mb-12 flex flex-col items-center text-center">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-higarden-bright/40 bg-higarden-soft/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-higarden-primary">
          <span className="size-1.5 rounded-full bg-higarden-bright" />
          <span className="text-higarden-primary font-black">SEE THE TRANSFORMATION</span>
        </span>
        <h2 className="font-heading text-3xl font-extrabold text-forest-900 sm:text-5xl">
          From Empty Space to{" "}
          <span className="text-higarden-primary">Living Landscape.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-higarden-muted leading-relaxed">
          Drag the slider to reveal how our Kerala landscape team transforms raw, uncultivated ground into a lush, architectural garden sanctuary.
        </p>
      </div>

      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="relative mx-auto aspect-[16/10] w-full max-w-5xl select-none overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-forest-900 shadow-[0_25px_60px_-15px_rgba(7,91,42,0.35)] border-2 sm:border-4 border-white touch-none"
      >
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 92vw"
          className="pointer-events-none object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 92vw"
            className="object-cover"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 sm:left-5 sm:top-5 rounded-full bg-forest-950/85 px-2.5 py-1 sm:px-4 sm:py-1.5 text-[0.7rem] sm:text-xs font-bold text-white shadow-md backdrop-blur-md">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 sm:right-5 sm:top-5 rounded-full bg-higarden-bright px-2.5 py-1 sm:px-4 sm:py-1.5 text-[0.7rem] sm:text-xs font-bold text-forest-950 shadow-md">
          <span className="hidden sm:inline">After HiGarden Transformation</span>
          <span className="sm:hidden">After HiGarden</span>
        </span>

        <div
          className="absolute inset-y-0 w-1 -translate-x-1/2 bg-white"
          style={{ left: `${position}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            className={cn(
              "absolute top-1/2 flex size-10 sm:size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-forest-900 shadow-xl outline-none transition-transform hover:scale-110 touch-none",
              "border-2 border-higarden-bright focus-visible:ring-2 focus-visible:ring-higarden-bright focus-visible:ring-offset-2"
            )}
          >
            <MoveHorizontal className="size-4 sm:size-5 text-higarden-primary" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
