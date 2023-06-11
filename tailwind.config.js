/** @type {import('tailwindcss').Config} */
export const content = ["./pages/**/*.jsx"];
export const theme = {
  extend: {
    colors: {
      "aston-green": "#0a5d55",
      "dark-1": "#000000",
      "dark-2": "#141414",
      "dark-3": "#1e1e1e",
      "dark-4": "#282828",
      "dark-5": "#323232",
      "dark-6": "#3c3c3c",
      "dark-7": "#464646",
      "dark-8": "#505050",
      "dark-9": "#5a5a5a",
      "dark-10": "#646464",
    },
    fontFamily: {
      'optima': ['Optima', 'serif'],
    }
  },
};
export const plugins = [require("@tailwindcss/typography")];
