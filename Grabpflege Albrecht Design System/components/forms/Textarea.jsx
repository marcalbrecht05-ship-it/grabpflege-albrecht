import React from "react";
const control = (invalid, focus) => ({
  width: "100%", fontFamily: "var(--font-sans)", fontSize: "var(--fs-sm)", fontWeight: "var(--fw-light)", color: "var(--text-body)",
  background: "var(--bg-surface)", padding: "var(--pad-control-y) 14px", borderRadius: "var(--radius-sm)",
  border: `1px solid ${invalid ? "var(--danger)" : focus ? "var(--focus-ring)" : "var(--border-subtle)"}`,
  boxShadow: focus ? "var(--shadow-focus)" : "none", outline: "none", transition: "var(--transition-control)",
});
function Wrap({ label, hint, error, required, children, style }) {
  return (
    <label style={{ display: "grid", gap: "var(--space-2)", ...style }}>
      {label ? <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-wide)", color: "var(--text-heading)" }}>{label}{required ? <span style={{ color: "var(--text-accent)" }}> *</span> : null}</span> : null}
      {children}
      {error ? <span style={{ fontSize: "var(--fs-2xs)", color: "var(--danger)" }}>{error}</span>
        : hint ? <span style={{ fontSize: "var(--fs-2xs)", color: "var(--text-subtle)" }}>{hint}</span> : null}
    </label>
  );
}
export function Textarea({ label, hint, error, required, rows = 4, style, wrapperStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <Wrap label={label} hint={hint} error={error} required={required} style={wrapperStyle}>
      <textarea rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
        style={{ ...control(!!error, focus), lineHeight: "var(--lh-relaxed)", resize: "vertical", ...style }} />
    </Wrap>
  );
}
