/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E5E2C8",
        primary: "#f5f5dc",
      },
      fontFamily: {
        Questrial: ["Questrial"],
        amsterdam: ["Amsterdam Two", "sans-serif"],
        opensans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
