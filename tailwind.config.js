import typography from "@tailwindcss/typography";

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.jsx",
  ],
  theme: {
    extend: {
      colors: {},
      typography: {
        DEFAULT: {
          css: {
            "h2, h3, p, ul, li, hr": {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
