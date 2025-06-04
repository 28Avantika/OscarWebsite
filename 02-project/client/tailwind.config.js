module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-arrow': 'slide-arrow 1s infinite',
      },
      backgroundImage: {
      'gradient-text': 'linear-gradient(to right, #4c1d95, #6b21a8, #0ea5e9)', // same as from-purple-900 via-violet-700 to-sky-500
    },
      keyframes: {
        'slide-arrow': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      backdropBlur: {
        sm: '4px',
      },
      spacing: {
        'image-sm': '5rem',  // 80px
        'image-md': '6rem',  // 96px
        'image-lg': '7rem',  // 112px
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};