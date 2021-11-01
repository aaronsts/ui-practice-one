console.log(process.env.NODE_ENV);
const purge = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  purge: { enabled: purge, content: ["./build/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      staatliches: "Staatliches, cursive",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
