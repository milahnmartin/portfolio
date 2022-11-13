/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0a192f",
      secondary: "#64ffda",
      text: "#ccd6f6",
      text2: "#495670",
      secondaryHue: "hsl(166, 100%, 70%)",
    },
  },
};
