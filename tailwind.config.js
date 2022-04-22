module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#00dc82',
        'faded-primary':"#DFFBEF",
        'dark-primary':"#003720",
      },
      spacing:{
        '25':'6.25rem',
        '35':'9.375rem',
        '50':'12.5rem',
        '50px':'3.125rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
