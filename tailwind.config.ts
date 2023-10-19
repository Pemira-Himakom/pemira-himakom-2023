import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main": "#212332",
        "main-variant": "#2F3141",
        "pink": "#FFEEE9",
        "gold": "#E4BC53"
      },
      backgroundImage: () => ({
        'gradient-to-br': 'linear-gradient(to bottom, #FFC5B4, #F49071)',
      }),
      fontFamily: {
        sans: ['var(--font-pp-mori)'],
        display: ['var(--font-cinzel-decorative)'],
      },
    },
  },
  plugins: [],
};
export default config;
