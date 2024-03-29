/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": "1536px",
      "3xl": "1700px",
    },
    fontFamily: {
      default: "NeueMontreal",
    },
    extend: {},
  },
  plugins: [],
};
