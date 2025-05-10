/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ["Inter", "sans-serif"],
          dmsans: ["DM Sans", "sans-serif"],
          lexend: ["Lexend" , "sans-serif"],
          urbanist: ["Urbanist", "sans-serif"],
        }
      },
    },
    plugins: [],
  };
  