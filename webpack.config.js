const webpack = require('webpack');
const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: ['./js/app.js', './scss/index.scss'],
  output: {
    path: Path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
}

module.exports = config;
