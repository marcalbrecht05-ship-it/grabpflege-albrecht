import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Erzeugt einen schlanken .next/standalone-Server (ohne volle node_modules)
  // für den Docker-Betrieb, siehe Dockerfile.
  output: "standalone",
};

export default nextConfig;
