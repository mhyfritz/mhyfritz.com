const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./layouts/**/*.tsx"],
  darkMode: false,
  theme: {
    fontFamily: {
      brush: ["Qwigley", ...fontFamily.sans],
      sans: ["Orbitron", ...fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
