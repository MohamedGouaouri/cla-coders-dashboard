/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgNavLight: '',
        bgNavDark: '#23155B',
        bgMainLight: '#23155B',
        bgMainDark: '#4322c9a3',
        bgCardDark: '#4322c9',
        bgUserDark: '#6a45ff',
        bgCodeDark: '#1e1e1e',

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

