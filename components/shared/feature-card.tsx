import { LucideIcon } from "lucide-react";
import { AnimatedCard } from "./animated-card";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <AnimatedCard delay={delay} className="border-border/50">
      <CardHeader>
        <div className="mb-4 inline-flex p-3 rounded-lg bg-[var(--brand-teal)]/10">
          <Icon className="h-6 w-6 text-[var(--brand-teal)]" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </AnimatedCard>
  );
}
