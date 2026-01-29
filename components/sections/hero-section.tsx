"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/shared/gradient-bg";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Get Started Today",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <GradientBackground />
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(52,52,52,0.05)] border border-[rgba(52,52,52,0.05)] text-sm font-bold tracking-wider text-foreground uppercase">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
                  <path d="M8 1.33337L9.06 5.88004L13.3333 8.00004L9.06 10.12L8 14.6667L6.94 10.12L2.66666 8.00004L6.94 5.88004L8 1.33337Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                AI Built for utility & facility maintenance teams
              </span>
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                {title}
              </h1>
              {subtitle && (
                <h2 className="font-light text-xl md:text-2xl text-foreground/70">
                  {subtitle}
                </h2>
              )}
            </div>
            {description && (
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[var(--brand-gray-dark)] hover:bg-[var(--brand-gray-dark)]/90 text-white px-8"
              >
                <Link href={ctaHref}>
                  {ctaText}
                  <span className="ml-2">→</span>
                </Link>
              </Button>
              {secondaryCtaText && secondaryCtaHref && (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
