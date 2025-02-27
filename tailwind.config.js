/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors  : {
        Blue : '#004aad',
        Black : "#050505",
        White : "#FFFFFF",
      }
    },
  },
  plugins: [],
}