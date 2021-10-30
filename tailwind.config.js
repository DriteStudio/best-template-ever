module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d2ccff',
          200: '#a599ff',
          300: '#7866ff',
          400: '#4b33ff',
          500: '#1e00ff',
          600: '#1800cc',
          700: '#120099',
          800: '#0c0066',
          900: '#060033',
        },
      },
    },
  },
}
