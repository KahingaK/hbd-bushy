/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Gilda Display",
      secondary: "Barlow",
      tertiary: "Barlow Condensed",
      dancing: "Dancing Script",
      flower: "Indie Flower",
      doodle: "Rubik Doodle Shadow",
      kalam: "Kalam"
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: {
          DEFAULT: "#D2770F",
          hover: "#13262F",
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
      },
    },
  },
  plugins: [],
};
