"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";
import { MovingLines } from "@/components/sections/MovingLines";
import { ProductCard } from "@/components/sections/ProductCard";

export function ProductsPreview() {
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
          className="flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Ready-built platforms
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              Product Solutions
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1 text-sm font-semibold text-deep hover:text-primary md:flex"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProductCard
                slug={product.slug}
                title={product.title}
                summary={product.summary}
                icon={<product.icon size={22} aria-hidden="true" />}
                accent={product.accent}
                badge={product.badge}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
