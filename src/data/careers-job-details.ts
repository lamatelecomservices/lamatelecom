/**
 * Long-form JD for `/careers/[jobId]`. Keys must match `CAREERS_JOBS[].id`.
 *
 * `project-manager` = first opening (Project Manager).
 */
export type JobDetailSidebarMeta = {
  location: string;
  employmentType: string;
  department: string;
};

export type JobResponsibilitySection = {
  title: string;
  items: readonly string[];
};

export type CareersJobDetailContent = {
  sidebar: JobDetailSidebarMeta;
  /** Shown on small screens under title (e.g. job type, experience). */
  mobileMeta?: {
    jobType: string;
    experience: string;
  };
  roleOverview: string;
  responsibilitySections: readonly JobResponsibilitySection[];
  requirements?: readonly string[];
  benefits?: readonly string[];
};

export const CAREERS_JOB_DETAIL_BY_ID: Partial<
  Record<string, CareersJobDetailContent>
> = {
  "project-manager": {
    sidebar: {
      location: "XXX",
      employmentType: "XXXX",
      department: "Operations",
    },
    mobileMeta: {
      jobType: "Full Time",
      experience: "3–5 Years",
    },
    roleOverview:
      "The Project Manager is responsible for overall project planning, asset documentation, logistics coordination, and team leadership. This role ensures that the active decommissioning project is executed safely, efficiently, and according to client requirements. The Project Manager also manages asset tracking, logistics coordination, chain-of-custody documentation, and final project reporting.",
    responsibilitySections: [
      {
        title: "PROJECT PLANNING & EXECUTION",
        items: [
          "Plan project timelines and work schedules",
          "Conduct site walkthroughs and project assessments",
          "Coordinate with client representatives, site security, and facility teams",
          "Assign work tasks to Lead Technicians and field technicians",
          "Ensure project milestones are completed on schedule",
        ],
      },
      {
        title: "ASSET MANAGEMENT & DOCUMENTATION",
        items: [
          "Maintain asset inventory databases",
          "Track equipment using barcode systems",
          "Ensure accurate inventory and serial number documentation",
          "Manage project documentation and reporting",
          "Verify and record data destruction documentation",
        ],
      },
      {
        title: "LOGISTICS & CHAIN OF CUSTODY",
        items: [
          "Maintain chain-of-custody documentation",
          "Track asset movement from removal to final disposition",
          "Coordinate shipping, transportation, and warehouse delivery",
          "Maintain NIST-tracked logistics records when required",
        ],
      },
    ],
    requirements: [
      "Bachelor’s degree in business, engineering, or a related field (or equivalent experience).",
      "Proven project management experience in technical, logistics, or field-service environments.",
      "Strong leadership, communication, and stakeholder management skills.",
      "Comfortable with travel and on-site coordination as required.",
    ],
    benefits: [
      "Competitive compensation and benefits package.",
      "Health insurance and supportive team culture.",
    ],
  },

  /** Copy from `public/content.png` — Lead Deinstaller */
  "lead-deinstaller": {
    sidebar: {
      location: "XXX",
      employmentType: "XXXX",
      department: "Decommissioning",
    },
    mobileMeta: {
      jobType: "Full Time",
      experience: "3–5 Years",
    },
    roleOverview:
      "The Lead Deinstaller is responsible for technical oversight of infrastructure dismantling operations inside the data center. This role ensures that all power systems are properly shut down, safe for removal, and that the dismantling process follows the correct order and procedures. The Lead Deinstaller acts as the technical supervisor for the field technicians.",
    responsibilitySections: [
      {
        title: "ELECTRICAL & POWER VERIFICATION",
        items: [
          "Verify which systems are powered down and safe for decommissioning",
          "Identify circuits and equipment ready for disconnection",
          "Coordinate with site electrical teams when necessary",
          "Ensure compliance with electrical safety standards",
        ],
      },
      {
        title: "INFRASTRUCTURE DECOMMISSIONING PLANNING",
        items: [
          "Create the dismantling workflow and job layout",
          "Determine which equipment should be removed first and last",
          "Plan the sequence for server, rack, and cabling removal",
          "Ensure safe disconnection of power distribution units (PDUs)",
        ],
      },
      {
        title: "FIELD TEAM COORDINATION",
        items: [
          "Direct technicians on daily operational tasks",
          "Ensure equipment removal follows correct procedures",
          "Monitor technical work quality",
          "Report project progress to the Project Manager",
        ],
      },
    ],
  },

  /**
   * Copy from `public/content1.png` — Data Center Decommissioning Technician.
   * Typical work environment list is folded into the role overview; remaining
   * sections map to responsibility blocks under Key responsibilities.
   */
  "data-center-decommissioning-technician": {
    sidebar: {
      location: "XXX",
      employmentType: "XXXX",
      department: "Field Operations",
    },
    mobileMeta: {
      jobType: "Full Time",
      experience: "2–4 Years",
    },
    roleOverview:
      "The Data Center Decommissioning Technician performs hands-on technical work at project sites, including removing servers, racks, cabling, and other IT infrastructure. Technicians work under the supervision of the Lead Deinstaller and Project Manager.\n\nProfessionals in these roles typically work with IT Asset Disposition (ITAD) companies, data center logistics providers, cloud infrastructure companies, and hyperscale data centers such as Lumen, AWS, Google, Microsoft, and Nvidia.",
    responsibilitySections: [
      {
        title: "KEY RESPONSIBILITIES",
        items: [
          "Remove servers, switches, and networking equipment",
          "Remove structured cabling and power cabling",
          "Assist with rack dismantling and packaging",
          "Tag IT equipment using barcodes and asset labels",
          "Perform asset auditing and inventory verification",
          "Prepare hardware for transport, recycling, or resale",
          "Support data destruction procedures (wiping / degaussing)",
        ],
      },
      {
        title: "FIELD REQUIREMENTS",
        items: [
          "Ability to lift 50+ lbs",
          "Comfortable working in data center environments",
          "Willing to travel across the United States",
          "Ability to stay 2–3 weeks on project sites",
          "Basic computer knowledge",
          "Basic ability to read and write English",
        ],
      },
      {
        title: "TECHNICAL PROFICIENCY",
        items: [
          "Understanding of servers, storage systems, and networking equipment",
          "Basic knowledge of data center infrastructure",
          "Familiarity with IT asset management processes",
        ],
      },
      {
        title: "DETAIL-ORIENTED WORK",
        items: [
          "Ability to manage accurate inventory and documentation",
          "Strong focus on asset tracking accuracy",
        ],
      },
      {
        title: "SAFETY FOCUS",
        items: [
          "Strict adherence to site security protocols",
          "Knowledge of electrical and equipment safety",
          "Compliance with environmental regulations for e-waste",
        ],
      },
    ],
    benefits: [
      "Competitive compensation and benefits package.",
      "Health insurance and supportive team culture.",
    ],
  },
};
