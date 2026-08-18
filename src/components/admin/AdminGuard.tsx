"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut, FileText, Layers, Package, Briefcase, HelpCircle, Users } from "lucide-react";
import { supabase } from "@/lib/supabase";

const navLinks = [
  { href: "/admin", label: "Content", icon: FileText },
  { href: "/admin/services", label: "Services", icon: Layers },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/faq", label: "FAQ", icon: HelpCircle },
];

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setChecking(false);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace("/admin/login");
      } else {
        setAuthed(true);
      }
      setChecking(false);
    });
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-ink/50">
        Checking access…
      </div>
    );
  }

  if (!authed) return null; // redirecting

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  return (
    <div className="min-h-screen bg-mist/40">
      <header className="flex items-center justify-between border-b border-mist bg-white px-6 py-4">
        <p className="font-display text-lg font-bold text-navy">Databytes Admin</p>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-primary"
        >
          <LogOut size={14} aria-hidden="true" /> Log out
        </button>
      </header>

      <div className="flex">
        <nav className="hidden w-56 shrink-0 border-r border-mist bg-white p-4 sm:block">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-ink/70 hover:bg-mist"
                  }`}
                >
                  <link.icon size={16} aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
