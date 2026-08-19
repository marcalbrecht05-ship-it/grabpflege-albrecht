import React from "react";
const SIZES = { sm: { padding: "8px 14px", fontSize: "var(--fs-2xs)" }, md: { padding: "var(--pad-control-y) var(--pad-control-x)", fontSize: "var(--fs-xs)" }, lg: { padding: "14px 26px", fontSize: "var(--fs-sm)" } };
const VARIANTS = {
  primary: { background: "var(--accent)", color: "var(--text-on-accent)", border: "1px solid var(--accent)" },
  secondary: { background: "transparent", color: "var(--text-heading)", border: "1px solid var(--border-subtle)" },
  ghost: { background: "transparent", color: "var(--text-accent)", border: "1px solid transparent" },
  inverse: { background: "var(--stein-0)", color: "var(--schiefer-800)", border: "1px solid var(--stein-0)" },
};
const HOVER = {
  primary: { background: "var(--accent-hover)", borderColor: "var(--accent-hover)" },
  secondary: { background: "var(--bg-inset)", borderColor: "var(--border-strong)" },
  ghost: { background: "var(--bg-accent-soft)" },
  inverse: { background: "var(--stein-100)", borderColor: "var(--stein-100)" },
};
export function Button({ children, variant = "primary", size = "md", icon, iconPosition = "left", disabled = false, fullWidth = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <button
      type="button" disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      {...rest}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
        width: fullWidth ? "100%" : "auto", fontFamily: "var(--font-sans)", fontWeight: "var(--fw-medium)",
        letterSpacing: "var(--ls-wider)", textTransform: "uppercase", borderRadius: "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer", transition: "var(--transition-control), transform var(--dur-fast) var(--ease-standard)",
        ...SIZES[size], ...VARIANTS[variant], ...(hover && !disabled ? HOVER[variant] : null),
        ...(press && !disabled ? { transform: "translateY(1px)", background: variant === "primary" ? "var(--accent-press)" : undefined } : null),
        ...(disabled ? { opacity: 0.45 } : null), ...style,
      }}
    >
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </button>
  );
}
