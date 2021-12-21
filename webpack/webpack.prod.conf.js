const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理原来的打包文件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { baseConfig, resolvePath } = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: resolvePath('../dist'),
    filename: '[name].[contenthash:8].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin()],
    splitChunks: {
      chunks: 'initial',
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split('/')
          .reduceRight((item) => item)
        const allChunksNames = chunks.map((item) => item.name).join('~')
        return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`
      },
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
