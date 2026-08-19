import React from "react";
export function Tag({ children, selected = false, onRemove, icon, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-regular)", letterSpacing: "var(--ls-wide)", padding: "6px 12px", borderRadius: "var(--radius-pill)", transition: "var(--transition-control)", cursor: onRemove || rest.onClick ? "pointer" : "default",
        background: selected ? "var(--accent)" : hover ? "var(--bg-inset)" : "transparent",
        color: selected ? "var(--text-on-accent)" : "var(--text-body)",
        border: `1px solid ${selected ? "var(--accent)" : "var(--border-subtle)"}`, ...style }}>
      {icon}{children}
      {onRemove ? <span onClick={(e) => { e.stopPropagation(); onRemove(e); }} style={{ opacity: 0.6, fontSize: "var(--fs-2xs)" }}>✕</span> : null}
    </span>
  );
}
