/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-RobotoCondensed)'],
        sans: ['var(--font-RobotoCondensed)'],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    },
  },
  plugins: [],
}

// colors: {
//   transparent: 'transparent',
//   current: 'currentColor',
//   'white': '#ffffff',
//   'purple': '#3f3cbb',
//   'midnight': '#121063',
//   'metal': '#565584',
//   'tahiti': '#3ab7bf',
//   'silver': '#ecebff',
//   'bubble-gum': '#f57676',
//   'bermuda': '#a5f3fc',
// },