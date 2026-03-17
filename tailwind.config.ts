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
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          yellow: "#FFE600",
          red: "#FF3B30",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px #000000",
        "brutal-lg": "8px 8px 0px #000000",
        "brutal-hover": "2px 2px 0px #000000",
        "brutal-yellow": "4px 4px 0px #FFE600",
        "brutal-red": "4px 4px 0px #FF3B30",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
