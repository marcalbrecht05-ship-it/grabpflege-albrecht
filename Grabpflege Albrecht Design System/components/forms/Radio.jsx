import React from "react";
export function Radio({ label, description, checked = false, disabled = false, name, value, onChange, style }) {
  return (
    <label style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 20, height: 20, flex: "0 0 auto", marginTop: 1, borderRadius: "var(--radius-pill)", display: "grid", placeItems: "center", transition: "var(--transition-control)",
        background: "var(--bg-surface)", border: `1px solid ${checked ? "var(--accent)" : "var(--border-subtle)"}` }}>
        {checked ? <span style={{ width: 10, height: 10, borderRadius: "var(--radius-pill)", background: "var(--accent)" }} /> : null}
      </span>
      <span style={{ display: "grid", gap: 2 }}>
        <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-body)" }}>{label}</span>
        {description ? <span style={{ fontSize: "var(--fs-2xs)", color: "var(--text-subtle)", fontWeight: "var(--fw-light)" }}>{description}</span> : null}
      </span>
    </label>
  );
}
