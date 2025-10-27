/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all source files
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#024647",
        secondary: "#014745",
        lightGray: "#EAF2F1",
        darkGray: "#CED2D3",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
