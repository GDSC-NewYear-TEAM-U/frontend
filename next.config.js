/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    }
    // styledComponents: true,
  },
};

module.exports = {
  experimental: {
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } }
    ]
  }
}

module.exports = nextConfig;
