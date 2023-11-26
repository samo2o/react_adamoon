/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#327BFF',
        secondary: '#54E2FF',
        black: '#000000',
        white: '#F8F8F8',
        adamoonRed: '#F01C3E',
        adamoonYellow: '#FFA900',
        adamoonPurple: '#775ADA',
      },
      fontFamily: {
        titillium: [ 'Titillium Web', 'sans-serif'],
        fredoka: [ 'Fredoka', 'sans-serif']
      }
    },
  },
  plugins: [],
}

