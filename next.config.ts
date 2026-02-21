import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This enables static export
  basePath: '/resume-app', // Replace with your GitHub repo name
  assetPrefix: "/resume-app/",
  trailingSlash: true, // for better GitHub Pages compatibility
};

export default nextConfig;
