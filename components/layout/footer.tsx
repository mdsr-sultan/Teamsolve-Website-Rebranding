import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full border-t border-divider bg-white">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-10 lg:gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-2">
            {/* Logo */}
            <Link 
              href="/" 
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 rounded-sm w-fit"
            >
              <Image
                src="/images/icons/teamSolve-logo.svg"
                alt="TeamSolve"
                width={180}
                height={50}
                className="h-7 sm:h-8 w-auto"
              />
            </Link>
            
            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed text-text-secondary max-w-xs">
              Transform the complexity of infrastructure operations into actionable insights that teams can trust.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">Find us at</p>
              <div className="flex items-center gap-2">
                <Link
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/icons/linkdin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wide text-text-primary">
              Product
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm leading-relaxed text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wide text-text-primary">
              Company
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm leading-relaxed text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wide text-text-primary">
              Legal
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm leading-relaxed text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-divider bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row">
            <p className="text-xs sm:text-sm text-text-secondary text-center sm:text-left">
              © {new Date().getFullYear()} TeamSolve. All Rights Reserved.
            </p>
            <Link
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{SITE_CONFIG.email}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
