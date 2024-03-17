/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBody: '#23155B',
        textPrimary: '#8053FF',
        grayLight: '#817d8e',
      }
    },
  },
  plugins: [],
}

