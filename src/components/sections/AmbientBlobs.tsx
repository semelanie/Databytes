"use client";

import { motion } from "framer-motion";

/**
 * Soft, slow-drifting gradient blobs for otherwise-plain white/light
 * sections — the "lively background" counterpart to GridGlow (which is
 * used on dark sections). Purely decorative, sits behind section content.
 */
export function AmbientBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-deep/10 blur-3xl"
      />
    </div>
  );
}
