"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedNumberProps {
  target: number;
  delay?: number;
  className?: string;
}

/** Counts up from 0 and settles on the intended number once in view. */
export function AnimatedNumber({ target, delay = 0, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 0.8,
      delay,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, target, delay]);

  return (
    <span ref={ref} className={className}>
      {String(display).padStart(2, "0")}
    </span>
  );
}
