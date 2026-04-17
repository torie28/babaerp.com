/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        'heading': ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['ui-monospace', 'Consolas', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#aa3bff',
          bg: 'rgba(170, 59, 255, 0.1)',
          border: 'rgba(170, 59, 255, 0.5)',
        },
        text: {
          DEFAULT: '#6b6375',
          heading: '#08060d',
        },
        bg: {
          DEFAULT: '#fff',
        },
        border: '#e5e4e7',
        code: '#f4f3ec',
        social: 'rgba(244, 243, 236, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
