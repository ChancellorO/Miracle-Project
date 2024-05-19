/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-yellow": "#FBBC04",
        "main-blue": "#1570EF",
        "primary-low": "#D1E9FF",
        "light-blue": "#D1E9FF",
        "dark-grey": "#3F3F3F", 
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        "white-gradient": "linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
