"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

interface ProductCardProps {
  slug: string;
  title: string;
  summary: string;
  icon: ReactNode;
  accent: string;
  badge: string;
}

export function ProductCard({
  slug,
  title,
  summary,
  icon,
  accent,
  badge,
}: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <motion.div whileTap={{ scale: 0.96 }} className="h-full">
        <Card className="group relative h-full overflow-hidden">
          {/* Small "platform logo" badge area — a monogram since these are
              in-house products without a third-party brand mark. */}
          <span
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-bold text-white shadow-sm"
            style={{ backgroundColor: accent }}
          >
            {badge}
          </span>

          <motion.span
            whileHover={{ scale: 1.12, rotate: 4 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: accent }}
          >
            {icon}
          </motion.span>

          <motion.h2
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
            className="mt-4 font-display text-lg font-semibold text-navy"
          >
            {title}
          </motion.h2>
          <p className="mt-2 text-sm text-ink/70">{summary}</p>

          {/* "Pop" affordance on click — a quick colored ring flash */}
          <motion.span
            initial={{ opacity: 0 }}
            whileTap={{ opacity: [0, 0.15, 0], scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute inset-0 rounded-card"
            style={{ backgroundColor: accent }}
          />
        </Card>
      </motion.div>
    </Link>
  );
}
