/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': '2fr 1fr',
      },
      backgroundImage: {
        'service': "url('./src/assets/servicebg.jpg')",
      }
    },
  },
  plugins: [],
}

