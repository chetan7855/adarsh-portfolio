/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B111E",
        darkBlue: "#0E1A2B",
        deepNavy: "#132A42",
        primaryText: "#F8FAFC",
        secondaryText: "#94A3B8",
        subtleRed: "#BE123C",
        blueGlow: "#0284C7",
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
