"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionContainer } from "@/components/shared/section-container";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

interface TestimonialsSectionProps {
  title?: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({ title, testimonials }: TestimonialsSectionProps) {
  return (
    <SectionContainer className="bg-muted/30">
      {title && (
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-[var(--brand-teal)] mb-4" />
                <blockquote className="text-sm md:text-base mb-4 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-muted-foreground font-medium mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
