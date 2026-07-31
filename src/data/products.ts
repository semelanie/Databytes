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
    icon: Users,
  },
  {
    slug: "digital-archive-management",
    title: "Digital Archive Management",
    summary: "Searchable, secure digital records for institutions.",
    description: "Detail content pending — Phase 2.",
    features: [],
    icon: Archive,
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
  },
  {
    slug: "visitor-management",
    title: "Visitor Management",
    summary: "Front-desk check-in and visitor tracking for offices and campuses.",
    description: "Detail content pending — Phase 2.",
    features: [],
    icon: UserCheck,
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
  },
  {
    slug: "shcais",
    title: "SHCAIS",
    summary: "Detail content pending — please confirm the full name and scope for this product.",
    description: "Detail content pending — Phase 2.",
    features: [],
    icon: Database,
  },
];
