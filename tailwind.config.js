/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary-light": "#cbc8e6",
        "secondary-light": "#9cc9e5",
        "extra-light": "#e1e7eb",
        "primary-dark": "#0A2647",
        "secondary-dark": "#144272",
        "extra-dark": "#2C74B3",
      },
      fontFamily: {
        sawarabi: ["var(--font-sawarabi)"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
