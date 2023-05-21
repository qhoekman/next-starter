/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        ring: 'hsl(var(--color-ring))',
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
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
