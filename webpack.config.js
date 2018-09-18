const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = {
  production: 'production',
  development: 'development'
}[process.env.NODE_ENV] || 'production';

module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    mode === 'development' && new HtmlWebpackPlugin()
  ].filter(p => p)
}