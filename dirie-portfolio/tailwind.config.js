/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "green-custom": "#74c69d",
        "dark-green": "#1b4332",
        "light-grey": "#b7e4c7",
      },
    },
  },
  plugins: [require("daisyui")],
};
