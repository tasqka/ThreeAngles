/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            DEFAULT: '#f97316',
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407',
          },
          purple: {
            DEFAULT: '#7c3aed',
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
          },
          dark: '#0a0a0c',
          charcoal: '#121216',
          surface: '#f5f5f7',
          muted: '#71717a',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 10px 30px -10px rgba(249, 115, 22, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
