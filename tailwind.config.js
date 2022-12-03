/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["estedad"],
      },
      colors: {
        main: {
          base: "#f1f1f2",
          primary: "#fde047",
          secondary: "#171717",
          tertiary: "#ffffff",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
