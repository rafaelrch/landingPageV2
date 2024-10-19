/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#1A181B',  // Aqui você define a sua cor
      },
    },
  },
  plugins: [],
}