/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        coolkies: {
          dark: "#0f1717",
          yellow: "#f8d962",
          yellowDark: "#e2bf43",
          gold: "#F6B814",
          soft: "#f9fafb",
          muted: "#4b5563",
        },
      },
      fontFamily: {
        display: ["Fredoka One", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 15px rgba(0, 0, 0, 0.10), 0 4px 6px rgba(0, 0, 0, 0.08)",
        hero: "0 25px 50px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(135deg, rgba(248, 217, 98, 0.2) 0%, rgba(144, 132, 60, 0.1) 100%)",
        ctaGradient:
          "linear-gradient(90deg, rgba(248, 217, 98, 1) 0%, rgba(144, 132, 60, 1) 100%)",
      },
    },
  },
  plugins: [],
};
