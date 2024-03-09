/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#3a9939",
        color2: "#3f6f35",
        color3: "#3f6f35",
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