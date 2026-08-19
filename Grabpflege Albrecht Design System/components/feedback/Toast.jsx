import React from "react";
import { Icon } from "../core/Icon.jsx";
import { IconButton } from "../core/IconButton.jsx";
const TONES = { neutral: ["info", "var(--text-muted)"], success: ["check", "var(--success)"], warning: ["clock", "var(--warning)"], danger: ["triangle-alert", "var(--danger)"] };
export function Toast({ tone = "success", title, description, onClose, style }) {
  const [icon, color] = TONES[tone] || TONES.neutral;
  return (
    <div role="status" style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", minWidth: 320, maxWidth: 420, background: "var(--bg-surface)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: "var(--space-4) var(--space-5)", ...style }}>
      <span style={{ color, display: "flex", marginTop: 2 }}><Icon name={icon} size={18} /></span>
      <div style={{ display: "grid", gap: 3, flex: 1 }}>
        <span style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-heading)" }}>{title}</span>
        {description ? <span style={{ fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-normal)", color: "var(--text-muted)" }}>{description}</span> : null}
      </div>
      {onClose ? <IconButton name="x" label="Schließen" variant="ghost" size={28} onClick={onClose} /> : null}
    </div>
  );
}
