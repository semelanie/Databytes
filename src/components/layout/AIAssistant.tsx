"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageCircle, Mail, ArrowLeft } from "lucide-react";
import { faqs } from "@/data/faq";

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  function reset() {
    setSelected(null);
  }

  function toggle() {
    setOpen((o) => !o);
    if (open) reset();
  }

  return (
    <>
      <motion.button
        onClick={toggle}
        aria-label={open ? "Close assistant" : "Open assistant"}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-deep text-white shadow-card-hover transition-colors hover:bg-primary"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={22} /> : <Bot size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 flex max-h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-card bg-white shadow-card-hover"
          >
            <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Bot size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold">Dbytes AI</p>
                <p className="text-xs text-white/60">Answers from our FAQ</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {selected === null ? (
                <>
                  <p className="px-1 text-sm font-medium text-navy">
                    Hi! How can I help you with today?
                  </p>
                  <p className="mt-1 px-1 text-xs text-ink/60">
                    Pick a question below, or reach a real person for anything else.
                  </p>
                  <div className="mt-3 space-y-2">
                    {faqs.map((item, i) => (
                      <button
                        key={item.q}
                        onClick={() => setSelected(i)}
                        className="w-full rounded-xl border border-mist px-3 py-2.5 text-left text-sm text-ink transition-colors hover:border-primary hover:bg-mist/50"
                      >
                        {item.q}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  <button
                    onClick={reset}
                    className="flex items-center gap-1 text-xs font-semibold text-primary"
                  >
                    <ArrowLeft size={12} aria-hidden="true" /> Back to questions
                  </button>
                  <p className="mt-3 rounded-xl bg-mist px-3 py-2.5 text-sm font-medium text-navy">
                    {faqs[selected]?.q}
                  </p>
                  <p className="mt-2 px-1 text-sm text-ink/70">
                    {faqs[selected]?.a}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-2 border-t border-mist p-3">
              <a
                href="https://wa.me/2482758431"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white hover:opacity-90"
              >
                <MessageCircle size={14} aria-hidden="true" /> WhatsApp
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-mist px-3 py-2 text-xs font-semibold text-navy hover:border-primary hover:text-primary"
              >
                <Mail size={14} aria-hidden="true" /> Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
