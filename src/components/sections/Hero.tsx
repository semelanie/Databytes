"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <Container className="relative grid gap-12 py-24 md:grid-cols-2 md:items-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Empowering Businesses Through Smart Technology
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/80">
            Helping businesses and government organizations across Seychelles
            succeed through innovative IT solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="secondary">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative aspect-square w-full max-w-md justify-self-center rounded-card border border-white/20 bg-white/5 backdrop-blur"
          role="img"
          aria-label="Illustration representing cloud infrastructure, networking, and cybersecurity"
        >
          {/* Placeholder for the 3D illustration referenced in the brief —
              swap for real artwork/asset once available. */}
          <div className="flex h-full items-center justify-center text-sm text-white/50">
            Illustration placeholder
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
