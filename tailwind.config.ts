import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react"


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#1E3B85",
        "blue-secondary": "#6486DE",
        "yellow-accent": "#FFC327",
        "neutral-black": "#0C1837",
        "neutral-white": '#E7EAF3',
      },
      screens: {
        'xs': '300px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
