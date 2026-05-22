module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        cream: "#F5F1EA",
        card: "#FBF8F3",
        border: "#DDD6CC",
        text: "#2B2B2B",
        soft: "#7B7B7B",
        accent: "#B08B57",
      },

      fontFamily: {
        heading: ['"Cal Sans"', "sans-serif"],
        body: ['"Montserrat"', "sans-serif"],
        script: ['"Caveat"', "cursive"],
        fancy: ['"Licorice"', "cursive"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.04)",
      },

      borderRadius: {
        xl2: "24px",
      },
    },
  },

  plugins: [],
};
