import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        swing: {
          "0%, 100%": {transform: "translateX(0)"},
          "20%": {transform: "translateX(2px)"},
          "40%": {transform: "translateX(-2px)"},
          "60%": {transform: "translateX(2px)"},
          "80%": {transform: "translateX(-2px)"},
        }
      },
      animation: {
        swing: "swing 0.5s ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
