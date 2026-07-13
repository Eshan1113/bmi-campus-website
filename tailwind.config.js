/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b3a75', // University Logo Blue
          dark: '#082a54',
          light: '#1e4e8c',
          glow: 'rgba(11, 58, 117, 0.15)'
        },
        accent: {
          DEFAULT: '#0ea5e9', // Light Blue
          dark: '#0284c7',
          light: '#e0f2fe',
        },
        neutral: {
          dark: '#0f172a',
          gray: '#64748b',
          light: '#ffffff',
          border: '#e6eef9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        accent: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(11, 58, 117, 0.15)',
        'premium-hover': '0 20px 40px -10px rgba(11, 58, 117, 0.25)',
      }
    },
  },
  plugins: [],
}
