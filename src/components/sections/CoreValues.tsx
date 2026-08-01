"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Briefcase,
  Award,
  Clock,
  Heart,
  Lock,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    label: "Innovation",
    icon: Lightbulb,
    meaning: "Exploring modern tools and approaches instead of one-size-fits-all fixes.",
  },
  {
    label: "Integrity",
    icon: ShieldCheck,
    meaning: "Doing what we say, transparently, even when no one's checking.",
  },
  {
    label: "Professionalism",
    icon: Briefcase,
    meaning: "Clear communication and polished delivery, every time.",
  },
  {
    label: "Excellence",
    icon: Award,
    meaning: "Holding our own work to a higher bar than what's asked.",
  },
  {
    label: "Reliability",
    icon: Clock,
    meaning: "Being there when systems — and people — need us most.",
  },
  {
    label: "Customer First",
    icon: Heart,
    meaning: "Your goals shape the solution, not the other way around.",
  },
  {
    label: "Security",
    icon: Lock,
    meaning: "Security built in from day one, not bolted on afterward.",
  },
  {
    label: "Continuous Improvement",
    icon: TrendingUp,
    meaning: "Always refining how we build, support, and deliver.",
  },
];

function ValueCard({ value }: { value: (typeof values)[number] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-36 [perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-card bg-mist p-4 text-center [backface-visibility:hidden]">
          <value.icon className="text-primary" size={24} aria-hidden="true" />
          <p className="text-sm font-semibold text-ink">{value.label}</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-card bg-primary p-4 text-center [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-xs text-white">{value.meaning}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function CoreValues() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {values.map((value) => (
        <ValueCard key={value.label} value={value} />
      ))}
    </div>
  );
}
