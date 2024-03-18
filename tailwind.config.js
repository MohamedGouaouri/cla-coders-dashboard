/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

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
      },
      height: {
        '200': '200px',
      }
    },
  },
  plugins: [daisyui],
}

