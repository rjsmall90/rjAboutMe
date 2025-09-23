import cloudflareAdapter from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: { appDir: true },
  adapter: cloudflareAdapter(),
};

export default nextConfig;
