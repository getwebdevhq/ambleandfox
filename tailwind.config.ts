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
          black: "#1A1A1A",
          white: "#FFFFFF",
          primary: "#E67E22",
          background: "#F5F1EA",
          gray: "#F5F5F5",
          "gray-light": "#FAFAFA",
        },
        uk: {
          background: "#0B0B0B",
          primary: "#FF6A00",
          accent: "#C7F000",
          text: "#FFFFFF",
          subtext: "#A0A0A0"
        }
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
        "soft-lg": "0 20px 40px -10px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
