export type LeadershipMember = {
  id: string;
  indexLabel: string;
  name: string;
  title: string;
  /** Public path under `/public/about/leadership/` (e.g. `1.jpg`). */
  imageSrc: string;
  bio: string[];
};

export const ABOUT_LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "sonam-gyaltsen",
    indexLabel: "01",
    name: "Sonam Gyaltsen",
    title: "Founder & Chief Executive Officer (CEO)",
    imageSrc: "/about/leadership/1.jpg",
    bio: [
      "Sonam Gyaltsen is a seasoned business leader with over 20 + years of experience in logistics, supply chain, and operational services across the IT and telecom industries. He has guided large-scale decommissioning, asset logistics, and technology movement projects, helping organizations achieve secure, efficient outcomes.",
      "At Lama Telecom Services, Sonam drives business strategy, client engagement, and operational excellence—leveraging deep industry experience to support growth, execution quality, and long-term client success.",
    ],
  },
  {
    id: "timothy-swords",
    indexLabel: "02",
    name: "Timothy Swords",
    title: "Independent Consultant",
    imageSrc: "/about/leadership/2.jpg",
    bio: [
      "As an executive coach and management consultant, Timothy helps C-Suite and senior leaders cultivate self-awareness, emotional resilience, and authenticity—enabling them to lead with clarity, empathy, and purpose in all areas of life. Through a bespoke approach integrating mindfulness meditation and leadership development, he empowers executives to align their leadership actions with their core values. This empowers them to navigate challenges with greater confidence and impact.",
      "Throughout his career, Timothy has played senior roles at Fidelity Investments, PricewaterhouseCoopers, MUFG Union Bank, and CSC Index. Timothy has served the boards of the Alzheimer’s Association of Northern California, the HBS Alumni Association of Boston Community Partners, and the HBS Alumni Association of Northern California Community Partners.",
      "Timothy earned a BS from Boston College and an MBA from Harvard Business School. He received his Graduate Certificate in Executive Coaching from William James University, his Certificate in Professional Mindfulness Teaching from the Mindfulness Training Institute, and his Governance Fellowship certification from the National Association of Corporate Directors.",
    ],
  },
  {
    id: "tenzin-tekan-lama",
    indexLabel: "03",
    name: "Tenzing Tekan",
    title: "Chief Financial Officer (CFO)",
    imageSrc: "/about/leadership/3.jpg",
    bio: [
      "Tenzing is a seasoned finance executive with global experience across investment banking, management consulting, and impact-driven enterprises. As Chief Financial Officer, he oversees financial strategy, growth planning, and operational performance.",
      "Prior to Lama Telecom, Tenzing held roles at Bain & Company, IFC (World Bank Group), and Goldman Sachs. He holds an MBA from Harvard Business School and a Bachelor's degree in Finance and International Business from Georgetown University.",
    ],
  },
  {
    id: "tenzin-gonpo",
    indexLabel: "04",
    name: "Tenzin Gonpo",
    title: "Chief Technology Officer (CTO) & Director of Decom Operations",
    imageSrc: "/about/leadership/7.jpg",
    bio: [
      "Tenzin Gonpo is a technology and telecom leader with over 15 years of experience in network infrastructure, ISP operations, and data center decommissioning. He has led large-scale broadband, enterprise network, and infrastructure modernization projects across multiple regions.",
      "At Lama Telecom Services, Tenzin oversees technical strategy, decommissioning operations, and enterprise network solutions—driving secure execution, operational efficiency, and long-term business growth.",
    ],
  },
  {
    id: "yanchen-dolker",
    indexLabel: "05",
    name: "Yangchen Dolkar",
    title: "Chief Operating Officer (COO)",
    imageSrc: "/about/leadership/4.jpg",
    bio: [
      "Yangchen Dolkar is a seasoned Business Operations leader and Fractional Chief Operating Officer with 15+ years of experience building and scaling enterprise-ready systems across data centers, technology, logistics, AEC, and other service-based industries. At Lama Telecom Services, she supports operational strategy, process optimization, and growth initiatives, helping transform business operations into structured, scalable, and high-performing systems and solving complex operational problems.",
      "She was recognized as Top Ten Women in Engineering Business Leadership by Women Entrepreneurs Magazine (2021). Her academic background includes an Executive Education Program in Entrepreneurship from Stanford Graduate School of Business, an Executive MBA / Post Graduate Diploma in Business Management, a Bachelor’s degree, and studies in Law, Economics, Political Science, and Sociology.",
    ],
  },
  {
    id: "eric-savoia",
    indexLabel: "06",
    name: "Eric Savoia",
    title: "Lead Asset Recovery Operations (ARO Lead)",
    imageSrc: "/about/leadership/5.jpg",
    bio: [
      "Eric leads our restoration and asset recovery teams with a blend of strategic rigor and creative problem-solving. From initial site audits to final turnover, he manages complex shutdowns and environmental compliance with a sharp focus on precision and risk mitigation. By prioritizing clear documentation and stakeholder communication, Eric helps operators maximize capital return and accelerate lease exits—delivering structured, high-stakes outcomes where accountability matters most.",
    ],
  },
  {
    id: "forest-roberts",
    indexLabel: "07",
    name: "Forest Roberts",
    title: "Deployment Lead",
    imageSrc: "/about/leadership/6.jpg",
    bio: [
      "Forest Roberts leads deployment programs from planning through field execution, coordinating site logistics, resource allocation, and stakeholder alignment for complex infrastructure transitions.",
      "At Lama Telecom Services, he ensures rollouts stay on schedule and on spec—bridging operations, engineering, and client teams so large-scale decommissioning and recovery projects land safely and predictably.",
    ],
  },

  {
    id: "sonam-wangmo",
    indexLabel: "08",
    name: "Sonam Wangmo",
    title: "Executive Account Management & Client Relations",
    imageSrc: "/about/leadership/8.jpg",
    bio: [
      "Sonam Wangmo brings over a decade of experience in sales, account management, and client operations. At Lama Telecom Services, she supports customer engagement, project coordination, and relationship management to ensure smooth execution and client satisfaction.",
      "Her background in account management, sales and operations contributes to strengthening client partnerships and supporting business growth.",
    ],
  },
];
