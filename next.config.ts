import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daes5xl8ji16n.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gjabzwowgszdtblvityd.supabase.co",
        pathname: "/**",
      },
    ],
  },

  allowedDevOrigins: ['192.168.231.1', '192.168.1.71'],

  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
