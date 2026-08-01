"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <AmbientBlobs />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              What we do
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              Services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden items-center gap-1 text-sm font-semibold text-deep hover:text-primary md:flex"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <Card className="group h-full">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: service.accent }}
                  >
                    <service.icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">{service.summary}</p>
                  <span
                    className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    style={{ color: service.accent }}
                  >
                    View details <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
