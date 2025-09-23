import { withOpenNext } from '@opennext/adapter-cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export, required for OpenNext
  experimental: { appDir: true }, // optional if using app directory
};

export default withOpenNext(nextConfig);
