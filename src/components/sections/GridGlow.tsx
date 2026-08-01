"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

/**
 * A subtle animated circuit/grid backdrop with pulsing glow nodes — the
 * recurring "futuristic tech" texture used behind page headers site-wide.
 * Purely decorative; sits behind content with pointer-events disabled.
 * Animation is gated on visibility so it stops costing anything once the
 * header scrolls out of view on longer pages.
 */
export function GridGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px", once: false });
  const isMobile = useIsMobile();

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(66,168,230,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(66,168,230,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {!isMobile && (
        <>
          <motion.div
            animate={isInView ? { opacity: [0.25, 0.5, 0.25] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
          />
          <motion.div
            animate={isInView ? { opacity: [0.4, 0.2, 0.4] } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-deep/40 blur-3xl"
          />
        </>
      )}
    </div>
  );
}
