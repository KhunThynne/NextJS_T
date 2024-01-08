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
        'primary': "#1098e7",
        'secondary': '#b1b1b1',
        'danger':"#e73e38",
        'success':"#4bda46",
        'white': "#ffffff",
        'black':"#000000ff",
        'dark':"rgb(31, 31, 31)",
        'thynne':{'sun':'rgb(49, 188, 243)', DEFAULT: '#06b6d4','moon':'rgb(21, 62, 116)'}
       
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
