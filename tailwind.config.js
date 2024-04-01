/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": "1536px",
      "3xl": "1800px",
    },
    fontFamily: {
      montreal: "NeueMontreal",
      grotesk: "Grotesk",
    },
    backgroundImage: {
      landing: 'url("./src/assets/content-image01.jpg")',
    },
    extend: {},
  },
  plugins: [],
};
