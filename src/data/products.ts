import {
  Users,
  Archive,
  Ticket,
  UserCheck,
  Package,
  DoorOpen,
  Car,
  FolderOpen,
  Network,
  Globe,
  Lock,
  Database,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  accent: string;
  /** Short monogram used as a stand-in "platform logo" badge on the card,
      since these are in-house Databytes products rather than third-party
      platforms with their own brand marks. */
  badge: string;
}

export const products: Product[] = [
  {
    slug: "hr-management-system",
    title: "HR Management & Admin Management System",
    summary:
      "A full employee lifecycle platform — records, leave, payroll integration, and reporting.",
    description:
      "A modular HR system covering the full employee lifecycle: onboarding, leave management, employee records, and reporting. Built with role-based access so HR, managers, and staff each see exactly what's relevant to them — nothing more, nothing less. Designed to scale from a handful of employees to a full organization without re-architecting.",
    features: [
      "Employee records & document storage",
      "Leave requests & approvals with manager sign-off",
      "Role-based dashboards for HR, managers, and staff",
      "Payroll-system integration groundwork",
      "Reporting & full audit trail",
    ],
    icon: Users,
    accent: "#42A8E6",
    badge: "HR",
  },
  {
    slug: "digital-archive-management",
    title: "Digital Archive Management",
    summary: "Searchable, secure digital records for institutions.",
    description:
      "A digital archive for institutions that need to store, organize, and retrieve official records reliably — replacing filing cabinets and loose folder structures with a searchable, permissioned system. Documents are indexed by category, date, and custodian so retrieval takes seconds instead of a search through physical archives.",
    features: [
      "Full-text and metadata search across archived documents",
      "Category and department-based organization",
      "Role-based access to sensitive or restricted records",
      "Version history for updated documents",
      "Retention and audit logging",
    ],
    icon: Archive,
    accent: "#8B5CF6",
    badge: "DA",
  },
  {
    slug: "ticketing-system",
    title: "Ticketing System",
    summary: "Request and issue tracking for internal teams or customer-facing support.",
    description:
      "A ticketing platform for logging, assigning, and resolving requests — from internal IT tickets to customer support queues — with status tracking end to end.",
    features: [
      "Ticket submission & categorization",
      "Assignment and escalation rules",
      "Status tracking and resolution history",
      "Reporting on response and resolution times",
    ],
    icon: Ticket,
    accent: "#F59E0B",
    badge: "TK",
  },
  {
    slug: "visitor-management",
    title: "Visitor Management",
    summary: "Front-desk check-in and visitor tracking for offices and campuses.",
    description: "Detail content pending — Phase 2.",
    features: [],
    icon: UserCheck,
    accent: "#14B8A6",
    badge: "VM",
  },
  {
    slug: "fixed-assets",
    title: "Fixed Assets Management",
    summary: "Track equipment, maintenance schedules, and depreciation across an organization.",
    description:
      "A system for registering and tracking fixed assets — equipment, vehicles, furniture — including maintenance history, current custodian, and depreciation over time.",
    features: [
      "Asset register with custodian assignment",
      "Maintenance and service history",
      "Depreciation tracking",
      "Audit-ready reporting",
    ],
    icon: Package,
    accent: "#1E3A8A",
    badge: "FA",
  },
  {
    slug: "room-booking",
    title: "Room Booking Platform",
    summary: "Live availability and booking for classrooms, meeting rooms, and shared facilities.",
    description:
      "A booking platform with a live availability calendar, approval workflow, and automated notifications — built and delivered for an education-sector client managing multiple room types.",
    features: [
      "Live availability calendar with room filters",
      "Management approval and reschedule workflow",
      "Automated email notifications",
      "Booking history and usage reporting",
    ],
    icon: DoorOpen,
    accent: "#EC4899",
    badge: "RB",
  },
  {
    slug: "driver-booking",
    title: "Driver Booking System",
    summary: "Digital scheduling for shared drivers and vehicles, replacing paper-based logs.",
    description:
      "A scheduling system for shared drivers or vehicle pools — built and delivered to replace a fully paper-based process — with permission tiers and a complete audit trail.",
    features: [
      "Pickup/destination scheduling",
      "Tiered management permissions (view-only / approver)",
      "Reschedule workflow",
      "Full activity audit trail",
    ],
    icon: Car,
    accent: "#F97316",
    badge: "DB",
  },
  {
    slug: "file-server-gui",
    title: "File Server GUI",
    summary: "A web-based interface for browsing, managing, and permissioning files on a server.",
    description:
      "A browser-based front end for a file server — upload, organize, and manage access permissions without needing direct server or network-share access.",
    features: [
      "Browser-based file browsing and upload",
      "Folder-level permissions",
      "Search across stored files",
      "Activity log for file access and changes",
    ],
    icon: FolderOpen,
    accent: "#06B6D4",
    badge: "FS",
  },
  {
    slug: "network-audit",
    title: "Network Audit Tool",
    summary: "Assessment and reporting on network health, devices, and security posture.",
    description:
      "A network assessment tool that scans and reports on connected devices, configuration issues, and potential vulnerabilities — used as the basis for our cybersecurity and network support services.",
    features: [
      "Device and endpoint discovery",
      "Configuration and vulnerability reporting",
      "Historical audit comparisons",
      "Exportable reports for compliance",
    ],
    icon: Network,
    accent: "#EF4444",
    badge: "NA",
  },
  {
    slug: "website-building",
    title: "Website Building Platform",
    summary: "A managed website platform for organizations that need ongoing content control.",
    description:
      "A content-managed website platform — the same foundation used to build sites like this one — handed over with an editing interface so clients can update content without needing a developer for every change.",
    features: [
      "Editable content without code changes",
      "Built-in SEO groundwork",
      "Role-based publishing access",
      "Scales from a simple site to a full application",
    ],
    icon: Globe,
    accent: "#22C55E",
    badge: "WB",
  },
  {
    slug: "secure-vault",
    title: "Secure Vault",
    summary: "An encrypted document vault for storing and sharing sensitive files.",
    description:
      "A secure storage platform for sensitive documents — encrypted at rest, with controlled access and a full log of who viewed or downloaded what, and when.",
    features: [
      "Encryption at rest for all stored documents",
      "Granular, role-based access control",
      "Full access and download audit log",
      "Secure sharing without emailing attachments",
    ],
    icon: Lock,
    accent: "#6366F1",
    badge: "SV",
  },
  {
    slug: "shcis",
    title: "SHCIS - Database and Staff/Client Resources",
    summary: "A database platform for managing staff and client resource records.",
    description:
      "SHCIS centralizes staff and client resource records into a single database — built as a foundation for tracking, searching, and managing that information reliably.",
    features: [
      "Centralized staff and client records",
      "Searchable database",
    ],
    icon: Database,
    accent: "#64748B",
    badge: "SH",
  },
];
