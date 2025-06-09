import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // serverExternalPackages: ["yjs"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
        // port: '',
        // pathname: '/u/**',
      },
      {
        protocol: "https",
        hostname: "bif.telkomuniversity.ac.id",
        // port: '',
        // pathname: '/u/**',
      },
    ],
  },
};

export default nextConfig;
