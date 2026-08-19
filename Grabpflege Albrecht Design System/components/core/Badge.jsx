import React from "react";
const TONES = { neutral: ["var(--bg-inset)", "var(--text-muted)"], accent: ["var(--bg-accent-soft)", "var(--text-accent)"], success: ["var(--success-bg)", "var(--success)"], warning: ["var(--warning-bg)", "var(--warning)"], danger: ["var(--danger-bg)", "var(--danger)"], info: ["var(--info-bg)", "var(--info)"] };
export function Badge({ children, tone = "neutral", style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return <span {...rest} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1)", background: bg, color: fg, fontSize: "var(--fs-3xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-wider)", textTransform: "uppercase", padding: "4px 9px", borderRadius: "var(--radius-xs)", ...style }}>{children}</span>;
}
