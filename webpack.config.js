const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.sass$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {sourceMap: true}
        }, {
          loader: 'postcss-loader',
          options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
        }, {
          loader: 'sass-loader',
          options: {sourceMap: true}
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {sourceMap: true}
        }, {
          loader: 'postcss-loader',
          options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
        }
      ]
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
};