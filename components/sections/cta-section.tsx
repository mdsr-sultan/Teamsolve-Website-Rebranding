"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  showForm?: boolean;
}

export function CTASection({
  title = "Ready to Experience the Power of Knowledge Twin?",
  buttonText = "Get Started Today",
  buttonHref = "/contact",
  showForm = false,
}: CTASectionProps) {
  if (showForm) {
    return null;
  }

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="container mx-auto border-y border-divider">
        {/* CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-7xl flex flex-col items-center justify-between gap-10 px-8 lg:flex-row"
        >
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full flex-col gap-10 lg:w-auto lg:flex-1"
          >
            <h2 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <Link
              href={buttonHref}
              className="group flex w-fit items-center gap-2 rounded-xl border border-text-primary bg-white px-2.5 py-1.5 transition-all hover:bg-gray-50"
            >
              <span className="text-base font-bold leading-tight text-text-primary">
                {buttonText}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-text-primary transition-transform group-hover:translate-x-0.5">
                <ChevronRight className="h-4 w-4 text-white" strokeWidth={2} />
              </div>
            </Link>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex w-full items-center lg:flex-1 min-h-64 sm:min-h-80 lg:min-h-96"
          >
            <Image
              src="/images/icons/knowledge-twin.svg"
              alt="Knowledge Twin"
              fill
              className="object-contain"
              priority={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
