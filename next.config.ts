import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "download.logo.wine",
      },
      {
        protocol: "https",
        hostname: "netmaxims.com",
      },
      {
        protocol: "https",
        hostname: "images.icon-icons.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
      },
      {
        protocol: "https",
        hostname: "cdn.iconscout.com",
      },
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
      },
      {
        protocol: "https",
        hostname: "canada1.discourse-cdn.com",
      },
      {
        protocol: "https",
        hostname: "ajeetchaulagain.com", // Added this domain
      },
      {
        protocol: "https",
        hostname: "logowik.com", // Added this domain
      },
      {
        protocol: "https",
        hostname: "www.peanutsquare.com", // Added this domain
      },
    ],
  },
};

export default nextConfig;