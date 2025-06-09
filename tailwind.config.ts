module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6949E7',
        purple: {
          950: '#1e1b4b',
        },
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
