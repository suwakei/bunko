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
          "0%, 100%": {trasform: "translateX(0)"},
          "20%": {trasform: "translateX(2x)"},
          "40%": {trasform: "translateX(-2x)"},
          "60%": {trasform: "translateX(2x)"},
          "80%": {trasform: "translateX(-2x)"},
        }
      },
      animation: {
        swing: "swing 1s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
