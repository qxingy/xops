/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/", destination: "/home", permanent: true }];
  },
};
