/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
}

module.exports = nextConfig 