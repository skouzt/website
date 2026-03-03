import Link from "next/link";

import { siteContent } from "@/app/lib/site-content";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: siteContent.links.pricing },
  { label: "Philosophy", href: siteContent.links.philosophy },
  { label: "Terms", href: siteContent.links.terms },
  { label: "Privacy", href: siteContent.links.privacy },
  { label: "Refund", href: siteContent.links.refund },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d9d6cc] bg-[#fffdf8]/80 py-10 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-[#4f5b6a] sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex flex-wrap items-center gap-5">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#1b2430]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p>
          © {siteContent.placeholders.copyrightYear} {siteContent.brandName}
        </p>
      </div>
    </footer>
  );
}
