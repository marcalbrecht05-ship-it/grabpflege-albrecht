import React from "react";
import { Icon } from "./Icon.jsx";
export function IconButton({ name = "x", label, size = 38, variant = "secondary", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = variant === "ghost"
    ? { background: hover ? "var(--bg-inset)" : "transparent", border: "1px solid transparent", color: "var(--text-body)" }
    : { background: hover ? "var(--bg-inset)" : "var(--bg-surface)", border: "1px solid var(--border-subtle)", color: "var(--text-body)" };
  return (
    <button type="button" aria-label={label} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-sm)", cursor: "pointer", transition: "var(--transition-control)", ...v, ...style }}>
      <Icon name={name} size={Math.round(size * 0.45)} />
    </button>
  );
}
