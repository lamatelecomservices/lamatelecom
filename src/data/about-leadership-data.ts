export type LeadershipMember = {
  id: string;
  indexLabel: string;
  name: string;
  title: string;
  /** Public path under `/public/about/leadership/` (e.g. `1.jpg`). */
  imageSrc: string;
  /** Use blank lines between paragraphs (`\\n\\n`). */
  bio: string;
};

export const ABOUT_LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "sonam-gyaltsen",
    indexLabel: "01",
    name: "Sonam Gyaltsen",
    title: "Founder & Chief Executive Officer (CEO)",
    imageSrc: "/about/leadership/1.jpg",
    bio: "Sonam Gyaltsen is a seasoned business leader with over 20 + years of experience in logistics, supply chain, and operational services across the IT and telecom industries. He has guided large-scale decommissioning, asset logistics, and technology movement projects, helping organizations achieve secure, efficient outcomes.\n\nAt Lama Telecom Services, Sonam drives business strategy, client engagement, and operational excellence—leveraging deep industry experience to support growth, execution quality, and long-term client success.",
  },
  {
    id: "timothy-swords",
    indexLabel: "02",
    name: "Timothy Swords",
    title: "Independent Consultant",
    imageSrc: "/about/leadership/2.jpg",
    bio: "A Harvard MBA and certified executive coach, Timothy helps leaders cultivate the emotional resilience and clarity needed to lead with purpose. Drawing on his senior leadership background at Fidelity and PwC, he integrates mindfulness with strategic development to help executives align their actions with their core values. With deep experience on multiple nonprofit boards, Timothy empowers the C-Suite to navigate high-stakes challenges with confidence and authentic impact.",
  },
  {
    id: "tenzin-tekan-lama",
    indexLabel: "03",
    name: "Tenzin Tekan Lama",
    title: "Chief Financial Officer (CFO)",
    imageSrc: "/about/leadership/3.jpg",
    bio: "Tenzin is a seasoned finance executive with global experience across investment banking, management consulting, and impact-driven enterprises. As Chief Financial Officer, he oversees financial strategy, growth planning, and operational performance.\n\nPrior to Lama Telecom, Tenzin held roles at Bain & Company, IFC (World Bank Group), and Goldman Sachs. He holds an MBA from Harvard Business School and a Bachelor's degree in Finance and International Business from Georgetown University.",
  },
  {
    id: "tenzin-gonpo",
    indexLabel: "04",
    name: "Tenzin Gonpo",
    title: "Chief Technology Officer (CTO) & Director of Decom Operations",
    imageSrc: "/about/leadership/7.jpg",
    bio: "Tenzin Gonpo is a technology and telecom leader with over 15 years of experience in network infrastructure, ISP operations, and data center decommissioning. He has led large-scale broadband, enterprise network, and infrastructure modernization projects across multiple regions.\n\nAt Lama Telecom Services, Tenzin oversees technical strategy, decommissioning operations, and enterprise network solutions—driving secure execution, operational efficiency, and long-term business growth.",
  },
  {
    id: "yanchen-dolker",
    indexLabel: "05",
    name: "Yanchen Dolker",
    title: "Chief Operating Officer (COO)",
    imageSrc: "/about/leadership/4.jpg",
    bio: "Yanchen Dolker is a strategic business operations leader with over 14 years of experience building and scaling enterprise-ready systems across technology, logistics, and data center environments.\n\nAt Lama Telecom Services, she supports operational strategy, process optimization, and growth initiatives—helping strengthen execution, compliance, and scalable business performance.",
  },
  {
    id: "eric-savoia",
    indexLabel: "06",
    name: "Eric Savoia",
    title: "Head of Asset Recovery Operations (ARO)",
    imageSrc: "/about/leadership/5.jpg",
    bio: "Eric leads our restoration and asset recovery teams with a blend of strategic rigor and creative problem-solving. From initial site audits to final turnover, he manages complex shutdowns and environmental compliance with a sharp focus on precision and risk mitigation. By prioritizing clear documentation and stakeholder communication, Eric helps operators maximize capital return and accelerate lease exits—delivering structured, high-stakes outcomes where accountability matters most.",
  },
  {
    id: "forest-roberts",
    indexLabel: "07",
    name: "Forest Roberts",
    title: "Deployment Head",
    imageSrc: "/about/leadership/6.jpg",
    bio: "Forest Roberts leads deployment programs from planning through field execution, coordinating site logistics, resource allocation, and stakeholder alignment for complex infrastructure transitions.\n\nAt Lama Telecom Services, he ensures rollouts stay on schedule and on spec—bridging operations, engineering, and client teams so large-scale decommissioning and recovery projects land safely and predictably.",
  },

  {
    id: "sonam-wangmo",
    indexLabel: "08",
    name: "Sonam Wangmo",
    title: "Executive Account Management & Client Relations",
    imageSrc: "/about/leadership/8.jpg",
    bio: "Sonam Wangmo brings over a decade of experience in sales, account management, and client operations. At Lama Telecom Services, she supports customer engagement, project coordination, and relationship management to ensure smooth execution and client satisfaction.\n\nHer background in account management, sales and operations contributes to strengthening client partnerships and supporting business growth.",
  },
];
