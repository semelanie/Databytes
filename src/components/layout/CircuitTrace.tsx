"use client";

import { motion } from "framer-motion";

// Right-angle "PCB trace" segments radiating from the center, each ending
// in a node. Drawn using pathLength 0→1 so the line appears to trace
// itself, with a blurred duplicate behind each line for the glow.
const segments = [
  { d: "M100,100 L100,45 L55,45", node: { x: 55, y: 45 } },
  { d: "M100,100 L100,155 L145,155", node: { x: 145, y: 155 } },
  { d: "M100,100 L155,100 L155,55", node: { x: 155, y: 55 } },
  { d: "M100,100 L45,100 L45,145", node: { x: 45, y: 145 } },
  { d: "M100,100 L135,65 L165,65", node: { x: 165, y: 65 } },
  { d: "M100,100 L65,135 L35,135", node: { x: 35, y: 135 } },
];

export function CircuitTrace() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-40 w-40 sm:h-48 sm:w-48"
      aria-hidden="true"
    >
      {segments.map((seg, i) => {
        const delay = i * 0.12;
        return (
          <g key={i}>
            {/* Glow: same path, thicker + blurred, behind the crisp line */}
            <motion.path
              d={seg.d}
              fill="none"
              stroke="#42A8E6"
              strokeWidth={4}
              strokeLinecap="round"
              style={{ filter: "blur(4px)" }}
              opacity={0.6}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay, ease: "easeInOut" }}
            />
            {/* Crisp line on top */}
            <motion.path
              d={seg.d}
              fill="none"
              stroke="#7fc4ef"
              strokeWidth={1.5}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay, ease: "easeInOut" }}
            />
            {/* Node at the end of the trace, pulsing once it arrives */}
            <motion.circle
              cx={seg.node.x}
              cy={seg.node.y}
              r={4}
              fill="#42A8E6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.6, 1], opacity: 1 }}
              transition={{ duration: 0.4, delay: delay + 0.85 }}
            />
          </g>
        );
      })}

      {/* Center hub */}
      <motion.circle
        cx={100}
        cy={100}
        r={6}
        fill="#1E3A8A"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}
