/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7EDDE",
        "primary-dark": "#525252",
        "secondary-light": "#FEE198",
        "secondary-dark": "#634792",
        "extra-light": "#FFFFFF",
        "extra-dark": "#2C2C2C",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
