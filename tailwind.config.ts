import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#171C19",
        "secondary": "#FFFFFF",
        "accent": "#0673BA",
        "accent2": "#EF4444"
      },
    },
  },
  plugins: [],
};
export default config;
