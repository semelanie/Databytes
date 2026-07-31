export interface Product {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    slug: "hr-management-system",
    title: "HR Management System",
    summary:
      "A full employee lifecycle platform — records, leave, payroll integration, and reporting.",
    description:
      "A modular HR system covering onboarding, leave management, employee records, and reporting, built with role-based access so different teams see only what they need.",
    features: [
      "Employee records & document storage",
      "Leave requests & approvals",
      "Role-based dashboards",
      "Reporting & audit trail",
    ],
  },
  {
    slug: "digital-archive-management",
    title: "Digital Archive Management",
    summary: "Searchable, secure digital records for institutions.",
    description: "Detail content pending — Phase 2.",
    features: [],
  },
  {
    slug: "helpdesk-system",
    title: "Helpdesk System",
    summary: "Ticketing and support workflows for internal or client-facing teams.",
    description: "Detail content pending — Phase 2.",
    features: [],
  },
  {
    slug: "visitor-management",
    title: "Visitor Management",
    summary: "Front-desk check-in and visitor tracking for offices and campuses.",
    description: "Detail content pending — Phase 2.",
    features: [],
  },
];
