/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        recunited: '#227671',
        recunitedLight: '#5f9c98',
      },
    },
  },
  plugins: [],
};
