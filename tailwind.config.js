/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        darkBlue: "#061521",
        deepNavy: "#071D2A",
        primaryText: "#F2F2F2",
        secondaryText: "#777777",
        subtleRed: "#8E001F",
        blueGlow: "#0A3A55",
      },
      fontFamily: {
        display: ["Teko", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
        cinematic: "0.25em",
      }
    },
  },
  plugins: [],
}
