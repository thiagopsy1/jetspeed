import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // JetSpeed Design Tokens
        primary: {
          DEFAULT: '#001c71',
          dark: '#000C40',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#00a84e',
          dim: '#78dc77',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#ffba20',
          foreground: '#001c71',
        },
        surface: {
          DEFAULT: '#ffffff',
          low: '#f3f3f7',
          high: '#e8e9f0',
        },
        ink: {
          DEFAULT: '#18181b',
          muted: '#71717a',
          subtle: '#a1a1aa',
        },
        // shadcn/ui compatibility
        background: '#ffffff',
        foreground: '#18181b',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#18181b',
        },
        border: 'rgba(226,232,240,0.5)',
        input: 'rgba(226,232,240,0.8)',
        ring: '#001c71',
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f4f4f5',
          foreground: '#71717a',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#18181b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2.5rem',
        full: '9999px',
      },
      spacing: {
        gutter: '1.5rem',
        margin: '2rem',
        section: '5rem',
      },
      maxWidth: {
        container: '1280px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #000C40 0%, #001c71 60%, #002d99 100%)',
        'card-gradient': 'linear-gradient(145deg, #001c71 0%, #002d99 100%)',
        'card-green': 'linear-gradient(145deg, #00a84e 0%, #007a38 100%)',
        'green-cta': 'linear-gradient(135deg, #00a84e 0%, #007a38 100%)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 168, 78, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(0, 168, 78, 0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-green': 'pulse-green 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 28, 113, 0.08)',
        'card-hover': '0 12px 48px rgba(0, 28, 113, 0.18)',
        'green': '0 4px 24px rgba(0, 168, 78, 0.25)',
        'glass': '0 8px 32px rgba(0, 28, 113, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
