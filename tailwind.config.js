/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        slideLeft: "slideLeft 1s ease-in-out",
      },
    },
    colors: {
      black: "#5E5B5B",
      brown: "#C3A370",
      cream: "#FAF7F5",
      white: "#FFFFFF",
      gray: "#939393",
      pink: "#FDC4DF",
      beige: "#F1DBBA",
      blue: "#A4B2CE",
      green: "#A7D3A0",
    },
    screens: {
      sm: "320px",

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
