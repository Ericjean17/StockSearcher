/** @type {import('tailwindcss').Config} */
export default {
  // tell tailwind which files to scan for CSS classes
  // looks in all js and ts files in src folder
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // customizes tailwind's design system
  theme: { 
    screens: { // custom breakpoints
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: { // adds to default tailwind values without replacing them
      colors: {
        lightBlue: "hsl(215.02, 98.39%, 51.18%)", // e.g., bg-lightBlue, text-lightBlue
        darkBlue: "hsl(213.86, 58.82%, 46.67%)",
        lightGreen: "hsl(156.62, 73.33%, 58.82%)",
      },
      fontFamily: { // sets custom font family to font-sans
        sans: ["Poppins", "sans-serif"],
      },
      spacing: { // adds custom spacing value (p-180, m-180)
        180: "32rem",
      },
    },
  },
  plugins: [],
}

