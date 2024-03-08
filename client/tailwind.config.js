/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#3321A6",
        color2: "#070A40",
        color3: "#2D4BA6",
        color4: "#E4E9F2",
        color5: "#04D9B2",
      },
      backgroundImage: {
        "cow-banner": "url('/src/assets/cow_banner.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};