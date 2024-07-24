const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        heading_blue: "#2c3e50",
        lightText: "#bdc3c7",
        whiteText: "#f5f5f5",
        amazon_yellow: "#d4af37",
        light_gray:"#e0e0e0",
        dark_gray: "#2d2d2d",
        dark_theme: "#222831",
        light_color:"#ffffff",
        pinkshade:"#C000D3",
        teal:"#008080"
        // quantity_box: "#F0F2F2",
        // footerBottom: "#131A22",
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
      },
    },
  },
  plugins: [flowbite.plugin(), require('tailwind-scrollbar')],
}