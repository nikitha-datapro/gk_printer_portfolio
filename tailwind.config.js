/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c3c7cd',
          300: '#9ca1ab',
          400: '#717783',
          500: '#565c68',
          600: '#444a54',
          700: '#363b44',
          800: '#1f2329',
          900: '#131619',
          950: '#0a0c0f',
        },
        accent: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcda8',
          300: '#ffa970',
          400: '#ff7a37',
          500: '#fb5a11',
          600: '#ec4407',
          700: '#c43208',
          800: '#9c2a0f',
          900: '#7e2510',
          950: '#441005',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
