"use client";

import { motion } from "framer-motion";
import { StepBadge } from "./step-badge";
import { IconContainer } from "./icon-container";

interface FlowStepCardProps {
  stepNumber: string;
  iconPath: string;
  title: string;
  description: string;
  items: string[];
  delay?: number;
  isMobile?: boolean;
}

export function FlowStepCard({
  stepNumber,
  iconPath,
  title,
  description,
  items,
  delay = 0,
  isMobile = false,
}: FlowStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative aspect-[245/256] w-full rounded-xl border border-gray-100/80 bg-white shadow-md lg:h-72 lg:w-64 lg:aspect-auto"
    >
      {/* Step Badge */}
      <StepBadge stepNumber={stepNumber} />

      {/* Card Content */}
      <div className="flex flex-col gap-4 px-5 py-7">
        {/* Icon and Title Row */}
        <div className={`flex items-start ${isMobile ? 'gap-4' : 'gap-4'}`}>
          {/* Title and Description */}
          <div className="flex flex-1 flex-col gap-1">
            <h3 className={`text-base font-normal ${isMobile ? 'leading-tight' : 'leading-snug'} text-text-tertiary`}>
              {title}
            </h3>
            <p className={`${isMobile ? 'text-sm leading-relaxed' : 'text-sm leading-relaxed'} text-text-secondary`}>
              {description}
            </p>
          </div>

          {/* Icon Container */}
          <IconContainer iconPath={iconPath} size="md" variant="bordered" />
        </div>

        {/* Divider */}
        <div className="h-px bg-divider/60" />

        {/* List Items */}
        <ul className={`flex flex-col ${isMobile ? 'gap-1.5' : 'gap-1'}`}>
          {items.map((item, index) => (
            <li 
              key={index} 
              className={`flex items-start gap-2 ${isMobile ? 'text-sm leading-relaxed' : 'py-px text-xs leading-relaxed'} text-text-primary`}
            >
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
