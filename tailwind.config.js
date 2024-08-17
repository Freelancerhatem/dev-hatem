/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#1f242d",
      },

      fontFamily: {
        custom: ["Pacifico", "cursive"],
        font2: ["Lilita One", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
