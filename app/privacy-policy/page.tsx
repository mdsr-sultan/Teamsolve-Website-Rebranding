import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { CTASection } from "@/components/sections/cta-section";
import { PRIVACY_POLICY } from "@/lib/privacy-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TeamSolve",
  description: "Our commitment to protecting your information and respecting your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader />
      <PageHero 
        title={PRIVACY_POLICY.hero.title} 
        description={PRIVACY_POLICY.hero.description} 
      />

      {/* Privacy Policy Content */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto w-11/12 max-w-5xl">
          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {PRIVACY_POLICY.sections.map((section) => (
              <div key={section.id} className="space-y-4 sm:space-y-5">
                {/* Section Title - Ubuntu Font */}
                <h2 className="font-ubuntu text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {section.title}
                </h2>
                
                {/* Section Content - Poppins Font */}
                <div className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-secondary lg:text-lg whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* CTA Section */}
      <CTASection title={PRIVACY_POLICY.cta.title} />
    </>
  );
}
