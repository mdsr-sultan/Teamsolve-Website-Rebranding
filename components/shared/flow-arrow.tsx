"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FlowArrowProps {
  delay?: number;
}

export function FlowArrow({ delay = 0 }: FlowArrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative flex h-12 w-12 shrink-0 items-center justify-center"
    >
      {/* Background Circle */}
      <div className="absolute h-12 w-12 rounded-full bg-text-primary/12" />
      
      {/* Icon */}
      <ArrowRight 
        className="relative z-10 h-6 w-6 text-text-primary" 
        strokeWidth={2} 
      />
    </motion.div>
  );
}
