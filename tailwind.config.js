/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#E7F1FA',
        primary: '#1D1F2C',
        secondary: '#4A4C56',
        accent: '#6D8EA5',
        card: '#FFFFFFCC',
        border: '#BFD3E4',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'Inter', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
