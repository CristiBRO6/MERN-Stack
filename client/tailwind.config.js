/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '640px',
        'tablet': '768',
        'desktop': '1024px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}