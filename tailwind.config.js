/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      bosch: {
        white: "#FFFFFF",
      },
      "bosch-gray": {
        100: "#E0E2E5",
        250: "#B2B9C0",
        300: "#A4ABB3",
        400: "#8A9097",
        550: "#656A6F",
        950: "#101112",
      },
      "bosch-blue": {
        50: "#E8F1FF",
        250: "#7EBDFF",
        500: "#007BC0",
        750: "#003E64",
      },
      "bosch-blue-green": {
        50: "#DEF5F3",
        250: "#79C5C0",
        500: "#18837E",
        750: "#07423F",
      },
      "bosch-green": {
        50: "#E2F5E7",
        250: "#E2F5E7",
        350: "#4AB073",
        500: "#00884A",
        750: "#004523",
      },
      "bosch-yellow": {
        50: "#FFEFD1",
        250: "#DEB300",
        500: "#8F7300",
        750: "#493900",
      },
      "bosch-red": {
        50: "#FFECEC",
        250: "#FF9D9D",
        500: "#ED0007",
        600: "#BE0004",
        750: "#7D0002",
      },
      "bosch-purple": {
        50: "#F7EEF6",
        250: "#E5A2DF",
        500: "#C535BC",
        750: "#671761",
      },
    },
  },
};
export const plugins = [];
