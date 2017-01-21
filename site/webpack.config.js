'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: ['./app.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: __dirname + '/src',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]"
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]",
          "sass-loader",
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
    ],
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: 'index.html',
     inject: 'body',
     filename: 'index.html'
   })
  ]
};
