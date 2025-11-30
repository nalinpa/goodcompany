/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': '#E2A9F1',
        'vivid-red': '#E80D11',
        'cream': '#FFF8F3',
      },
      fontFamily: {
        'courier': ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [],
}