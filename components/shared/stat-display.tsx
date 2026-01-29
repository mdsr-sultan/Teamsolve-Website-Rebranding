"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconContainer } from "./icon-container";

interface StatDisplayProps {
  value: string;
  label: string;
  description?: string;
  iconPath: string;
  delay?: number;
}

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    if (!isNaN(numericValue)) {
      let currentValue = 0;
      const duration = 2000;
      const startTime = Date.now();
      
      const animateValue = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        currentValue = Math.round(easeOut * numericValue);
        
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      
      requestAnimationFrame(animateValue);
    }
  }, [value]);

  const suffix = value.includes("%") ? "%" : value.includes("+") ? "+" : "";
  
  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatDisplay({ 
  value, 
  label, 
  description, 
  iconPath, 
  delay = 0 
}: StatDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-[1_0_0] flex-col items-center gap-3.5"
    >
      {/* Icon */}
      <IconContainer iconPath={iconPath} size="md" variant="gray" />

      {/* Stats Text */}
      <div className="flex flex-col items-center gap-0.5 text-center text-text-primary">
        {/* Number */}
        <div className="text-[32px] font-medium leading-[37px]">
          <AnimatedCounter value={value} />
        </div>
        
        {/* Label & Description */}
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-xl font-medium leading-[23px]">
            {label}
          </p>
          {description && (
            <p className="text-sm leading-tight opacity-60">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
