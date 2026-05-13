export type AboutOperationalWorkflowStep = {
  id: string;
  index: string;
  title: string;
  paragraphs: readonly [string, string];
};

export const ABOUT_OPERATIONAL_WORKFLOW_STEPS: AboutOperationalWorkflowStep[] =
  [
    {
      id: "planning",
      index: "01",
      title: "Planning & Strategic Analysis",
      paragraphs: [
        "We tailor a service plan to support your data center strategy, ensuring seamless technology integration, strong project management, and clear reporting.",
        "With a dedicated account manager to ensure seamless case management, logistics scheduling, inventory tracking, reporting, dashboards, and automated workflows notifications.",
      ],
    },
    {
      id: "chain-of-custody",
      index: "02",
      title: "Complete Chain-of-Custody",
      paragraphs: [
        "From intake and tagging through secure storage, we provide end-to-end asset visibility and availability. We safeguard your IT investments with precise tracking, real-time insight into asset status and location, and deployment readiness at scale.",
        "Supported by serialized identification, RFID or barcode technology, and routine audits, we ensure accuracy, compliance, and risk mitigation across your asset estate.",
      ],
    },
    {
      id: "logistics",
      index: "03",
      title: "End to End Logistics Services",
      paragraphs: [
        "We provide secure, end-to-end logistics to support efficient and compliant data center decommissioning. Certified technicians coordinate on-site asset removal and packing with minimal operational disruption.",
        "With secure transportation, we ensure safe delivery to processing facilities, integrated with reporting and audit-ready documentation for visibility, and risk mitigation.",
      ],
    },
    {
      id: "data-destruction",
      index: "04",
      title: "NAID Certified Data Destruction",
      paragraphs: [
        "For your Assets that require secure destruction, we partner exclusively with NAID AAA-certified partners for hard drive shredding, ensuring the highest levels of security, compliance, and trust.",
        "NAID is the standards-setting body for the information destruction industry, and NAID AAA Certification validates providers through rigorous scheduled and unannounced audits.",
      ],
    },
    {
      id: "value-recovery",
      index: "05",
      title: "Asset Value Recovery",
      paragraphs: [
        "Our remarketing network resells servers and drives through the secondary market to maximize value recovery for your organization. Monthly settlement reports provide full transparency into performance and proceeds throughout the remarketing process.",
        "We unlock value from network assets by reselling rigorously refurbished, high-quality equipment—helping organizations reduce costs while advancing sustainable asset management. Each resale supports a broader circular economy, extending the lifecycle of critical infrastructure.",
      ],
    },
  ];
