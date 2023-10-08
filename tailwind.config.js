
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroback': "url('/src/assets/suits-bg.jpg')"
      }
    },
  },
  plugins: [],
}
