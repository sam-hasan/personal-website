// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { max: '576px' },
      sm: { min: '576px' },
      md: { min: '768px' },
      lg: { min: '992px' },
      xl: { min: '1200px' },
      xxl: { min: '1400px' },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '1px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
