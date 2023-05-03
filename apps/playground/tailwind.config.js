/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/vue/**/*.{vue,js, xts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  presets: [
    require('@blank/tailwindcss'),
  ],
}
