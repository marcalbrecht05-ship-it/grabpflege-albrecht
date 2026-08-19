import React from "react";
import { Rule } from "./Rule.jsx";
export function SectionHeading({ eyebrow, title, intro, align = "left", level = 2, rule = true, style }) {
  const H = "h" + level;
  return (
    <div style={{ textAlign: align, display: "grid", gap: "var(--space-3)", justifyItems: align === "center" ? "center" : "start", ...style }}>
      {eyebrow ? <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--text-accent)" }}>{eyebrow}</div> : null}
      {React.createElement(H, { style: { fontFamily: "var(--font-display)", fontSize: level <= 2 ? "var(--fs-3xl)" : "var(--fs-2xl)", fontWeight: "var(--fw-regular)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-tight)", color: "var(--text-heading)", margin: 0, maxWidth: "24ch" } }, title)}
      {rule ? <Rule align={align === "center" ? "center" : "left"} /> : null}
      {intro ? <p style={{ maxWidth: "var(--measure-prose)", fontSize: "var(--fs-md)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)", margin: 0 }}>{intro}</p> : null}
    </div>
  );
}
