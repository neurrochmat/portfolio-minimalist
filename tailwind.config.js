/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#FBFBFA',
          subtle: '#F4F4F1',
          dark: '#0C0D0E',
          'dark-subtle': '#141518',
        },
        surface: {
          light: '#FFFFFF',
          hover: '#F7F7F5',
          dark: '#16181B',
          'dark-hover': '#1E2024',
        },
        border: {
          light: '#E6E6E3',
          'light-subtle': '#F0F0ED',
          dark: '#24272C',
          'dark-subtle': '#1B1D21',
        },
        ink: {
          primary: '#111214',
          muted: '#63666E',
          faint: '#9B9EA5',
          inverted: '#FFFFFF',
          'dark-primary': '#EDEDEF',
          'dark-muted': '#8E929B',
          'dark-faint': '#565961',
        },
        pastel: {
          green: '#EDF5EE',
          'green-dark': '#132817',
          'green-ink': '#246B2C',
          'green-ink-dark': '#74D480',
          blue: '#EEF4FF',
          'blue-dark': '#11223E',
          'blue-ink': '#1856B2',
          'blue-ink-dark': '#82B1FF',
          amber: '#FFF7E6',
          'amber-dark': '#2B1E0A',
          'amber-ink': '#A85A00',
          'amber-ink-dark': '#FFB74D',
          purple: '#F5EEFD',
          'purple-dark': '#221236',
          'purple-ink': '#69299C',
          'purple-ink-dark': '#D19FF9',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Geist Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
