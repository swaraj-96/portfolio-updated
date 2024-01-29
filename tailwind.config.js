/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "FarrowBallBorrowedLight": "#dbe5dc",
        "appTheme": "#FACB0B",
        "btnTheme" : "#21325E",
        "bgTheme" : "#F3F3FB",
        "darkBgTheme" : "#111928",
      },
    },
  },
  plugins: [],
}