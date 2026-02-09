export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  track: "salesforce" | "itops";
  categories: string[];
  tags: string[];
  badge?: { label: string; tone: "client" | "personal" | "training" };
  pdfUrl?: string;
  updatedAt?: string;
};

const DEFAULT_UPDATED_AT = process.env.NEXT_PUBLIC_SITE_LASTMOD ?? "2025-02-04";

export const projects: Project[] = [
  {
    slug: "legarant-axg-salesforce-deployment",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Salesforce deployment with Heroku (Legarant‑AXG)",
    excerpt: "Deployment strategy and documentation: environments, release process, API tests, and production rollout with traceability.",
    track: "salesforce",
    categories: ["Salesforce", "DevOps"],
    tags: ["Deployment", "Heroku", "Postman"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/legarant-axg-salesforce-deployment/deployment.pdf",
  },
  {
    slug: "ltp-apex-backend-prototype",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Apex backend prototype for LTP",
    excerpt: "A pragmatic Apex backend prototype: REST endpoints, validation, and an event-driven approach for an early-stage product.",
    track: "salesforce",
    categories: ["Salesforce", "Back-end"],
    tags: ["Apex", "REST", "Platform Events"],
    badge: {"label": "CLIENT CONTEXT", "tone": "client"},
    pdfUrl: "/docs/projects/ltp-apex-backend-prototype/dahoumane-a-cha-im-ne-1-specifications-techniques-052025.pdf",
  },
  {
    slug: "idemconnect-apex-backend",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Apex backend development (iDEM Connect)",
    excerpt: "Trigger, services and batch/scheduler to manage subscriptions and contracts, with documentation and test coverage.",
    track: "salesforce",
    categories: ["Salesforce", "Back-end"],
    tags: ["Apex", "Batch", "Testing"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/idemconnect-apex-backend/p11-cahier-des-charges-fr-p11-cahier-des-charges-fr.pdf",
  },
  {
    slug: "fasha-apex-backend-optimization",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Apex backend optimization (FASHA)",
    excerpt: "Backend refactor and performance optimizations: remove SOQL/DML from loops, improve batch processing, and strengthen reliability.",
    track: "salesforce",
    categories: ["Salesforce", "Performance"],
    tags: ["Apex", "Optimization", "Batch"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/fasha-apex-backend-optimization/p9-note-de-cadrage-p9-note-de-cadrage.pdf",
  },
  {
    slug: "wirebright-visualforce-to-lightning",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Visualforce to Lightning migration (WireBright)",
    excerpt: "Migration plan and execution: convert Visualforce pages and JavaScript buttons to Lightning, with specs and before/after evidence.",
    track: "salesforce",
    categories: ["Salesforce", "Migration"],
    tags: ["Lightning", "Visualforce", "Apex"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/wirebright-visualforce-to-lightning/dahoumane-a-cha-im-ne-specifications-1224.pdf",
  },
  {
    slug: "avenir-telecom-lightning-app",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Lightning app delivery & backlog (Avenir Télécom)",
    excerpt: "Implementation strategy, testing plan, and backlog management to deliver a Lightning app for sales teams, then plan evolutions.",
    track: "salesforce",
    categories: ["Salesforce", "Delivery"],
    tags: ["Scrum", "Kanban", "Testing"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/avenir-telecom-lightning-app/cahier-des-charges-1.pdf",
  },
  {
    slug: "tours-for-life-salesforce-solution",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Salesforce solution design (Tours For Life)",
    excerpt: "Solution blueprint: data model, automation and security, with functional & technical specifications and project presentation.",
    track: "salesforce",
    categories: ["Salesforce", "Solution"],
    tags: ["Data Model", "Automation", "Security"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/tours-for-life-salesforce-solution/specifications.pdf",
  },
  {
    slug: "digit-learning-salesforce-update",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Salesforce application update (Digit Learning)",
    excerpt: "Audit and improvements on an existing app: requirements clarification, fixes, and deployment guide with evidence.",
    track: "salesforce",
    categories: ["Salesforce", "Maintenance"],
    tags: ["Audit", "Enhancements", "Deployment"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/digit-learning-salesforce-update/notes-des-entretiens-docx-notes-des-entretiens.pdf",
  },
  {
    slug: "cicd-pipeline-setup",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "CI/CD pipeline setup",
    excerpt: "Multi-environment deployment pipeline design: branching strategy, validations, and automated deployments.",
    track: "salesforce",
    categories: ["DevOps"],
    tags: ["CI/CD", "GitHub Actions", "Salesforce CLI"],
    badge: {"label": "PERSONAL PROJECT", "tone": "personal"},
  },
  {
    slug: "monitoring-automation-pack",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Monitoring & automation pack",
    excerpt: "IT Ops toolkit: alerting, dashboards, and automation scripts to reduce toil and improve reliability.",
    track: "itops",
    categories: ["IT Ops", "Automation"],
    tags: ["Monitoring", "Runbooks", "Scripting"],
    badge: {"label": "PERSONAL PROJECT", "tone": "personal"},
  },
  {
    slug: "tssr-windows-autopilot-provisioning",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Windows Autopilot provisioning (Dell fleet)",
    excerpt: "Automated Windows provisioning at scale: hash collection, Intune/Autopilot workflow, drivers and activation validation.",
    track: "itops",
    categories: ["IT Ops", "Endpoint"],
    tags: ["Autopilot", "Intune", "Windows"],
    badge: {"label": "FIELD PRACTICE", "tone": "client"},
  },{
  slug: "tssr-secure-wipe-and-imaging",
  updatedAt: DEFAULT_UPDATED_AT,
  title: "Secure wipe & imaging (Blancco + Sysprep)",
  excerpt: "Device preparation at scale: certified wipe, reimaging with Sysprep, driver updates and Windows activation checks before delivery.",
  track: "itops",
  categories: ["IT Ops", "Endpoint", "Deployment"],
  tags: ["Blancco", "Sysprep", "Windows"],
  badge: {"label": "FIELD PRACTICE", "tone": "client"},
},

  {
    slug: "tssr-incident-management-rmm",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Incident handling with RMM & security tooling",
    excerpt: "Ticketing workflow, remote access and remediation: triage, investigation and whitelisting on security platform.",
    track: "itops",
    categories: ["IT Ops", "Support"],
    tags: ["RMM", "Ticketing", "Security"],
    badge: {"label": "FIELD PRACTICE", "tone": "client"},
  },
  {
    slug: "tssr-acronis-backup-recovery",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Backup & recovery operations (Acronis)",
    excerpt: "Daily backup supervision and remediation: investigate failures, fix root causes (storage, network, corruption) and validate restores.",
    track: "itops",
    categories: ["IT Ops", "Backup", "Security"],
    tags: ["Acronis", "Backup", "Runbooks"],
    badge: {"label": "FIELD PRACTICE", "tone": "client"},
  },

  {
    slug: "tssr-virtualization-windows-server-2022",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Virtualization lab: Windows Server 2022 + ADDS",
    excerpt: "End‑to‑end lab build: VM networking, server install, static IP, VMware Tools, then AD DS/DNS/DHCP/WDS deployment tasks.",
    track: "itops",
    categories: ["Systems", "Virtualization"],
    tags: ["VMware", "Windows Server", "AD DS"],
    badge: {"label": "TRAINING LAB", "tone": "training"},
  },
  {
    slug: "tssr-pfsense-squid-proxy",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Network security lab: pfSense + Squid proxy",
    excerpt: "Secure internet access: WAN/LAN interfaces, proxy configuration, firewall rules, and client proxy settings with validation.",
    track: "itops",
    categories: ["Network", "Security"],
    tags: ["pfSense", "Squid", "Firewall"],
    badge: {"label": "TRAINING LAB", "tone": "training"},
  },
  {
    slug: "tai-disk-partition-backup-restore",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Disk partitioning & backup/restore (AOMEI + Windows Server Backup)",
    excerpt: "Partitioning workflow and backup strategy on client/server VMs: disk images, scheduling, and restoration readiness checks.",
    track: "itops",
    categories: ["Systems", "Backup"],
    tags: ["AOMEI", "Windows Server", "Backup"],
    badge: {"label": "TRAINING LAB", "tone": "training"},
  },
  {
    slug: "tai-wifi-access-point-setup",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Wi‑Fi access point configuration",
    excerpt: "End‑to‑end configuration of a Wi‑Fi access point: router mode, WAN/LAN addressing, DHCP, SSID and security hardening.",
    track: "itops",
    categories: ["Network"],
    tags: ["Wi‑Fi", "DHCP", "Routing"],
    badge: {"label": "TRAINING LAB", "tone": "training"},
  },
  {
    slug: "tai-roaming-profile-adds",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Roaming profiles with Active Directory",
    excerpt: "Create a shared profiles folder, set share/NTFS permissions, configure AD user profile paths, and validate client roaming.",
    track: "itops",
    categories: ["Systems", "Identity"],
    tags: ["AD DS", "Roaming Profiles", "Windows"],
    badge: {"label": "TRAINING LAB", "tone": "training"},
  },
  {
    slug: "tai-email-configuration-guide",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Outlook email configuration guide",
    excerpt: "Step‑by‑step script to help a user configure a mailbox in Outlook: account settings, automatic configuration and validation.",
    track: "itops",
    categories: ["Support"],
    tags: ["Outlook", "Email", "User Support"],
    badge: {"label": "TRAINING LAB", "tone": "training"},
  },
  {
    slug: "hemebiotech-java-debug",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Debugging a Java application (HemeBiotech)",
    excerpt: "Bug triage and fixes on a Java codebase: identify issues, implement corrections and document the debugging steps.",
    track: "itops",
    categories: ["Software", "Java"],
    tags: ["Debugging", "Refactoring", "Quality"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/hemebiotech-java-debug/guide-etapes-cles.pdf",
  },
  {
    slug: "parkit-java-testing",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Testing a Java feature implementation (Parkit)",
    excerpt: "Test strategy and implementation for a new Java feature: validate behavior, prevent regressions and document results.",
    track: "itops",
    categories: ["Software", "Testing"],
    tags: ["JUnit", "Integration Tests", "CI"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/parkit-java-testing/guide-etapes.pdf",
  },
  {
    slug: "pochlib-ui",
    updatedAt: DEFAULT_UPDATED_AT,
    title: "Front-end UI for Poch'Lib",
    excerpt: "User interface design and integration: HTML/CSS/JS implementation with functional specs and deliverable code.",
    track: "itops",
    categories: ["Web", "Front-end"],
    tags: ["HTML", "CSS", "JavaScript"],
    badge: {"label": "TRAINING PROJECT", "tone": "training"},
    pdfUrl: "/docs/projects/pochlib-ui/specifications.pdf",
  },

  {
  slug: "tssr-hardware-upgrade-clone",
  updatedAt: DEFAULT_UPDATED_AT,
  title: "Laptop upgrade & system cloning",
  excerpt: "Hardware upgrade (SSD/RAM) with a safe backup/clone workflow, then validation and driver/Windows updates.",
  track: "itops",
  categories: ["IT Support", "Hardware"],
  tags: ["Acronis", "SSD", "RAM", "Windows"],
  badge: {"label": "TRAINING PROJECT", "tone": "training"},
},
{
  slug: "tssr-it-procurement-quote",
  updatedAt: DEFAULT_UPDATED_AT,
  title: "IT procurement quote (desktop + peripherals)",
  excerpt: "Requirements-to-bill-of-materials: select compatible components on a pro vendor site and produce a structured quote.",
  track: "itops",
  categories: ["IT Support", "Operations"],
  tags: ["Procurement", "Sizing", "Excel"],
  badge: {"label": "TRAINING PROJECT", "tone": "training"},
},
];


// Pick 3 projects to highlight at the top of the Projects section.
// Customize these slugs to match your strongest case studies.
/**
 * Featured projects
 * ---------------
 * These are highlighted at the top of the Projects section.
 * Keep them aligned with the active "track" (Salesforce vs IT Ops).
 */
export const featuredProjectSlugsByTrack = {
  salesforce: [
    "ltp-apex-backend-prototype",
    "wirebright-visualforce-to-lightning",
    "idemconnect-apex-backend"
  ],
  itops: [
    "tssr-incident-management-rmm",
    "tssr-acronis-backup-recovery",
    "tssr-windows-autopilot-provisioning"
  ]
} as const;
