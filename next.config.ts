import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "img.freepik.com",
    }]
  }
};
module.exports = nextConfig;
// export default nextConfig;
