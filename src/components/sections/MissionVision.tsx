"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    quote:
      "To empower organizations through innovative, secure, and reliable technology solutions that simplify business operations and accelerate digital transformation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    quote:
      "To become Seychelles' leading technology solutions provider, recognized for innovation, quality, professionalism, and exceptional customer service.",
  },
];

export function MissionVision() {
  return (
    <section className="py-24">
      <Container className="grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
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
