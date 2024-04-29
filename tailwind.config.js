/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  assets: ['./assets/fonts'],
  fontFamily: {
    Roboto: ['Roboto', 'sans-serif'],
  },
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
