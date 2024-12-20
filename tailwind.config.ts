import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)', 'sans-serif"],
        montserrat: ["var(--font-montserrat)', 'serif"],
      },
      colors: {
        primary: '#304886',
        secondary: '#c70b0b',
        grey: '#b4b4b4',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
export default config;
