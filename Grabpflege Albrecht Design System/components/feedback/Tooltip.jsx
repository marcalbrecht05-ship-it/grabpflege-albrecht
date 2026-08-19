import React from "react";
export function Tooltip({ label, children, placement = "top", style }) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === "bottom" ? { top: "calc(100% + 8px)" } : { bottom: "calc(100% + 8px)" };
  return (
    <span style={{ position: "relative", display: "inline-flex" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      <span role="tooltip" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", ...pos, opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden", transition: "opacity var(--dur-base) var(--ease-standard)", whiteSpace: "nowrap", background: "var(--schiefer-900)", color: "var(--text-inverse)", fontSize: "var(--fs-3xs)", letterSpacing: "var(--ls-wide)", padding: "6px 10px", borderRadius: "var(--radius-xs)", boxShadow: "var(--shadow-md)", pointerEvents: "none", zIndex: 40, ...style }}>{label}</span>
    </span>
  );
}
