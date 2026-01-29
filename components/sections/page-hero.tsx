"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumb?: string;
  showSearchBar?: boolean;
}

export function PageHero({ title, description, breadcrumb, showSearchBar = false }: PageHeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="relative w-full overflow-hidden bg-bg-light pt-32 pb-16 lg:pt-40">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/icons/sub-header.svg"
          alt="sub-header"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto w-11/12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Breadcrumb (optional) */}
          {breadcrumb && (
            <p className="mb-4 text-sm font-medium text-text-secondary">
              {breadcrumb}
            </p>
          )}

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
            {title}
          </h1>

          {/* Description */}
          <p className="font-poppins font-light max-w-3xl text-base lg:text-lg leading-relaxed text-text-secondary">
            {description}
          </p>

          {/* Search Bar - Only for Case Studies/Impact Page */}
          {showSearchBar && (
            <div className="relative mx-auto w-4/5 mt-3 lg:mt-5">
              {/* Search Bar Container */}
              <div className="relative flex items-center rounded-[28px] border border-[#E5E5E5] bg-[#E3E8EE]">
                {/* Menu Icon - Left Side */}
                <button
                  type="button"
                  className="flex items-center justify-center pl-4 sm:pl-5 text-text-secondary transition-colors hover:text-text-primary"
                  aria-label="Menu"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Search Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="font-ubuntu flex-1 bg-transparent px-4 py-3 sm:py-4 text-base text-text-primary placeholder:text-text-secondary/50 focus:outline-none"
                />

                {/* Search Icon - Right Side */}
                <button
                  type="button"
                  className="flex items-center justify-center pr-4 sm:pr-5 text-text-secondary transition-colors hover:text-text-primary"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
