/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#ffffff',
        ink: '#1d1e1c',
        muted: '#727771',
        line: '#e8ebe7',
        'line-strong': '#d6dad5',
        accent: '#2458d6',
        'accent-soft': '#e8edfb',
      },
      maxWidth: {
        frame: '1440px',
        reading: '44rem',
      },
      boxShadow: {
        focus: '0 0 0 4px #e8edfb',
      },
    },
    fontFamily: {
      serif: ['charter', 'Iowan Old Style', 'Baskerville', 'Times New Roman', 'serif'],
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'sans-serif',
      ],
      mono: ['"Roboto Mono"', 'monospace'],
      system: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
