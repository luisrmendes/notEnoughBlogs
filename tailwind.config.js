module.exports = {
    safelist: [
        /^language-/,
        /^token/,
    ],
    content: [
        "./posts/**/*.md",
        "./*.md",
        "./_includes/**/*.njk",
        "./*.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
