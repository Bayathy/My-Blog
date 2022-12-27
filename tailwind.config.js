/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary-light": "#cbc8e6",
        "secondary-light": "#9cc9e5",
        "extra-light": "#e1e7eb",
        "primary-dark": "#282A3A",
        "secondary-dark": "#735F32",
        "extra-dark": "#C69749",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
