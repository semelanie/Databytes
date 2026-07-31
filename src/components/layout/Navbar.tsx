"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Databytes"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-display text-lg font-bold text-navy">
            Databytes
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="!px-5 !py-2 text-sm">
            Request a Quote
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-mist bg-white md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" onClick={() => setOpen(false)}>
              Request a Quote
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
