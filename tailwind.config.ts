import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#F0FDFA',
          '100': '#CCFBF1',
          '200': '#99F6E4',
          '300': '#5EEAD4',
          '400': '#2DD4BF',
          '500': '#14B8A6',
          '600': '#0D9488',
          '700': '#0F766E',
          '800': '#115E59',
          '900': '#134E4A',
          '950': '#042F2E',
        },
        secondary: {
          '50': '#F8FAFC',
          '100': '#F1F5F9',
          '200': '#E2E8F0',
          '300': '#CBD5E1',
          '400': '#94A3B8',
          '500': '#64748B',
          '600': '#475569',
          '700': '#334155',
          '800': '#1E293B',
          '900': '#0F172A',
          '950': '#020617',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
