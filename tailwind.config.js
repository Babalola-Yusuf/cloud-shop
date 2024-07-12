/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
         'screen-x': '450px',
      },
      fontSize: {
        '10px': '10px',
      },
      colors: {
        
          purpleNormal: '#720439',
          purpleHover: '#720439',
          purpleActive: '#D3B1C2',
          cartBtnColor: '#9B9CA1',
          cartBtnColorHover: '#720439',
          cartBtnColorActive: '#720439',
          supplyInfoText: '#88898F',
          ProductCardBorderColor: '#EDEDED',
          productInfoBorderColor:'#D1D1D4',
  
        black: {
          light: '#e9e9e9',
          lightHover: '#dddddd',
          lightActive: '#b9b9b9',
          normal: '#1e1e1e',
          normalHover: '#1b1b1b',
          normalActive: '#181818',
          dark: '#171717',
          darkHover: '#121212',
          darkActive: '#0d0d0d',
          darker: '#0b0b0b',
        },
        gold: {
          light: '#fff8ed',
          lightHover: '#fff4e4',
          lightActive: '#ffe8c8',
          normal: '#ffb44c',
          normalHover: '#e6a244',
          normalActive: '#cc903d',
          dark: '#bf8739',
          darkHover: '#996c2e',
          darkActive: '#735112',
          darker: '#593f1b',
        },
      },
      
    },
  },
  plugins: [],
}

