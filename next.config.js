/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the new static export mode (replaces `next export`)
  output: 'export',

  // Helpful for GitHub Pages: creates `page/index.html` for '/page' routes
  trailingSlash: true,

  // Disable Next.js image optimization (not compatible with pure static export)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;