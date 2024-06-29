/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#1E3B85",
        "blue-secondary": "#6486DE",
        "yellow-accent": "#FFC327"
      }
    },
  },
  plugins: [],
}

