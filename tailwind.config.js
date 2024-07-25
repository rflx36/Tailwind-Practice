import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'HHRFont': ['RandomAhhFont']
    },
    extend: {

      colors: {
        primary: 'red'
      },
      transitionProperty: {
        'td': 'text-decoration'
      },
      animation:{
        'slide-1':'slide_1 0.5s',
        'slide-2':'slide_2 0.5s',
      },
      keyframes:{
        slide_1:{
          '0%':{transform:'translateY(40px) rotate(10deg)',opacity:'0%'},
          '100%':{transform: 'translateY(0) rotate(0deg)'}
        },
        slide_2:{
          '0%':{transform:'translateX(-200px) scale(0.1)'},
          '100%':{transform:''}
        }
      }
    },
  },
  plugins: [],
}

