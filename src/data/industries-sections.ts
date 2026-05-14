import type { SectionImageTextSplitProps } from "@/components/section-image-text-split";

export type IndustrySectionConfig = SectionImageTextSplitProps & { id: string };

export const industriesSections: IndustrySectionConfig[] = [
  {
    id: "telecommunications-carriers",
    title: "Telecommunications & Carriers",
    layout: "title-wide",
    imagePosition: "left",
    tone: "muted",
    imageSrc: "/industries/list/1.svg",
    imageAlt: "Telecommunications towers with antennas against a clear sky",
    imageRounded: false,
    paragraphs: [
      "Telecom operators manage large and complex network environments that require precise coordination during upgrades, decommissioning, and infrastructure transitions. Lama Telecom Services supports telecom providers with structured removal of legacy network equipment, asset recovery, and responsible recycling.",
      "Our teams are experienced in handling routers, switching systems, optical transport equipment, and supporting infrastructure while maintaining operational discipline and security throughout the process.",
    ],
    listItems: [
      "Network infrastructure decommissioning",
      "Optical and IP equipment removal",
      "Network upgrade support and asset recovery",
      "Responsible recycling and material recovery",
    ],
  },
  {
    id: "enterprise-networks",
    title: "Enterprise Networks",
    layout: "split",
    imagePosition: "right",
    tone: "white",
    imageSrc: "/industries/list/2.svg",
    imageAlt: "Abstract 3D visualization of interconnected network nodes",
    imageRounded: false,
    paragraphs: [
      "Enterprises rely on stable and secure network infrastructure to support business operations, communication, and digital services. Lama Telecom Services assists organizations with network transitions, upgrades, and infrastructure refresh projects. We support enterprise IT teams in safely removing outdated systems, deploying new network equipment, and ensuring proper documentation and asset management during infrastructure changes.",
    ],
    listItems: [
      "Network de-installation and refresh projects",
      "Enterprise network deployment and migration",
      "Asset relocation between office locations",
      "Infrastructure documentation and validation",
    ],
  },
  {
    id: "data-centers",
    title: "Data Centers",
    layout: "split",
    imagePosition: "left",
    tone: "muted",
    imageSrc: "/industries/list/3.svg",
    imageAlt: "Data center aisle with server and network equipment",
    imageRounded: false,
    paragraphs: [
      "Data centers require careful planning and disciplined execution when equipment is upgraded, relocated, or retired. Lama Telecom Services delivers structured data center decommissioning services designed to ensure safety, compliance, and operational continuity.",
      "Our teams manage the removal of servers, storage systems, racks, cabling, and network infrastructure while maintaining clear asset tracking and responsible recycling practices.",
    ],
    listItems: [
      "Data center decommissioning",
      "Server and rack removal",
      "Structured cabling removal",
      "IT asset recovery and recycling",
    ],
  },
  {
    id: "government-organizations",
    title: "Government Organizations",
    layout: "split",
    imagePosition: "right",
    tone: "white",
    imageSrc: "/industries/list/4.svg",
    imageAlt: "Technician working with infrastructure equipment",
    imageRounded: false,
    paragraphs: [
      "Public sector institutions require secure, accountable management of critical infrastructure. Lama Telecom Services supports government organizations with structured decommissioning, asset recovery, and recycling aligned to operational and compliance expectations.",
      "Our teams follow disciplined processes that support transparency, documentation, and responsible handling of equipment through every phase of removal and transition.",
    ],
    listItems: [
      "Secure infrastructure decommissioning",
      "Asset inventory and tracking",
      "Responsible electronics recycling",
      "Infrastructure relocation and upgrades",
    ],
  },
];
