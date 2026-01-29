import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { PAGE_HEROES } from "@/lib/page-config";
import { PRICING_PLANS, PRICING_CTA } from "@/lib/pricing-config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | TeamSolve",
  description: "Choose the plan that fits your utility's needs. Start with a trial environment or go full-scale with the complete Knowledge Twin system.",
};

export default function PricingPage() {
  const plans = [PRICING_PLANS.trial, PRICING_PLANS.team, PRICING_PLANS.enterprise];

  return (
    <>
      <PageHeader />
      <PageHero {...PAGE_HEROES.pricing} />

      {/* Pricing Cards */}
      <section 
        className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-24"
        style={{ 
          backgroundImage: "url('/images/bg/bg-pricing.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto w-11/12 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan) => (
              <div key={plan.id} className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
                {/* Pricing Card */}
                <Card
                  className={`group flex min-h-[380px] sm:min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? "border-none bg-[var(--color-pricing-card-dark-bg)] text-white shadow-[0px_12px_17px_0px_rgba(0,0,0,0.23)] hover:shadow-[0px_16px_24px_0px_rgba(0,0,0,0.3)]"
                      : "border border-[var(--color-pricing-card-border)] bg-[var(--color-pricing-card-bg)] shadow-[0px_12px_40px_0px_rgba(25,33,61,0.05)] hover:shadow-[0px_16px_48px_0px_rgba(25,33,61,0.08)]"
                  } hover:-translate-y-1`}
                >
                  {/* Plan Name */}
                  <div className="flex items-start justify-between">
                    <p
                      className={`font-ubuntu text-sm sm:text-base font-medium leading-tight transition-colors duration-300 ${
                        plan.highlighted
                          ? "text-white"
                          : "text-[var(--color-text-primary)] opacity-80 group-hover:opacity-100"
                      }`}
                    >
                      {plan.name}
                    </p>
                  </div>

                  {/* Price & Description */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {/* Subtitle (for Team & Enterprise) */}
                    {plan.subtitle && (
                      <p
                        className={`font-ubuntu text-xs sm:text-sm leading-relaxed ${
                          plan.highlighted ? "text-white/80" : "text-[var(--color-text-primary)]/80"
                        }`}
                      >
                        {plan.description}
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-end gap-2">
                      <h3
                        className={`font-ubuntu text-3xl sm:text-4xl font-bold leading-tight ${
                          plan.highlighted ? "text-white" : "text-[var(--color-text-primary)]"
                        }`}
                      >
                        {plan.price}
                      </h3>
                      {plan.period && (
                        <span
                          className={`font-ubuntu text-sm sm:text-base ${
                            plan.highlighted ? "text-white/50" : "text-[var(--color-text-primary)]/50"
                          }`}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Description or Subtitle */}
                    <p
                      className={`font-ubuntu text-xs sm:text-sm leading-relaxed ${
                        plan.highlighted ? "text-white/80" : "text-[var(--color-text-primary)]/80"
                      }`}
                    >
                      {plan.subtitle || plan.description}
                    </p>
                  </div>

                  {/* Best For */}
                  <div className="flex flex-col gap-1">
                    <p
                      className={`font-ubuntu text-sm sm:text-base font-bold leading-normal ${
                        plan.highlighted ? "text-white" : "text-[var(--color-text-primary)]"
                      }`}
                    >
                      Best for
                    </p>
                    <p
                      className={`font-ubuntu text-xs sm:text-sm leading-relaxed ${
                        plan.highlighted ? "text-white/80" : "text-[var(--color-text-primary)]/80"
                      }`}
                    >
                      {plan.bestFor}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="outline"
                    className={`group/button h-auto w-full rounded-lg border px-4 py-3 sm:py-3.5 font-ubuntu text-xs sm:text-sm font-bold shadow-[0px_3px_6px_0px_rgba(52,52,52,0.03)] transition-all duration-300 ${
                      plan.highlighted
                        ? "border-transparent bg-[var(--color-pricing-button-gradient-start)] text-[var(--color-text-primary)] hover:bg-gray-50 hover:shadow-[0px_4px_8px_0px_rgba(52,52,52,0.06)]"
                        : "border-[var(--color-text-primary)]/10 bg-gradient-to-b from-[var(--color-pricing-button-gradient-start)] to-[var(--color-pricing-button-gradient-end)] text-[var(--color-text-primary)] hover:from-white hover:to-white hover:shadow-[0px_4px_8px_0px_rgba(52,52,52,0.06)]"
                    }`}
                  >
                    <Link 
                      href={plan.buttonHref} 
                      className="flex items-center justify-center gap-2"
                    >
                      <span>{plan.buttonText}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.07 6.543a.75.75 0 0 1 0-1.086L5.53 1.97a.75.75 0 0 1 1.085 1.086L4.121 5.55H10.2a.75.75 0 0 1 0 1.5H4.121l2.494 2.493a.75.75 0 1 1-1.085 1.086L2.07 6.543Z"
                          fill="currentColor"
                          transform="rotate(180 6 6)"
                        />
                      </svg>
                    </Link>
                  </Button>
                </Card>

                {/* Features List (Outside Card) */}
                <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 px-2 sm:px-3">
                  {/* Includes Header */}
                  <p className="font-ubuntu text-sm sm:text-base font-bold leading-tight text-[var(--color-text-primary)]">
                    Includes
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-7">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-2.5">
                        <Image
                          src="/icons/check-circle.svg"
                          alt="Check"
                          width={18}
                          height={18}
                          className="mt-0.5 h-4 w-4 sm:h-[18px] sm:w-[18px] shrink-0"
                        />
                        <span className="font-ubuntu text-sm sm:text-base leading-snug text-[var(--color-text-primary)]/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={PRICING_CTA.title} />
    </>
  );
}
