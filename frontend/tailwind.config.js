/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#D6FFF6',
          100: '#12FFD1',
          500: '#00AE89',
          600: '#00786F',
          900: '#052F4A',
        },
        neutral: {
          white: '#FFFFFF',
          light: '#F0FDFA',
        },
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, #D6FFF6, #12FFD1)',
      },

      boxShadow: {
        'card': '0 4px 20px rgba(0, 174, 137, 0.15)',
        'card-hover': '0 10px 30px rgba(0, 174, 137, 0.25)',
      },

     
      borderRadius: {
        'full': '9999px',   
        'xl': '1.5rem',     
        'lg': '1rem', 
      },
    },
  },
  plugins: [],
}