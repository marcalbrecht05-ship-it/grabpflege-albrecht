export interface ConsentState {
  necessary: true;
  statistics: boolean;
  timestamp: string;
}

const STORAGE_KEY = "grabpflege-albrecht-consent";
/** Nach dieser Frist wird die Einwilligung erneut abgefragt. */
const CONSENT_MAX_AGE_DAYS = 180;

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    const ageMs = Date.now() - new Date(parsed.timestamp).getTime();
    if (ageMs > CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(statistics: boolean) {
  if (typeof window === "undefined") return;
  const state: ConsentState = { necessary: true, statistics, timestamp: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("consent-change", { detail: state }));
}
