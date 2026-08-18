import {
  Globe,
  Code2,
  Smartphone,
  Network,
  Server,
  ShieldCheck,
  Users,
  Archive,
  Ticket,
  UserCheck,
  Package,
  DoorOpen,
  Car,
  FolderOpen,
  Lock,
  Database,
  type LucideIcon,
} from "lucide-react";

// Icons are stored as plain string names in the CMS (so admins can pick
// from a list without touching code) and resolved back to components here.
export const iconRegistry: Record<string, LucideIcon> = {
  Globe,
  Code2,
  Smartphone,
  Network,
  Server,
  ShieldCheck,
  Users,
  Archive,
  Ticket,
  UserCheck,
  Package,
  DoorOpen,
  Car,
  FolderOpen,
  Lock,
  Database,
};

export const iconNames = Object.keys(iconRegistry);

export function resolveIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? Database;
}
