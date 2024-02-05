/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayisViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
      backgroundImage: (theme) => ({
        desktop: "url('../images/bg-shorten-desktop.svg')",
        mobile: "url('../images/bg-shorten-mobile.svg')",
        "boost-desktop": "url('../images/bg-boost-desktop.svg')",
        "boost-mobile": "url('../images/bg-boost-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
