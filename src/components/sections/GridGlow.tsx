"use client";

import { motion } from "framer-motion";

/**
 * A subtle animated circuit/grid backdrop with pulsing glow nodes — the
 * recurring "futuristic tech" texture used behind page headers site-wide.
 * Purely decorative; sits behind content with pointer-events disabled.
 */
export function GridGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(66,168,230,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(66,168,230,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-deep/40 blur-3xl"
      />
    </div>
  );
}
