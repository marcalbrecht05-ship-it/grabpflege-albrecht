"use client";

import Script from "next/script";

import { config } from "@/lib/config";
import { useConsent } from "@/components/shared/CookieConsent";

/**
 * Lädt Google Analytics ausschließlich nach aktiver Einwilligung
 * (consent.statistics === true) UND nur, wenn eine Measurement-ID
 * hinterlegt ist. Vor der Einwilligung wird kein <Script> gemountet,
 * es geht kein Request an Google.
 */
export function Analytics() {
  const { consent } = useConsent();

  if (!config.features.analytics) return null;
  if (!config.seo.gaId) return null;
  if (!consent?.statistics) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${config.seo.gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', { analytics_storage: 'granted' });
          gtag('config', '${config.seo.gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
