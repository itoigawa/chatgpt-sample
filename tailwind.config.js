/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    plugins: [
      // Docs: https://tailwindcss.com/docs/typography-plugin
      require('@tailwindcss/typography'),
      // Docs: https://daisyui.com/docs
      require('daisyui')
    ]
  },
  plugins: []
}
