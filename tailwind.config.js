/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    // "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    // "./src/components/*.{js,jsx,ts,tsx}",
      // "./src/styles/**/*.{js,jsx,ts,tsx,css,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
