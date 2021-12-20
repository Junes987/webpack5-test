const { isProd } = require('./webpack/constant')

module.exports = {
  plugins: [
    isProd && [
      'postcss-preset-env',
      {
        autoprefixer: {
          grid: true,
        },
      },
    ],
  ],
}
