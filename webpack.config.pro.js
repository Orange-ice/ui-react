const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode: 'production',
  // 声明这是外部依赖，不参与打包
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
})
