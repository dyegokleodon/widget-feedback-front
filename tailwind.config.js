module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      bordeRadious:{
        md: '4px'
      },
      colors: {
        brand: {
          300: '#9960FF',
          500: '#8257e6'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ]
}
