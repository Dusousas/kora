/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // garante compatibilidade com export
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt/',
        permanent: false, // ou true para redirecionamento permanente (301)
      },
    ];
  },
};

export default nextConfig;