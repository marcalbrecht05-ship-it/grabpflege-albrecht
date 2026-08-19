import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Checkbox({ label, description, checked = false, disabled = false, onChange, style }) {
  return (
    <label style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 20, height: 20, flex: "0 0 auto", marginTop: 1, display: "grid", placeItems: "center", borderRadius: "var(--radius-xs)", transition: "var(--transition-control)",
        background: checked ? "var(--accent)" : "var(--bg-surface)", border: `1px solid ${checked ? "var(--accent)" : "var(--border-subtle)"}`, color: "var(--text-on-accent)" }}>
        {checked ? <Icon name="check" size={13} /> : null}
      </span>
      <span style={{ display: "grid", gap: 2 }}>
        <span style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-regular)", color: "var(--text-body)" }}>{label}</span>
        {description ? <span style={{ fontSize: "var(--fs-2xs)", color: "var(--text-subtle)", fontWeight: "var(--fw-light)" }}>{description}</span> : null}
      </span>
    </label>
  );
}
