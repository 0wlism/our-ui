const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'our-ui': path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './lib'),
    filename: '[name].min.js',
    library: 'OurUi',
    libraryTarget: 'umd',
    libraryExport: 'default'
    // umdNamedDefine: true
  },
  externals: {
    vue: 'vue'
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        sourceMap: false,
        parallel: 4
      })
    ]
  }
})

module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
])