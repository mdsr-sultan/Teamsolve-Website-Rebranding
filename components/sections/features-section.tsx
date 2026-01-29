"use client";

import { LucideIcon } from "lucide-react";
import { AnimatedCard } from "@/components/shared/animated-card";
import { SectionContainer } from "@/components/shared/section-container";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export function FeaturesSection({ title, subtitle, features }: FeaturesSectionProps) {
  return (
    <SectionContainer>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <AnimatedCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={<Icon className="h-8 w-8" />}
              delay={index * 0.1}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
}
