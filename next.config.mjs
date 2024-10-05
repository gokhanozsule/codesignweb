/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: `/doeucuf7e/**`,
      },
    ],
  },
  serverRuntimeConfig: {
    appVersion: process.env.npm_package_version || "",
  },
};

export default nextConfig;
