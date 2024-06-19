/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    './src/**/*.{js,html,twig}'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2.5rem',
        lg: '2.5rem',
        xl: '3.125rem',
        '2xl': '9.375rem',
      },
    },
    screens: {
      'ipad': '1101px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

