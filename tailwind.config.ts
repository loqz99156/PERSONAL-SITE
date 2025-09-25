import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1173d4",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",  // 淇娣辫壊鑳屾櫙鑹?        "text-primary": "#1B1C26",
        "text-secondary": "#4b5563",
      },
      fontFamily: {
        display: ["Inter"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
