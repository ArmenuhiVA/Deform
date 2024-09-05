/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        grotesk: ["var(--grotesk)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
    },
    colors: {
      customGray: "#9d9d9d",
      customGreen: "#03322F",
      customWhite: "rgb(255 255 255)",
      customGrayN300: "#C4C4C4",
      customBlack: "#000000"
    },
    fontFamily: {
      overused: ["Overused Grotesk", "sans-serif"],
      mardoto: ["Mardoto", "serif"],
    },
    fontSize: {
      "heading-1": ["48px", { lineHeight: "56px" }],
      "heading-2": ["40px", { lineHeight: "48px" }],
      "heading-3": ["20px", { lineHeight: "28px" }],
      "subheading-1": ["32px", { lineHeight: "40px" }],
      "subheading-2": ["24px", { lineHeight: "32px" }],
      "paragraph-l": ["24px", { lineHeight: "32px" }],
      "paragraph-m": ["20px", { lineHeight: "28px" }],
      "paragraph-s": ["16px", { lineHeight: "24px" }],
      "paragraph-xs": ["14px", { lineHeight: "22px" }],
      "label-l": ["16px", { lineHeight: "24px" }],
      "label-m": ["14px", { lineHeight: "22px" }],
      "label-s": ["12px", { lineHeight: "20px" }],
      "heading-1-mobile": ["38px", { lineHeight: "46px" }],
      "heading-2-mobile": ["30px", { lineHeight: "38px" }],
      "heading-3-mobile": ["18px", { lineHeight: "28px" }],
      "h4-mobile": ["16px", { lineHeight: "21px" }], // Medium 500
      "h5-mobile": ["14px", { lineHeight: "19px" }], // Bold 700
      "subheading-1-mobile": ["24px", { lineHeight: "32px" }],
      "subheading-2-mobile": ["20px", { lineHeight: "28px" }],
      "paragraph-l-mobile": ["20px", { lineHeight: "28px" }],
      "paragraph-m-mobile": ["18px", { lineHeight: "26px" }],
      "paragraph-s-mobile": ["16px", { lineHeight: "24px" }],
      "paragraph-xs-mobile": ["14px", { lineHeight: "22px" }],
      "label-l-mobile": ["16px", { lineHeight: "24px" }],
      "label-m-mobile": ["14px", { lineHeight: "22px" }],
      "label-s-mobile": ["12px", { lineHeight: "20px" }],
    },
    lineHeight: {
      h4: "21px",
      h5: "19px",
    },
  },

};
