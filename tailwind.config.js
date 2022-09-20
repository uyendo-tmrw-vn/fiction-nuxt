/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      "fic-white": "#fff",
      "fic-black": "#1c1c1c",
      "green-dark": "#45635f",
      "green-dark-hover": "#38504d",
      "oxford-blue": "#aab0b7",
    },
  },
  plugins: [],
}


