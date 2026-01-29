"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { StatDisplay } from "@/components/shared/stat-display";
import { CTAButton } from "@/components/shared/cta-button";
import { SmoothScrollLink } from "@/components/shared/smooth-scroll-link";

interface Statistic {
  value: string;
  label: string;
  description?: string;
  iconPath: string;
}

interface HeroWithStatsProps {
  statistics: Statistic[];
}

export function HeroWithStats({ statistics }: HeroWithStatsProps) {
  return (
    <section className="w-full bg-white relative min-h-screen overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-32">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/bg/Header.svg"
          alt="hero-with-stats-background"
          fill
          className="object-cover object-top-left"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto w-11/12 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
        {/* Hero Content - Flexbox Layout */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-1 flex-col gap-2 lg:gap-4">
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-text-primary/10 bg-text-primary/5 px-3 py-2 backdrop-blur-sm"
            >
              <Image
                src="/images/icons/wave.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span className="text-xs font-bold uppercase leading-tight tracking-wider text-text-primary sm:text-sm">
                AI Built for utility & facility maintenance teams
              </span>
            </motion.div>

            {/* Headlines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Smarter Field Work.
                <br />
                Better Answers.
              </h1>
              <h3 className="text-lg font-light italic leading-relaxed tracking-tight text-text-secondary">
                Powered by TeamSolve's Knowledge Twin™
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg lg:text-xl"
            >
              Get instant insights from your operations data with AI
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-3 flex flex-wrap items-center gap-4"
            >
              <CTAButton 
                href="/contact"
                text="Book a Demo"
                variant="primary"
                size="hero"
                className="sm:px-8 sm:py-4 sm:text-lg"
              />

              <SmoothScrollLink 
                href="#demo-videos"
                className="group flex shrink-0 items-center gap-3 px-4 py-3 font-semibold transition-all bg-white border-2 border-border-light text-navy hover:border-navy hover:bg-gray-50 rounded-lg sm:px-8 sm:py-4 sm:text-lg"
              >
                <Play className="h-5 w-5" />
                <span className="leading-tight">See How it Works</span>
              </SmoothScrollLink>
            </motion.div>
          </div>

          {/* Right Column - Laptop Mockup (Flexbox) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-1 items-center justify-center lg:justify-center"
          >
            <div className="relative w-full max-w-xl">
              <Image
                src="/images/gifs/teamSolve-frontPage.gif"
                alt="TeamSolve Knowledge Twin Dashboard"
                width={689}
                height={386}
                className="h-auto w-full drop-shadow-xl rounded-md"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex w-full items-center justify-between pt-5"
        >
          {statistics.map((stat, index) => (
            <StatDisplay
              key={index}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              iconPath={stat.iconPath}
              delay={1 + index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
