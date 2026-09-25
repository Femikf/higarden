"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em]",
            align === "center" && "self-center",
            tone === "dark"
              ? "bg-higarden-soft text-higarden-primary border border-higarden-bright/30"
              : "bg-white/10 text-higarden-bright border border-white/20"
          )}
        >
          <span className="size-1.5 rounded-full bg-higarden-bright" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        id={id}
        variants={fadeUp}
        className={cn(
          "font-heading text-3xl font-extrabold tracking-tight leading-[1.15] text-balance sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-forest-900" : "text-white"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg font-normal",
            tone === "dark" ? "text-higarden-muted" : "text-white/80"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
