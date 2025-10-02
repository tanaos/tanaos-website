const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: {
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production'
            ? {
                  '@fullhuman/postcss-purgecss': {
                      content: [
                          './app/**/*.{js,ts,jsx,tsx,mdx}',
                          './components/**/*.{js,ts,jsx,tsx}',
                      ],
                      defaultExtractor: content =>
                          content.match(/[\w-/:]+(?<!:)/g) || [],
                  },
              }
            : {}),
    },
};