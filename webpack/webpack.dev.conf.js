const { baseConfig, resolvePath } = require('./webpack.base.conf');
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: resolvePath('../dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    hot: true,
    open: true,
  },
})