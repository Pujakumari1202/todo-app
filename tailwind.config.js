/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          200:"#b3daec",
          300:"#82bfde",
          400:"#479bc9",
          500:"#2c7fae",
          600:"#276793",
          700:"#265478",
          800:"#274863",
          900:"#243d55",
        },
  
    },
    },
  },
  plugins: [],
}

