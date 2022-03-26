module.exports = {
  content: [
    "./src/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'me': "url('/public/assets/Me_John.jpg')"
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
