module.exports = {
  content: [
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        link: "#2563eb",
        amber: {
          50: "#fffbeb",
          60: "#fffbec",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
