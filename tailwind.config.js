/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        100: '100%',
      },

      fontFamily: {
            'sans': ['-apple-system', 'BlinkMacSystemFont'],
            'serif': ['Georgia'],
              'mono': ['SFMono-Regular', 'Menlo'],
              'display': ['Oswald'],
              'body': ['Open Sans'],
              }
    },
  },
  plugins: [],
}