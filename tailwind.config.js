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
        black: '#101112',
        'light-gray-100': '#EFF1F2', //user text in chat
        'light-gray-200': '#E0E2E5', //borders and lines
        'light-gray-300': '#71767C', //deselected and texts
        'light-gray-400': '#1A1C1D', //text

        'dark-gray-100': '#EFF1F2', //text
        'dark-gray-200': '#A4ABB3', //deselected inputs and subtitles
        'dark-gray-300': '#656A6F', //borders, lines and texts
        'dark-gray-400': '#2E3033', //background and blackout modal
        'dark-gray-500': '#232628', //background modal

      },
      'oasis-standard':{
        100: '#009B8F', 
        200: '#3299AA', 
        300: '#3F86BB', 
        400: '#4976C8', 
        500: '#524DB7', 
        550: '#5F56E3', 


      },
      'oasis-aqua':{
        100: '#8DD2CD',
        200: '#66B8B2',
        300: '#419E98',
        400: '#18837E',
        500: '#116864',
        600: '#0A4F4B',
      },
      'oasis-purple':{
        100: '#BDC2DE',
        200: '#A2A5CC',
        300: '#8889BC',
        400: '#6E6DAB',
        500: '#55519B',
        600: '#433E8F',
        
      },
      'oasis-blue':{
        100: '#56B0FF',
        200: '#0096E8',
        300: '#007BC0',
        400: '#00629A',
        500: '#004975',
        600: '#004975',
        
      },
    },
  },
};
export const plugins = [];
