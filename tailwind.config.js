/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: "#0C111D",
        beige: "#FBFBFB",
        white: "#ffffff",
        purple: "#6538f1",
        blue: "#2B82FE",
        cardpurple: "#EAE8FE",
        complete: "#f0f9c9",
        progress: "#dddef3",
        upcoming: "#f9e2d4",
        red: "#FF5555",
        grey: "#B9BCC3",
        orange: "#F7770A",
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
