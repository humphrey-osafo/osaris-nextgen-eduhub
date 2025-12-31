import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'localhost',
      'osaris-nextgen-eduhub.vercel.app', // Your Vercel deployment domain
      'images.unsplash.com',
      'source.unsplash.com',
      'res.cloudinary.com'
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
