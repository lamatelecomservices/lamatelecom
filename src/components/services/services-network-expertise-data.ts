export type NetworkExpertiseItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  /** Large decorative numeral behind the row (e.g. section index). */
  watermark?: string;
};

export const networkExpertiseItems: NetworkExpertiseItem[] = [
  {
    id: "01",
    title: "Data Center Decommissioning",
    watermark: "02",
    description:
      "We manage full-scope decommissioning, including network, computer, and storage infrastructure. Assets are reviewed for redeployment, resale, or recycling to support cost recovery.",
    image: "/services/list/1.png",
  },
  {
    id: "02",
    title: "PSTN & Central Office",
    description:
      "We help operators accelerate legacy infrastructure retirement safely, reducing operating costs and enabling a smooth transition to modern IP and fiber networks.",
    image: "/services/list/2.png",
  },
  {
    id: "03",
    title: "IP, Core, & Optical Networks",
    description:
      "Structured deinstallation of routers, aggregation platforms, and DWDM systems. We work closely with network operations to ensure safe execution without service interruption.",
    image: "/services/list/3.png",
  },
  {
    id: "04",
    title: "CPE & Edge Equipment",
    description:
      "Enabling large-scale equipment recovery and deinstallation programs to optimize edge infrastructure and recover asset value.",
    image: "/services/list/4.png",
  },
];
