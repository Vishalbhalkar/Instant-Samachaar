/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tealt: '#008080',  // Indigo
        secondary: '#FF6F61', // Coral
        bluet: '#048cdb',    // Gold
        background: '#FFFFFF', // White
        coral: '#FF6F61', // Alias for Coral
      },
    },
  },
  plugins: [],
}

