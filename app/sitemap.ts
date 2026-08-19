import type { MetadataRoute } from "next";

import { config } from "@/lib/config";
import { services } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.seo.siteUrl;
  const staticRoutes = ["", "/leistungen", "/ueber-mich", "/kontakt", "/impressum", "/datenschutz", "/agb"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${base}/leistungen/${service.slug}`,
      lastModified: new Date(),
    })),
  ];
}
