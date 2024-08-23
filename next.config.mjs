/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  eslint: {
    // Désactive ESLint pendant la construction de production
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
