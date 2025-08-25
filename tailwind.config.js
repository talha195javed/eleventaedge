/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgb(36, 36, 36)', // Define the custom color variable
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
