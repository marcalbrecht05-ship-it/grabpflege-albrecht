import React from "react";
export function Tabs({ items = [], value, onChange, style }) {
  const active = value ?? (items[0] && (items[0].value || items[0]));
  return (
    <div role="tablist" style={{ display: "flex", gap: "var(--space-8)", borderBottom: "1px solid var(--border-hairline)", ...style }}>
      {items.map((it) => {
        const v = it.value || it; const label = it.label || it; const on = v === active;
        return (
          <button key={v} role="tab" aria-selected={on} onClick={() => onChange && onChange(v)}
            style={{ background: "none", border: 0, borderBottom: `2px solid ${on ? "var(--accent)" : "transparent"}`, padding: "0 0 12px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-wider)", textTransform: "uppercase", color: on ? "var(--text-heading)" : "var(--text-subtle)", transition: "var(--transition-control)" }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
