/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      customGray: '#9d9d9d',
      customGreen: '#03322F',
      customWhite: 'rgb(255 255 255)',
      customGrayN300: '#C4C4C4',
    },
    fontFamily: {
      overused: ['Overused Grotesk', 'sans-serif'],
      mardoto: ['Mardoto', 'serif'],
    },
    fontSize: {
      'heading-1': ['48px', { lineHeight: '56px' }],
      'heading-2': ['40px', { lineHeight: '48px' }],
      'heading-3': ['20px', { lineHeight: '28px' }],
      'subheading-1': ['32px', { lineHeight: '40px' }],
      'subheading-2': ['24px', { lineHeight: '32px' }],
      'paragraph-l': ['24px', { lineHeight: '32px' }],
      'paragraph-m': ['20px', { lineHeight: '28px' }],
      'paragraph-s': ['16px', { lineHeight: '24px' }],
      'paragraph-xs': ['14px', { lineHeight: '22px' }],
      'label-l': ['16px', { lineHeight: '24px' }],
      'label-m': ['14px', { lineHeight: '22px' }],
      'label-s': ['12px', { lineHeight: '20px' }],
    },
    fontWeight: {
      'h4-medium': 500,
      'h5-bold': 700,
    },
    lineHeight: {
      'h4': '21px',
      'h5': '19px',
    },
  },
  plugins: [],
}

