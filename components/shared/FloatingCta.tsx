"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarHeart } from "lucide-react";

import { config } from "@/lib/config";

/**
 * Dezenter Floating-CTA, nur mobil. Erscheint erst nach dem Hero, klein und
 * mit leisem Schatten statt einer schweren, vollbreiten Sticky-Bottom-Bar.
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!config.features.floatingCta) return null;

  return (
    <Link
      href="/kontakt"
      className={`fixed bottom-5 right-5 z-30 flex min-h-11 items-center gap-2 rounded-full border border-hairline bg-stein-0 px-4 py-2.5 text-sm font-medium text-schiefer-800 shadow-sm transition-all duration-200 ease-out md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <CalendarHeart className="h-4 w-4 text-moos-700" aria-hidden="true" />
      Besichtigung anfragen
    </Link>
  );
}
