import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { NavLink } from "@/components/shared/nav-link";
import { CTAButton } from "@/components/shared/cta-button";

export function PageHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="container mx-auto w-11/12 py-4 lg:py-6 border-b border-divider">
        {/* Navigation Row */}
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center !outline-none">
            <Image
              src="/images/icons/teamSolve-logo.svg"
              alt="TeamSolve"
              width={250}
              height={50}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}
          </nav>

          {/* CTA Button - Black variant for pages */}
          <CTAButton 
            href="/contact"
            text="Get Started Today"
            variant="page"
          />
        </div>
      </div>
    </header>
  );
}
