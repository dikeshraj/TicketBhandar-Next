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
        primary: {
          'default': '#212E61',
          'dark': '#1C2B59',
        },
        secondary: {
          'default': '#E7253E',
          'dark' : '#b42d30',
          'darker' : '#9E1C1C',
        },
        background: {
          'default': '#F7F7F7',
          'grey' : '#898989',
          'grey-light': '#D9D9D9',
          'light': '#8989891A',
        },
        text: {
          'default': '#000000',
          'primary': '#212E61',
          'grey': '#898989',

        },
        border: {
          'blue-25': '#212E6199',
          'blue-50': '#212E6180',
        }
       
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
export default config