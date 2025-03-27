module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5CF6', // Purple
          dark: '#6D28D9',
        },
        secondary: {
          light: '#EC4899', // Pink
          dark: '#DB2777',
        },
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
