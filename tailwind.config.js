module.exports = {
  content: [
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "fill-rred",
    "fill-ggreen",
    "fill-yyellow",
    "fill-bblue",
    "fill-ppurple",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kalam: ["Kalam", "cursive"],
      },
      colors: {
        link: "#2563eb",
        amber: {
          50: "#fffbeb",
          60: "#fffbec",
        },
        rred: "#FF5733",
        ggreen: "#006d5b",
        bblue: "#2243b6",
        ppurple: "#BF40BF",
        yyellow: "#FFC000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
