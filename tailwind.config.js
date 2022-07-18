/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        red: '#FF4757',
        purple: '#3C227C',
        pink: '#F73C6B',
        lightPink: '#FFB4EA',
        darkPink: '#F080D0',
        black: '#373F41',
        yellow: '#FFA502',
        gray: '#737B7D',
        blue: '#4F55DD',
        lightBlue: '#8AD8FF',
        green: '#2ED573'
      }
    },
  },
  plugins: [],
}
