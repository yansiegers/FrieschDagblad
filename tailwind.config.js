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
        fdgreen: '#7cb44f',
        fdwhite: '#ffffff',
        fdgray: {
          default: '#ededed',
          darker: '#c4c4c4'
        },
        fdblack: '#000000'
      },
      boxShadow: {
        lgr: '0 -10px 15px -3px rgba(0, 0, 0, .1), 0 -4px 6px -2px rgba(0, 0, 0, .05)'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'even'],
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
