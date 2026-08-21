import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { config } from "@/lib/config";
import { services } from "@/lib/services-data";
import { CookieSettingsLink } from "@/components/shared/CookieConsent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-schiefer-800 text-stein-0">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg text-stein-0">{config.company.name}</p>
          <p className="mt-3 max-w-[32ch] text-sm font-light text-stein-0/72">{config.company.claim}</p>
        </div>

        <nav aria-label="Leistungen">
          <h2 className="text-[12px] font-medium uppercase tracking-[.22em] text-stein-0/60">Leistungen</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="border-none text-sm text-stein-0/72 hover:text-stein-0"
                >
                  {service.titel}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/leistungen" className="border-none text-sm text-stein-0/72 hover:text-stein-0">
                Alle Leistungen &amp; Preise
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-[12px] font-medium uppercase tracking-[.22em] text-stein-0/60">Kontakt</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm font-light text-stein-0/72">
            <li>
              <a
                href={`tel:${config.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 border-none text-stein-0/72 hover:text-stein-0"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {config.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${config.contact.email}`}
                className="flex items-center gap-2 border-none text-stein-0/72 hover:text-stein-0"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {config.contact.email}
              </a>
            </li>
            <li>{config.contact.openingHours.werktags}</li>
            <li>{config.contact.openingHours.wochenende}</li>
          </ul>
        </div>

        <nav aria-label="Rechtliches">
          <h2 className="text-[12px] font-medium uppercase tracking-[.22em] text-stein-0/60">Rechtliches</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <Link href="/impressum" className="border-none text-stein-0/72 hover:text-stein-0">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="border-none text-stein-0/72 hover:text-stein-0">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/agb" className="border-none text-stein-0/72 hover:text-stein-0">
                AGB
              </Link>
            </li>
            <li>
              <CookieSettingsLink className="border-none text-stein-0/72 hover:text-stein-0" />
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-stein-0/10">
        <div className="mx-auto max-w-[1120px] px-6 py-6 text-xs font-light text-stein-0/50">
          © {year} {config.company.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
