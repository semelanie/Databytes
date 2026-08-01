"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CircuitTrace } from "@/components/layout/CircuitTrace";

export function LoadingScreen() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Longer on first load (initial assets/fonts), shorter on subsequent
    // in-app navigations.
    const duration = isFirstRender.current ? 1700 : 1300;
    isFirstRender.current = false;

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          aria-hidden="true"
        >
          <div className="relative flex items-center justify-center">
            <CircuitTrace />
            {/* Logo fades in at the center once the traces have landed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="absolute h-11 w-11 overflow-hidden rounded-xl shadow-card"
            >
              <Image src="/logo.jpg" alt="" fill sizes="44px" className="object-cover" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
