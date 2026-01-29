"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <Image
          src="/images/bg/Integration.svg"
          alt="Works With Your Existing Systems - Integrations"
          width={1200}
          height={400}
          className="h-auto w-full"
          priority={false}
        />
      </motion.div>
    </section>
  );
}
