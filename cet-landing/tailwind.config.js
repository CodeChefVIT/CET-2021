module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ccblue: '#3E62DF',
        cchover: '#1799E1',
        card: '#252D3A',
        cardfront: '#343C48',
        background: '#081220'
      }
    }

  },
  variants: {
    extend: {}
  },
  plugins: []
}
