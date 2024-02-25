/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          // purple
          primary: "#9333ea",
          // white
          secondary: "#FFFFFF",
          //grey
          neutral: "#3d4451",

          // accent
          // ..cyan one

          // little dim for buttons

          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
};
