import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [nextui()],
}

