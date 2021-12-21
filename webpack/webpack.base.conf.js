const path = require('path')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { isDev } = require('./constant')

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath) // 根据相对路径获取绝对路径

const getCssLoaders = () => [
  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[name]--[hash:base64:5]', // 开启esmodule
      },
      sourceMap: isDev, // 映射css错误
    },
  },
]

const baseConfig = {
  entry: resolvePath('../src/index'),
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  resolve: {
    alias: {
      src: resolvePath('../src'),
      components: resolvePath('../src/components'),
      utils: resolvePath('../src/utils'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [...getCssLoaders(), 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [...getCssLoaders(), 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new WebpackBar({
      name: isDev ? '正在启动' : '正在打包',
      color: '#fa8c16',
    }),
    new HtmlWebpackPlugin({
      title: 'react app',
      template: resolvePath('../public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolvePath('../tsconfig.json'),
      },
    }),
  ],
}

module.exports = {
  resolvePath,
  baseConfig,
}
