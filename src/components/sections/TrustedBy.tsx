"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AmbientBlobs } from "@/components/sections/AmbientBlobs";
import { MovingLines } from "@/components/sections/MovingLines";

// Logos shown here should only be added once the organization has confirmed
// it's fine to be listed — see DATABYTES_SPEC.md §5.
const clients = [
  { name: "Seyviour", src: "/client-seyviour.png" },
  { name: "Seychelles Qualifications Authority", src: "/client-sqa.png" },
  { name: "National Institute of Health and Social Studies", src: "/client-nihss.jpeg" },
  { name: "Round Table Seychelles", src: "/client-rts.png" },
  { name: "Seychelles Law Commission", src: "/client-lawcommission.png" },
  { name: "Attorney General's Office", src: "/client-ag.webp" },
];

const PER_SLIDE = 3;
const SLIDE_SECONDS = 4;

export function TrustedBy() {
  // Group clients into fixed-size slides so every slide shows the same
  // number of logos, all rendered with identical sizing/treatment.
  const slides = useMemo(() => {
    const groups: (typeof clients)[] = [];
    for (let i = 0; i < clients.length; i += PER_SLIDE) {
      groups.push(clients.slice(i, i + PER_SLIDE));
    }
    return groups;
  }, []);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [cycle, setCycle] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex(i);
    setCycle((c) => c + 1);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
      setCycle((c) => c + 1);
    }, SLIDE_SECONDS * 1000);
    return () => clearTimeout(timer);
  }, [index, playing, slides.length]);

  const slide = slides[index] ?? [];

  return (
    <section className="relative overflow-hidden border-y border-mist bg-mist/50 py-16">
      <AmbientBlobs />
      <MovingLines />
      <Container className="relative flex flex-col items-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-primary">
            Trusted Clients &amp; Partners
          </p>
          <span className="h-px w-8 bg-primary" />
        </div>

        <div className="relative mt-10 flex min-h-28 w-full max-w-2xl items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-10"
            >
              {slide.map((client) => (
                <div
                  key={client.name}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="relative h-16 w-28">
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center text-xs font-medium text-ink/60">
                    {client.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation + progress bar + play/pause, matching a familiar
            product-carousel control cluster — one dot per slide, not per logo. */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Show partner group ${i + 1}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  i === index ? "bg-primary" : "bg-mist hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          <div className="relative h-1.5 w-20 overflow-hidden rounded-full bg-mist">
            {playing && (
              <motion.div
                key={cycle}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_SECONDS, ease: "linear" }}
                className="h-full rounded-full bg-primary"
              />
            )}
          </div>

          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-mist text-ink/50 transition-colors hover:border-primary hover:text-primary"
          >
            {playing ? <Pause size={12} /> : <Play size={12} />}
          </button>
        </div>
      </Container>
    </section>
  );
}
