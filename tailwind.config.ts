import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shine: {
          '0%': { backgroundPositionX: '-500%' },
          '100%': { backgroundPositionX: '500%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
      fontFamily: {
        hack: ['Hack', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
