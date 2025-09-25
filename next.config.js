const { createMDX } = require("fumadocs-mdx/next");

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withMDX(nextConfig);
