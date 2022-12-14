/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').plugin} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "display-1": ["1.8rem"],
        "display-2": ["1.4rem"],
        "display-3": ["1.1rem"],
        "display-4": ["0.9rem"],
        "display-5": ["0.7rem"],
        "display-6": ["0.5rem"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translate(8px)" },
        },
        tooltipAppear: {
          "0%": { transform: "translateY(6px) translateX(-50%)" },
          "100%": { transform: "translateY(0) translateX(-50%)" },
        },
        tooltipAppearBottom: {
          "0%": { transform: "translateY(-6px) translateX(-50%)" },
          "100%": { transform: "translateY(0) translateX(-50%)" },
        },
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out",
        tooltipAppear: "tooltipAppear 100ms ease-in-out",
        tooltipAppearBottom: "tooltipAppearBottom 100ms ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".toggleBtn": {
          position: "relative",
          width: "32px",
          heigth: "32px",
          background: "black",
          // backgroundColor: "#ef5466",
          // borderRadius: "50%",
          // cursor: "pointer",
          // "&-thumb": {
          //   position: "absolute",
          //   top: "50%",
          //   transform: "translateY(50%)",
          //   right: "2px",
          //   zIndex: "20",
          //   borderRadius: "50%",
          //   width: "18px",
          //   heigth: "18px",
          //   backgroundColor: "#fff",
          // },
        },
      });
    }),
  ],
};
