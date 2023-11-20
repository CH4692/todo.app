import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f400b7",
          secondary: "#004cff",
          accent: "#008d5b",
          neutral: "#1c241c",
          "base-100": "#2a1b2d",
          info: "#00cfff",
          success: "#00b446",
          warning: "#ff9400",
          error: "#d40023",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
