const { merge } = require('webpack-merge')
const { SERVER_HOST, SERVER_PORT } = require('./constant')
const { baseConfig, resolvePath } = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: resolvePath('../dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    hot: true,
    open: true,
  },
})
