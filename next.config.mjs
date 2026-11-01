/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // 1. Tell Next.js to create a static export
  output: 'export',

  // 2. Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;