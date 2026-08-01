"use client";

import { motion } from "framer-motion";

// Each line animates between a few endpoint positions, cycling smoothly
// back and forth — fine, subtle crossing strokes (no dots/nodes), using the
// Databytes brand palette. Slow, gentle movement so it reads as ambient
// texture rather than a distinct decorative graphic.
const lines = [
  {
    color: "#42A8E6",
    width: 1.5,
    x1: [15, 55, 15],
    y1: [20, 45, 20],
    x2: [70, 30, 70],
    y2: [55, 85, 55],
    duration: 32,
  },
  {
    color: "#1E3A8A",
    width: 1.5,
    x1: [80, 40, 80],
    y1: [15, 35, 15],
    x2: [25, 65, 25],
    y2: [70, 40, 70],
    duration: 38,
  },
  {
    color: "#1B1464",
    width: 1,
    x1: [10, 45, 10],
    y1: [75, 50, 75],
    x2: [85, 55, 85],
    y2: [25, 60, 25],
    duration: 28,
  },
  {
    color: "#7fc4ef",
    width: 1,
    x1: [50, 20, 50],
    y1: [10, 40, 10],
    x2: [90, 60, 90],
    y2: [65, 90, 65],
    duration: 42,
  },
  {
    color: "#42A8E6",
    width: 1.5,
    x1: [30, 70, 30],
    y1: [85, 55, 85],
    x2: [65, 15, 65],
    y2: [20, 45, 20],
    duration: 35,
  },
];

export function MovingLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
    >
      {lines.map((line, i) => (
        <motion.line
          key={i}
          stroke={line.color}
          strokeWidth={line.width / 10}
          strokeLinecap="round"
          animate={{
            x1: line.x1,
            y1: line.y1,
            x2: line.x2,
            y2: line.y2,
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
