import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';


module.exports = {
  plugins:
    process.env.NODE_ENV === 'production' ? 
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
            purgeCSSPlugin({
                content: [
                    "./app/**/*.{js,jsx,ts,tsx}",
                    "./components/**/*.{js,jsx,ts,tsx}",
                ],
                css: ["./styles/*.css"],
            })
        ]
    ] : [],
}