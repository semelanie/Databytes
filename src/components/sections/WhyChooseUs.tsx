"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  UserCog,
  Zap,
  Sparkles,
  BadgeDollarSign,
  ShieldCheck,
  ServerCog,
  Headset,
  Network,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";

const reasons = [
  {
    icon: UserCog,
    label: "Experienced IT Professionals",
    blurb: "Certified specialists with years of hands-on delivery.",
    accent: "#42A8E6",
  },
  {
    icon: Zap,
    label: "Fast Technical Support",
    blurb: "Quick response times when systems need attention.",
    accent: "#F59E0B",
  },
  {
    icon: Sparkles,
    label: "Innovative Solutions",
    blurb: "Modern tools and approaches, not one-size-fits-all.",
    accent: "#8B5CF6",
  },
  {
    icon: BadgeDollarSign,
    label: "Affordable Pricing",
    blurb: "Transparent quotes that fit a range of budgets.",
    accent: "#14B8A6",
  },
  {
    icon: ShieldCheck,
    label: "Trusted by Businesses",
    blurb: "Relied on by government, education, and private sector.",
    accent: "#1E3A8A",
  },
  {
    icon: ServerCog,
    label: "Secure Infrastructure",
    blurb: "Security built into every system from the ground up.",
    accent: "#EC4899",
  },
  {
    icon: Headset,
    label: "Customer Focused",
    blurb: "Real people, on hand for as long as you need us.",
    accent: "#F97316",
  },
  {
    icon: Network,
    label: "Local Support with Global Standards",
    blurb: "Seychelles-based, held to international best practice.",
    accent: "#42A8E6",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24">
      <AmbientBlobs />
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
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col rounded-card bg-mist p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: reason.accent }}
              >
                <reason.icon size={20} aria-hidden="true" />
              </span>
              <p className="mt-3 text-sm font-semibold text-ink">
                {reason.label}
              </p>
              <p className="mt-1 text-xs text-ink/60">{reason.blurb}</p>
              <Link
                href="/about"
                className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                style={{ color: reason.accent }}
              >
                Learn more <ArrowRight size={12} aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
