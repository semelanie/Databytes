"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GridGlow } from "@/components/sections/GridGlow";
import { ParticleBackground } from "@/components/sections/ParticleBackground";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/**
 * Shared dark, tech-styled header used at the top of every interior page —
 * the same AI/circuit-board texture and drifting particle network as the
 * homepage Hero, instead of a plain white banner.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <GridGlow />
      <ParticleBackground />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Cpu size={16} aria-hidden="true" />
              </span>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                {`// ${eyebrow}`}
              </p>
            </div>
          )}
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-white/70">{description}</p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
