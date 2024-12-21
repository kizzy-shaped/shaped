import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 as any},
          "100%": { opacity: 1 as any },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.3s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
