const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理原来的打包文件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

const { baseConfig, resolvePath } = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: resolvePath('../dist'),
    filename: '[name].[contenthash:8].bundle.js',
  },
  plugins: [new CleanWebpackPlugin(), new CssMinimizerWebpackPlugin()],
})
