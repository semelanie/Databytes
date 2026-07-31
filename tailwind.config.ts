import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // structure ready; not toggled in v1 — see DATABYTES_SPEC.md §2
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42A8E6",
        deep: "#1E3A8A",
        navy: "#1B1464",
        ink: "#1F2937",
        mist: "#F4F7FA",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #1B1464 0%, #1E3A8A 45%, #42A8E6 100%)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(27, 20, 100, 0.08)",
        "card-hover": "0 12px 32px rgba(27, 20, 100, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
