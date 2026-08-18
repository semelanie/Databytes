"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products as staticProducts } from "@/data/products";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";
import { ProductCard } from "@/components/sections/ProductCard";

interface PreviewItem {
  slug: string;
  title: string;
  summary: string;
  hook: string;
  accent: string;
  badge: string;
  icon: ReactNode;
}

const FALLBACK: PreviewItem[] = staticProducts.slice(0, 3).map((p) => ({
  slug: p.slug,
  title: p.title,
  summary: p.summary,
  hook: p.hook,
  accent: p.accent,
  badge: p.badge,
  icon: <p.icon size={22} aria-hidden="true" />,
}));

interface ProductsPreviewProps {
  items?: PreviewItem[];
}

export function ProductsPreview({ items = FALLBACK }: ProductsPreviewProps) {
  return (
    <section className="relative overflow-hidden bg-mist/50 py-24">
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
          {items.map((product, i) => (
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
                hook={product.hook}
                icon={product.icon}
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
