export const CAREERS_HR_EMAIL = "hr@lamalogistics.com";

export const CAREERS_LTS_PILLARS = [
  {
    id: "precision",
    illustrationSrc: "/careers/CORE/1.svg",
    title: "Precision with Purpose",
    body: "Every audit, tag, and handover follows a disciplined playbook—so your teams get clarity, not surprises. We measure twice, document once, and deliver outcomes you can stand behind.",
  },
  {
    id: "integrity",
    illustrationSrc: "/careers/CORE/2.svg",
    title: "Integrity in Every Handover",
    body: "Trust is built through transparent chain-of-custody, honest reporting, and accountability at every touchpoint. We protect your reputation as carefully as your assets.",
  },
  {
    id: "sustainability",
    illustrationSrc: "/careers/CORE/3.svg",
    title: "Sustainability at Scale",
    body: "Retiring hardware should advance your ESG goals, not undermine them. We prioritize recovery, responsible recycling, and circular pathways that turn end-of-life into opportunity.",
  },
] as const;

/** Public URL base — folder name includes spaces (`public/careers/life in field/`). */
export const CAREERS_LIFE_FIELD_IMAGE_BASE =
  "/careers/life%20in%20field" as const;

export const CAREERS_FIELD_ROWS = [
  {
    id: "inventory",
    imageSrc: `${CAREERS_LIFE_FIELD_IMAGE_BASE}/1.jpg`,
    titleMuted: "Inventory & Audit Specialists",
    titleLead:
      "Our ‘eyes’ on the ground, ensuring every asset is tracked from start to finish.",
  },
  {
    id: "decommissioning",
    imageSrc: `${CAREERS_LIFE_FIELD_IMAGE_BASE}/2.jpg`,
    titleMuted: "Decommissioning Technicians",
    titleLead:
      "Our technical ‘engine,’ handling the physical removal and data sanitization of critical infrastructure.",
  },
  {
    id: "logistics-leads",
    imageSrc: `${CAREERS_LIFE_FIELD_IMAGE_BASE}/3.jpg`,
    titleMuted: "Logistics & Site Leads",
    titleLead:
      "Our ‘navigators,’ managing the secure chain-of-custody and keeping our high standards on track.",
  },
] as const;

export type CareersJob = {
  id: string;
  title: string;
  subtitle: string;
};

export const CAREERS_BRAND_TILES = [
  {
    name: "Verizon",
    src: "/brands/verizon.svg",
    bg: "bg-(--color-brand-tile-1)",
  },
  {
    name: "AT&T",
    src: "/brands/at&t.svg",
    bg: "bg-(--color-brand-tile-2)",
  },
  {
    name: "Google Cloud",
    src: "/brands/google-cloud.svg",
    bg: "bg-(--color-brand-tile-3)",
  },
  {
    name: "AWS",
    src: "/brands/aws.svg",
    bg: "bg-(--color-brand-tile-4)",
  },
  {
    name: "Lumen",
    src: "/brands/lumen.svg",
    bg: "bg-(--color-brand-tile-5)",
  },
] as const;

export const CAREERS_JOBS: CareersJob[] = [
  /** First opening — full JD: `careers-job-details.ts` → `project-manager` */
  {
    id: "project-manager",
    title: "Project Manager",
    subtitle: "Project Lead / Operations Manager",
  },
  {
    id: "lead-deinstaller",
    title: "Lead Deinstaller",
    subtitle: "Infrastructure Decommissioning Lead",
  },
  {
    id: "data-center-decommissioning-technician",
    title: "Data Center Decommissioning Technician",
    subtitle: "Field Technician / Infrastructure Removal Specialist",
  },
];
