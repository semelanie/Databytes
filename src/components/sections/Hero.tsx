"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Server, ShieldCheck, Cpu, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ParticleBackground } from "@/components/sections/ParticleBackground";
import { ColorMorph } from "@/components/sections/ColorMorph";

const floatingIcons = [
  { Icon: Cloud, top: "10%", left: "60%", delay: 0 },
  { Icon: Server, top: "55%", left: "52%", delay: 0.6 },
  { Icon: ShieldCheck, top: "25%", left: "85%", delay: 1.1 },
  { Icon: Cpu, top: "70%", left: "80%", delay: 0.3 },
  { Icon: BarChart3, top: "5%", left: "78%", delay: 0.9 },
];

interface HeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function Hero({
  eyebrow = "Databytes Pty Ltd",
  title = "Empowering Businesses Through Smart Technology",
  subtitle = "Helping businesses and government organizations across Seychelles succeed through innovative IT solutions.",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const iconsY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* One continuous background shared by the whole hero — no hard seam
          between a "text half" and a "visual half" anymore. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-50"
      />
      <ParticleBackground />
      <ColorMorph />

      <Container className="relative py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/75">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/services" variant="secondary">
              Get Started
            </Button>
            <Button
              href="mailto:mgt@databytes.sc?subject=Quote%20Request"
              className="bg-white/10 text-white hover:bg-white/20"
            >
              Request a Quote
            </Button>
          </div>
        </motion.div>

        {/* Floating icons drift across the same shared background, over on
            the right, rather than sitting in a visually separate box. */}
        <motion.div
          style={{ y: iconsY }}
          className="pointer-events-none absolute inset-0 hidden md:block"
        >
          {floatingIcons.map(({ Icon, top, left, delay }, i) => (
            <motion.div
              key={i}
              className="absolute flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur"
              style={{ top, left }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -16, 0] }}
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
      </Container>

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
