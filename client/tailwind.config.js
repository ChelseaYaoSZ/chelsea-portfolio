/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkColor: "#FA77C2",
        blueGreyColor: "#5B6A9A",
        lightBGColor: "#343746",
        darkBGColor: "#21222C",
        purperColor: "#A884DD",
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        'blink-caret': 'blink 1s linear infinite',
      },
      fontFamily: {
        'inria-serif': ['Inria Serif', 'serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'caveat-brush': ['"Caveat Brush"', 'cursive'],
        'sue-ellen': ['"Sue Ellen Francisco"', 'cursive'],
      },
    },
  },
  plugins: [],
};
