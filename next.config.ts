import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['example.com','a0.muscache.com'], // add your image host here
  },
};

export default nextConfig;
