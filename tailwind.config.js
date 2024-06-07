/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'pass': '0px 1px 20px rgba(0, 0, 0, 0.1)',
        'hover': '4px 4px 20px rgba(0, 0, 0, 0.4)'
      },
      textColor: {
        'navy': '#313bac'
      },
      transitionDuration: {
        '2000': '2000ms'
      }
    },
  },
  plugins: [],
}