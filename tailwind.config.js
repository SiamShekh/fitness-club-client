/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppin': ["Poppins", "sans-serif"],
      'roboto': ["Roboto", "sans-serif"],
      'teko': ["Teko", "sans-serif"],
      // 'display': ['Oswald', ...],
      // 'body': ['"Open Sans"', ...],
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0d6efd",
          "secondary": "#6c757d",
          "accent": "#198754",
          "neutral": "#f8f9fa",
          "base-100": "#ffffff",
          "info": "#0dcaf0",
          "success": "#198754",
          "warning": "#ffc107",
          "error": "#dc3545",
        },
      },
    ],
  },
}
