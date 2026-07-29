/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  turbopack: {
    root: process.cwd()
  },
  poweredByHeader: false,
  compress: true
};

export default nextConfig;
