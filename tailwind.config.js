import { plugin } from "postcss";

export default {
  content : [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {
      fontFamily: {
        'poppins': ['"Playfair Display"', 'serif']
      }
    },
  },
  plugin: [],
}
