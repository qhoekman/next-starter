/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          fg: 'hsl(var(--color-primary-fg))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          fg: 'hsl(var(--color-secondary-fg))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--color-destructive))',
          fg: 'hsl(var(--color-destructive-fg))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          fg: 'hsl(var(--color-accent-fg))',
        },
      },
    },
  },
  plugins: [],
};
