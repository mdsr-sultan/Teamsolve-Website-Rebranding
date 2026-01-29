"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function NavLink({ href, label, className }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  // Handle hash links (smooth scroll to section)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a hash link
    if (href.includes("#")) {
      e.preventDefault();
      
      // Extract the base path and hash
      const [basePath, hash] = href.split("#");
      const isHomePage = basePath === "/" || basePath === "";
      
      // Check if we're already on the target page
      if (pathname === "/" || pathname === basePath) {
        // Same page - just scroll to section
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          window.history.pushState(null, "", `/#${hash}`);
        }
      } else {
        // Different page - navigate first, then scroll
        // Store the hash in sessionStorage so we can scroll after navigation
        sessionStorage.setItem("scrollToHash", hash);
        router.push(href);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "rounded-lg px-3.5 py-3 text-base font-medium transition-colors",
        isActive
          ? "bg-text-primary text-white"
          : "text-text-primary hover:bg-gray-100",
        className
      )}
    >
      {label}
    </Link>
  );
}
