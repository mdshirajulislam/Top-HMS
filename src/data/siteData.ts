export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "zap" | "cloud" | "shield" | "chart" | "globe" | "headset";
}

export interface ModuleItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  secondaryMetricLabel: string;
  secondaryMetricValue: string;
  previewRows: { label: string; meta: string; status: string; tone: "emerald" | "blue" | "amber" }[];
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceBDT: string;
  priceUSD: string;
  period: string;
  featured?: boolean;
  ctaLabel: string;
  features: { label: string; included: boolean }[];
}

export interface TestimonialItem {
  role: string;
  departments: string;
  quote: string;
  impact: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InsightItem {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const SITE_INFO = {
  brandName: "Top HMS",
  tagline: "Modern Healthcare, Effortless Control",
  address: "ICT Tower, E-14/X, Agargaon, Sher-e-Bangla Nagar, Dhaka-1207, Bangladesh",
  phone: "+880 1711-633602",
  phoneHref: "tel:+8801711633602",
  whatsappHref: "https://wa.me/8801711633602",
  email: "support@tophms.com",
  emailHref: "mailto:support@tophms.com",
  copyright: `© ${new Date().getFullYear()} Top HMS. All rights reserved.`,
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "offline-fast",
    title: "Fast & Offline-Resilient",
    description:
      "Sub-second screens with minimal training required — OPD, pharmacy, and billing keep moving smoothly even during internet drops.",
    icon: "zap",
  },
  {
    id: "cloud-multi",
    title: "Cloud Sync & Multi-Branch",
    description:
      "Access real-time hospital data from anywhere, anytime, and manage single clinics or multi-branch hospital networks effortlessly.",
    icon: "cloud",
  },
  {
    id: "zero-leakage",
    title: "Zero-Leakage & Secure Data",
    description:
      "End-to-end SSL encryption, automated daily backups, and immutable double-entry audit trails that protect every single invoice.",
    icon: "shield",
  },
  {
    id: "realtime-reports",
    title: "Real-Time Financial Reports",
    description:
      "Track bed occupancy, OPD queues, pharmacy stock, and daily cash collections in one live executive dashboard.",
    icon: "chart",
  },
  {
    id: "bangla-voip",
    title: "Bangla, SMS & VoIP Ready",
    description:
      "Full Bangla interface support paired with automated SMS and VoIP voice appointment reminders to reduce patient no-shows.",
    icon: "globe",
  },
  {
    id: "support-247",
    title: "24/7 Dedicated Support",
    description:
      "Free staff onboarding, seamless data migration, and round-the-clock technical support whenever your team needs help.",
    icon: "headset",
  },
];

export const MODULES: ModuleItem[] = [
  {
    id: "opd",
    tabLabel: "OPD & Token",
    badge: "Live Token Queue",
    title: "OPD & Smart Token Management",
    description:
      "Streamline outpatient flow with digital registration, real-time consultant queue displays, and complete electronic medical records.",
    highlights: [
      "Online & walk-in appointment scheduling",
      "Live TV token & queue display (< 8 min avg wait)",
      "Doctor chamber schedule & slot management",
      "Complete EMR & patient visit history",
      "Digital prescription & VoIP/SMS reminders",
    ],
    metricLabel: "Avg. Wait Time",
    metricValue: "6.4 min",
    secondaryMetricLabel: "Tokens Today",
    secondaryMetricValue: "148",
    previewRows: [
      { label: "Token #104 — Nusrat Jahan", meta: "Dr. M. Rahman · Cardiology", status: "In Chamber", tone: "emerald" },
      { label: "Token #105 — Tanvir Ahmed", meta: "Dr. S. Karim · Medicine", status: "Next Up", tone: "blue" },
      { label: "Token #106 — Farhana Akter", meta: "Dr. N. Islam · Pediatrics", status: "Waiting", tone: "amber" },
    ],
  },
  {
    id: "ipd",
    tabLabel: "IPD & Beds",
    badge: "Real-Time Bed Map",
    title: "IPD & Visual Bed Occupancy Grid",
    description:
      "Manage inpatient care from admission to discharge with live ward, cabin, and ICU bed maps plus automated daily bed billing.",
    highlights: [
      "Real-time visual ward, cabin & ICU bed grid",
      "One-click admission, transfer & bed allocation",
      "Automated daily bed & nursing charge capture",
      "Nursing notes, vitals & medication charts",
      "Structured digital discharge summaries",
    ],
    metricLabel: "Active Beds",
    metricValue: "342+",
    secondaryMetricLabel: "Occupancy Rate",
    secondaryMetricValue: "88%",
    previewRows: [
      { label: "Cabin 204 — Deluxe AC", meta: "Admitted 2 days · Ward 3", status: "Occupied", tone: "blue" },
      { label: "ICU Bed 06 — Critical Care", meta: "Vitals monitored · Dr. Hasan", status: "Stable", tone: "emerald" },
      { label: "Cabin 310 — Standard", meta: "Housekeeping complete", status: "Available", tone: "emerald" },
    ],
  },
  {
    id: "pharmacy",
    tabLabel: "Pharmacy POS",
    badge: "Auto Stock Alerts",
    title: "High-Speed Pharmacy & Inventory POS",
    description:
      "Dispense prescriptions in seconds with barcode scanning, FIFO batch expiry protection, and instant stock sync across counters.",
    highlights: [
      "Sub-second barcode POS & offline billing",
      "Prescription-linked auto dispensing",
      "FIFO batch tracking & low-stock expiry alerts",
      "Generic & therapeutic substitute search",
      "Supplier purchase orders & return tracking",
    ],
    metricLabel: "Checkout Speed",
    metricValue: "< 2 sec",
    secondaryMetricLabel: "Expiry Protected",
    secondaryMetricValue: "100%",
    previewRows: [
      { label: "Napa Extend 665mg (Box)", meta: "Batch #NX-402 · Exp Dec 2027", status: "In Stock", tone: "emerald" },
      { label: "Sergel 20mg Capsule", meta: "Stock: 42 strips remaining", status: "Reorder Soon", tone: "amber" },
      { label: "Rx #4419 — OPD Counter 1", meta: "4 items · ৳ 680 paid", status: "Dispensed", tone: "blue" },
    ],
  },
  {
    id: "lab",
    tabLabel: "Diagnostic Lab",
    badge: "Instant Digital Reports",
    title: "End-to-End Diagnostic & Lab Workflow",
    description:
      "Automate pathology and imaging from barcode sample collection to direct analyzer parsing and instant SMS report delivery.",
    highlights: [
      "Pre-built pathology & radiology templates",
      "Direct analyzer integration (HL7 / FHIR / TCP-IP)",
      "Thermal barcode tube labeling & sample tracking",
      "Normal range flags & remote pathologist sign-off",
      "Instant SMS, portal & print report delivery",
    ],
    metricLabel: "Analyzer Sync",
    metricValue: "HL7 / FHIR",
    secondaryMetricLabel: "Reports Today",
    secondaryMetricValue: "214",
    previewRows: [
      { label: "CBC & ESR — Patient #2291", meta: "Hematology Analyzer · Verified", status: "Report Ready", tone: "emerald" },
      { label: "Lipid Profile — Patient #2304", meta: "Sample #L-882 · Processing", status: "In Analysis", tone: "blue" },
      { label: "HbA1c — Patient #2310", meta: "Barcode printed · Desk 2", status: "Collected", tone: "amber" },
    ],
  },
  {
    id: "billing",
    tabLabel: "Billing & Accounts",
    badge: "One-Click Invoicing",
    title: "Unified Billing & Double-Entry Accounts",
    description:
      "Capture every OPD, IPD, lab, and pharmacy charge into one transparent invoice with zero revenue leakage and instant ledger sync.",
    highlights: [
      "Consolidated OPD, IPD, lab & pharmacy invoicing",
      "Cash, card, bKash/Nagad & corporate billing",
      "Advance deposit, due & refund tracking",
      "Double-entry general ledger & audit trail",
      "Automated daily cash & monthly P&L reports",
    ],
    metricLabel: "Revenue Accuracy",
    metricValue: "99.99%",
    secondaryMetricLabel: "Daily Ledger",
    secondaryMetricValue: "Auto-Synced",
    previewRows: [
      { label: "INV-8942 — Discharge Bill", meta: "IPD + Lab + Pharmacy · ৳ 28,450", status: "Paid", tone: "emerald" },
      { label: "INV-8943 — OPD Consultation", meta: "bKash Verified · ৳ 1,200", status: "Cleared", tone: "emerald" },
      { label: "INV-8944 — Corporate Claim", meta: "Advance ৳ 10,000 received", status: "Partial Due", tone: "amber" },
    ],
  },
  {
    id: "staff",
    tabLabel: "OT, HR & Payroll",
    badge: "Smart Shift Planner",
    title: "OT Scheduling, Doctor & Staff Management",
    description:
      "Coordinate operation theatres, consultant commissions, nursing shifts, attendance, and payroll from a single HR hub.",
    highlights: [
      "Operation Theatre (OT) booking & checklist",
      "Doctor & staff profiles with credential tracking",
      "Shift roster & duty schedule planner",
      "Biometric attendance & leave management",
      "Automated payroll & doctor commission payouts",
    ],
    metricLabel: "Active Staff",
    metricValue: "180+",
    secondaryMetricLabel: "Shift Coverage",
    secondaryMetricValue: "100%",
    previewRows: [
      { label: "OT Suite 1 — Laparoscopy", meta: "Dr. Mahmud · 11:00 AM Slot", status: "Scheduled", tone: "blue" },
      { label: "Nursing Shift B — Ward 2", meta: "14 nurses checked in on time", status: "Active", tone: "emerald" },
      { label: "Consultant Payouts — Nov", meta: "28 doctors reconciled", status: "Ready", tone: "emerald" },
    ],
  },
];

export const STATS = [
  { value: "50+", label: "Hospitals & Clinics", icon: "building" as const },
  { value: "10M+", label: "Transactions Tracked", icon: "activity" as const },
  { value: "99.99%", label: "Uptime Guaranteed", icon: "zap" as const },
  { value: "24/7", label: "Dedicated Support", icon: "headset" as const },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for clinics & diagnostic centers",
    priceBDT: "৳ 2,500",
    priceUSD: "$50",
    period: "/month",
    ctaLabel: "Start Free Trial",
    features: [
      { label: "EMR & Patient Registration", included: true },
      { label: "OPD & Smart Token Queue", included: true },
      { label: "Billing & Invoicing", included: true },
      { label: "Pharmacy & Inventory Sync", included: true },
      { label: "Up to 5 Staff Users", included: true },
      { label: "IPD & Visual Bed Grid", included: false },
      { label: "Diagnostic Lab & Analyzer Sync", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing & multi-department hospitals",
    priceBDT: "৳ 7,500",
    priceUSD: "$149",
    period: "/month",
    featured: true,
    ctaLabel: "Start Free Trial",
    features: [
      { label: "All 6 Core Modules Included", included: true },
      { label: "Up to 25 Staff Users", included: true },
      { label: "Bangla Language Support", included: true },
      { label: "SMS & VoIP Call Reminders", included: true },
      { label: "Real-Time Financial Analytics", included: true },
      { label: "Priority 24/7 Support", included: true },
      { label: "Free Onboarding & Data Migration", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large & multi-branch hospital chains",
    priceBDT: "Contact Us",
    priceUSD: "Contact Us",
    period: "",
    ctaLabel: "Contact Sales",
    features: [
      { label: "Unlimited Users & Branches", included: true },
      { label: "Operation Theatre (OT) & Payroll", included: true },
      { label: "HL7/FHIR & Lab Analyzer Integration", included: true },
      { label: "Hybrid Offline / On-Premise Option", included: true },
      { label: "Custom Workflows & Reports", included: true },
      { label: "Dedicated Account Manager", included: true },
      { label: "Custom SLA & 24/7 Engineering", included: true },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    role: "Doctors & Medical Directors",
    departments: "OPD · IPD · Diagnostic Lab",
    quote:
      "OPD queues, electronic medical records, and verified lab reports live on one clean screen — so consultations and ward rounds move faster without paper delays.",
    impact: "40% faster patient consultations",
  },
  {
    role: "Hospital Administrators & Finance",
    departments: "Billing · Pharmacy · General Ledger",
    quote:
      "Billing, pharmacy POS, and double-entry accounts stay automatically synchronized, so discharge invoices, dues, and daily cash reports close without manual tallying.",
    impact: "Zero revenue leakage across departments",
  },
  {
    role: "Front Desk & Nursing Teams",
    departments: "Registration · Admission · Bed Grid",
    quote:
      "Patient registration, cabin allocation, and VoIP reminders take just a few clicks. New staff learn the interface in a single afternoon.",
    impact: "Under 60-second patient check-in",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Is Top HMS cloud-based or can it work offline?",
    answer:
      "Top HMS runs in the cloud so you can access your hospital from anywhere, while our hybrid offline-resilient architecture keeps critical OPD, pharmacy POS, and billing counters operating seamlessly even during local internet interruptions. Enterprise plans also support full on-premise deployment.",
  },
  {
    question: "How long is the free trial and what is included?",
    answer:
      "You get a full 14-day free trial with access to all core modules and no credit card required. If you choose to continue, our onboarding engineers migrate your existing data and transition your account with zero downtime.",
  },
  {
    question: "How secure is our hospital and patient data?",
    answer:
      "All data is protected with end-to-end SSL/TLS encryption, role-based access controls, immutable billing audit logs, and automated daily backups with a 99.99% uptime guarantee.",
  },
  {
    question: "Do you provide staff training and onboarding?",
    answer:
      "Yes. Every plan includes free live onboarding sessions for your doctors, nurses, lab technicians, and billing team, plus documentation in both English and Bangla and a dedicated support channel.",
  },
  {
    question: "Can Top HMS integrate with lab analyzers or custom workflows?",
    answer:
      "Yes. Top HMS supports HL7/FHIR standards and direct TCP/IP integration for hematology and biochemistry analyzers, as well as custom modules, SMS/VoIP gateways, and multi-branch reporting on Enterprise plans.",
  },
];

export const INSIGHTS: InsightItem[] = [
  {
    category: "Hospital Operations",
    title: "How Smart OPD Token Queues Cut Patient Wait Times Below 8 Minutes",
    excerpt:
      "Learn how digital registration, live chamber displays, and automated VoIP reminders eliminate front-desk bottlenecks in busy outpatient departments.",
    date: "November 2026",
    readTime: "4 min read",
  },
  {
    category: "Revenue Protection",
    title: "Closing the Gap: Preventing Billing Leakage Between Lab, Pharmacy & IPD",
    excerpt:
      "Why disconnected spreadsheets cost hospitals up to 12% in unbilled consumables — and how unified discharge invoicing solves it automatically.",
    date: "October 2026",
    readTime: "5 min read",
  },
];
