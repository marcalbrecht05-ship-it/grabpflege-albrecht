import React from "react";
export function Switch({ label, checked = false, disabled = false, onChange, style }) {
  return (
    <label style={{ display: "inline-flex", gap: "var(--space-3)", alignItems: "center", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <span onClick={() => !disabled && onChange && onChange(!checked)}
        style={{ width: 42, height: 24, borderRadius: "var(--radius-pill)", padding: 3, display: "flex", alignItems: "center", transition: "background-color var(--dur-base) var(--ease-standard)",
          background: checked ? "var(--accent)" : "var(--stein-300)" }}>
        <span style={{ width: 18, height: 18, borderRadius: "var(--radius-pill)", background: "var(--stein-0)", boxShadow: "var(--shadow-xs)", transform: `translateX(${checked ? 18 : 0}px)`, transition: "transform var(--dur-base) var(--ease-standard)" }} />
      </span>
      {label ? <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-body)" }}>{label}</span> : null}
    </label>
  );
}
