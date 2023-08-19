/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        primary: "#bc8028",//orange
        "accentColor" : "#bc8028",//orange
        "primaryColor" : "#f3f3f3",//white background
        "secondaryColor":"#000000",//black
        "background2":"#e5e5e5",//gray background
        "darkGray":"#808080",//darker gray (footer background)
        "textFormbg":"#FFFFFF",//textform background color(light grey)
        "textFormBorderbg":"#C7C7C7",//textform background color(light grey)
        background: {
          100: "#ffffff",
          700: "#808080"
        },
        surface: "#f9f9f9",
        onPrimary:"#ffffff",
        onBackground:"#000000",
        onSurface:"#000000",
        "dangerColor":"#CC3333",
      }

    },
  },
  plugins: [require('flowbite/plugin')],
}
