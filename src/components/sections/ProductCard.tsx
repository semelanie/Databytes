"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface ProductCardProps {
  slug: string;
  title: string;
  summary: string;
  hook: string;
  icon: ReactNode;
  accent: string;
  badge: string;
}

export function ProductCard({
  slug,
  title,
  summary,
  hook,
  icon,
  accent,
  badge,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="relative h-full overflow-hidden">
      {/* Small "platform logo" badge area — a monogram since these are
          in-house products without a third-party brand mark. */}
      <span
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-bold text-white shadow-sm"
        style={{ backgroundColor: accent }}
      >
        {badge}
      </span>

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full flex-col items-start pr-10 text-left"
        aria-expanded={open}
      >
        <motion.span
          animate={{ rotate: open ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: accent }}
        >
          {icon}
        </motion.span>
        <h2 className="mt-4 font-display text-lg font-semibold text-navy">
          {title}
        </h2>
        <p className="mt-2 text-sm text-ink/70">{summary}</p>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div
            className="mt-4 rounded-xl p-4 text-sm font-medium text-white"
            style={{ backgroundColor: accent }}
          >
            {hook}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href={`mailto:mgt@databytes.sc?subject=Free%20Trial%20Request%20-%20${encodeURIComponent(title)}`}
              className="text-xs font-semibold"
              style={{ color: accent }}
            >
              Request Free Trial
            </a>
            <Link
              href={`/products/${slug}`}
              className="flex items-center gap-1 text-xs font-semibold text-ink/60 hover:text-ink"
            >
              View full details <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      )}
    </Card>
  );
}
