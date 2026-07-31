export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
}

// Phase 1 ships full detail content for the first entry; the rest are index-only
// stubs using the same [slug] template — fill these in as content is finalized.
export const services: Service[] = [
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    summary:
      "Fast, accessible, search-optimized websites built for organizations across Seychelles.",
    description:
      "We design and build responsive, production-ready websites — from corporate sites to booking and management platforms — using modern frameworks and a service-layer architecture that keeps the frontend independent of any single backend.",
    benefits: [
      "Mobile-first, WCAG-conscious builds",
      "SEO groundwork included from day one",
      "Architecture ready to scale into full applications",
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary: "Bespoke internal tools and business applications.",
    description: "Detail content pending — Phase 2.",
    benefits: [],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    summary: "iOS and Android apps for staff and customer-facing use cases.",
    description: "Detail content pending — Phase 2.",
    benefits: [],
  },
  {
    slug: "network-installation-support",
    title: "Network Installation & Support",
    summary: "Structured cabling, Wi-Fi, and network maintenance.",
    description: "Detail content pending — Phase 2.",
    benefits: [],
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    summary: "Ongoing IT operations support so teams can focus on their work.",
    description: "Detail content pending — Phase 2.",
    benefits: [],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary: "Assessments, hardening, and monitoring for organizations of any size.",
    description: "Detail content pending — Phase 2.",
    benefits: [],
  },
];
