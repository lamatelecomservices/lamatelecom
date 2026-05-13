export type ResponsibleRecyclingStep = {
  id: string;
  title: string;
  body: string;
};

export const responsibleRecyclingSteps: ResponsibleRecyclingStep[] = [
  {
    id: "1",
    title: "Reuse and Resale",
    body: "We prioritize refurbishment and resale as the highest form of recycling, mitigating e-waste and generating value for your business.",
  },
  {
    id: "2",
    title: "Certified Recycling",
    body: "When reuse is not an option, we leverage long-standing partnerships with R2 v3 and e-Stewards certified facilities, adhering to the highest environmental standards (ISO 14001:2015).",
  },
  {
    id: "3",
    title: "Transparency & Reporting",
    body: "Receive a Certificate of Destruction for all data-containing devices, alongside clear pricing and timely payments back to your budget.",
  },
  {
    id: "4",
    title: "Asset Remarketing",
    body: "Our network resells servers and drives through secondary markets, providing monthly settlement reports for full transparency into proceeds.",
  },
];
