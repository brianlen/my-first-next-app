import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This enables static export
  basePath: '/my-first-next-app', // Replace with your GitHub repo name
  assetPrefix: "/my-first-next-app/",
  trailingSlash: true, // for better GitHub Pages compatibility
};

export default nextConfig;
