const path = require('path')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath); // 根据相对路径获取绝对路径

const baseConfig = {
  entry: resolvePath('../src/index.jsx'),
  output: {
    path: resolvePath('../dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
    new MiniCssExtractPlugin()
  ]
}

module.exports = {
  resolvePath,
  baseConfig,
}