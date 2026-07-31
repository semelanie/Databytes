"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Server, ShieldCheck, Boxes } from "lucide-react";
import { Container } from "@/components/ui/Container";

const links = [
  { icon: Code2, label: "Website & Software Development", href: "/services" },
  { icon: Server, label: "Managed IT Services", href: "/services" },
  { icon: ShieldCheck, label: "Cybersecurity", href: "/services" },
  { icon: Boxes, label: "Product Solutions", href: "/products" },
];

/**
 * Overlaps the Hero's curved bottom edge, the way SFA's quick-links strip
 * sits on top of their hero curve — negative top margin pulls it up.
 */
export function QuickLinks() {
  return (
    <section className="relative z-10 -mt-10 md:-mt-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 rounded-card bg-white p-8 shadow-card-hover md:grid-cols-4"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-mist text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <link.icon size={26} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-navy">
                {link.label}
              </span>
            </Link>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
