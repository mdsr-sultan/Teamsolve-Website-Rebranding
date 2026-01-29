import Image from "next/image";
import { MapPin } from "lucide-react";

interface Partner {
  id: string;
  logo: string;
  logoAlt: string;
  location: string;
  name: string;
  useCase: string;
}

interface PartnersGlobalSectionProps {
  title: string;
  partners: readonly Partner[];
}

export function PartnersGlobalSection({ title, partners }: PartnersGlobalSectionProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto w-11/12 max-w-7xl">
        {/* Section Title */}
        <h2 className="font-ubuntu mb-10 sm:mb-12 lg:mb-16 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
          {title}
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col rounded-2xl border border-[var(--color-border-light)] bg-white overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Logo Container with Border Bottom */}
              <div className="flex h-28 sm:h-32 lg:h-48 items-center justify-center border-b border-[var(--color-border-light)] px-6 py-6">
                <div className="relative h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                {/* Location */}
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-[var(--brand-teal-dark)]" />
                  <span className="font-ubuntu text-xs font-bold uppercase tracking-wider text-[var(--brand-teal-dark)]">
                    {partner.location}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-ubuntu mb-2 text-base sm:text-lg font-bold leading-snug text-text-primary">
                  {partner.name}
                </h3>

                {/* Use Case */}
                <div className="mt-auto">
                  <p className="text-xs sm:text-sm leading-relaxed">
                    <span className="font-ubuntu font-bold text-[var(--brand-orange)]">
                      Use Case:{" "}
                    </span>
                    <span className="font-ubuntu font-medium text-text-secondary">
                      {partner.useCase}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
