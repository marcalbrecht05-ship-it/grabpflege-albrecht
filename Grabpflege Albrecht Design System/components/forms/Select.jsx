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
export function Select({ label, hint, error, required, options = [], placeholder, style, wrapperStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <Wrap label={label} hint={hint} error={error} required={required} style={wrapperStyle}>
      <span style={{ position: "relative", display: "block" }}>
        <select onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
          style={{ ...control(!!error, focus), appearance: "none", paddingRight: 38, cursor: "pointer", ...style }}>
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => { const v = typeof o === "string" ? o : o.value; const l = typeof o === "string" ? o : o.label; return <option key={v} value={v}>{l}</option>; })}
        </select>
        <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-subtle)", fontSize: 10 }}>▾</span>
      </span>
    </Wrap>
  );
}
