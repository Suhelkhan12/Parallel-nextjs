import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "span-bg": "url('/casestudyImages/heading-bg.svg')",
        "digi-ten-bg": "url('/casestudyImages/blue-bg.svg')",
      },
      fontFamily: {
        pjsans: ["var(--font-plus-jakarta-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
