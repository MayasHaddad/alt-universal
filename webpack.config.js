/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict'
var webpack = require('webpack')
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
    'babel-polyfill',
    './index.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  module: {
    preLoaders: [{
      test: /\.(js)$/,
      exclude: /node_modules|lib/,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules|lib/,
      loader: 'babel'
    },
    {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  }

  // plugins: [
  //   new ExtractTextPlugin()
  // ]
}
