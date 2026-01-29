"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { NavLink } from "@/components/shared/nav-link";
import { CTAButton } from "@/components/shared/cta-button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle hash link clicks for mobile menu (smooth scroll to section)
  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a hash link
    if (href.includes("#")) {
      e.preventDefault();
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      
      // Extract the base path and hash
      const [basePath, hash] = href.split("#");
      
      // Check if we're already on the target page
      if (pathname === "/" || pathname === basePath) {
        // Same page - just scroll to section
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          // Small delay to allow menu close animation
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            window.history.pushState(null, "", `/#${hash}`);
          }, 100);
        }
      } else {
        // Different page - navigate first, then scroll
        sessionStorage.setItem("scrollToHash", hash);
        router.push(href);
      }
    } else {
      // For non-hash links, just close menu
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 w-full">
        <div className="container mx-auto w-11/12 py-4 lg:py-6 border-b border-divider">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center !outline-none" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/images/icons/teamSolve-logo.svg"
                alt="TeamSolve"
                width={250}
                height={50}
                className="h-7 w-auto sm:h-8 lg:h-9"
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

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <CTAButton 
                href="/contact"
                text="Get Started Today"
                variant="header"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center rounded-md p-2 text-text-primary transition-colors hover:bg-gray-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative flex h-full w-full flex-col bg-white">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between border-b border-divider px-6 py-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/images/icons/teamSolve-logo.svg"
                  alt="TeamSolve"
                  width={250}
                  height={50}
                  className="h-7 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-md p-2 text-text-primary transition-colors hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashLinkClick(e, link.href)}
                  className="text-2xl font-medium text-text-primary transition-colors hover:text-navy"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button at Bottom */}
            <div className="border-t border-divider p-6">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:bg-navy/90"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
