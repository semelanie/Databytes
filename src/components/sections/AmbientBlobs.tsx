"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Soft, slow-drifting gradient blobs for otherwise-plain white/light
 * sections — the "lively background" counterpart to GridGlow (which is
 * used on dark sections). Purely decorative, sits behind section content.
 *
 * Gated on visibility: this renders on 8 different homepage sections, so
 * without this it's 16 blurred layers animating simultaneously regardless
 * of scroll position — expensive for the GPU compositor for no visible
 * benefit, since anything off-screen can't be seen anyway. Each instance
 * now only animates while its own section is actually in the viewport.
 */
export function AmbientBlobs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px", once: false });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        animate={isInView ? { x: [0, 40, 0], y: [0, 30, 0] } : {}}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={isInView ? { x: [0, -30, 0], y: [0, -20, 0] } : {}}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-deep/10 blur-3xl"
      />
    </div>
  );
}
