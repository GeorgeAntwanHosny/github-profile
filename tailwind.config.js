/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_1: "#111729",
        color_2: "#1D1B48",
        color_3: "#3662E3",
        color_4: "#20293A",
        color_5: "#4A5567",
        color_6: "#CDD5E0",
      },
      fontFamily:{
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
      }
    },
    plugins: [],
  },
};
