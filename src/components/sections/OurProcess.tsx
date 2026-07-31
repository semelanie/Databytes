"use client";

import { motion } from "framer-motion";
import {
  MessagesSquare,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
  Headset,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  { label: "Consultation", icon: MessagesSquare },
  { label: "Planning", icon: ClipboardList },
  { label: "Design", icon: PenTool },
  { label: "Development", icon: Code2 },
  { label: "Testing", icon: Bug },
  { label: "Deployment", icon: Rocket },
  { label: "Ongoing Support", icon: Headset },
];

export function OurProcess() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            How we work
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            Our Process
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-card border border-mist p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon size={20} className="text-primary/70" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm font-semibold text-ink">{step.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
