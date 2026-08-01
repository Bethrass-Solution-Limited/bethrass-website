import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { FOOTER_LINKS } from "./nav-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-stone-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm text-stone-500">
              <p>{siteConfig.legalName}</p>
              <p>
                {siteConfig.location.locality}, {siteConfig.location.region}
              </p>
              <p>{siteConfig.location.country}</p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-stone-500">
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-xs text-stone-500 transition-colors hover:text-stone-300"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
