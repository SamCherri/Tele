/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["@telesoccer-rp/shared", "@telesoccer-rp/ui"]
};

export default nextConfig;
