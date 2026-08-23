/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E17",
        panel: "#101623",
        panel2: "#141C2E",
        line: "#22304A",
        cyan: {
          DEFAULT: "#3FD9E0",
          soft: "#8FEAF0",
        },
        amber: {
          DEFAULT: "#F0A84E",
        },
        mist: "#AEB9CC",
        paper: "#EAF0F7",
        danger: "#E86A5C",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(63,217,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,217,224,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLine: {
          "0%": { strokeDashoffset: 400 },
          "100%": { strokeDashoffset: 0 },
        },
      },
      animation: {
        scan: "scan 3.5s linear infinite",
        blink: "blink 1s step-end infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        pulseLine: "pulseLine 2.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
