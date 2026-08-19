import React from "react";
const BASE = "https://unpkg.com/lucide-static@0.474.0/icons/";
/** Lucide (2px stroke) is the substituted icon set — no icon assets were supplied with the brand.
 *  Rendered as a currentColor mask so icons inherit text colour. */
export function Icon({ name = "leaf", size = 20, strokeWidth, style, ...rest }) {
  const url = `url("${BASE}${name}.svg")`;
  return (
    <span
      aria-hidden="true"
      {...rest}
      style={{ display: "inline-block", width: size, height: size, flex: "0 0 auto", background: "currentColor", WebkitMaskImage: url, maskImage: url, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center", WebkitMaskSize: "contain", maskSize: "contain", ...style }}
    />
  );
}
