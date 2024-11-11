/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
      colors: {
        offwhite:'#f4f1ec',
        light:'#f8f6f1',
        white:'#ffffff',
        brown:'#3B2F22',
      },
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}