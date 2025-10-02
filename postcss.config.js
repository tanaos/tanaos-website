// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        'tailwindcss', // if you use Tailwind
        'autoprefixer',
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ],
};
