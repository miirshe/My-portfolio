/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', 
  distDir: 'dist',
  images: {
    domains: ['example.com'], 
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
