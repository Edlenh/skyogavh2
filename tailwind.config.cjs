/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#f3f4f6",
        "gray-100": "#e5e7eb",
        "gray-500": "#9ca3af",
        "primary-100": "#CAF0F8",
        "primary-200": "#90E0EF",
        "primary-300": "#00B4D8",
        "primary-400": "#0077B6",
        "primary-500": "#03045E",
      },
      backgroundImage: (theme)=>({
        "gradient-bluegrey": "linear-gradient(90deg, #90E0EF 0%, #FFC837 100%)"
      }),
      fontFamily: {
        dsans: ["DM Sans", "sans-serif"],
        mont: ["Montserrat", "sans-serif"]
      },
      screens:{
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
      
    },
  },
  plugins: [],
}