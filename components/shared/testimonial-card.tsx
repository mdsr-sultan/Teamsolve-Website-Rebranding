import { Quote } from "lucide-react";
import { AnimatedCard } from "./animated-card";
import { CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, title, company, delay }: TestimonialCardProps) {
  return (
    <AnimatedCard delay={delay} className="bg-card/50 backdrop-blur">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-[var(--brand-teal)]/30 mb-4" />
        <p className="text-muted-foreground italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <div className="border-t border-border pt-4">
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-sm text-[var(--brand-teal)]">{company}</p>
        </div>
      </CardContent>
    </AnimatedCard>
  );
}
