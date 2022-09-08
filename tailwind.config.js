// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  // safelict generated all tailwind classef for edit mode
  // safelist: [{ pattern: /./ }],
  mode: 'jit',
  purge: [
    "./src/pages/**/*.tsx",
    "./src/pages/**/*.js",
    "./src/components/**/*.tsx",
    "./src/helpers/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
      },
    },
  },
  plugins: [],
};
