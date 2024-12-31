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
            h2: {
              marginTop: null,
              marginBottom: null,
            },
            h3: {
              marginTop: null,
              marginBottom: null,
            },
            p: {
              marginTop: null,
              marginBottom: null,
            },
            ul: {
              marginTop: null,
              marginBottom: null,
            },
            li: {
              marginTop: null,
              marginBottom: null,
            },
            hr: {
              marginTop: null,
              marginBottom: null,
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
