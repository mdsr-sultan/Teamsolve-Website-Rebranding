"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { SmoothScrollLink } from "@/components/shared/smooth-scroll-link";

const comparisonData = [
  {
    iconPath: "/images/icons/data-entry-icon.svg",
    category: "Data entry",
    cmmsAlone: "Manual burden on field teams",
    withKnowledgeTwin: "AI captures and validates automatically",
  },
  {
    iconPath: "/images/icons/system-integration-icon.svg",
    category: "System integration",
    cmmsAlone: "Disconnected silos",
    withKnowledgeTwin: "Unified knowledge and work platform",
  },
  {
    iconPath: "/images/icons/reporting-icon.svg",
    category: "Reporting",
    cmmsAlone: "Written manually, time-consuming",
    withKnowledgeTwin: "AI summarizes and standardizes instantly",
  },
  {
    iconPath: "/images/icons/adoption-icon.svg",
    category: "Adoption",
    cmmsAlone: "Complex, lengthy implementations",
    withKnowledgeTwin: "Lightweight, mobile-first, live in days",
  },
  {
    iconPath: "/images/icons/intelligence-icon.svg",
    category: "Intelligence",
    cmmsAlone: "Static data repositories",
    withKnowledgeTwin: "Continuously learns from every job",
  },
];

export function ComparisonTable() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 lg:pt-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5 text-center"
          >
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-text-primary sm:text-4xl sm:leading-tight">
              Don't Just Record Work. Learn From It.
            </h2>
            <p className="font-poppins font-light max-w-3xl text-base lg:text-lg leading-relaxed text-text-muted">
              Helping teams turn daily work into solutions
            </p>
          </motion.div>

          {/* Comparison Table Container */}
          <div className="w-full">
            <div className="flex flex-col items-center gap-6 pt-8">
              {/* Table Header */}
              <div className="hidden w-full grid-cols-[266px_1fr_1fr] items-center lg:grid">
                {/* Empty space for category column */}
                <div />
                
                {/* CMMS Alone Header */}
                <div className="flex items-center justify-center px-8">
                  <p className="text-center text-xl font-bold uppercase leading-tight tracking-wider text-icon-bg">
                    CMMS Alone
                  </p>
                </div>
                
                {/* CMMS + Knowledge Twin Header */}
                <div className="flex items-center justify-center px-8">
                  <p className="text-center text-xl font-bold uppercase leading-tight tracking-wider text-navy">
                    CMMS + Knowledge Twin
                  </p>
                </div>
              </div>

              {/* Table Container - Grid Layout for Full Height Backgrounds */}
              <div className="hidden w-full overflow-hidden rounded-lg border border-border-card lg:block">
                <div className="grid grid-cols-[266px_1fr_1fr]">
                  {comparisonData.map((row, index) => {
                    const isLast = index === comparisonData.length - 1;
                    
                    return (
                      <motion.div
                        key={row.category}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="col-span-3 grid grid-cols-subgrid"
                      >
                        {/* Category Column - Navy Background */}
                        <div
                          className={`flex items-center gap-3 border-r border-white bg-navy px-6 py-4 ${
                            !isLast ? "border-b border-white" : ""
                          }`}
                        >
                          <div className="relative h-5 w-5 shrink-0">
                            <Image
                              src={row.iconPath}
                              alt="comparison-table-icon"
                              width={20}
                              height={20}
                              className="h-full w-full brightness-0 invert"
                            />
                          </div>
                          <p className="text-xs font-normal uppercase leading-4 tracking-[0.3px] text-white">
                            {row.category}
                          </p>
                        </div>

                        {/* CMMS Alone Column - White Background */}
                        <div
                          className={`flex items-center gap-3 border-r border-bg-card bg-white px-6 py-4 ${
                            !isLast ? "border-b border-bg-card" : ""
                          }`}
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg-gray">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-text-secondary" />
                            </svg>
                          </div>
                          <p className="text-base leading-relaxed text-text-secondary">{row.cmmsAlone}</p>
                        </div>

                        {/* CMMS + Knowledge Twin Column - Light Blue Background (FULL HEIGHT) */}
                        <div
                          className={`flex items-center gap-3 bg-bg-light px-6 py-4 ${
                            !isLast ? "border-b border-bg-card" : ""
                          }`}
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="text-base leading-relaxed text-icon-bg-alt">{row.withKnowledgeTwin}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile View - Stacked Layout */}
              <div className="flex w-full flex-col gap-4 lg:hidden">
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={row.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-lg border border-border-card bg-white"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 bg-navy px-4 py-3">
                      <Image
                        src={row.iconPath}
                        alt=""
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                      <p className="text-xs font-normal uppercase tracking-wider text-white">{row.category}</p>
                    </div>

                    {/* CMMS Alone */}
                    <div className="border-b border-bg-card px-4 py-3">
                      <p className="mb-2 text-sm font-bold uppercase text-icon-bg">CMMS Alone</p>
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg-gray">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-text-secondary" />
                          </svg>
                        </div>
                        <p className="text-sm leading-relaxed text-text-secondary">{row.cmmsAlone}</p>
                      </div>
                    </div>

                    {/* CMMS + Knowledge Twin */}
                    <div className="bg-bg-light px-4 py-3">
                      <p className="mb-2 text-sm font-bold uppercase text-navy">
                        CMMS + Knowledge Twin
                      </p>
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-sm leading-relaxed text-icon-bg-alt">{row.withKnowledgeTwin}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex w-full justify-center pt-8">
                <SmoothScrollLink
                  href="#demo-videos"
                  className="group flex items-center gap-2 rounded-lg border border-text-primary bg-white px-2.5 py-1.5 shadow-lg shadow-black/10 transition-all hover:bg-gray-50 hover:shadow-xl"
                >
                  <span className="text-base font-bold leading-tight text-text-primary">
                    See the difference in action
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy transition-transform group-hover:translate-x-0.5">
                    <ChevronRight className="h-4 w-4 text-white" strokeWidth={2} />
                  </div>
                </SmoothScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
