/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image: {
    domains: ['es.vecteezy.com'],
  },
};

module.exports = nextConfig;
