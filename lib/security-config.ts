export const SECURITY_INTRO = {
  text: "Security and compliance are core to how Knowledge Twin is built. The platform is designed to support utility and industrial organizations operating in regulated environments, where data protection, auditability, and operational reliability are critical. From architecture and deployment to access controls and reporting, Knowledge Twin is built to help teams meet security and compliance requirements without adding unnecessary complexity.",
} as const;

export const SECURITY_FEATURES = [
  {
    id: "single-tenant",
    iconPath: "/images/icons/security-shield.svg",
    title: "Single-Tenant Architecture",
    description: "Every customer runs in a dedicated, private environment with full data isolation and auditability.",
  },
  {
    id: "encryption",
    iconPath: "/images/icons/security-lock.svg",
    title: "Enterprise-Grade Encryption",
    description: "All data is encrypted at rest and in transit using industry-standard protocols.",
  },
  {
    id: "deployment",
    iconPath: "/images/icons/security-cloud.svg",
    title: "Flexible Deployment Options",
    description: "Deploy Knowledge Twin in the cloud or within your own infrastructure for critical systems.",
  },
  {
    id: "compliance",
    iconPath: "/images/icons/security-shield.svg",
    title: "Compliance Ready",
    description: "Built to support utility compliance requirements, including AWIA, regulatory reporting, and complete audit trails.",
  },
  {
    id: "auditability",
    iconPath: "/images/icons/security-lock.svg",
    title: "Full Auditability",
    description: "Complete visibility into system access and changes, with data always under your control.",
  },
  {
    id: "soc2",
    iconPath: "/images/icons/security-cloud.svg",
    title: "SOC 2 Type II Controls",
    description: "Independently audited security controls to ensure consistent protection of customer data.",
  },
] as const;
