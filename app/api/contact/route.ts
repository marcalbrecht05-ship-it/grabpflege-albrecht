import { NextRequest, NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/contact-schema";

/**
 * In-memory Rate-Limiting (max. 5 Anfragen / IP / 10 Minuten). Für den
 * Einzel-Instanz-Betrieb ausreichend; bei mehreren Server-Instanzen durch
 * Upstash o.ä. ersetzen.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Bitte überprüfen Sie Ihre Angaben.", issues: parsed.error.flatten() }, { status: 400 });
  }

  const { website, formRenderedAt, ...data } = parsed.data;

  // Honeypot ausgefüllt → still verwerfen, aber Erfolg vortäuschen (kein Hinweis für Bots).
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Zeit-Token: Absenden < 2s nach Render gilt als verdächtig.
  if (Date.now() - formRenderedAt < 2000) {
    return NextResponse.json({ error: "Bitte versuchen Sie es erneut." }, { status: 400 });
  }

  // PLATZHALTER: kontaktBackend steht aktuell auf "frontend" (siehe lib/config.ts).
  // Es ist noch kein Versandweg (E-Mail/Webhook) angebunden. Bis dahin wird die
  // Anfrage nur serverseitig geloggt. Sobald ein Backend gewählt ist, hier den
  // Versand ergänzen (z.B. Resend-API-Call oder Webhook-POST).
  console.log("Neue Kontaktanfrage:", data);

  return NextResponse.json({ ok: true });
}
