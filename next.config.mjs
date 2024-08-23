/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  eslint: {
    // Désactive ESLint pendant la construction de production
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
        pathname: '/QmyZPJf',
      },
    ],
  },
};

export default nextConfig;
