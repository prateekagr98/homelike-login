'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  styles: path.resolve(__dirname, 'assets/stylesheets/main.scss'),
  build: path.resolve(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  //
  // Entries have to resolve to files! It relies on Node.js
  // convention by default so if a directory contains *index.js*,
  // it will resolve to that.
  entry: {
    app: PATHS.app,
    styles: PATHS.styles
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
        "style",
        "css!sass"
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('stylesheet/[name].css', {allChunks: false}),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        drop_console: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        dead_code: true,
        if_return: true,
        join_vars: true,
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};