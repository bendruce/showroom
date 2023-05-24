/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "header-footer": "#333F4C",
        "custom-main": "#219ebc",
        "custom-lboro": "#a880e6",
        "custom-main-lighter": "#6dd1c7",
        "custom-main-darker": "#1a7a90",
        "background-dark1": "#1F1F2D",
        "background-dark2": "#3D4051",
        "background-dark3": "#333F4C",
        "background-dark4": "#5D5E76",
        "background-dark5": "#59747B",
        "background-dark6": "#26262c",
        "background-light1": "#EAE1DF",
        "background-light2": "#F7F7F7",
        "react-color": "#61DBFB",
        "sigma-color": "#B89769",
      },
      textColor: {
        "light-font": "#F7F7F7",
        "topnav-font": "#219ebc",
        "light-text": "#F7F7F7",
        "custom-lboro": "#a880e6",
      },
      fontFamily: {
        "font-custom-1": ["Cascadia Code", "monospace"],
        "font-custom-2": ['"DejaVu Sans"', "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        breathe: "breathe 2s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
