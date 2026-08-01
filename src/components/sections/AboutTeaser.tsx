"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoCollage } from "@/components/sections/PhotoCollage";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";
import { MovingLines } from "@/components/sections/MovingLines";

export function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      <AmbientBlobs />
      <MovingLines />
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

        <motion.div style={{ y: panelY }}>
          <PhotoCollage />
        </motion.div>
      </Container>
    </section>
  );
}
