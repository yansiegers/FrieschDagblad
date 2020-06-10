module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif Pro"', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        fdblue: '#00a4e8',
        fdorange: '#ff6633',
        fdwhite: '#ffffff',
        fdgray: {
          default: '#ededed',
          darker: '#c4c4c4'
        },
        fdblack: '#000000'
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
