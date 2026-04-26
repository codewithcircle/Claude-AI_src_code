import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070b17',
        foreground: '#d9e8ff',
        primary: '#4f8bff',
        accent: '#8a63ff',
        card: '#0f1730',
      },
      boxShadow: {
        glow: '0 0 40px rgba(79, 139, 255, 0.35)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      backgroundImage: {
        'blue-purple': 'linear-gradient(135deg, #3277ff 0%, #8a63ff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
