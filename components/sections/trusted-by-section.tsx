"use client";

import { useState } from "react";
import Image from "next/image";

// Logo data configuration - easily maintainable
const TRUSTED_LOGOS = [
  { src: "/images/clients/Detection-Services.png", alt: "Detection Services", width: 240, height: 80 },
  { src: "/images/clients/PIA.png", alt: "PIA", width: 160, height: 80 },
  { src: "/images/clients/Rand-Water.png", alt: "Rand Water", width: 220, height: 80 },
  { src: "/images/clients/Bali-Bago.png", alt: "Balibago Waterworks", width: 200, height: 80 },
  { src: "/images/clients/Petrons.png", alt: "Petrons", width: 260, height: 80 },
  { src: "/images/clients/Southington-Water-Department.png", alt: "Southington Water Department", width: 180, height: 80 },
  { src: "/images/clients/Howard-County.png", alt: "Howard County", width: 200, height: 80 },
  { src: "/images/clients/wannon-water.png", alt: "Wannon Water", width: 210, height: 80 },
  { src: "/images/clients/earthlab.png", alt: "Earthlab", width: 180, height: 80 },
  { src: "/images/clients/south-fort-collins.png", alt: "South Fort Collins", width: 210, height: 80 },
  { src: "/images/clients/Hrsd.png", alt: "HRSD", width: 200, height: 80 },
  { src: "/images/clients/nyc.png", alt: "NYC Environmental Protection", width: 180, height: 80 },
  { src: "/images/clients/fiji.png", alt: "Water Authority of Fiji", width: 160, height: 80 },
  { src: "/images/clients/midland.png", alt: "Midland", width: 180, height: 80 },
  { src: "/images/clients/urban-utilities.png", alt: "Urban Utilities", width: 200, height: 80 },
  { src: "/images/clients/exxor.png", alt: "Exxor", width: 180, height: 80 },
] as const;

// Section configuration
const SECTION_CONFIG = {
  title: "Trusted by Global Industry Leaders",
  animationDuration: 30, // seconds for full scroll cycle
} as const;

interface LogoItemProps {
  logo: (typeof TRUSTED_LOGOS)[number];
}

function LogoItem({ logo }: LogoItemProps) {
  return (
    <div className="flex h-32 w-64 items-center justify-center px-6 py-4">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-auto max-h-20 w-auto max-w-full object-contain"
      />
    </div>
  );
}

export function TrustedBySection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section 
      className="w-full py-12 lg:py-16 overflow-hidden"
      aria-label="Trusted by Global Industry Leaders"
    >
      {/* Section Title */}
      <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl lg:mb-14">
        {SECTION_CONFIG.title}
      </h2>

      {/* Logo Carousel Container */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsPaused(!isPaused)}
        role="region"
        aria-label="Client logos carousel"
      >

        {/* Scrolling Track */}
        <div
          className="flex w-max animate-scroll-left"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            animationDuration: `${SECTION_CONFIG.animationDuration}s`,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={`${logo.alt}-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
