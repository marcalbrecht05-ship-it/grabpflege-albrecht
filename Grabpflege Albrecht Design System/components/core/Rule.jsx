import React from "react";
export function Rule({ width = "var(--rule-width)", align = "left", tone = "accent", style, ...rest }) {
  return <div {...rest} style={{ width, height: 1, background: tone === "accent" ? "var(--moos-700)" : "var(--border-subtle)", margin: align === "center" ? "0 auto" : undefined, ...style }} />;
}
