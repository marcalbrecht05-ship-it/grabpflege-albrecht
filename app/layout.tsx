import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/shared/FloatingCta";
import { ConsentProvider } from "@/components/shared/CookieConsent";
import { Analytics } from "@/components/shared/Analytics";
import { Toaster } from "@/components/ui/sonner";
import { config } from "@/lib/config";

// Self-hosted über next/font: kein Request an Google zur Laufzeit, keine IP-Übertragung.
const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.siteUrl),
  title: {
    default: `${config.company.name} | ${config.company.claim}`,
    template: `%s | ${config.company.name}`,
  },
  description: config.seo.defaultDescription,
  openGraph: {
    title: config.company.name,
    description: config.seo.defaultDescription,
    url: config.seo.siteUrl,
    siteName: config.company.name,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.company.name,
    description: config.seo.defaultDescription,
    telephone: config.contact.phone,
    email: config.contact.email,
    url: config.seo.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.contact.address.street,
      postalCode: config.contact.address.zip,
      addressLocality: config.contact.address.city,
      addressCountry: "DE",
    },
    areaServed: config.contact.region,
  };

  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stein-50 text-schiefer-700">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ConsentProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingCta />
          <Analytics />
          <Toaster />
        </ConsentProvider>
      </body>
    </html>
  );
}
