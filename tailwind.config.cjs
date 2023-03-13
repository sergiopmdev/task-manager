/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "extra-dark-blue": "#162842",
      "dark-blue": "#1D3557",
      "medium-blue": "#457B9D",
      "light-blue": "#A8DADC",
      "off-white": "#F1FAEE",
      "standard-red": "#E63946",
      "error-color": "#EF4444",
      "success-color": "#22c55e",
    },
    fontFamily: {
      archivo: ["Archivo", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
