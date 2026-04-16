import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rachelpham",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
