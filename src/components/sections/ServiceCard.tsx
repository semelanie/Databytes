"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface ServiceCardProps {
  slug: string;
  title: string;
  summary: string;
  hook: string;
  icon: ReactNode;
  accent: string;
}

export function ServiceCard({
  slug,
  title,
  summary,
  hook,
  icon,
  accent,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="h-full">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full flex-col items-start text-left"
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
          <Link
            href={`/services/${slug}`}
            className="mt-3 flex items-center gap-1 text-xs font-semibold"
            style={{ color: accent }}
          >
            View full details <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </motion.div>
      )}
    </Card>
  );
}
