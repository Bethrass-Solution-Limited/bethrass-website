"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "./nav-links";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/about") {
    return pathname === "/about";
  }

  if (href === "/contact") {
    return pathname === "/contact";
  }

  if (href === "/solutions") {
    return pathname === "/solutions" || pathname.startsWith("/solutions/");
  }

  if (href === "/solutions/urs") {
    return pathname === "/solutions/urs" || pathname.startsWith("/solutions/urs/");
  }

  return false;
}

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname ? isActiveRoute(pathname, link.href) : false;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors border-b-2 pb-1 ${
                    isActive
                      ? "text-amber-400 border-amber-500"
                      : "text-stone-300 border-transparent hover:text-amber-500 hover:border-amber-500"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-stone-400 hover:bg-slate-900 hover:text-stone-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950 md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname ? isActiveRoute(pathname, link.href) : false;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium transition-colors border-b-2 pb-1 ${
                      isActive
                        ? "text-amber-400 border-amber-500"
                        : "text-stone-300 border-transparent hover:text-amber-500 hover:border-amber-500"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
