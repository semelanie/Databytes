"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Hotel,
  Banknote,
  HandHeart,
  Store,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";
import { MovingLines } from "@/components/sections/MovingLines";

const industries = [
  { label: "Government", icon: Landmark },
  { label: "Education", icon: GraduationCap },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Retail", icon: ShoppingBag },
  { label: "Hospitality", icon: Hotel },
  { label: "Finance", icon: Banknote },
  { label: "NGOs", icon: HandHeart },
  { label: "Small Businesses", icon: Store },
  { label: "Large Enterprises", icon: Building2 },
];

export function IndustriesWeServe() {
  return (
    <section className="relative overflow-hidden bg-mist/50 py-24">
      <AmbientBlobs />
      <MovingLines />
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

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex cursor-default flex-col items-center gap-2 rounded-card border border-mist bg-white px-4 py-6 text-center transition-all duration-300 hover:border-primary hover:bg-primary hover:shadow-card-hover"
            >
              <motion.span
                whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white"
              >
                <industry.icon size={20} aria-hidden="true" />
              </motion.span>
              <span className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-white">
                {industry.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
