/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");
const colors = {
  transparent: twColors.transparent,
  white: "#fff",
  red: "#ee3323",
  bg: "#131126",
};
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    animation: {
      "spin-slow": "spin 10s linear infinite",
    },
    backgroundImage: {
      gr: "linear-gradient(135deg, rgba(37,34,62,1) 32%, rgba(20,16,57,1) 93%);",
    },
    colors,
    extend: {},
  },
  plugins: [],
};
