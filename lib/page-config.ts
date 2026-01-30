export const PAGE_HEROES = {
  integrations: {
    title: "Integrations",
    description: "Seamlessly integrate with your cloud platforms, CMMS, SCADA historians, GIS systems, and reporting tools — with simple, secure data connections.",
  },
  product: {
    title: "Product",
    description: "Discover how Knowledge Twin transforms infrastructure operations with AI-powered insights that teams can trust.",
  },
  impact: {
    title: "Impact",
    description: "See the measurable results our customers achieve with Knowledge Twin — from faster response times to improved safety awareness.",
  },
  security: {
    title: "Security & Compliance",
    description: "Enterprise-grade security designed from the ground up to meet the expectations of utility and industrial organizations operating in highly regulated environments.",
  },
  about: {
    title: "About TeamSolve",
    description: "We're building the future of infrastructure operations — transforming complexity into actionable insights that teams can trust.",
  },
  media: {
    title: "Media & Resources",
    description: "Explore TeamSolve Linkdin page for our latest news, case studies, videos, and resources to learn more about Knowledge Twin and how it's transforming operations.",
  },
  pricing: {
    title: "Pricing",
    description: "Flexible pricing plans designed to scale with your team and deliver measurable ROI from day one.",
  },
  contact: {
    title: "Contact Us",
    description: "Interested in solving your problems with TeamSolve?",
  },
} as const;

export type PageHeroKey = keyof typeof PAGE_HEROES;
