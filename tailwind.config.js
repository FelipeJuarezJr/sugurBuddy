/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1A1A',
        'purple-dark': '#4A0080',
        'purple-medium': '#8A2BE2',
        'purple-bright': '#6A00B0',
        'purple-gradient-start': '#4A0080',
        'purple-gradient-end': '#6A00B0',
        'orange-accent': '#FF8C00',
        'card-dark': '#333333',
        'text-grey': '#AAAAAA',
        'accent-green': '#00FF00',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(180deg, #4A0080 0%, #6A00B0 100%)',
        'button-gradient': 'linear-gradient(180deg, #8A2BE2 0%, #6A00B0 100%)',
      },
    },
  },
  plugins: [],
}

