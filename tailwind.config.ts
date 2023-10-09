import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "slide-in-top":
          "slide-in-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "slide-in-top": {
          "0%": {
            transform: "translateY(-1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      colors: {
        main: "#fafafa",
        sub: "#EDEDED",
        accent: "#6C63FF",
        subAccent: "#beb397",
      },
      width: {
        "102": "28rem",
        "106": "32rem",
      },
      minWidth: {
        "96": "24rem",
        "102": "28rem",
        "106": "32rem",
      },
      maxHeight: {
        custom: "calc(100vh - 4rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".arrow-right": {
          width: "40px",
          height: "8px",
          "border-bottom": "solid 1px",
          "border-right": "solid 1px",
          transform: "skew(45deg)",
        },
      });
    }),
  ],
};
export default config;
