"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { HeroWithStats } from "@/components/sections/hero-with-stats";
import { CTASection } from "@/components/sections/cta-section";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { GettingStartedFlow } from "@/components/sections/getting-started-flow";
import { VideoDemos } from "@/components/sections/video-demos";
import { PartnersSection } from "@/components/sections/partners-section";
import { SecuritySection } from "@/components/sections/security-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { getOrganizationSchema, getWebsiteSchema, getSoftwareApplicationSchema } from "@/lib/structured-data";

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const softwareSchema = getSoftwareApplicationSchema();
  
  // Handle cross-page hash navigation
  useEffect(() => {
    // Check if there's a hash to scroll to after navigation
    const scrollToHash = sessionStorage.getItem("scrollToHash");
    
    if (scrollToHash) {
      // Clear the stored hash
      sessionStorage.removeItem("scrollToHash");
      
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        const targetElement = document.getElementById(scrollToHash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Update URL
          window.history.pushState(null, "", `/#${scrollToHash}`);
        }
      }, 300);
    }
  }, []);
  
  // Statistics data with Figma icon paths
  const statistics = [
    {
      value: "3+",
      label: "Hours Saved",
      description: "daily per operator",
      iconPath: "/images/icons/stat-icon-1.svg"
    },
    {
      value: "5+",
      label: "Days Saved",
      description: "monthly per operator",
      iconPath: "/images/icons/stat-icon-2.svg"
    },
    {
      value: "90%",
      label: "Satisfaction Rate",
      description: "driven by ease of use",
      iconPath: "/images/icons/stat-icon-3.svg"
    },
    {
      value: "80%",
      label: "Increase",
      description: "in asset information visibility",
      iconPath: "/images/icons/stat-icon-4.svg"
    },
    {
      value: "30%",
      label: "Faster Discovery",
      description: "of management insights",
      iconPath: "/images/icons/stat-icon-5.svg"
    },
    {
      value: "50%",
      label: "Improvement",
      description: "in safety awareness",
      iconPath: "/images/icons/stat-icon-6.svg"
    }
  ];

  
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section with Statistics */}
      <HeroWithStats statistics={statistics} />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Getting Started Flow */}
      <GettingStartedFlow />

      {/* Partners/Integrations Section */}
      <PartnersSection />

      {/* Video Demos */}
      <VideoDemos />

      {/* Security & Compliance */}
      <SecuritySection />

      {/* Trusted by Global Industry Leaders */}
      <TrustedBySection />

      {/* Final CTA */}
      <CTASection showForm={false} />
    </>
  );
}
