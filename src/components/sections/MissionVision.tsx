"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    quote:
      "To empower organizations through innovative, secure, and reliable technology solutions that simplify business operations and accelerate digital transformation.",
    fromX: -60,
  },
  {
    icon: Eye,
    title: "Our Vision",
    quote:
      "To become Seychelles' leading technology solutions provider, recognized for innovation, quality, professionalism, and exceptional customer service.",
    fromX: 60,
  },
];

export function MissionVision() {
  return (
    <section className="relative overflow-hidden py-24">
      <AmbientBlobs />
      <Container className="relative grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: card.fromX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="rounded-card bg-primary px-8 py-12 text-center text-white"
          >
            <card.icon
              className="mx-auto"
              size={36}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-2xl font-bold">
              {card.title}
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm italic text-white/90">
              &ldquo;{card.quote}&rdquo;
            </p>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
