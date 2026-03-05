import type { Metadata } from "next";

import { siteContent } from "@/app/lib/site-content";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteContent.brandName} — ${siteContent.playStoreTitle}`,
  description: siteContent.playStoreShortDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body text-[var(--text-main)] antialiased">{children}</body>
    </html>
  );
}
