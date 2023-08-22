/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
