module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'me': "url('/public/assets/Me_John.jpg')",
        'me_2': "url('/public/assets/DSC06953_Original.jpg')",
        'me_about': "url('/public/assets/DSC02097.jpg')"
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
