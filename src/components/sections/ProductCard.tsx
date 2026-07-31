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
}

export function ProductCard({ slug, title, summary, icon }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <Card className="group h-full">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </span>
        <motion.h2
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
          className="mt-4 font-display text-lg font-semibold text-navy"
        >
          {title}
        </motion.h2>
        <p className="mt-2 text-sm text-ink/70">{summary}</p>
      </Card>
    </Link>
  );
}
