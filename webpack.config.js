const path = require('path');

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
  }
};
