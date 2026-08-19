import React from "react";
export function NavLink({ children, href = "#", active = false, tone = "default", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const base = tone === "inverse" ? "var(--stein-0)" : "var(--text-body)";
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-2xs)", fontWeight: "var(--fw-medium)", letterSpacing: "var(--ls-wider)", textTransform: "uppercase", textDecoration: "none",
        color: active ? (tone === "inverse" ? "var(--stein-0)" : "var(--text-accent)") : base, opacity: hover || active ? 1 : 0.72,
        paddingBottom: 4, borderBottom: `1px solid ${active ? "currentColor" : "transparent"}`, transition: "var(--transition-control), opacity var(--dur-base) var(--ease-standard)", ...style }}>
      {children}
    </a>
  );
}
