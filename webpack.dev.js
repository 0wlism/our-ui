const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8808
  },
  devtool: 'eval-source-map'
})

module.exports.plugins = (module.exports.plugins || []).concat([
  new HTMLWebPackPlugin({
    template: path.join(__dirname, './index.html')
  })
])
