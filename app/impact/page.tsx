"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { PartnersGlobalSection } from "@/components/sections/partners-global-section";
import { IMPACT_PAGE } from "@/lib/impact-config";
import { CASE_STUDIES } from "@/lib/case-studies-config";
import { PARTNERS_SECTION } from "@/lib/partners-config";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ImpactPage() {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Determine cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(3); // Desktop: 3 cards per slide
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // Tablet: 2 cards per slide
      } else {
        setCardsPerSlide(1); // Mobile: 1 card per slide
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // Group cards into slides
  const groupedCards = [];
  for (let i = 0; i < CASE_STUDIES.length; i += cardsPerSlide) {
    groupedCards.push(CASE_STUDIES.slice(i, i + cardsPerSlide));
  }

  return (
    <>
      <PageHeader />
      <PageHero 
        title={IMPACT_PAGE.hero.title} 
        description={IMPACT_PAGE.hero.description}
        showSearchBar={true}
      />

      {/* Case Studies Carousel Section */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto w-11/12 max-w-7xl">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".case-studies-pagination",
            }}
            className="case-studies-swiper !pb-0"
          >
            {groupedCards.map((cardGroup, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                {/* Full Width Slide - Contains Multiple Cards */}
                <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
                  {cardGroup.map((study) => (
                    <div key={study.id} className="group overflow-hidden">
                      {/* Card Internal Layout - 2 Main Sections */}
                      <div className="flex flex-col lg:flex-row gap-0 lg:gap-3">
                        {/* Left Section - Contains 2 Columns (Quote+Logo & Utility+Impact) */}
                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 rounded-2xl bg-[#343434]">
                          {/* Column 1: Quote + Logo/Person Info */}
                          <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
                            {/* Quote */}
                            <p className="font-poppins text-lg sm:text-xl lg:text-2xl leading-relaxed text-white">
                              "{study.quote}"
                            </p>

                            {/* Logo + Person Info */}
                            <div className="mt-8 lg:mt-12">
                              <div className="mb-5">
                                <Image
                                  src={study.logo}
                                  alt={study.logoAlt}
                                  width={150}
                                  height={50}
                                  className="h-auto w-full"
                                />
                              </div>
                              <p className="font-ubuntu text-sm sm:text-base font-bold text-white">
                                {study.personName}
                              </p>
                              <p className="font-ubuntu text-xs sm:text-sm text-white/60 mt-1">
                                {study.personTitle}
                              </p>
                            </div>
                          </div>

                          {/* Column 2: Utility + Impact Details */}
                          <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14 flex flex-col">
                            {/* Utility Section */}
                            <div className="mb-6 lg:mb-8 lg:border-l-1 lg:border-white/60 lg:pl-3">
                              <p className="font-ubuntu mb-2 text-xs font-bold uppercase tracking-wider text-white/50">
                                {study.utility}
                              </p>
                              <p className="font-ubuntu text-sm sm:text-base font-normal text-white/60 whitespace-pre-line leading-snug">
                                {study.utilitySubtitle}
                              </p>
                            </div>

                            {/* Impact Section */}
                            <div className="flex-1 lg:border-l-1 lg:border-white/60 lg:pl-3">
                              <h3 className="font-ubuntu mb-4 lg:mb-5 text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                                IMPACT
                              </h3>
                              
                              <ul className="space-y-3.5 lg:space-y-4">
                                {study.impacts.map((impact, index) => (
                                  <li key={index} className="text-xs sm:text-sm leading-relaxed">
                                    <span className="font-ubuntu font-bold text-white block mb-0.5">
                                      {impact.title}
                                    </span>
                                    <span className="font-poppins font-light text-white/60 block leading-snug">
                                      {impact.description}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Right Section - Image Only */}
                        <div className="relative h-64 sm:h-80 lg:h-auto lg:w-[35%] min-h-[400px] bg-gray-100 rounded-2xl">
                          <Image
                            src={study.image}
                            alt={study.imageAlt}
                            fill
                            className="object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="case-studies-pagination mt-4"></div>
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .case-studies-pagination {
            display: flex !important;
            align-items: center;
            justify-content: center;
            gap: 8px;
            position: static !important;
            flex-wrap: wrap;
            max-width: 100%;
          }
          
          @media (min-width: 768px) {
            .case-studies-pagination {
              justify-content: flex-end;
              gap: 12px;
            }
          }
          
          .case-studies-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: transparent;
            border: 2px solid var(--color-text-secondary);
            opacity: 1;
            margin: 0 !important;
            transition: all 0.3s ease;
            flex-shrink: 0;
          }
          
          .case-studies-pagination .swiper-pagination-bullet-active {
            background: var(--color-text-primary);
            border-color: var(--color-text-primary);
          }
          
          .case-studies-pagination .swiper-pagination-bullet:hover {
            border-color: var(--color-text-primary);
          }
        `}</style>
      </section>
      
      {/* Partnering with Utility Teams Globally */}
      <PartnersGlobalSection 
        title={PARTNERS_SECTION.title}
        partners={PARTNERS_SECTION.partners}
      />

      <CTASection title={IMPACT_PAGE.cta.title} />
    </>
  );
}
