
module.exports =
{
    theme: {
        extend: {
            colors: {
                'brand-primary': '#112233'
            }
        }
    },
    variants: {},
    plugins: [],
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
        ]
    }
}