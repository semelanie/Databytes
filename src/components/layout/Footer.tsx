import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/portfolio", label: "Portfolio" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/services", label: "Services" },
      { href: "/products", label: "Products" },
    ],
  },
];

// TODO: swap "#" for the real profile URLs once available.
const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Databytes"
              width={28}
              height={28}
              className="rounded-md"
            />
            <p className="font-display text-lg font-bold">Databytes</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Innovating today. Empowering tomorrow. IT solutions for
            organizations across Seychelles.
          </p>

          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-white/90">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-white/90">Get in touch</p>
          <ul className="mt-4 space-y-3">
            <li>
              <p className="text-xs uppercase tracking-wide text-white/40">
                Talk to us
              </p>
              <a
                href="tel:+2482758431"
                className="mt-1 flex items-center gap-2 text-sm text-white/70 hover:text-primary"
              >
                <Phone size={16} className="shrink-0" aria-hidden="true" />
                +248 2758431
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-wide text-white/40">
                Information and complaint
              </p>
              <a
                href="mailto:support@databytes.sc"
                className="mt-1 flex items-center gap-2 text-sm text-white/70 hover:text-primary"
              >
                <Mail size={16} className="shrink-0" aria-hidden="true" />
                support@databytes.sc
              </a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-wide text-white/40">
                See us at this location
              </p>
              <a
                href="https://www.google.com/maps/place/Databytes+Consultancy/@-4.6547362,55.4846108,17z/data=!3m1!4b1!4m5!3m4!1s0x22e0299c8d10d783:0xffc4ff63d8298c6d!8m2!3d-4.6547412!4d55.4866529"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-start gap-2 text-sm text-white/70 hover:text-primary"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                Providence, Mahé, Seychelles
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} Databytes Pty Ltd. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
