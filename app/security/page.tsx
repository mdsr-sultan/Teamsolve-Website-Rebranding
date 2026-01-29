import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { PAGE_HEROES } from "@/lib/page-config";
import { SECURITY_INTRO, SECURITY_FEATURES } from "@/lib/security-config";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Compliance | TeamSolve",
  description: "Protecting operational data in regulated environments. Enterprise-grade security and compliance features for utilities and infrastructure operations.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHeader />
      <PageHero {...PAGE_HEROES.security} />

      {/* Security Content */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto w-11/12 max-w-7xl">
          {/* Intro Text */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <p className="font-poppins font-light mx-auto max-w-5xl text-center text-sm sm:text-base leading-relaxed text-text-secondary lg:text-lg">
              {SECURITY_INTRO.text}
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            {SECURITY_FEATURES.map((feature) => (
              <div key={feature.id} className="flex flex-col gap-2.5 sm:gap-3">
                {/* Icon */}
                <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                  <Image
                    src={feature.iconPath}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3 className="text-base sm:text-lg font-bold leading-tight text-text-primary lg:text-xl">
                    {feature.title}
                  </h3>
                  <p className="font-poppins font-light text-xs sm:text-sm leading-relaxed text-text-secondary lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Try Knowledge Twin Free for 30 Days" />
    </>
  );
}
