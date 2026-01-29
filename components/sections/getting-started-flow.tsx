"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FlowStepCard } from "@/components/shared/flow-step-card";
import { FlowArrow } from "@/components/shared/flow-arrow";

const steps = [
  {
    number: "1",
    iconPath: "/images/icons/Knowledge-Sources.svg",
    title: "Knowledge Sources",
    description: "Connect existing systems or deploy out of the box system",
    items: [
      "CMMS / work orders",
      "SCADA / sensors",
      "Lab & sampling data",
      "Documents & SOPs",
      "New Workflows & forms",
    ],
  },
  {
    number: "2",
    iconPath: "/images/icons/Capture-Data.svg",
    title: "Capture Data",
    description: "Ingest data from multiple channels",
    items: [
      "API ingestion",
      "SFTP transfers",
      "Batch file uploads",
      "Mobile app capture",
      "Offline data collection",
    ],
  },
  {
    number: "3",
    iconPath: "/images/icons/Process-Data.svg",
    title: "Process Data",
    description: "AI-powered insight generation",
    items: [
      "Operations insights",
      "Equipment & field insights",
      "Time series analysis",
      "Safety & plant insights",
      "SOP/document extraction",
    ],
  },
  {
    number: "4",
    iconPath: "/images/icons/Make-Work Easier.svg",
    title: "Make Work Easier",
    description: "Automated workflows & intelligence",
    items: [
      "Instant answers & reports",
      "Root-cause guidance",
      "Maintenance prioritization",
      "Trend insights (failures & backlog)",
      "Quick access to past fixes",
    ],
  },
];

export function GettingStartedFlow() {
  return (
    <section className="w-full bg-white py-12 lg:py-20 relative overflow-hidden">
      {/* Background Image - Positioned to match Figma */}
      <div 
        className="pointer-events-none absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/images/bg/getting-started.svg)', 
          backgroundPosition: '100% 14%' 
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-center gap-5 text-center"
        >
          <h2 className="text-4xl font-bold leading-tight text-text-primary">
            Getting Started
          </h2>
          <p className="font-poppins font-light max-w-3xl text-base lg:text-lg leading-relaxed text-text-muted">
            Two ways to get started—connect what you already use, or deploy Knowledge Twin out of the box.
          </p>
        </motion.div>

        {/* Desktop Layout - Horizontal Flow */}
        <div className="hidden items-start justify-center gap-4 lg:flex">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="flex items-center gap-4">
                <FlowStepCard
                  stepNumber={step.number}
                  iconPath={step.iconPath}
                  title={step.title}
                  description={step.description}
                  items={step.items}
                  delay={index * 0.15}
                />

                {/* Arrow between cards */}
                {!isLast && <FlowArrow delay={index * 0.15 + 0.3} />}
              </div>
            );
          })}
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="flex flex-col gap-6 lg:hidden">
          {steps.map((step, index) => (
            <FlowStepCard
              key={step.number}
              stepNumber={step.number}
              iconPath={step.iconPath}
              title={step.title}
              description={step.description}
              items={step.items}
              delay={index * 0.1}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
