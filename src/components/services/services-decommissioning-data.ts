export type ServiceItem = {
  id: string;
  title: string;
  bullets: string[];
};

export const services: ServiceItem[] = [
  {
    id: "01",
    title: "Planning & strategic analysis",
    bullets: [
      "We tailor a service plan to support your data center strategy, ensuring seamless technology integration, strong project management, and clear reporting.",
      "With a dedicated account manager to ensure seamless case management, logistics scheduling, inventory tracking, reporting, dashboards, and automated workflows notifications.",
    ],
  },
  {
    id: "02",
    title: "Complete chain-of-custody",
    bullets: [
      "From intake and tagging through secure storage, we provide end-to-end asset visibility and availability. We safeguard your IT investments with precise tracking, real-time insight into asset status and location, and deployment readiness at scale.",
      "   Supported by serialized identification, RFID or barcode technology, and routine audits, we ensure accuracy, compliance, and risk mitigation across your asset estate.",
    ],
  },
  {
    id: "03",
    title: "End to End logistics services",
    bullets: [
      "We provide secure, end-to-end logistics to support efficient and compliant data center decommissioning. Certified technicians coordinate on-site asset removal and packing with minimal operational disruption.",
      "With secure transportation, we ensure safe delivery to processing facilities, integrated with reporting and audit-ready documentation for visibility, and risk mitigation.",
    ],
  },
  {
    id: "04",
    title: "NAAID certified data destruction",
    bullets: [
      "For your Assets that require secure destruction, we partner exclusively with NAID AAA–certified partners for hard drive shredding, ensuring the highest levels of security, compliance, and trust.",
      "NAID is the standards-setting body for the information destruction industry, and NAID AAA Certification validates providers through rigorous scheduled and unannounced audits.",
    ],
  },
  {
    id: "05",
    title: "Asset value recovery",
    bullets: [
      "Our remarketing network resells servers and drives through the secondary market to maximize value recovery for your organization. Monthly settlement reports provide full transparency into performance and proceeds throughout the remarketing process.",
      "We unlock value from network assets by reselling rigorously refurbished, high-quality equipment—helping organizations reduce costs while advancing sustainable asset management. Each resale supports a broader circular economy, extending the lifecycle of critical infrastructure",
    ],
  },
];
