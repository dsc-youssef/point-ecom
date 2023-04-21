/** @type {import('tailwindcss').Config} */
// tailwind.config.js

// Custom Config
const customColors = require('./config/tailwind/colors');
const customFontFamily = require('./config/tailwind/fontFamily');
const customFontSize = require("./config/tailwind/fontSize");
const customContainer = require("./config/tailwind/container");

module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      container: customContainer,
      colors: customColors,
      fontFamily: customFontFamily,
      fontSize: customFontSize
    },
  },
  plugins: [],
}

// all alone <3
