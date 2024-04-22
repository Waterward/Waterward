/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f4f8fb",
        "light-gray-0": "#fff",
        "light-gray-11": "#000",
        lightskyblue: {
          "100": "#62cdfa",
          "200": "#5dccfc",
        },
        "neutral-4": "#90a5b4",
        skyblue: {
          "100": "#82d6fa",
          "200": "rgba(142, 220, 252, 0.2)",
          "300": "rgba(142, 220, 252, 0.3)",
        },
        cornflowerblue: "rgba(49, 144, 232, 0.3)",
        "neutral-1": "#141a1e",
        red: "#ff0101",
        darkslategray: "#384144",
        "light-grey": "#f2f2f2",
        lightgray: "#d0d0d0",
        aliceblue: "#eaf8fe",
        "neutral-5": "#d0dbe2",
        "background-1": "#f5f8fb",
        gray: "#1a1b1c",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "font-awesome-6-free": "'Font Awesome 6 Free'",
        medium: "Poppins",
      },
      borderRadius: {
        "31xl": "50px",
        lg: "18px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
        "9xl": "28px",
        "81xl": "100px",
      },
    },
    fontSize: {
      xs: "12px",
      "5xl": "24px",
      sm: "14px",
      "6xl": "25px",
      lg: "18px",
      "3xs": "10px",
      xl: "20px",
      mini: "15px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
