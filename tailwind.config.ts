import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cosmic: {
          purple: "hsl(var(--cosmic-purple))",
          DEFAULT: "hsl(var(--cosmic-purple))",
        },
        nebula: {
          pink: "hsl(var(--nebula-pink))",
          DEFAULT: "hsl(var(--nebula-pink))",
        },
        galaxy: {
          blue: "hsl(var(--galaxy-blue))",
          DEFAULT: "hsl(var(--galaxy-blue))",
        },
        stellar: {
          gold: "hsl(var(--stellar-gold))",
          DEFAULT: "hsl(var(--stellar-gold))",
        },
        void: {
          black: "hsl(var(--void-black))",
          DEFAULT: "hsl(var(--void-black))",
        },
        space: {
          deep: "hsl(var(--deep-space))",
          dust: "hsl(var(--space-dust))",
        },
        starlight: "hsl(var(--starlight))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(-10px) translateX(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)", boxShadow: "0 0 40px hsl(200 100% 45% / 0.5)" },
          "50%": { opacity: "0.8", filter: "brightness(1.3)", boxShadow: "0 0 70px hsl(200 100% 45% / 0.7)" },
        },
        "temporal-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)", filter: "brightness(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)", filter: "brightness(1.4)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
          "100%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.2", transform: "scale(0.6)" },
        },
        "time-flow": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "nebula-drift": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translate(30px, -30px) scale(1.2)", opacity: "0.5" },
          "100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "temporal-pulse": "temporal-pulse 3s ease-in-out infinite",
        "orbit": "orbit 25s linear infinite",
        "orbit-reverse": "orbit-reverse 30s linear infinite",
        "twinkle": "twinkle 4s ease-in-out infinite",
        "time-flow": "time-flow 20s linear infinite",
        "nebula-drift": "nebula-drift 15s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
