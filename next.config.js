/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"], // Strictly use [.page.tsx] extension to the router
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
