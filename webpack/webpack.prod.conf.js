const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理原来的打包文件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZER_HOST, ANALYZER_PORT } = require('./constant')
const { baseConfig, resolvePath } = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: resolvePath('../dist'),
    filename: 'js/[name].[contenthash:8].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: ANALYZER_HOST, // host 设置
      analyzerPort: ANALYZER_PORT, // 端口号设置
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split('/')
          .reduceRight((item) => item)
        const allChunksNames = chunks.map((item) => item.name).join('~')
        return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`
      },
    },
  },
})
