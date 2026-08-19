"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { readConsent, writeConsent, type ConsentState } from "@/lib/consent";

interface ConsentContextValue {
  consent: ConsentState | null;
  bannerOpen: boolean;
  openBanner: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent muss innerhalb von ConsentProvider verwendet werden.");
  return ctx;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    // localStorage ist nur im Browser verfügbar und beim ersten Server-Render
    // unbekannt; das Hydrieren des Consent-Zustands gehört deshalb bewusst in
    // einen Effekt statt in den Render-Body.
    /* eslint-disable react-hooks/set-state-in-effect */
    const stored = readConsent();
    setConsent(stored);
    setBannerOpen(stored === null);
    /* eslint-enable react-hooks/set-state-in-effect */

    function onChange(e: Event) {
      setConsent((e as CustomEvent<ConsentState>).detail);
      setBannerOpen(false);
    }
    window.addEventListener("consent-change", onChange);
    return () => window.removeEventListener("consent-change", onChange);
  }, []);

  return (
    <ConsentContext.Provider value={{ consent, bannerOpen, openBanner: () => setBannerOpen(true) }}>
      {children}
      {bannerOpen ? <CookieConsentBanner onClose={() => setBannerOpen(false)} /> : null}
    </ConsentContext.Provider>
  );
}

function CookieConsentBanner({ onClose }: { onClose: () => void }) {
  const [showSettings, setShowSettings] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  function acceptAll() {
    writeConsent(true);
    onClose();
  }

  function rejectAll() {
    writeConsent(false);
    onClose();
  }

  function saveSelection() {
    writeConsent(statistics);
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-heading"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-stein-0/98 px-4 py-5 shadow-lg backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4">
        <div>
          <h2
            id="cookie-consent-heading"
            ref={headingRef}
            tabIndex={-1}
            className="!font-sans text-sm font-medium tracking-[.04em] text-schiefer-800 outline-none"
          >
            Cookie-Einstellungen
          </h2>
          <p className="mt-2 max-w-[64ch] text-sm font-light text-schiefer-600">
            Wir nutzen technisch notwendige Cookies für den Betrieb dieser Seite. Mit Ihrer Einwilligung
            möchten wir zusätzlich anonymisierte Statistik-Cookies einsetzen, um zu verstehen, wie die Seite
            genutzt wird. Ohne Ihre Zustimmung bleiben diese deaktiviert. Mehr dazu in unserer{" "}
            <Link href="/datenschutz">Datenschutzerklärung</Link>.
          </p>
        </div>

        {showSettings ? (
          <div className="flex flex-col gap-3 border-y border-hairline py-4">
            <div className="flex items-start gap-3">
              <Checkbox checked disabled id="consent-necessary" aria-label="Notwendige Cookies, immer aktiv" />
              <Label htmlFor="consent-necessary" className="text-sm font-normal text-schiefer-500">
                Notwendig (immer aktiv) — für Grundfunktionen wie das Speichern dieser Einstellung.
              </Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent-statistics"
                checked={statistics}
                onCheckedChange={(v) => setStatistics(v === true)}
              />
              <Label htmlFor="consent-statistics" className="text-sm font-normal text-schiefer-700">
                Statistik — anonymisierte Web-Analyse zur Verbesserung der Seite.
              </Label>
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          {showSettings ? (
            <Button variant="outline" onClick={saveSelection} className="rounded-md">
              Auswahl speichern
            </Button>
          ) : (
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="border-b border-moos-300 text-sm text-moos-700 hover:border-moos-700 hover:text-moos-900"
            >
              Einstellungen
            </button>
          )}
          <div className="ml-auto flex gap-3">
            <Button variant="outline" onClick={rejectAll} className="rounded-md">
              Ablehnen
            </Button>
            <Button variant="outline" onClick={acceptAll} className="rounded-md">
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsLink({ className }: { className?: string }) {
  const { openBanner } = useConsent();
  return (
    <button type="button" onClick={openBanner} className={className}>
      Cookie-Einstellungen
    </button>
  );
}
