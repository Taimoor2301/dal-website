/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#33687E",
        secondary: "#FF725E",
        g1: "#EBEBEB",
        dark: "#2A2F32",
      },

      fontFamily: {
        primary: ["Cairo", ""],
      },
    },
  },
  plugins: [],
};
