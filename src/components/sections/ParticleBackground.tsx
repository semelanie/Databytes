"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const PARTICLE_COUNT = 60;
const LINK_DISTANCE = 150;
const SPEED = 0.15;

export function ParticleBackground() {
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

    function resize() {
      const el = canvas as HTMLCanvasElement;
      width = el.clientWidth;
      height = el.clientHeight;
      el.width = width * window.devicePixelRatio;
      el.height = height * window.devicePixelRatio;
      const context = el.getContext("2d");
      context?.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
        0,
        0
      );
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
      const context = ctx as CanvasRenderingContext2D;
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
            context.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / LINK_DISTANCE)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const p of points) {
        context.fillStyle = "rgba(255, 255, 255, 0.5)";
        context.beginPath();
        context.arc(p.x, p.y, 2, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    resize();
    seed();
    step();

    window.addEventListener("resize", () => {
      resize();
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
