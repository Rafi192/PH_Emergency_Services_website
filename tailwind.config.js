// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // 👈 this tells Tailwind to scan your index.html
  ],
  theme: {
    extend: {
      colors: {
        customYellow: 'rgba(0, 0, 0, 1)',
        customGreen: 'rgba(245,255,246,1)',
        lightPink: 'rgba(217, 217, 217, 1)',
      },
    },
  },
  plugins: [],
};
