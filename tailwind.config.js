// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arima: ["Arima", "cursive"],
        charm: ["Charm", "cursive"],
        nunito: ["Nunito", "sans-serif"],
        rancho: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [],
};
