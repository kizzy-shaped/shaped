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
      screens: {
        // Mobile screen sizes
        'xs': '320px',   // Small mobile devices (iPhone SE)
        'sm': '375px',   // Medium mobile devices (small iPhone, etc.)
        'md': '640px',   // Small tablets
        'lg': '768px',   // Tablets & small desktops
        'xl': '1024px',  // Larger desktops
        '2xl': '1280px', // Large desktops
        '3xl': '1440px', // Bigger screens (large desktops, laptops)
  
        // Specific width and height ranges for mobile & tablets
        'wmax_360': { 'raw': '(max-width: 359px)' },
        'wmax_375': { 'raw': '(max-width: 374px)' },
        'wmax_390': { 'raw': '(max-width: 389px)' },
        'wmin_360': { 'raw': '(min-width: 360px)' },
        'wmin_375': { 'raw': '(min-width: 375px)' },
        'wmin_390': { 'raw': '(min-width: 390px)' },

        'wmax_1920': { 'raw': '(max-width: 1919px)' },
      'wmax_1680': { 'raw': '(max-width: 1679px)' },
      'wmax_1600': { 'raw': '(max-width: 1599px)' },

      'wmin_1920': { 'raw': '(min-width: 1920px)' },
      'wmin_1680': { 'raw': '(min-width: 1680px)' },
      'wmin_1600': { 'raw': '(min-width: 1600px)' },

  // Min-screen
        'wmin_xs': { 'raw': '(min-width: 320px)' },
        'wmin_sm': { 'raw': '(min-width: 375px)' },
        'wmin_md': { 'raw': '(min-width: 640px)' },
        'wmin_lg': { 'raw': '(min-width: 768px)' },
        'wmin_xl': { 'raw': '(min-width: 1024px)' },
        'wmin_2xl': { 'raw': '(min-width: 1280px)' },
        'wmin_3xl': { 'raw': '(min-width: 1440px)' },
        // Min-screen
        
        // Max-screen
        'wmax_xs': { 'raw': '(max-width: 319px)' },
        'wmax_sm': { 'raw': '(max-width: 374px)' },
        'wmax_md': { 'raw': '(max-width: 639px)' },
        'wmax_lg': { 'raw': '(max-width: 767px)' },
        'wmax_xl': { 'raw': '(max-width: 1023px)' },
        'wmax_2xl': { 'raw': '(max-width: 1279px)' },
        'wmax_3xl': { 'raw': '(max-width: 1439px)' },
        // Max-screen
  
        // Large screens (desktops)
        'desktop': { 'raw': '(min-width: 1440px)' },
        'large_desktop': { 'raw': '(min-width: 1920px)' },
        
        // Height-specific ranges for better control
        'hmax_800': { 'raw': '(max-height: 799px)' },
        'hmin_800': { 'raw': '(min-height: 800px)' },
        'hmax_1080': { 'raw': '(max-height: 1080px)' },
        'hmin_1080': { 'raw': '(min-height: 1080px)' },
      },
    },
  },
  plugins: [],
} satisfies Config;
