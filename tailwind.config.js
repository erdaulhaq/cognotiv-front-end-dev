/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-img': "url('/src/assets/bg-img.png')"
      }
    },
  },
  plugins: [],
}

