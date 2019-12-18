"use strict";
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  module.exports = {
   mode: 'development',

   entry: './src/index.js',

   devtool: 'inline-source-map',

   devServer: {
     contentBase: './dist',
    },


   plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css"
      }),
     new UglifyJsPlugin(),
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
  ],

    output: {
      filename: '[name].bundle.js',
     chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
   module: {
     rules: [

      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },

       {
        test: /\.(sa|sc|c)ss$/,
        use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
        ],
      },
     ],
   },
  };