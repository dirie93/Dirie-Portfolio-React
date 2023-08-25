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
    screens: {
      smallest: "360px",
      // => @media (min-width: 360px) { ... }

      phone: "400px",
      // => @media (min-width: 400px) { ... }

      medium: "460px",
      // => @media (min-width: 460px) { ... }

      middle: "500px",
      // => @media (min-width: 500px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      larger: "700px",
      // => @media (min-width: 700px) { ... }

      xl: "800px",
      // => @media (min-width: 800px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
