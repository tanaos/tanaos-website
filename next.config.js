const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        // Optional: Add MDX plugins if needed (e.g., for syntax highlighting)
        // remarkPlugins: [require('remark-prism')],
        // rehypePlugins: [require('rehype-highlight')],
    },
});

const nextConfig = {
    // Use the new static export mode (replaces `next export`)
    output: 'export',
    // Helpful for GitHub Pages: creates `page/index.html` for '/page' routes
    trailingSlash: true,
    // Enable MDX processing
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);