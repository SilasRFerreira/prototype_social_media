import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-1': '#4263eb',
        'brand-2': '#364fc7',
        'gray-0': '#0a0c0d',
        'gray-1': '#212529',
        'gray-2': '#495057',
        'gray-3': '#868e96',
        'gray-4': '#dee2e6',
        'gray-5': '#f8f9fa',
        'like': '#d7443e',
      }
    },
  },
  plugins: [],
}
export default config
