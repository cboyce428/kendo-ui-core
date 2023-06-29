const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
        new webpack.ProvidePlugin({
            "$": 'jquery',
            "jQuery": 'jquery',
            'kendo': '@progress/kendo-ui',
            'window.kendo': '@progress/kendo-ui'
        })
    ]
};