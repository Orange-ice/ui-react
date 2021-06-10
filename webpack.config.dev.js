const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: './index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ice-ui---React',
      template: 'index.html'
    })
  ],
})
