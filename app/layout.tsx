import type React from "react";

import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社衝動 - Infrastructure for rapid resilience",
  description:
    "Disasters change lives overnight. We build modular systems that can restore essential services, governance, and community within seven days.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://morisawafonts.net/c/01K7PDGCZP7X20ZWHZ6E6FHHTV/mf.css"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <GoogleAnalytics gaId="G-GVDSW1LTEW" />
      </body>
    </html>
  );
}
