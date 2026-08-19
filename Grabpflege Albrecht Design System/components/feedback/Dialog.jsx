import React from "react";
import { IconButton } from "../core/IconButton.jsx";
export function Dialog({ open = true, title, eyebrow, children, footer, onClose, width = 520 }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, display: "grid", placeItems: "center", padding: "var(--space-6)", background: "var(--bg-scrim)", backdropFilter: "blur(2px)" }}>
      <div role="dialog" aria-modal="true" style={{ width: "100%", maxWidth: width, background: "var(--bg-surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: "var(--pad-panel)", animation: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-4)" }}>
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            {eyebrow ? <span style={{ fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-widest)", textTransform: "uppercase", color: "var(--text-accent)" }}>{eyebrow}</span> : null}
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-2xl)", fontWeight: "var(--fw-regular)", color: "var(--text-heading)", margin: 0, lineHeight: "var(--lh-snug)" }}>{title}</h3>
          </div>
          {onClose ? <IconButton name="x" label="Schließen" variant="ghost" size={36} onClick={onClose} /> : null}
        </div>
        <div style={{ marginTop: "var(--space-5)", fontSize: "var(--fs-sm)", fontWeight: "var(--fw-light)", lineHeight: "var(--lh-relaxed)", color: "var(--text-body)" }}>{children}</div>
        {footer ? <div style={{ marginTop: "var(--space-8)", display: "flex", justifyContent: "flex-end", gap: "var(--space-3)" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
