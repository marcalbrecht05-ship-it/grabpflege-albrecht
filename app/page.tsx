import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Gallery } from "@/components/sections/Gallery";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: config.hero.headline,
  description: config.seo.defaultDescription,
  alternates: { canonical: config.seo.siteUrl },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <ServicesOverview />
      <AboutTeaser />
      {config.features.galerie ? <Gallery /> : null}
      <ServiceArea />
      <Faq />
      <CtaBand />
    </>
  );
}
