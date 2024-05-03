/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //screens: set sm, md, lg, xl, 2xl
    screens: {
      //set sm to max-width: 640px
      sm: "640px",
      //set md to max-width: 768px
      md: "768px",
      //set lg to max-width: 1024px
      lg: "1024px",
      //set xl to max-width: 1280px
      xl: "1280px",
      //set sm to max-width: 640px
      sm: { max: "640px" },
      //set md to max-width: 768px
      md: { max: "768px" },
      //set lg to max-width: 1024px
      lg: { max: "1024px" },
      //set xl to max-width: 1280px
      xl: { max: "1280px" }
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  plugins: [],
};