"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Server, ShieldCheck, Cpu, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ParticleBackground } from "@/components/sections/ParticleBackground";
import { ColorMorph } from "@/components/sections/ColorMorph";

const floatingIcons = [
  { Icon: Cloud, top: "18%", left: "20%", delay: 0 },
  { Icon: Server, top: "55%", left: "12%", delay: 0.6 },
  { Icon: ShieldCheck, top: "30%", left: "68%", delay: 1.1 },
  { Icon: Cpu, top: "68%", left: "60%", delay: 0.3 },
  { Icon: BarChart3, top: "12%", left: "55%", delay: 0.9 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // As the Hero scrolls up out of view, the visual panel slides up faster
  // than the page scroll — a true scroll-linked parallax, not a one-time trigger.
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy text-white">
      <div className="grid md:grid-cols-2">
        {/* Left: copy, with a slow-drifting particle network behind it */}
        <div className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          <ParticleBackground />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Databytes Pty Ltd
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Empowering{" "}
              <span className="text-primary">Businesses</span> Through
              Smart Technology
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/75">
              Helping businesses and government organizations across
              Seychelles succeed through innovative IT solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/services" variant="secondary">
                Get Started
              </Button>
              <Button
                href="/contact"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                Request a Quote
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right: full-bleed animated tech visual, edge to edge like a hero photo */}
        <motion.div
          style={{ y: panelY }}
          className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-deep via-navy to-navy md:min-h-full"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-60"
          />
          <ColorMorph />
          {floatingIcons.map(({ Icon, top, left, delay }, i) => (
            <motion.div
              key={i}
              className="absolute flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur"
              style={{ top, left }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -16, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay },
                y: {
                  duration: 4 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                },
              }}
            >
              <Icon size={28} className="text-primary" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Curved white divider into the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-16 w-full fill-white"
        >
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
