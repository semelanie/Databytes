"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Server, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function AboutTeaser() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              About Us
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            Technology Partners for Organizations Across Seychelles
          </h2>
          <p className="mt-6 text-ink/70">
            Databytes Pty Ltd delivers innovative, secure, and reliable
            technology solutions that empower organizations to embrace digital
            transformation — from government institutions and schools to
            private businesses and NGOs.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-deep hover:text-primary"
          >
            More About Us <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* No real company photography supplied yet — this stands in for
            the photo-collage panel until real images are available. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {[Cloud, Server, Lock].map((Icon, i) => (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-card bg-brand-gradient ${
                i === 0 ? "col-span-2" : ""
              }`}
            >
              <Icon size={40} className="text-white/80" aria-hidden="true" />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
