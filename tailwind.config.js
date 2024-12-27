/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        funnel: ["var(--font-funnel_display)", "sans-serif"],
        royale: ["var(--font-royal)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
