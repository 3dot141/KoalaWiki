/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,  
  transpilePackages: ['antd','@ant-design/icons'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://koalawiki:8080/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 
