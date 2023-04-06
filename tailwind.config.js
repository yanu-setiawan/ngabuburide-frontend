/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Arimo: "Arimo, sans-serif",
        Poppins: "Poppins, sans-serif",
        Lato: "Lato, sans-serif",
        OpenSans: "Open Sans, sans-serif",
        PlayFairDisplay: "Playfair Display, serif",
      },
      colors: {
        greyFont: "#B4B4B4",
        blackSec: "#1A1A1A",
        greySec: " #4D4D4D",
        yellow: "#FCE047",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};
