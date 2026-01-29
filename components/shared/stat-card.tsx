"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  delay?: number;
}

export function StatCard({ value, label, description, delay = 0 }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Animate numbers if the value contains digits
      const hasNumber = /\d/.test(value);
      if (hasNumber) {
        setTimeout(() => setDisplayValue(value), delay * 1000);
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3.5 text-center"
    >
      <div className="w-11 h-11 rounded-md bg-[rgba(52,52,52,0.12)] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
          <path d="M12 2L13.09 8.26L18 12L13.09 15.74L12 22L10.91 15.74L6 12L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <div className="font-medium text-3xl md:text-4xl text-foreground">
          {displayValue}
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <p className="font-medium text-lg md:text-xl text-foreground">{label}</p>
          {description && (
            <p className="text-sm text-muted-foreground opacity-60">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
