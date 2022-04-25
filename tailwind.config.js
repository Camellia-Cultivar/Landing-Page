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
        'primary': {
          DEFAULT: '#32EAC4',
          dark: '#045553',
          faded: '#b6f0e4',
          '5': '#f6fcfa',
          '10': '#e7f5f2',
          '50': '#D9FBF4',
          '100': '#C6F9EF',
          '200': '#A1F5E4',
          '300': '#7CF2D9',
          '400': '#57EECF',
          '500': '#32EAC4',
          '600': '#15CFA8',
          '700': '#109C7F',
          '800': '#0B6955',
          '900': '#06362C'
        },
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
