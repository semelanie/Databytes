"use client";

import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Lightbulb,
  Wallet,
  ShieldCheck,
  Lock,
  Heart,
  Globe,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const reasons = [
  { icon: Users, label: "Experienced IT Professionals" },
  { icon: Zap, label: "Fast Technical Support" },
  { icon: Lightbulb, label: "Innovative Solutions" },
  { icon: Wallet, label: "Affordable Pricing" },
  { icon: ShieldCheck, label: "Trusted by Businesses" },
  { icon: Lock, label: "Secure Infrastructure" },
  { icon: Heart, label: "Customer Focused" },
  { icon: Globe, label: "Local Support with Global Standards" },
];

export function WhyChooseUs() {
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
            Why choose us
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            Why Choose Databytes
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-card bg-mist p-5"
            >
              <reason.icon
                className="mt-0.5 shrink-0 text-primary"
                size={20}
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-ink">{reason.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
