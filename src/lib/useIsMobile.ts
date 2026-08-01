"use client";

import { useEffect, useState } from "react";

/**
 * True on small screens or coarse (touch) pointers. Used to skip the
 * purely-decorative animated backgrounds (blur filters, canvas particle
 * networks, SVG line animations) on mobile — those are expensive for
 * phone GPUs specifically, and skipping them removes a real source of
 * jank/flicker on mobile without losing anything users would miss on a
 * small screen.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}
