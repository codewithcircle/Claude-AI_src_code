import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#070B14',
        foreground: '#E6ECFF',
        card: '#101A30',
        accent: '#5C8DFF',
        accentSecondary: '#855BFF'
      },
      boxShadow: {
        glow: '0 0 30px rgba(92, 141, 255, 0.3)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(92,141,255,0.25), rgba(133,91,255,0.2))'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
