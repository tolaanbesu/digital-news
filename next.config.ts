/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com",'plus.unsplash.com'],
  },
  eslint:{
    ignoreDuringBuilds:true
  }
};

module.exports = nextConfig;
