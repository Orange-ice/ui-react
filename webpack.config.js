const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './lib/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'CUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: '/\.tsx?$/',
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ice-ui---React',
      template: 'index.html'
    })
  ]
};
