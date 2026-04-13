/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#007878',
          50: '#e6f2f2',
          100: '#cce5e5',
          200: '#99cccc',
          300: '#66b2b2',
          400: '#339999',
          500: '#007878',
          600: '#006060',
          700: '#004848',
          800: '#003030',
          900: '#001818',
        },
        navy: {
          DEFAULT: '#0F2846',
          50: '#f0f2f5',
          100: '#d9dde6',
          200: '#b3bbcd',
          300: '#8c99b4',
          400: '#66779b',
          500: '#3f5582',
          600: '#0F2846',
          700: '#0b1e35',
          800: '#081524',
          900: '#050c13',
          950: '#030709',
        },
      },
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}
