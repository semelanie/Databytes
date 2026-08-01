export type ProjectCategory = "Government" | "Institutional" | "Private";

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
const IMG = {
  server: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=900&q=80&auto=format&fit=crop",
  code: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?w=900&q=80&auto=format&fit=crop",
  aerial: "https://images.unsplash.com/photo-1715026323313-bb22cbe42381?w=900&q=80&auto=format&fit=crop",
  meeting: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=900&q=80&auto=format&fit=crop",
};

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
    image: IMG.server,
  },
  {
    slug: "attorney-general-office",
    title: "Attorney General's Office Website",
    category: "Government",
    client: "Attorney General's Office",
    summary: "Ongoing website development and maintenance for the Attorney General's Office.",
    delivery: [
      "Website development",
      "Ongoing maintenance and updates",
    ],
    techStack: ["Website Development", "Maintenance"],
    image: IMG.code,
  },
  {
    slug: "seychelles-law-commission",
    title: "Seychelles Law Commission Website",
    category: "Government",
    client: "Seychelles Law Commission",
    summary: "Ongoing website development and maintenance for the Seychelles Law Commission.",
    delivery: [
      "Website development",
      "Ongoing maintenance and updates",
    ],
    techStack: ["Website Development", "Maintenance"],
    image: IMG.aerial,
  },
  {
    slug: "mecenr-climate-database",
    title: "MECENR Climate Change Database",
    category: "Government",
    client: "Ministry of Environment, Climate, Energy and Natural Resources — Climate Change Sector",
    summary: "Database repair and optimization for the Climate Change sector's data systems.",
    delivery: [
      "Database repair",
      "Database optimization",
    ],
    techStack: ["Database Administration"],
    image: IMG.server,
  },
  {
    slug: "mecenr-waste-platform",
    title: "Waste Disposal Platform",
    category: "Government",
    client: "Ministry of Environment, Climate, Energy and Natural Resources — Land & Waste Sector",
    summary: "A platform for waste disposal, built for the ministry's Land and Waste sector.",
    delivery: [
      "Platform for coordinating waste disposal",
    ],
    techStack: ["Web Platform"],
    image: IMG.aerial,
  },
  {
    slug: "sqa-network-infrastructure",
    title: "SQA Network & Infrastructure",
    category: "Institutional",
    client: "Seychelles Qualifications Authority",
    summary: "Network design and core infrastructure support, from cabling through to server administration.",
    delivery: [
      "Network design and structured cabling",
      "Firewall configuration",
      "Server setup",
      "Active Directory setup and administration",
      "Backup systems",
    ],
    techStack: ["Networking", "Firewall", "Windows Server", "Active Directory"],
    image: IMG.server,
  },
  {
    slug: "nihss-room-booking",
    title: "NIHSS Room Booking Platform",
    category: "Institutional",
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
    image: IMG.code,
  },
  {
    slug: "nihss-driver-booking",
    title: "NIHSS Driver Booking System",
    category: "Institutional",
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
    image: IMG.meeting,
  },
  {
    slug: "nihss-it-support",
    title: "NIHSS IT Support & Systems",
    category: "Institutional",
    client: "National Institute of Health and Social Studies",
    summary:
      "Ongoing IT support and Time Attendance, alongside software development spanning Room, Staff, Driver, and Student systems.",
    delivery: [
      "Ongoing IT support",
      "Time Attendance system",
      "Software development for Room, Staff, Driver, and Student systems",
    ],
    techStack: ["IT Support", "Time Attendance", "Software Development"],
    image: IMG.code,
  },
  {
    slug: "round-table-seychelles",
    title: "Round Table Seychelles Website",
    category: "Institutional",
    client: "Round Table Seychelles",
    summary:
      "A full migration from a third-party platform to a self-hosted stack, with a member directory and a history of past projects and events.",
    delivery: [
      "Migration from third-party hosting to Supabase + Vercel + GitHub",
      "Member directory matched to the organization's chapter list",
      "Project and event history, including the annual Regatta",
    ],
    techStack: ["Supabase", "Vercel", "GitHub"],
    image: IMG.server,
  },
  {
    slug: "foodpro",
    title: "FoodPro IT Support",
    category: "Private",
    client: "FoodPro",
    summary: "Ongoing IT and software support, covering time attendance, CCTV, and network infrastructure.",
    delivery: [
      "IT support",
      "Software support",
      "Time Attendance system",
      "CCTV",
      "Network support",
      "Server setup and maintenance",
    ],
    techStack: ["IT Support", "CCTV", "Networking", "Windows Server"],
    image: IMG.meeting,
  },
  {
    slug: "vertex-hrm",
    title: "Vertex HRM",
    category: "Private",
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
    image: IMG.aerial,
  },
  {
    slug: "dna-holdings",
    title: "DNA Holdings Corporate Website",
    category: "Private",
    client: "DNA Holdings",
    summary:
      "A corporate showcase site for a holding company overseeing four subsidiaries, built as the first phase of a two-phase rollout strategy.",
    delivery: [
      "Corporate showcase covering all four subsidiary brands",
      "Two-phase strategy: group site first, individual subsidiary sites next",
      "Supporting RFI documentation for the client",
    ],
    techStack: ["React", "Next.js"],
    image: IMG.code,
  },
];
