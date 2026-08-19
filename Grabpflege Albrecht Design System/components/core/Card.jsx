import React from "react";
export function Card({ children, variant = "surface", interactive = false, padding = "var(--pad-card)", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    surface: { background: "var(--bg-surface)", border: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-sm)" },
    inset: { background: "var(--bg-inset)", border: "1px solid transparent", boxShadow: "none" },
    accent: { background: "var(--bg-accent-soft)", border: "1px solid var(--moos-200)", boxShadow: "none" },
    inverse: { background: "var(--bg-inverse)", border: "1px solid var(--border-inverse)", boxShadow: "none", color: "var(--text-inverse)" },
  }[variant];
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{ borderRadius: "var(--radius-md)", padding, transition: "box-shadow var(--dur-slow) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)", ...base,
        ...(interactive ? { cursor: "pointer" } : null),
        ...(interactive && hover ? { boxShadow: "var(--shadow-md)", borderColor: "var(--border-subtle)" } : null), ...style }}>
      {children}
    </div>
  );
}
