"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Real, freely-licensed photos (Unsplash License — free for commercial use,
// no attribution required: https://unsplash.com/license). Swap for actual
// Databytes team/office photography whenever that becomes available.
export const collagePhotos = [
  {
    src: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=900&q=80&auto=format&fit=crop",
    alt: "Server room with data racks",
  },
  {
    src: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?w=900&q=80&auto=format&fit=crop",
    alt: "Close-up of code on a screen",
  },
  {
    src: "https://images.unsplash.com/photo-1715026323313-bb22cbe42381?w=900&q=80&auto=format&fit=crop",
    alt: "Aerial view of a data centre building",
  },
  {
    src: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=900&q=80&auto=format&fit=crop",
    alt: "Business meeting around a conference table",
  },
];

/** Two large photos on top, two smaller below — reused across About sections. */
export function PhotoCollage({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className ?? ""}`}>
      {collagePhotos.map((photo, i) => (
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          className={`relative overflow-hidden rounded-card ${
            i < 2 ? "aspect-[4/5]" : "aspect-square"
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 45vw, 260px"
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
