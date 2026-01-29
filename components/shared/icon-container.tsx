import Image from "next/image";
import { cn } from "@/lib/utils";

interface IconContainerProps {
  iconPath: string;
  size?: "sm" | "md" | "lg";
  variant?: "bordered" | "filled" | "gray";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

const iconSizes = {
  sm: { width: 16, height: 16, className: "h-4 w-4" },
  md: { width: 20, height: 20, className: "h-5 w-5" },
  lg: { width: 24, height: 24, className: "h-6 w-6" },
};

const variantClasses = {
  bordered: "border border-text-primary rounded-lg",
  filled: "bg-text-primary/5 rounded-md",
  gray: "bg-icon-bg/20 rounded-md",
};

export function IconContainer({ 
  iconPath, 
  size = "md", 
  variant = "bordered",
  className 
}: IconContainerProps) {
  const iconSize = iconSizes[size];
  
  return (
    <div className={cn(
      "flex shrink-0 items-center justify-center",
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <Image 
        src={iconPath} 
        alt="icon-container" 
        width={iconSize.width} 
        height={iconSize.height}
        className={iconSize.className}
      />
    </div>
  );
}
