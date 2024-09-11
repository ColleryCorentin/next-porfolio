/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': '#f39a9f',
        'soft-orange': '#f8ac83',
        'soft-purple': '#bdb6cb',
      },
      gradientColorStops: theme => ({
        'soft-red': '#f39a9f',
        'soft-orange': '#f8ac83',
        'soft-purple': '#bdb6cb',
      }),
    },
  },
  plugins: [],
}

