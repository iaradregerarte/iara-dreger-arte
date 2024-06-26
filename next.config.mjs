/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Isso permite servir imagens diretamente da pasta `/images`
  },
  // basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
  // assetPrefix: process.env.URL ? process.env.URL : undefined,
};

export default nextConfig;
