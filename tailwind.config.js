/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        greenos: ["var(--font-greenos)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        moderniz: ["var(--font-moderniz)", "sans-serif"],
      },
      colors: {
        secondary_text: "#c0c0c0",
        route_hover: "#ffef9f",
        off_white: "#ffffe4",
        pastel_black: "#41444B",
      },
    },
  },
  plugins: [],
};
