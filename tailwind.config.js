/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
	content: ["./src/*.jsx", flowbite.content(), "./node_modules/flowbite/**/*.js", "./src/**/*.jsx", "./src/**/*.jsx"],
	theme: {
		extend: {
			fontFamily: { body: "Poppins" },
			colors: {
				primary: { 1: "#0AA6ED", 2: "#007CC6" },
				secondary: { 2: "#146920" },
			},
		},
	},
	plugins: [flowbite.plugin()],
};
