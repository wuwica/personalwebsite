/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'title-text': '#eaeaea',
        'text': '#dfdfdf',
        'background': '#181818',
        'theme-red': '#dd3758',
        'theme-blue': '#43a5cc',
        'theme-purple': '#9c42c4',
        'theme-yellow': '#f2b529',
        'link': '#4c91ff',
        'card': '#ddd',
        'side': '#555',
        'theme-contact': '#a152c4',
      },
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'gradient-loop': 'gradient-loop 15s linear infinite',
        'slide-down': 'slide-down 1s forwards',
      },
      keyframes: {
        'gradient-loop': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '110% 110%' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '15%': { transform: 'translateY(-100%)' },
          '35%': { transform: 'translateY(0%)' },
          '60%': { transform: 'translateY(0%)' },
          '70%': { transform: 'translateY(65%)' },
          '99%': { opacity: '1', transform: 'translateY(100%)' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
