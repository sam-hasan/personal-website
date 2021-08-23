// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '412px',
      // => @media (min-width: 640px) { ... }

      md: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
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
