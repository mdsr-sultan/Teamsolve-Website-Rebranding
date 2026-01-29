import Link from "next/link";
import { ArrowRight, ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary" | "outline" | "header" | "page";
  size?: "hero" | "default";
  icon?: LucideIcon;
  showArrow?: boolean;
  className?: string;
}

const variants = {
  primary: "bg-navy border-2 border-navy text-white hover:bg-navy/90 hover:border-navy/90 shadow-lg hover:shadow-xl",
  secondary: "bg-white border-2 border-border-light text-navy hover:border-navy hover:bg-gray-50",
  outline: "bg-white border border-text-primary text-text-primary hover:bg-gray-50",
  header: "bg-navy text-white hover:bg-navy/90 shadow-sm hover:shadow-md",
  page: "bg-text-primary text-white hover:bg-text-primary/90 shadow-sm hover:shadow-md",
};

const sizes = {
  hero: "rounded-lg",      // 8px for hero section buttons
  default: "rounded-xl",   // 12px for all other buttons
};

export function CTAButton({ 
  href, 
  text, 
  variant = "primary",
  size = "default",
  icon: Icon,
  showArrow = true,
  className 
}: CTAButtonProps) {
  // Header and page variants use white box with colored chevron
  const isHeaderVariant = variant === "header";
  const isPageVariant = variant === "page";
  const usesBoxedChevron = isHeaderVariant || isPageVariant;
  
  return (
    <Link
      href={href}
      className={cn(
        "group flex shrink-0 items-center gap-3 px-4 py-3 font-semibold transition-all",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      
      <span className="leading-tight">{text}</span>
      
      {showArrow && (
        <>
          {usesBoxedChevron ? (
            // Header/Page style: White box with colored chevron
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform group-hover:translate-x-0.5">
              <ChevronRight 
                className={cn(
                  "h-4 w-4",
                  isHeaderVariant && "text-navy",
                  isPageVariant && "text-text-primary"
                )} 
                strokeWidth={2} 
              />
            </div>
          ) : (
            // Hero/other styles: Direct arrow
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          )}
        </>
      )}
    </Link>
  );
}
