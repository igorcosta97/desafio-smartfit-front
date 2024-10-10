/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothanBlack: ['gothan-black', 'sans-serif'], 
        gothanLight: ['gothan-light', 'sans-serif'],
        gothanBold: ['gothan-bold', 'sans-serif'],
        gothanBook: ['gothan-book', 'sans-serif']
      },
      colors: {
        darkGrey: '#333333', 
        lightGrey: '#808080',
        lightText: '#e5e5e5',   
        mediumText: '#939393', 
        yellow: '#FFB612',
        red: '#dc0a17', 
        green: '#2FC022',   
      }
    },
  },
  plugins: [],
}