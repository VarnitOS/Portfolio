/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#050505",
          muted: "#0b0b0f",
          accent: "#0f1318",
        },
      },
    },
  },
  plugins: [],
};

