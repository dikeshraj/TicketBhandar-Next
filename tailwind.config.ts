import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          '800': '#1e3a8a',
          '900': '#1e293b',
        },
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
export default config