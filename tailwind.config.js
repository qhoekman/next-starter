/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: '#1A1A1A',
        foreground: '#121212',
        ring: '#94a3b8',
        primary: {
          DEFAULT: '#FF8629',
          50: '#FFF1E5',
          100: '#FFE2CC',
          200: '#FFC294',
          300: '#FFA561',
          400: '#FF8629',
          500: '#F56A00',
          600: '#C25400',
          700: '#944000',
          800: '#612A00',
          900: '#331600',
          950: '#190B00',
        },
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
