"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const industries = [
  "Government",
  "Education",
  "Healthcare",
  "Retail",
  "Hospitality",
  "Finance",
  "NGOs",
  "Small Businesses",
  "Large Enterprises",
];

export function IndustriesWeServe() {
  return (
    <section className="bg-mist/50 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Who we work with
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            Industries We Serve
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-full border border-mist bg-white px-5 py-2 text-sm font-medium text-ink"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
