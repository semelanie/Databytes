"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum display time so the animation isn't a flash on fast
    // connections, capped so it never blocks real usage for long.
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-16 w-16 overflow-hidden rounded-2xl"
            >
              <Image src="/logo.jpg" alt="" fill sizes="64px" className="object-cover" />
            </motion.div>
            <div className="h-0.5 w-24 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
