const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      }
    ]
  },
  devServer: {
    // contentBase:  path.resolve(__dirname, 'dist'),
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" //source html
    })
  ]
};
