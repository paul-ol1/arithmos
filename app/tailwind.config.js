/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:'rgba(117, 140, 163, 0.3)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: false,
  },
};
