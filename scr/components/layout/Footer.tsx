import Link from "next/link";
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
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">Databytes</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Innovating today. Empowering tomorrow. IT solutions for
            organizations across Seychelles.
          </p>
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
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} Databytes Pty Ltd. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
