/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  turbopack: {
    root: process.cwd()
  },
  poweredByHeader: false,
  compress: true
};

export default nextConfig;
