/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#ffcdc8',
          300: '#fda9a1',
          400: '#f97568',
          500: '#f04438',
          600: '#de3024',
          700: '#ba241a',
          800: '#9a2119',
          900: '#80221c',
        },
        dark: {
          DEFAULT: '#1e293b',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          DEFAULT: '#f97316',
          light: '#fb923c',
          dark: '#ea580c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
