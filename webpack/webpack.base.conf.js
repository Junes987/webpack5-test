const path = require('path')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath); // 根据相对路径获取绝对路径

const getCssLoaders = () => [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: "[name]--[hash:base64:5]"
      },
    }
  }
]


const baseConfig = {
  entry: resolvePath('../src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [...getCssLoaders(), "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: [...getCssLoaders(), "postcss-loader", "less-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: { cacheDirectory: true },
        use: 'babel-loader'
      },
      {
        test: /\.svg$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      title: 'react app',
      template: resolvePath('../public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    })
  ]
}

module.exports = {
  resolvePath,
  baseConfig,
}