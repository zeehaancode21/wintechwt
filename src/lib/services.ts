import {
  Cctv,
  Laptop,
  Building2,
  Server,
  Printer,
  Fingerprint,
  Receipt,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "cctv-security",
    title: "CCTV & Security Systems",
    short: "End-to-end surveillance — cameras, DVR/NVR, remote viewing and AMC.",
    icon: Cctv,
    items: [
      "Dome, bullet, PTZ & WiFi camera sales & installation",
      "DVR / NVR setup & configuration",
      "Remote mobile viewing setup",
      "CCTV repair, maintenance & AMC",
      "Video door phones & intercom systems",
    ],
  },
  {
    slug: "desktop-laptop",
    title: "Desktop & Laptop Sales / Service",
    short: "Branded computers, upgrades, OS installs and chip-level repair.",
    icon: Laptop,
    items: [
      "New & branded desktop / laptop sales",
      "Hardware upgrades — RAM, SSD, HDD, GPU",
      "OS installation, formatting & virus removal",
      "Chip-level and hardware repair",
      "Office AMC contracts",
    ],
  },
  {
    slug: "office-setup",
    title: "Office Setup Solutions",
    short: "Complete IT infrastructure for new and expanding offices.",
    icon: Building2,
    items: [
      "Full office IT infrastructure setup",
      "Networking & cabling — LAN, WiFi",
      "Workstation setup",
      "IT consultancy for new offices",
      "Structured cabling & rack setup",
    ],
  },
  {
    slug: "server-networking",
    title: "Server Setup & Networking",
    short: "Windows / Linux servers, firewalls, cloud and on-premise.",
    icon: Server,
    items: [
      "Windows Server / Linux installation & config",
      "Data backup & recovery solutions",
      "Network security & firewall setup",
      "Cloud & on-premise server solutions",
      "Server AMC & maintenance",
    ],
  },
  {
    slug: "printers-scanners",
    title: "Printers & Scanners",
    short: "Inkjet, laser and multifunction — sales, service and rentals.",
    icon: Printer,
    items: [
      "Inkjet, laser & multifunction sales",
      "Printer repair & servicing",
      "Cartridge refilling & toner sales",
      "Printer AMC / rental services",
      "Network printer setup",
    ],
  },
  {
    slug: "biometric-systems",
    title: "Biometric Systems",
    short: "Fingerprint & face recognition attendance and access control.",
    icon: Fingerprint,
    items: [
      "Biometric attendance machine sales & installation",
      "Fingerprint & face recognition access control",
      "Software integration with payroll / HR",
      "Biometric device repair & AMC",
      "Time & attendance software setup",
    ],
  },
  {
    slug: "billing-software",
    title: "Billing Software",
    short: "GST billing, inventory and custom retail solutions.",
    icon: Receipt,
    items: [
      "GST billing software sales",
      "Retail & wholesale billing software",
      "Inventory management software",
      "Custom billing software installation & training",
      "Software support & updates",
    ],
  },
  {
    slug: "electrical-works",
    title: "Electrical Works",
    short: "Wiring, panel boards, UPS, inverters and safety audits.",
    icon: Zap,
    items: [
      "Office & home electrical wiring",
      "Panel board & MCB installation",
      "UPS & inverter installation",
      "Electrical maintenance & repair",
      "Safety audits & compliance work",
    ],
  },
];
