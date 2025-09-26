import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100], // какие уровни качества разрешены
  },
};

export default nextConfig;
