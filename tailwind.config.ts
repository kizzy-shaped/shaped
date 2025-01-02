import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0 as any'
					},
					'100%': {
						opacity: '1 as any'
					}
				},
				fadeOut: {
					'0%': {
						opacity: '1 as any'
					},
					'100%': {
						opacity: '0 as any'
					}
				},
				scaleToFull: {
					'0%': {
						transform: 'scale(1)',
						// borderRadius: '100%'
					},
					'100%': {
						transform: 'scale(100)',
						// borderRadius: '0%'
					},
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.25s ease-in-out',
				fadeOut: 'fadeOut 0.25s ease-in-out',
				'scale-to-full': 'scaleToFull 1s ease forwards',
			},
			screens: {
				xs: '320px',
				sm: '375px',
				md: '640px',
				lg: '768px',
				xl: '1024px',
				'2xl': '1280px',
				'3xl': '1440px',
				wmax_360: {
					raw: '(max-width: 359px)'
				},
				wmax_375: {
					raw: '(max-width: 374px)'
				},
				wmax_390: {
					raw: '(max-width: 389px)'
				},
				wmin_360: {
					raw: '(min-width: 360px)'
				},
				wmin_375: {
					raw: '(min-width: 375px)'
				},
				wmin_390: {
					raw: '(min-width: 390px)'
				},
				wmax_1920: {
					raw: '(max-width: 1919px)'
				},
				wmax_1680: {
					raw: '(max-width: 1679px)'
				},
				wmax_1600: {
					raw: '(max-width: 1599px)'
				},
				wmin_1920: {
					raw: '(min-width: 1920px)'
				},
				wmin_1680: {
					raw: '(min-width: 1680px)'
				},
				wmin_1600: {
					raw: '(min-width: 1600px)'
				},
				wmin_xs: {
					raw: '(min-width: 320px)'
				},
				wmin_sm: {
					raw: '(min-width: 375px)'
				},
				wmin_md: {
					raw: '(min-width: 640px)'
				},
				wmin_lg: {
					raw: '(min-width: 768px)'
				},
				wmin_xl: {
					raw: '(min-width: 1024px)'
				},
				wmin_2xl: {
					raw: '(min-width: 1280px)'
				},
				wmin_3xl: {
					raw: '(min-width: 1440px)'
				},
				wmax_xs: {
					raw: '(max-width: 319px)'
				},
				wmax_sm: {
					raw: '(max-width: 374px)'
				},
				wmax_md: {
					raw: '(max-width: 639px)'
				},
				wmax_lg: {
					raw: '(max-width: 767px)'
				},
				wmax_xl: {
					raw: '(max-width: 1023px)'
				},
				wmax_2xl: {
					raw: '(max-width: 1279px)'
				},
				wmax_3xl: {
					raw: '(max-width: 1439px)'
				},
				desktop: {
					raw: '(min-width: 1440px)'
				},
				large_desktop: {
					raw: '(min-width: 1920px)'
				},
				hmax_800: {
					raw: '(max-height: 799px)'
				},
				hmin_800: {
					raw: '(min-height: 800px)'
				},
				hmax_1080: {
					raw: '(max-height: 1080px)'
				},
				hmin_1080: {
					raw: '(min-height: 1080px)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
