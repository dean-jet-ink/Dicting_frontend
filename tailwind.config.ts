import { Rotate3D } from "lucide-react";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
        "rotate-circle-right-10deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(10deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-20deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(20deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-30deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(30deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-40deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(40deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-50deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(50deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-60deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(60deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-70deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(70deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-80deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(80deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-90deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(90deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-100deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(100deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-110deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(110deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-120deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(120deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-130deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(130deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-140deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(140deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-150deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(150deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-160deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(160deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-170deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          to: {
            transform: "rotate(170deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-right-180deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(180deg)",
            background: "#beb397",
          },
          "50.01%": {
            transform: "rotate(360deg)",
            background: "#6C63FF",
          },
          "100%": {
            transform: "rotate(360deg)",
            background: "#6C63FF",
          },
        },
        "rotate-circle-left-10deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(10deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-20deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(20deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-30deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(30deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-40deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(40deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-50deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(50deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-60deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(60deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-70deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(70deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-80deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(80deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-90deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(90deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-100deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(100deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-110deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(110deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-120deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(120deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-130deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(130deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-140deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(140deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-150deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(150deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-160deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(160deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-170deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(170deg)",
            background: "#beb397",
          },
        },
        "rotate-circle-left-180deg": {
          "0%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "50%": {
            transform: "rotate(0deg)",
            background: "#beb397",
          },
          "100%": {
            transform: "rotate(180deg)",
            background: "#beb397",
          },
        },
      },
      animation: {
        "slide-in-top":
          "slide-in-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "rotate-circle-left-10deg":
          "rotate-circle-left-10deg .8s linear forwards",
        "rotate-circle-left-20deg":
          "rotate-circle-left-20deg .8s linear forwards",
        "rotate-circle-left-30deg":
          "rotate-circle-left-30deg .8s linear forwards",
        "rotate-circle-left-40deg":
          "rotate-circle-left-40deg .8s linear forwards",
        "rotate-circle-left-50deg":
          "rotate-circle-left-50deg .8s linear forwards",
        "rotate-circle-left-60deg":
          "rotate-circle-left-60deg .8s linear forwards",
        "rotate-circle-left-70deg":
          "rotate-circle-left-70deg .8s linear forwards",
        "rotate-circle-left-80deg":
          "rotate-circle-left-80deg .8s linear forwards",
        "rotate-circle-left-90deg":
          "rotate-circle-left-90deg .8s linear forwards",
        "rotate-circle-left-100deg":
          "rotate-circle-left-100deg .8s linear forwards",
        "rotate-circle-left-110deg":
          "rotate-circle-left-110deg .8s linear forwards",
        "rotate-circle-left-120deg":
          "rotate-circle-left-120deg .8s linear forwards",
        "rotate-circle-left-130deg":
          "rotate-circle-left-130deg .8s linear forwards",
        "rotate-circle-left-140deg":
          "rotate-circle-left-140deg .8s linear forwards",
        "rotate-circle-left-150deg":
          "rotate-circle-left-150deg .8s linear forwards",
        "rotate-circle-left-160deg":
          "rotate-circle-left-160deg .8s linear forwards",
        "rotate-circle-left-170deg":
          "rotate-circle-left-170deg .8s linear forwards",
        "rotate-circle-left-180deg":
          "rotate-circle-left-180deg .8s linear forwards",
        "rotate-circle-right-10deg":
          "rotate-circle-right-10deg .8s linear forwards",
        "rotate-circle-right-20deg":
          "rotate-circle-right-20deg .8s linear forwards",
        "rotate-circle-right-30deg":
          "rotate-circle-right-30deg .8s linear forwards",
        "rotate-circle-right-40deg":
          "rotate-circle-right-40deg .8s linear forwards",
        "rotate-circle-right-50deg":
          "rotate-circle-right-50deg .8s linear forwards",
        "rotate-circle-right-60deg":
          "rotate-circle-right-60deg .8s linear forwards",
        "rotate-circle-right-70deg":
          "rotate-circle-right-70deg .8s linear forwards",
        "rotate-circle-right-80deg":
          "rotate-circle-right-80deg .8s linear forwards",
        "rotate-circle-right-90deg":
          "rotate-circle-right-90deg .8s linear forwards",
        "rotate-circle-right-100deg":
          "rotate-circle-right-100deg .8s linear forwards",
        "rotate-circle-right-110deg":
          "rotate-circle-right-110deg .8s linear forwards",
        "rotate-circle-right-120deg":
          "rotate-circle-right-120deg .8s linear forwards",
        "rotate-circle-right-130deg":
          "rotate-circle-right-130deg .8s linear forwards",
        "rotate-circle-right-140deg":
          "rotate-circle-right-140deg .8s linear forwards",
        "rotate-circle-right-150deg":
          "rotate-circle-right-150deg .8s linear forwards",
        "rotate-circle-right-160deg":
          "rotate-circle-right-160deg .8s linear forwards",
        "rotate-circle-right-170deg":
          "rotate-circle-right-170deg .8s linear forwards",
        "rotate-circle-right-180deg":
          "rotate-circle-right-180deg .8s linear forwards",
      },
      colors: {
        main: "#fafafa",
        sub: "#f2f1f0",
        sub2: "#dfdad7",
        accent: "#6C63FF",
        subAccent: "#beb397",
      },
      width: {
        "102": "28rem",
        "106": "32rem",
        "harf-screen": "50vw",
      },
      minWidth: {
        "96": "24rem",
        "102": "28rem",
        "106": "32rem",
      },
      maxHeight: {
        custom: "calc(100vh - 4rem)",
      },
      translate: {
        "100vh": "100vh",
      },
      boxShadow: {
        blur: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
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
