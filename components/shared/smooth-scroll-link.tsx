"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmoothScrollLink({ 
  href, 
  children, 
  className,
  onClick 
}: SmoothScrollLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Handle hash link clicks (smooth scroll to section)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a hash link
    if (href.includes("#")) {
      e.preventDefault();
      
      // Call optional onClick callback first
      onClick?.();
      
      // Extract the base path and hash
      const [basePath, hash] = href.split("#");
      
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
        sessionStorage.setItem("scrollToHash", hash);
        router.push(href);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(className)}
    >
      {children}
    </Link>
  );
}
