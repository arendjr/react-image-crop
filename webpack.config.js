const path = require('path');

module.exports = {
  entry: './lib/ReactCrop.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'ReactCrop',
    libraryTarget: 'commonjs2',
    filename: 'ReactCrop.js',
  },
  externals: {
    'lodash': 'lodash',
    'react': 'react'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
