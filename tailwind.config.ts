import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Group (default) ─────────────────────────
        ink: {
          DEFAULT: '#0a0a0a',
          2: '#131313',
          3: '#1c1c1c',
        },
        bone: {
          DEFAULT: '#f4efe6',
          2: '#e8e1d3',
        },
        gold: {
          DEFAULT: '#c9a449',
          bright: '#e8c46b',
          deep: '#8a6f2a',
        },
        slate: { custom: '#6b6b6b' },

        // Energy ──────────────────────────────────
        electric: {
          DEFAULT: '#2db4ff',
          bright: '#5fc8ff',
          deep: '#0a73c4',
        },
        emerald: {
          DEFAULT: '#1fbe7d',
          bright: '#46db9d',
        },

        // Agro ────────────────────────────────────
        forest: {
          DEFAULT: '#2d5a3d',
          bright: '#4a8a5c',
          deep: '#1a3a25',
        },
        ochre: '#d4a13e',
        terracotta: '#b86a3d',
        clay: '#8b5e3c',

        // Tech ────────────────────────────────────
        neon: {
          DEFAULT: '#00d4ff',
          bright: '#5fe7ff',
          deep: '#006d8a',
        },
        plasma: '#7c5cff',
        silver: '#b8c4d4',
        graphite: '#2a3140',
      },
      letterSpacing: {
        'wider-x': '0.16em',
        'widest-x': '0.2em',
      },
      animation: {
        'ticker': 'ticker 60s linear infinite',
        'scan': 'scan 3s linear infinite',
        'blink': 'blink 1s steps(2) infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      backdropBlur: {
        '4xl': '40px',
      },
    },
  },
  plugins: [],
};

export default config;
