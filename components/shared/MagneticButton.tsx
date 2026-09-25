"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost" | "bright";
  className?: string;
  external?: boolean;
};

const variantClasses: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
  solid:
    "bg-forest-800 text-white hover:bg-forest-900 font-semibold shadow-[0_10px_25px_-8px_rgba(7,91,42,0.4)]",
  bright:
    "bg-higarden-bright text-forest-950 hover:bg-higarden-lime font-bold shadow-[0_10px_25px_-6px_rgba(99,193,50,0.5)]",
  outline:
    "border border-forest-800/30 text-forest-900 hover:border-forest-800 hover:bg-higarden-soft font-semibold",
  ghost:
    "text-white border border-white/40 hover:border-white hover:bg-white/15 font-semibold",
};

export function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
  external,
}: MagneticButtonProps) {
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic(0.25);

  const content = (
    <motion.span
      ref={ref as React.Ref<HTMLAnchorElement>}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
