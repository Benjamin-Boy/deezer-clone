/** @type {import('tailwindcss').Config} */
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
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out",
        tooltipAppear: "tooltipAppear 100ms ease-in-out",
      },
    },
  },
  plugins: [],
};
