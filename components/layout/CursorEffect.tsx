"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorEffect() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useMediaQuery("(pointer: fine)");
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  const rotate = useMotionValue(-12);
  const springRotate = useSpring(rotate, { stiffness: 80, damping: 12 });
  const lastX = useRef(-100);

  useEffect(() => {
    if (prefersReducedMotion || !hasFinePointer) return;

    function onMove(event: PointerEvent) {
      const dx = event.clientX - lastX.current;
      lastX.current = event.clientX;
      x.set(event.clientX);
      y.set(event.clientY);
      rotate.set(-12 + Math.max(-18, Math.min(18, dx * 1.4)));
      setVisible(true);
    }
    function onLeave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [prefersReducedMotion, hasFinePointer, x, y, rotate]);

  if (prefersReducedMotion || !hasFinePointer) return null;

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      width={38}
      height={38}
      style={{
        x: springX,
        y: springY,
        rotate: springRotate,
        opacity: visible ? 0.65 : 0,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply blur-[2px] transition-opacity duration-300"
    >
      <path
        d="M32 4c14 6 24 20 24 32 0 13.3-10.7 24-24 24S8 49.3 8 36c0-8 3.6-14.6 9.6-19.4C21 24 24 30 26 36 26.8 24.8 28.4 14 32 4Z"
        className="fill-gold-500/50"
      />
      <path
        d="M32 8c-1.6 9-3 18.5-3.6 28"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        className="text-forest-800/35"
      />
    </motion.svg>
  );
}
