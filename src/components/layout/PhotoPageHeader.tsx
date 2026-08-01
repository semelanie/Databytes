"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PhotoPageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** "filter" = a light uniform blue tint over the whole photo.
   *  "right" = a blue wash concentrated on the right side, leaving the
   *  left (text) side clear. Omit for the plain white-fade default. */
  overlay?: "filter" | "right";
}

/**
 * Photo-backed page banner — an alternative to the dark tech-grid PageHeader,
 * used where a lifestyle/people photo fits the page better (About, Careers)
 * rather than the services/products-style utility pages.
 */
export function PhotoPageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  overlay,
}: PhotoPageHeaderProps) {
  return (
    <section className="relative h-[360px] overflow-hidden sm:h-[420px] md:h-[480px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Fades from solid white (readable text area) into the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
      {overlay === "filter" && (
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      )}
      {overlay === "right" && (
        <div className="absolute inset-0 bg-gradient-to-l from-primary/30 via-primary/10 to-transparent md:from-primary/60 md:via-primary/15" />
      )}

      <div className="relative flex h-full max-w-2xl flex-col justify-center px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-md text-ink/70">{description}</p>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-deep hover:text-primary"
            >
              {ctaLabel} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
