"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Modern dot-and-ring custom cursor. Desktop only — coarse pointers
 * (touch) keep the native cursor, since a custom one has no meaning there.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFine || reduceMotion) return;
    setEnabled(true);

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let raf = 0;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
      }
    }

    function loop() {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(loop);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea"));
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-deep/50 bg-primary/5 transition-[width,height,background-color] duration-200 ${
          hovering ? "h-11 w-11 bg-primary/10" : "h-8 w-8"
        }`}
      />
    </>
  );
}
