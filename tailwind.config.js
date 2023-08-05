/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "app-focus": "0 12px 24px 12px rgb(0 0 0 / 50%)",
        "app-blur": "0 6px 12px 6px rgb(0 0 0 / 25%)"
      }
    },
  },
  plugins: [],
};
