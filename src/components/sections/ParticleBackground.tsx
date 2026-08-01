"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// Reduced from 60 — halves the pairwise distance-check cost per frame
// (O(n²)) without a visible difference in density.
const PARTICLE_COUNT = 40;
const LINK_DISTANCE = 150;
const SPEED = 0.15;
// Cap the canvas backing-store scale — devicePixelRatio can be 2–3 on
// high-DPI or scaled Windows displays, which otherwise multiplies the
// number of pixels this has to redraw every frame for no visible benefit.
const MAX_DPR = 2;

interface ParticleBackgroundProps {
  /** "dark" = white lines/dots for a dark background (default, used in Hero).
   *  "light" = blue lines/navy dots for a white background, matching the
   *  original reference image — used on the loading screen. */
  variant?: "dark" | "light";
}

export function ParticleBackground({
  variant = "dark",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let raf = 0;
    let paused = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      points = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    function step() {
      if (paused) return;
      const context = ctx!;
      context.clearRect(0, 0, width, height);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          if (!a || !b) continue;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            const lineColor =
              variant === "light" ? "66, 168, 230" : "255, 255, 255";
            context.strokeStyle = `rgba(${lineColor}, ${0.16 * (1 - dist / LINK_DISTANCE)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const p of points) {
        context.fillStyle =
          variant === "light" ? "rgba(30, 58, 138, 0.6)" : "rgba(255, 255, 255, 0.5)";
        context.beginPath();
        context.arc(p.x, p.y, 2, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    function handleResize() {
      resize();
    }

    // Stop redrawing while the tab is backgrounded — avoids wasted
    // CPU/GPU work (and the accumulated cost of that across many tabs
    // is a common cause of general browser/compositor stutter).
    function handleVisibility() {
      paused = document.hidden;
      if (!paused && !reduceMotion) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(step);
      }
    }

    resize();
    seed();
    step();

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
