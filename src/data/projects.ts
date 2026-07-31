export type ProjectCategory = "Government" | "Education" | "NGOs & Community" | "Private Sector";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  summary: string;
  delivery: string[];
  techStack: string[];
  image: string;
}

// Real, freely-licensed photos (Unsplash License — free for commercial use).
// Swap for actual project screenshots whenever those are ready to publish.
export const projects: Project[] = [
  {
    slug: "mecenr-ozone-unit",
    title: "MECENR Ozone Unit Website",
    category: "Government",
    client: "Ministry of Environment, Climate, Energy and Natural Resources",
    summary:
      "A public information website for the Ozone Unit, developed as part of a technical proposal, with a secure backend for confidential reporting.",
    delivery: [
      "Content structure and SEO plan for a government information site",
      "Encrypted storage for confidential reports",
      "Admin dashboard for content and report management",
    ],
    techStack: ["React", "Postgres", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "nihss-room-booking",
    title: "NIHSS Room Booking Platform",
    category: "Education",
    client: "National Institute of Health and Social Studies",
    summary:
      "A live booking system for classrooms, meeting rooms, and shared facilities — replacing manual scheduling with a real calendar and approval workflow.",
    delivery: [
      "Live Supabase-backed availability calendar with room filters",
      "Management and administrator dashboards with role-based access",
      "Automated email notifications for approvals, rejections, and reschedules",
      "Monthly booking summary reports and CSV export",
    ],
    techStack: ["React", "Supabase", "Vercel", "Resend"],
    image:
      "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "nihss-driver-booking",
    title: "NIHSS Driver Booking System",
    category: "Education",
    client: "National Institute of Health and Social Studies",
    summary:
      "Replaced a paper-based driver scheduling process with a digital platform covering permissions, rescheduling, and a full audit trail.",
    delivery: [
      "Two-tier management permissions (view-only and approver)",
      "Reschedule workflow with pickup/destination tracking",
      "Full activity audit trail for accountability",
      "Admin controls for managing driver and manager accounts",
    ],
    techStack: ["Supabase", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "round-table-seychelles",
    title: "Round Table Seychelles Website",
    category: "NGOs & Community",
    client: "Round Table Seychelles",
    summary:
      "A full migration from a third-party platform to a self-hosted stack, with a member directory and a history of past projects and events.",
    delivery: [
      "Migration from third-party hosting to Supabase + Vercel + GitHub",
      "Member directory matched to the organization's chapter list",
      "Project and event history, including the annual Regatta",
    ],
    techStack: ["Supabase", "Vercel", "GitHub"],
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "vertex-hrm",
    title: "Vertex HRM",
    category: "Private Sector",
    client: "Enterprise client",
    summary:
      "A complete enterprise HR management system spanning 14 modules — from leave and time tracking to recruitment, performance, and claims.",
    delivery: [
      "14 fully-built modules: Dashboard, Admin, PIM, Leave, Time, Recruitment, Performance, Claims, and more",
      "Role-based access control with JWT authentication",
      "Real file uploads for employee documents and claim receipts",
      "23 frontend pages covering nearly the full API surface",
    ],
    techStack: ["React", "TypeScript", "ASP.NET Core 9", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1715026323313-bb22cbe42381?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "dna-holdings",
    title: "DNA Holdings Corporate Website",
    category: "Private Sector",
    client: "DNA Holdings",
    summary:
      "A corporate showcase site for a holding company overseeing four subsidiaries, built as the first phase of a two-phase rollout strategy.",
    delivery: [
      "Corporate showcase covering all four subsidiary brands",
      "Two-phase strategy: group site first, individual subsidiary sites next",
      "Supporting RFI documentation for the client",
    ],
    techStack: ["React", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?w=900&q=80&auto=format&fit=crop",
  },
];
