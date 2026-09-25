"use client";

import { useCallback, useEffect, useState } from "react";

export function useLightbox(itemCount: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((current) => (current === null ? null : (current + 1) % itemCount)),
    [itemCount]
  );
  const prev = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? null : (current - 1 + itemCount) % itemCount
      ),
    [itemCount]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, next, prev]);

  return { activeIndex, open, close, next, prev, isOpen: activeIndex !== null };
}
