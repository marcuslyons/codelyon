import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  bodyFontFamily: ['Noto Serif'],
  headerFontFamily: ['Roboto'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300, 700'],
    },
    {
      name: 'Noto Serif',
      styles: ['400'],
    },
  ],
  overrideStyles: ({}, options, styles) => ({
    'h1, h2, h3, h4, h5, h6': {
      cursor: 'default',
      'font-family': 'Roboto',
      'font-weight': 300,
    },
    a: {
      'font-family': 'Roboto',
    },
    p: {
      cursor: 'default',
      'font-family': 'Noto Serif',
    },
  }),
})

export default typography
