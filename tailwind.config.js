/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlack: "#000000",
        lightBlack: "#333333",
      },
      screens: {
        "custom-md": "1000px",
        "md-lg": "1100px",
        "custom-xl": "1320px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
