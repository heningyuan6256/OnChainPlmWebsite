/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const nextConfig = withLess({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
});

module.exports = nextConfig;
