/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        custom_blue: "#4F46E5FF",
        custom_color: "#ff7439",
        custom_color_hover: "#f5bca3",
        login: "#0084A8FF"
        
      },
      textColor: {
        custom_blue: "#4F46E5FF",
        custom_color: "#ff7439",
        custom_color_hover: "#f5bca3",
        login: "#0084A8FF"
      }
    },
    colors: {
      "login": "#0084A8FF"
    },
    backgroundColor: {
      "login": "#0084A8FF"
    }
  },
  plugins: []
}