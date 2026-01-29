"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const securityFeatures = [
  {
    iconPath: "/images/icons/security-shield.svg",
    title: "SOC 2 Type II & Single-Tenant",
    description:
      "Independently audited security controls. Every customer gets their own private instance with full auditability.",
  },
  {
    iconPath: "/images/icons/security-lock.svg",
    title: "Enterprise-Grade Encryption",
    description:
      "Your Data is encrypted at rest and in transit using industry standard protocols.",
  },
  {
    iconPath: "/images/icons/security-cloud.svg",
    title: "Cloud & On-Premise Options",
    description:
      "Deploy in your preferred environment, cloud-hosted or on your own infrastructure for critical systems.",
  },
];

export function SecuritySection() {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:gap-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex max-w-3xl flex-col items-center gap-5 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight text-text-primary">
              Security & Compliance
            </h2>
            <p className="font-poppins font-light text-lg leading-relaxed text-text-primary">
              Designed from the ground up to meet the expectations of utility and industrial
              organizations operating in highly regulated environments
            </p>
          </motion.div>

          {/* Security Features */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-5"
              >
                <div className="h-12 w-12 shrink-0">
                  <Image
                    src={feature.iconPath}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold leading-tight text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="font-poppins font-light text-base leading-relaxed text-text-primary opacity-60">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Get Started Today Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-xl border border-text-primary bg-white px-2.5 py-1.5 transition-all hover:bg-gray-50"
            >
              <span className="text-base font-bold leading-tight text-text-primary">
                Learn More
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy transition-transform group-hover:translate-x-0.5">
                <ChevronRight className="h-4 w-4 text-white" strokeWidth={2} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
