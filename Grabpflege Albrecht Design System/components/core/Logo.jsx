import React from "react";
const SRC = { full: "logo-full.png", mark: "logo-mark.png", wordmark: "logo-wordmark.png" };
/** Renders the supplied brand artwork. assetBase must point at the design system's assets/ folder. */
export function Logo({ variant = "wordmark", height = 48, assetBase = "assets", style, ...rest }) {
  return <img src={`${assetBase}/${SRC[variant] || SRC.wordmark}`} alt="Grabpflege Albrecht" {...rest} style={{ height, width: "auto", display: "block", ...style }} />;
}
