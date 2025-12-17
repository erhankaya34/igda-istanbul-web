/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/jesuscampos',
        destination: 'https://forms.gle/WhyXXRRtViidgEh87',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
