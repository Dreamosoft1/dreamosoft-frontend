/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./src/*.jsx",
    ...flowbite.content(),
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        inter: ['"Inter" , sans-serif'],
      },
      colors: {
        primary: { 1: "#0AA6ED", 2: "#007CC6" },
        secondary: { 2: "#146920" },
        desc: "#0C61BA",
        title: "#173B61",
        section: { heading: "#006299", label: "#34BDFC" },
      },
    },
  },
  darkMode: "class",
  plugins: [flowbite.plugin()],
};
