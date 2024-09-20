/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    darkMode: "class",
  theme: {
    extend: {
      colors: {
        'soft-red': '#f39a9f',
        'soft-orange': '#f8ac83',
        'soft-purple': '#bdb6cb',
        'soft-grey': '#18181b',
        'light-bg': '#ffffff',
        'light-text': '#000000',
      },
      gradientColorStops: theme => ({
        'soft-red': '#f39a9f',
        'soft-orange': '#f8ac83',
        'soft-purple': '#bdb6cb',
        'soft-grey': '#18181b',
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}