module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
    themes: ['dark']
  }
};
