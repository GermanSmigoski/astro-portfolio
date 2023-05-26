/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation:{
        'eating-path':'0.5 linear infinite'
      }
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
