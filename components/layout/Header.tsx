"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-[84px] border-b transition-colors duration-200",
        scrolled ? "border-hairline bg-stein-0/92 backdrop-blur-[10px]" : "border-transparent bg-stein-50",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-moos-700 focus:px-4 focus:py-2 focus:text-sm focus:text-stein-0"
      >
        Zum Inhalt springen
      </a>

      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 border-none"
          aria-label={`${config.company.name} – Startseite`}
        >
          <Image src="/logo/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9" priority />
          <span className="font-display text-xl font-medium tracking-tight text-schiefer-800 hover:text-moos-700">
            {config.company.name}
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {config.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-none text-[13px] font-medium uppercase tracking-[.12em] text-schiefer-600 hover:text-moos-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${config.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 border-none text-sm text-schiefer-700 hover:text-moos-700"
          >
            <Phone className="h-4 w-4 text-moos-700" aria-hidden="true" />
            {config.contact.phone}
          </a>
          <Link href="/kontakt" className={buttonVariants({ variant: "default" })}>
            Anfrage senden
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden" })}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
          <SheetContent side="right" className="w-4/5 bg-stein-0 sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2.5 font-display text-lg">
                <Image src="/logo/logo-mark.png" alt="" width={28} height={28} className="h-7 w-7" />
                {config.company.name}
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Hauptnavigation (mobil)" className="flex flex-col gap-1 px-4">
              {config.navigation.map((item) => (
                <SheetClose key={item.href} render={<Link href={item.href} />} className="border-none">
                  <span className="block border-b border-hairline py-4 text-base text-schiefer-700 hover:text-moos-700">
                    {item.label}
                  </span>
                </SheetClose>
              ))}
              <a
                href={`tel:${config.contact.phone.replace(/\s+/g, "")}`}
                className="mt-4 flex items-center gap-2 border-none text-base text-schiefer-700"
              >
                <Phone className="h-4 w-4 text-moos-700" aria-hidden="true" />
                Anrufen: {config.contact.phone}
              </a>
              <SheetClose
                render={<Link href="/kontakt" />}
                className={buttonVariants({ variant: "default", className: "mt-4" })}
              >
                Anfrage senden
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
