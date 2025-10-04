export default {
  plugins:
    [
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
        [
            '@fullhuman/postcss-purgecss',
            {
                content: [
                    './app/**/*.{js,jsx,ts,tsx}',
                    './components/**/*.{js,jsx,ts,tsx}',
                ],
                css: ['./styles/*.css'],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            }
        ],
    ]
}