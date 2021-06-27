const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ice-ui',
      template: 'index.html'
    })
  ],
})
