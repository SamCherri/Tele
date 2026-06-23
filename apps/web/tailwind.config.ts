import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pitch: "#113d2d",
        neon: "#7CFF6B"
      }
    }
  },
  plugins: []
};

export default config;
