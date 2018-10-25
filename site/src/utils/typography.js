import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  bodyFontFamily: ['Noto Serif, serif'],
  headerFontFamily: ['Roboto, sans-serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300'],
    },
    {
      name: 'Noto Serif',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  overrideStyles: ({}, options, styles) => ({
    'h1, h2, h3, h4, h5, h6, p': {
      cursor: 'default',
    },
  }),
})

export default typography
