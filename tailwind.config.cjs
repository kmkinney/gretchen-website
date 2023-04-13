/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D2E46",
          light: "#A26769",
        },
      },
      gridTemplateColumns: {
        "1/4": "1fr 4fr 1fr",
      },
    },
  },
  plugins: [],
};
