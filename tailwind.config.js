
import colors from "tailwindcss/colors";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        input: "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      let allColors = theme("colors");
      let newVars = {};

      for (const [key, value] of Object.entries(allColors)) {
        if (typeof value === "string") {
          newVars[`--${key}`] = value;
        } else if (typeof value === "object") {
          for (const [shade, color] of Object.entries(value)) {
            newVars[`--${key}-${shade}`] = color;
          }
        }
      }

      addBase({
        ":root": newVars,
      });
    },
  ],
};

export default config;
