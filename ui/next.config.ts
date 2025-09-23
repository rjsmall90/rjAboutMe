import cloudflareAdapter from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, 
  },
  output: 'standalone', 
  adapter: cloudflareAdapter(),
};

export default nextConfig;
