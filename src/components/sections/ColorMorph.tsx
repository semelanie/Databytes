"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const blobs = [
  { size: 340, from: "#42A8E6", to: "#1B1464", top: "5%", left: "10%", duration: 11 },
  { size: 300, from: "#1B1464", to: "#42A8E6", top: "45%", left: "45%", duration: 14 },
  { size: 260, from: "#1E3A8A", to: "#7fc4ef", top: "55%", left: "5%", duration: 17 },
];

// A handful of organic blob shapes to morph between — same technique behind
// Apple-style "living color" backgrounds, built with the site's own palette.
const shapes = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "30% 60% 70% 40% / 50% 60% 30% 60%",
  "55% 45% 65% 35% / 40% 65% 35% 60%",
  "60% 40% 30% 70% / 60% 30% 70% 40%",
];

export function ColorMorph() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px", once: false });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute opacity-70 blur-2xl mix-blend-screen"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: `linear-gradient(135deg, ${blob.from}, ${blob.to})`,
          }}
          animate={
            isInView
              ? {
                  borderRadius: shapes,
                  x: [0, 30, -20, 0],
                  y: [0, -25, 20, 0],
                  scale: [1, 1.12, 0.94, 1],
                }
              : {}
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
