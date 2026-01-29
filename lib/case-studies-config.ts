const ORIGINAL_CASE_STUDIES = [
  {
    id: "southington-water",
    quote: "The expected automation and removal of manual processes can save operators 2–3 days each month.",
    company: "Southington Water Department",
    personName: "Douglas Arndt",
    personTitle: "Superintendent, Southington Water Department",
    logo: "/images/case/swd-logo.svg",
    logoAlt: "Southington Water Department",
    image: "/images/case/swd.svg",
    imageAlt: "Utility operator working",
    utility: "Utility",
    utilitySubtitle: "Southington Water Department",
    impacts: [
      {
        title: "Digital Workflows:",
        description: "Daily inspections & sampling moved from paper to mobile.",
      },
      {
        title: "Automated Reporting:",
        description: "Compliance reports generated instantly from field entries.",
      },
      {
        title: "AI Knowledge Assistant:",
        description: "Instant access to SOPs, regulations, and work history in the field.",
      },
      {
        title: "Unified Data:",
        description: "CMMS, GIS, SCADA, alarms, and SCADA readings consolidated in one place.",
      },
      {
        title: "Compliance Visibility:",
        description: "Real-time insight into issues and trends for faster decisions.",
      },
    ],
  },
  {
    id: "detection-services",
    quote: "TeamSolve gives our field teams real-time insights, clear procedures, and hands-on guidance—helping them make better decisions and work with greater confidence and efficiency.",
    company: "Detection Services",
    personName: "Chris Evans",
    personTitle: "Chief Executive Officer, Detection Services",
    logo: "/images/case/ds-logo.svg",
    logoAlt: "Detection Services",
    image: "/images/case/detection-service.svg",
    imageAlt: "Pipeline inspection specialist",
    utility: "Utility",
    utilitySubtitle: "Detection Services\nPipeline Inspection & Analysis (Australia & New Zealand)",
    impacts: [
      {
        title: "Real-Time Field Insights:",
        description: "Up-to-date device, site, and job information delivered directly to field teams in real-time.",
      },
      {
        title: "Standardized Procedures:",
        description: "Onboard installation, maintenance, and troubleshooting workflows across all crews.",
      },
      {
        title: "Hands-On AI Guidance:",
        description: "Instant access to manuals, steps, and procedures at every touchpoint.",
      },
      {
        title: "Better Operational Decisions:",
        description: "Improved visibility enables smarter choices in pricing, product selection, and deployment.",
      },
      {
        title: "Higher Team Confidence & Efficiency:",
        description: "Field staff approach tasks directly, reducing errors and improving productivity.",
      },
    ],
  },
  {
    id: "balibago-waterworks",
    quote: "TeamSolve's AI platform enhances our workforce capabilities with more proactive, consistent, and visible workflows -supporting BWSI's continued growth.",
    company: "Balibago Waterworks System, Inc. (BWSI)",
    personName: "Ms. Cristina P. Alejandtrino",
    personTitle: "BWSI President",
    logo: "/images/case/bali-bago-logo.svg",
    logoAlt: "Balibago Waterworks",
    image: "/images/case/bali-bago.svg",
    imageAlt: "Water utility workers",
    utility: "Utility",
    utilitySubtitle: "Balibago Waterworks Systems, Inc. (BWSI)",
    impacts: [
      {
        title: "Workforce Empowerment:",
        description: "AI guidance and standardized workflows support more confident and efficient operations.",
      },
      {
        title: "Operational Consistency:",
        description: "Uniform processes and real-time traceability across multiple franchises and teams.",
      },
      {
        title: "Real-Time Insights:",
        description: "Better visibility into asset attributes, device history, and task-level compliance data.",
      },
      {
        title: "Improved Proactiveness:",
        description: "Teams identify and address issues earlier with AI-enabled guidance.",
      },
      {
        title: "Scalable Foundation:",
        description: "A modern digital platform that adapts as BWSI continues to grow.",
      },
    ],
  },
];

// Export case studies with duplicates for carousel testing
// TODO: Remove duplicates when real case studies are added
// Currently: 3 original + 6 duplicates = 9 total (3 slides on desktop)
export const CASE_STUDIES = [
  ...ORIGINAL_CASE_STUDIES,
  ...ORIGINAL_CASE_STUDIES.map((study) => ({ ...study, id: `${study.id}-2` })),
  ...ORIGINAL_CASE_STUDIES.map((study) => ({ ...study, id: `${study.id}-3` })),
] as const;
