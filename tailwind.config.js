/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cheeseburga: ["CHEESEBURGA", "sans-serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
        baron: ["Baron Kuffner", "sans-serif"],
        bebas: ['"Bebas Neue"', "cursive"], // Add Bebas Neue as a custom font
      },
      fontWeight: {
        "custom-weight": 400, // Replace with your specific weight (100 to 900)
      },
      colors: {
        "custom-yellow": "#FFF280",
        "custom-green": "#7EFF5E",
      },
      borderWidth: {
        11: "11px", // Add custom border width
      },
      boxShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Custom text shadow
      },
    },
  },
  plugins: [],
};
