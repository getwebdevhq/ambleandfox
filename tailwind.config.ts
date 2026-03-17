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
          black: "#0A0A0A",
          white: "#FFFFFF",
          turquoise: "#00E5D0",
          cyan: "#00BFFF",
          crimson: "#E63946",
          yellow: "#FFE600",
          gray: "#F5F5F5",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px #0A0A0A",
        "brutal-lg": "8px 8px 0px #0A0A0A",
        "brutal-hover": "2px 2px 0px #0A0A0A",
        "brutal-turquoise": "4px 4px 0px #00E5D0",
        "brutal-cyan": "4px 4px 0px #00BFFF",
        "brutal-crimson": "4px 4px 0px #E63946",
        "brutal-yellow": "4px 4px 0px #FFE600",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
