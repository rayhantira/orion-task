/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.html"],
  theme: {
    extend: {
      colors: {
        navy: "#0C111D",
        beige: "#f7f7f5",
        white: "#ffffff",
        green: "#d8f275",
        complete: "#f0f9c9",
        progress: "#dddef3",
        upcoming: "#f9e2d4",
        red: "#FF5555",
        grey: "#cecccc",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "414px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
