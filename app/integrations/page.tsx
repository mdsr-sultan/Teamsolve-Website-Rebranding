import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { PAGE_HEROES } from "@/lib/page-config";
import { INTEGRATIONS_SECTIONS } from "@/lib/integrations-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations | TeamSolve",
  description: "Seamlessly integrate with your cloud platforms, CMMS, SCADA historians, GIS systems, and reporting tools — with simple, secure data connections.",
};

export default function IntegrationsPage() {
  const { builtToConnect, supportedSystems, flexibleOptions } = INTEGRATIONS_SECTIONS;

  return (
    <>
      <PageHeader />
      <PageHero {...PAGE_HEROES.integrations} />

      {/* Integrations Content */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto w-11/12 max-w-7xl">
          <div className="divide-y divide-divider">
            
            {/* Built to Connect */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 pb-8 sm:pb-12 lg:grid-cols-12 lg:gap-16 lg:pb-16">
              <div className="lg:col-span-4">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {builtToConnect.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-secondary">
                  {builtToConnect.description}
                </p>
              </div>
            </div>

            {/* Supported System Types */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 lg:grid-cols-12 lg:gap-16 lg:py-16">
              <div className="lg:col-span-4">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {supportedSystems.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-4 sm:space-y-5">
                  {supportedSystems.systems.map((system) => (
                    <div key={system.id}>
                      <p className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-primary">
                        <span className="font-bold">{system.label}</span> {system.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flexible Integration Options */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
              <div className="lg:col-span-4">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {flexibleOptions.title}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                <p className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-secondary">
                  {flexibleOptions.intro}
                </p>
                
                <ul className="space-y-2 sm:space-y-2.5">
                  {flexibleOptions.options.map((option, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-2.5">
                      <span className="mt-1.5 sm:mt-2 h-1 w-1 shrink-0 rounded-full bg-text-primary" />
                      <span className="text-sm sm:text-base leading-relaxed text-text-secondary">
                        {option}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                  {flexibleOptions.outro}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection title="Ready to Experience the Power of Knowledge Twin?" />
    </>
  );
}
